import os, wave, struct, math, random

OUT_DIR = "/Users/azendless/.gemini/antigravity-insiders/scratch/MagicTowerMac/MagicTower.app/Contents/Resources/assets/audio"
os.makedirs(OUT_DIR, exist_ok=True)
SR = 44100

def save_wav(filename, samples_l, samples_r=None):
    if samples_r is None:
        samples_r = samples_l
    path = os.path.join(OUT_DIR, filename)
    with wave.open(path, 'w') as wf:
        wf.setnchannels(2)
        wf.setsampwidth(2)
        wf.setframerate(SR)
        frames = bytearray()
        for l, r in zip(samples_l, samples_r):
            li = max(-32767, min(32767, int(l * 32767)))
            ri = max(-32767, min(32767, int(r * 32767)))
            frames += struct.pack('<hh', li, ri)
        wf.writeframes(frames)

def midi_to_freq(m):
    return 440.0 * (2.0 ** ((m - 69) / 12.0))

def osc_pulse(phase, duty=0.5):
    return 1.0 if (phase % 1.0) < duty else -1.0

def osc_tri(phase):
    p = phase % 1.0
    return 4.0 * p - 1.0 if p < 0.5 else 3.0 - 4.0 * p

def osc_saw(phase):
    return 2.0 * (phase % 1.0) - 1.0

def render_note(buf_l, buf_r, start_s, dur_s, midi_note, vol=0.2, wave_type='pulse', duty=0.25, pan=0.5, vibrato=0.0, slide=0.0):
    if midi_note <= 0:
        return
    f0 = midi_to_freq(midi_note)
    i0 = int(start_s * SR)
    n = int(dur_s * SR)
    phase = 0.0
    pan_l = math.cos(pan * math.pi / 2)
    pan_r = math.sin(pan * math.pi / 2)
    for i in range(n):
        idx = i0 + i
        if idx >= len(buf_l):
            break
        t = i / SR
        rel = i / max(1, n)
        # ADSR envelope
        if t < 0.012:
            env = t / 0.012
        elif rel > 0.82:
            env = max(0.0, (1.0 - rel) / 0.18)
        else:
            env = 1.0 - 0.25 * rel
        freq = f0 * (1.0 + slide * rel)
        if vibrato > 0:
            freq *= (1.0 + vibrato * math.sin(2 * math.pi * 6.0 * t))
        phase += freq / SR
        if wave_type == 'pulse':
            val = osc_pulse(phase, duty)
        elif wave_type == 'tri':
            val = osc_tri(phase)
        elif wave_type == 'saw':
            val = osc_saw(phase)
        elif wave_type == 'FM':
            val = math.sin(2 * math.pi * phase + 1.8 * env * math.sin(4 * math.pi * phase))
        else:
            val = math.sin(2 * math.pi * phase)
        s = val * vol * env
        buf_l[idx] += s * pan_l
        buf_r[idx] += s * pan_r

def make_bgm_dungeon():
    # 16-bar loop in D minor (Baroque RPG Castle/Dungeon style), 128 BPM
    bpm = 128.0
    step = (60.0 / bpm) / 2.0  # eighth note
    # 64 eighth notes (8 bars)
    melody = [
        62, 65, 69, 74, 72, 69, 65, 69,
        67, 64, 60, 64, 69, 67, 65, 64,
        62, 65, 69, 74, 77, 74, 72, 69,
        68, 71, 74, 76, 74, 71, 68, 64,
        69, 72, 76, 81, 79, 76, 72, 76,
        74, 70, 67, 70, 76, 74, 72, 70,
        69, 65, 62, 65, 69, 72, 69, 67,
        65, 64, 62, 61, 62, 69, 62, 0
    ]
    arp = [
        50, 57, 62, 57, 50, 57, 62, 57,
        48, 55, 60, 55, 48, 55, 60, 55,
        46, 53, 58, 53, 46, 53, 58, 53,
        40, 47, 52, 56, 52, 47, 44, 40,
        45, 52, 57, 52, 45, 52, 57, 52,
        43, 50, 55, 50, 43, 50, 55, 50,
        50, 57, 62, 57, 45, 52, 57, 52,
        50, 45, 50, 49, 50, 45, 38, 0
    ]
    total_dur = len(melody) * step
    n_samples = int(total_dur * SR)
    buf_l = [0.0] * n_samples
    buf_r = [0.0] * n_samples
    for i, m in enumerate(melody):
        if m > 0:
            render_note(buf_l, buf_r, i * step, step * 0.92, m, vol=0.16, wave_type='pulse', duty=0.25, pan=0.35, vibrato=0.004)
            # Echo
            if i + 2 < len(melody):
                render_note(buf_l, buf_r, (i + 1.5) * step, step * 0.7, m, vol=0.05, wave_type='pulse', duty=0.125, pan=0.75)
    for i, a in enumerate(arp):
        if a > 0:
            render_note(buf_l, buf_r, i * step, step * 0.85, a, vol=0.18, wave_type='tri', pan=0.5)
            if i % 4 == 0:
                render_note(buf_l, buf_r, i * step, step * 1.8, a - 12, vol=0.15, wave_type='saw', pan=0.5)
    save_wav("bgm_dungeon.wav", buf_l, buf_r)

def make_bgm_fire():
    # Tense E Phrygian molten cavern loop, 138 BPM
    bpm = 138.0
    step = (60.0 / bpm) / 2.0
    melody = [
        64, 65, 68, 69, 68, 65, 64, 62,
        64, 65, 68, 71, 72, 71, 68, 65,
        64, 68, 71, 76, 77, 76, 71, 68,
        65, 64, 62, 65, 64, 59, 64, 0
    ] * 2
    bass = [
        40, 40, 52, 40, 41, 41, 53, 41,
        40, 40, 52, 40, 43, 41, 40, 38
    ] * 4
    total_dur = len(melody) * step
    n_samples = int(total_dur * SR)
    buf_l = [0.0] * n_samples
    buf_r = [0.0] * n_samples
    for i, m in enumerate(melody):
        if m > 0:
            render_note(buf_l, buf_r, i * step, step * 0.88, m, vol=0.16, wave_type='saw', pan=0.4, vibrato=0.006)
    for i, b in enumerate(bass):
        render_note(buf_l, buf_r, i * step, step * 0.75, b, vol=0.20, wave_type='pulse', duty=0.5, pan=0.55)
    save_wav("bgm_fire.wav", buf_l, buf_r)

def make_bgm_ice():
    # Crystalline A minor / Dorian music-box theme, 108 BPM
    bpm = 108.0
    step = (60.0 / bpm) / 2.0
    melody = [
        76, 79, 81, 84, 83, 79, 76, 72,
        74, 77, 81, 79, 76, 74, 72, 71,
        76, 79, 81, 88, 86, 84, 81, 79,
        76, 74, 72, 76, 71, 72, 69, 0
    ]
    chords = [
        (57, 64, 69), (53, 60, 65), (50, 57, 62), (52, 59, 64),
        (57, 64, 69), (53, 60, 65), (52, 59, 64), (45, 52, 57)
    ]
    total_dur = len(melody) * step
    n_samples = int(total_dur * SR)
    buf_l = [0.0] * n_samples
    buf_r = [0.0] * n_samples
    for i, m in enumerate(melody):
        if m > 0:
            render_note(buf_l, buf_r, i * step, step * 1.4, m, vol=0.16, wave_type='FM', pan=0.3 + 0.4 * (i % 2))
            render_note(buf_l, buf_r, i * step, step * 0.9, m + 12, vol=0.05, wave_type='sine', pan=0.7 - 0.4 * (i % 2))
    for ci, ch in enumerate(chords):
        for note in ch:
            render_note(buf_l, buf_r, ci * 4 * step, 3.8 * step, note, vol=0.08, wave_type='tri', pan=0.5)
    save_wav("bgm_ice.wav", buf_l, buf_r)

def make_bgm_boss():
    # Final Floor 10 dramatic boss theme in C minor, 152 BPM
    bpm = 152.0
    step = (60.0 / bpm) / 2.0
    melody = [
        72, 0, 75, 74, 72, 71, 72, 67,
        68, 72, 67, 65, 67, 68, 67, 62,
        72, 0, 75, 74, 72, 79, 77, 75,
        74, 75, 77, 74, 79, 0, 71, 0,
        72, 75, 79, 84, 83, 79, 77, 75,
        77, 74, 71, 67, 68, 72, 75, 74,
        72, 71, 72, 74, 75, 77, 79, 78,
        79, 74, 71, 67, 72, 0, 60, 0
    ]
    bass = [
        36, 48, 36, 48, 36, 48, 36, 48,
        32, 44, 32, 44, 31, 43, 31, 43,
        36, 48, 36, 48, 34, 46, 34, 46,
        32, 44, 32, 44, 31, 43, 31, 43,
        36, 48, 36, 48, 39, 51, 39, 51,
        38, 50, 38, 50, 32, 44, 32, 44,
        36, 48, 34, 46, 32, 44, 30, 42,
        31, 43, 31, 43, 36, 36, 24, 0
    ]
    total_dur = len(melody) * step
    n_samples = int(total_dur * SR)
    buf_l = [0.0] * n_samples
    buf_r = [0.0] * n_samples
    for i, m in enumerate(melody):
        if m > 0:
            render_note(buf_l, buf_r, i * step, step * 0.9, m, vol=0.18, wave_type='pulse', duty=0.5, pan=0.4, vibrato=0.005)
            render_note(buf_l, buf_r, i * step, step * 0.9, m - 12, vol=0.10, wave_type='saw', pan=0.6)
    for i, b in enumerate(bass):
        if b > 0:
            render_note(buf_l, buf_r, i * step, step * 0.8, b, vol=0.22, wave_type='saw', pan=0.5)
    save_wav("bgm_boss.wav", buf_l, buf_r)

def make_sfx():
    # 1. step
    n = int(0.065 * SR)
    s = [0.0] * n
    random.seed(42)
    for i in range(n):
        t = i / SR
        env = math.exp(-t * 55.0)
        s[i] = (random.uniform(-1, 1) * 0.35 + math.sin(2 * math.pi * 130 * t * math.exp(-t * 18)) * 0.65) * env * 0.35
    save_wav("sfx_step.wav", s)

    # 2. key pickup
    n = int(0.32 * SR)
    l, r = [0.0] * n, [0.0] * n
    render_note(l, r, 0.0, 0.11, 81, vol=0.35, wave_type='FM', pan=0.4)
    render_note(l, r, 0.08, 0.23, 88, vol=0.38, wave_type='FM', pan=0.6)
    save_wav("sfx_key.wav", l, r)

    # 3. door open
    n = int(0.38 * SR)
    l, r = [0.0] * n, [0.0] * n
    render_note(l, r, 0.0, 0.07, 52, vol=0.35, wave_type='pulse', duty=0.25)
    render_note(l, r, 0.07, 0.28, 45, vol=0.32, wave_type='saw', slide=-0.35)
    save_wav("sfx_door.wav", l, r)

    # 4. potion drink
    n = int(0.40 * SR)
    l, r = [0.0] * n, [0.0] * n
    for idx, note in enumerate([69, 73, 76, 81]):
        render_note(l, r, idx * 0.075, 0.12, note, vol=0.32, wave_type='tri')
    save_wav("sfx_potion.wav", l, r)

    # 5. gem pickup
    n = int(0.45 * SR)
    l, r = [0.0] * n, [0.0] * n
    for idx, note in enumerate([72, 76, 79, 84, 88]):
        render_note(l, r, idx * 0.065, 0.14, note, vol=0.30, wave_type='FM')
    save_wav("sfx_gem.wav", l, r)

    # 6. relic fanfare (sword/shield/book)
    n = int(0.85 * SR)
    l, r = [0.0] * n, [0.0] * n
    seq = [(0.0, 0.12, 67), (0.12, 0.12, 72), (0.24, 0.12, 76), (0.36, 0.45, 79)]
    for st, du, no in seq:
        render_note(l, r, st, du, no, vol=0.32, wave_type='pulse', duty=0.5, vibrato=0.005)
        render_note(l, r, st, du, no - 12, vol=0.20, wave_type='tri')
    save_wav("sfx_relic.wav", l, r)

    # 7. sword hit
    n = int(0.18 * SR)
    s = [0.0] * n
    for i in range(n):
        t = i / SR
        env = math.exp(-t * 24.0)
        sweep = math.sin(2 * math.pi * (420 * math.exp(-t * 14)) * t)
        noise = random.uniform(-1, 1) * math.exp(-t * 35.0)
        s[i] = (0.6 * sweep + 0.4 * noise) * env * 0.55
    save_wav("sfx_hit.wav", s)

    # 8. critical hit
    n = int(0.32 * SR)
    s = [0.0] * n
    for i in range(n):
        t = i / SR
        env = math.exp(-t * 14.0)
        sweep = osc_saw(680 * math.exp(-t * 9) * t)
        clang = math.sin(2 * math.pi * 1120 * t) * math.exp(-t * 18)
        noise = random.uniform(-1, 1) * math.exp(-t * 20.0)
        s[i] = (0.45 * sweep + 0.35 * clang + 0.3 * noise) * env * 0.65
    save_wav("sfx_crit.wav", s)

    # 9. miss / dodge
    n = int(0.20 * SR)
    s = [0.0] * n
    for i in range(n):
        t = i / SR
        env = math.sin(math.pi * (i / n))
        s[i] = math.sin(2 * math.pi * (320 + 500 * (i / n)) * t) * env * 0.28
    save_wav("sfx_miss.wav", s)

    # 10. curse monster
    n = int(0.65 * SR)
    l, r = [0.0] * n, [0.0] * n
    for idx, note in enumerate([66, 65, 61, 56]):
        render_note(l, r, idx * 0.13, 0.18, note, vol=0.35, wave_type='saw', slide=-0.08)
        render_note(l, r, idx * 0.13, 0.18, note - 6, vol=0.25, wave_type='pulse')
    save_wav("sfx_curse.wav", l, r)

    # 11. level up
    n = int(1.05 * SR)
    l, r = [0.0] * n, [0.0] * n
    notes = [(0.0, 0.11, 65), (0.11, 0.11, 65), (0.22, 0.11, 65), (0.33, 0.22, 65), (0.55, 0.20, 62), (0.75, 0.28, 69)]
    # Classic Dragon Quest / FF inspired fanfare: C-C-C-C-Ab-Bb-C
    notes = [(0.0, 0.10, 72), (0.11, 0.10, 72), (0.22, 0.10, 72), (0.33, 0.20, 72), (0.53, 0.16, 68), (0.69, 0.16, 70), (0.85, 0.19, 72)]
    for st, du, no in notes:
        render_note(l, r, st, du, no, vol=0.34, wave_type='pulse', duty=0.5, vibrato=0.004)
        render_note(l, r, st, du, no - 12, vol=0.20, wave_type='tri')
    save_wav("sfx_levelup.wav", l, r)

    # 12. shop purchase
    n = int(0.32 * SR)
    l, r = [0.0] * n, [0.0] * n
    render_note(l, r, 0.0, 0.08, 79, vol=0.35, wave_type='FM')
    render_note(l, r, 0.08, 0.22, 86, vol=0.38, wave_type='FM')
    save_wav("sfx_shop.wav", l, r)

    # 13. stairs
    n = int(0.42 * SR)
    l, r = [0.0] * n, [0.0] * n
    for idx, note in enumerate([57, 60, 64, 69, 72]):
        render_note(l, r, idx * 0.07, 0.09, note, vol=0.28, wave_type='tri')
    save_wav("sfx_stairs.wav", l, r)

    # 14. secret wall discovery (Zelda-inspired mystery chime)
    n = int(0.95 * SR)
    l, r = [0.0] * n, [0.0] * n
    for idx, note in enumerate([79, 78, 75, 69, 68, 76, 80, 84]):
        render_note(l, r, idx * 0.105, 0.11, note, vol=0.32, wave_type='FM')
    save_wav("sfx_secret.wav", l, r)

    # 15. victory
    n = int(2.0 * SR)
    l, r = [0.0] * n, [0.0] * n
    v_notes = [
        (0.0, 0.16, 67), (0.16, 0.16, 72), (0.32, 0.16, 76), (0.48, 0.32, 79),
        (0.80, 0.28, 76), (1.08, 0.85, 84)
    ]
    for st, du, no in v_notes:
        render_note(l, r, st, du, no, vol=0.32, wave_type='pulse', duty=0.5, vibrato=0.005)
        render_note(l, r, st, du, no - 12, vol=0.20, wave_type='saw')
    save_wav("sfx_victory.wav", l, r)

    # 16. gameover
    n = int(1.6 * SR)
    l, r = [0.0] * n, [0.0] * n
    g_notes = [(0.0, 0.35, 69), (0.35, 0.35, 68), (0.70, 0.35, 67), (1.05, 0.50, 66)]
    for st, du, no in g_notes:
        render_note(l, r, st, du, no, vol=0.32, wave_type='saw', slide=-0.04)
        render_note(l, r, st, du, no - 12, vol=0.22, wave_type='tri')
    save_wav("sfx_gameover.wav", l, r)

make_bgm_dungeon()
make_bgm_fire()
make_bgm_ice()
make_bgm_boss()
make_sfx()
print("Generated audio files:", sorted(os.listdir(OUT_DIR)))
