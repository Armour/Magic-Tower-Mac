// ============================================================================
// 魔塔 · Magic Tower
// ============================================================================

const INITIAL_MAP_STRINGS = [
  // Layer 0 (Floor 1)
  "02 02 02 02 02 02 02 02 02 02 02 02 02 02 02 00 00 00 02 29 02 00 00 00 02 06 06 02 02 00 02 00 02 11 02 00 02 00 02 00 06 02 02 00 02 00 02 06 02 06 02 00 02 00 00 02 02 04 02 00 02 03 02 00 02 00 02 04 02 02 02 00 02 00 00 00 00 00 02 00 00 00 00 02 02 11 02 02 12 02 02 02 02 02 02 02 03 02 02 12 03 03 00 00 00 00 00 00 00 00 00 02 02 13 02 02 02 02 02 02 02 02 11 02 02 02 02 00 02 00 00 06 00 00 06 00 00 03 14 02 02 30 02 00 02 02 02 03 02 02 00 02 30 02 02 00 02 00 02 00 00 00 00 02 00 02 02 02 02 35 02 29 02 00 00 00 06 02 00 03 80 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02",
  // Layer 1 (Floor 2)
  "02 02 02 02 02 02 02 02 02 02 02 02 02 02 02 00 00 00 02 29 02 30 32 30 02 06 29 02 02 12 02 30 02 00 02 00 02 15 02 00 00 02 02 00 02 00 02 11 02 13 02 14 02 00 00 02 02 00 02 00 02 00 02 00 02 13 02 11 00 02 02 11 02 00 02 00 02 00 02 00 02 00 12 02 02 00 02 03 02 03 02 04 02 03 02 03 02 02 02 00 00 00 00 00 00 00 13 00 00 00 00 02 02 03 02 02 02 04 02 03 02 03 02 03 02 02 02 11 02 80 02 14 02 00 02 00 02 00 06 02 02 00 02 00 02 06 02 00 02 00 02 00 00 02 02 00 02 12 02 32 02 00 02 00 02 00 02 02 02 00 00 00 02 34 02 06 09 06 02 00 90 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02",
  // Layer 2 (Floor 3)
  "02 02 02 02 02 02 02 02 02 02 02 02 02 02 02 31 09 00 02 50 51 52 02 07 00 00 00 02 02 02 02 00 02 02 03 02 02 02 02 02 09 02 02 00 03 13 02 00 00 02 12 02 12 02 12 02 02 00 02 02 02 06 00 02 00 00 00 00 00 02 02 00 00 00 00 02 00 02 00 02 02 02 02 02 02 12 02 02 16 02 00 00 00 00 03 13 30 02 02 00 02 33 00 02 00 02 00 02 02 02 02 02 02 00 02 02 02 02 00 00 00 00 03 06 06 02 02 00 02 90 02 02 02 00 02 02 02 02 02 02 02 00 02 00 02 02 02 00 00 00 04 06 30 02 02 00 11 00 00 00 12 00 02 02 02 02 02 02 02 00 02 06 02 00 02 00 00 00 03 12 80 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02",
  // Layer 3 (Floor 4)
  "02 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02 00 00 00 02 00 00 17 02 02 00 07 02 02 00 00 02 30 00 00 02 00 03 00 80 00 02 02 16 02 02 02 02 03 02 02 02 02 02 04 02 02 00 00 00 00 00 00 00 00 30 00 00 00 02 02 02 02 02 02 02 02 03 02 02 02 02 13 02 02 00 00 00 30 00 00 00 00 00 00 00 00 02 02 15 02 02 02 02 03 02 02 02 02 02 02 02 02 00 00 00 00 00 00 00 00 30 00 00 00 02 02 02 02 02 02 02 02 03 02 02 02 02 12 02 02 00 00 00 30 00 00 00 00 00 00 00 00 02 02 14 02 02 02 02 03 02 02 02 02 02 02 02 02 00 00 00 00 00 00 00 06 00 00 00 90 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02",
  // Layer 4 (Floor 5)
  "02 02 02 02 02 02 02 02 02 02 02 02 02 02 02 00 00 00 00 02 29 15 28 02 03 00 00 02 02 00 02 02 80 02 02 03 02 02 00 90 00 02 02 00 02 00 02 00 00 00 00 00 00 02 32 02 02 00 02 00 00 00 02 02 02 02 00 02 34 02 02 04 02 02 00 02 02 00 00 02 00 00 00 02 02 00 00 02 00 00 00 00 00 02 11 11 11 02 02 00 00 02 02 02 02 02 00 02 13 13 13 02 02 00 00 30 00 20 00 00 00 02 15 15 15 02 02 02 00 02 02 02 02 02 00 02 17 17 17 02 02 02 00 16 00 14 00 12 00 02 19 19 19 02 02 02 02 02 02 02 02 02 02 02 21 21 21 02 02 80 00 29 34 32 34 29 00 00 00 00 00 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02",
  // Layer 5 (Floor 6 - Lava Floor)
  "62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 00 00 00 00 00 00 62 20 00 00 00 80 62 62 21 62 62 90 62 00 62 00 20 00 06 00 62 62 00 62 62 62 62 00 62 00 00 20 00 00 62 62 00 62 00 62 00 00 62 00 00 00 20 00 62 62 07 62 00 00 00 00 00 29 00 00 00 20 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62 06 00 00 62 00 30 00 62 08 00 00 62 62 62 00 62 62 20 00 62 00 00 62 62 21 00 62 62 62 62 00 00 62 62 62 20 00 62 62 00 62 62 62 00 00 62 62 00 62 62 00 00 62 00 62 62 90 00 62 62 00 06 00 62 62 00 30 00 62 62 62 62 62 62 62 62 62 62 62 62 62 62 62",
  // Layer 6 (Floor 7 - Ice Floor)
  "61 61 61 61 61 61 61 61 61 61 61 61 61 61 61 80 00 08 61 08 61 07 61 06 61 00 90 61 61 00 61 00 61 00 61 00 61 00 61 00 00 61 61 00 61 00 61 00 61 30 61 00 61 61 00 61 61 00 61 00 61 32 61 00 61 19 00 00 00 61 61 00 61 34 61 00 61 00 61 61 61 61 00 61 61 00 61 00 61 00 61 19 00 00 00 03 00 61 61 00 61 00 61 00 61 61 61 61 61 61 00 61 61 00 61 00 61 19 00 00 00 00 00 04 00 61 61 00 61 00 61 61 61 61 61 61 61 61 00 61 61 00 61 19 00 00 00 00 00 00 00 05 00 61 61 00 61 61 61 61 61 61 61 61 61 61 00 61 61 19 00 00 00 00 00 00 00 00 00 00 00 61 61 61 61 61 61 61 61 61 61 61 61 61 61 61",
  // Layer 7 (Floor 8 - Magic Array / Trick Floor)
  "02 02 02 02 02 02 02 02 02 02 02 02 02 02 02 90 00 00 00 00 00 00 00 00 00 15 29 02 02 00 00 02 02 02 04 02 02 02 02 00 15 02 02 00 02 02 00 02 00 02 00 00 02 02 00 02 02 00 02 00 00 03 00 02 00 00 00 02 00 02 02 00 02 00 00 02 60 02 02 03 02 02 00 02 02 00 02 02 02 02 08 32 59 00 00 04 00 02 02 00 04 00 00 60 34 28 02 02 02 02 00 02 02 00 02 02 03 02 02 60 02 00 00 02 00 02 02 00 02 00 00 00 02 00 03 00 00 02 00 02 02 00 02 02 00 00 02 00 02 00 02 02 00 02 02 16 00 02 02 02 02 04 02 02 02 10 00 02 02 30 16 00 00 00 00 00 00 00 00 00 80 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02",
  // Layer 8 (Floor 9 - Treasury / Point of No Return)
  "02 02 02 02 02 02 02 02 02 02 02 02 02 02 02 11 02 00 30 00 34 00 32 00 29 00 08 02 02 11 02 00 30 00 34 00 32 00 29 00 07 02 02 11 02 00 30 00 34 00 32 00 29 00 06 02 02 11 02 00 30 00 34 00 32 00 29 00 00 02 02 11 02 00 30 00 34 00 32 00 29 00 00 02 02 11 02 00 30 00 34 00 32 00 29 00 00 02 02 11 02 00 30 00 34 00 32 00 29 00 00 02 02 11 02 00 30 00 34 00 32 00 29 00 00 02 02 11 02 00 30 00 34 00 32 00 29 00 00 02 02 11 02 00 30 00 34 00 32 00 29 00 00 02 02 02 02 00 30 00 34 00 32 00 29 00 00 02 02 80 22 00 30 00 34 00 32 00 29 00 60 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02",
  // Layer 9 (Floor 10 - Final Boss Sanctuary)
  "02 02 02 02 02 02 02 02 02 02 02 02 02 02 02 63 63 63 63 63 02 99 02 63 63 63 63 02 02 63 63 63 63 63 02 00 02 63 63 63 63 02 02 63 63 63 63 63 02 23 02 63 63 63 63 02 02 63 63 63 63 63 02 00 02 63 63 63 63 02 02 63 63 63 63 63 02 05 02 63 63 63 63 02 02 63 63 63 63 63 02 00 02 63 63 63 63 02 02 63 63 63 63 63 02 24 02 63 63 63 63 02 02 63 63 63 63 63 02 25 02 63 63 63 63 02 02 63 63 63 63 63 02 26 02 63 63 63 63 02 02 63 63 63 63 63 02 00 02 63 63 63 63 02 02 02 02 02 02 02 02 05 02 02 02 02 02 02 02 90 00 00 00 00 00 00 00 00 00 00 27 02 02 02 02 02 02 02 02 02 02 02 02 02 02 02"
];

const FLOOR_THEMES = [
  { name: "初入魔塔 · 启程之地", bgm: "dungeon", ambient: "rgba(96, 165, 250, 0.04)" },
  { name: "骸骨回廊 · 试炼之厅", bgm: "dungeon", ambient: "rgba(96, 165, 250, 0.05)" },
  { name: "圣剑祭坛 · 贪婪神殿", bgm: "dungeon", ambient: "rgba(250, 204, 21, 0.05)" },
  { name: "迷雾重门 · 铁卫迷阵", bgm: "dungeon", ambient: "rgba(168, 85, 247, 0.05)" },
  { name: "群魔殿堂 · 双生阶梯", bgm: "dungeon", ambient: "rgba(236, 72, 153, 0.05)" },
  { name: "熔岩炼狱 · 烈焰深渊", bgm: "fire",    ambient: "rgba(239, 68, 68, 0.14)" },
  { name: "极寒冰窟 · 霜语迷宫", bgm: "ice",     ambient: "rgba(56, 189, 248, 0.14)" },
  { name: "六芒诡阵 · 智者箴言", bgm: "dungeon", ambient: "rgba(192, 132, 252, 0.09)" },
  { name: "黄金宝库 · 破釜沉舟", bgm: "dungeon", ambient: "rgba(250, 204, 21, 0.11)" },
  { name: "终焉圣殿 · 魔王决战", bgm: "boss",    ambient: "rgba(220, 38, 38, 0.12)" }
];

const MONSTER_DB = {
  11: { id: 11, name: "蓝史莱姆",   hp: 50,  attack: 12, defend: 9,  money: 3,  exp: 1,  miss: 5,  crit: 95, desc: "最基础的魔塔粘液怪，威胁极低。" },
  12: { id: 12, name: "幽冥小蝙蝠", hp: 60,  attack: 14, defend: 10, money: 6,  exp: 3,  miss: 5,  crit: 94, desc: "栖息在阴暗走廊的吸血蝙蝠。" },
  13: { id: 13, name: "骷髅步兵",   hp: 45,  attack: 20, defend: 11, money: 10, exp: 5,  miss: 7,  crit: 93, desc: "生前为王城卫兵，攻击颇具威胁。" },
  14: { id: 14, name: "岩石傀儡",   hp: 150, attack: 17, defend: 7,  money: 15, exp: 7,  miss: 9,  crit: 92, desc: "生命值极高的泥石巨像，但防御偏低。" },
  15: { id: 15, name: "重锤骷髅将", hp: 95,  attack: 35, defend: 9,  money: 20, exp: 8,  miss: 9,  crit: 91, desc: "挥舞巨型战锤的精锐骷髅，攻击力惊人！" },
  16: { id: 16, name: "重甲铁卫",   hp: 50,  attack: 16, defend: 35, money: 26, exp: 10, miss: 0,  crit: 90, desc: "防御力极高的重装守卫，建议拿到圣剑后再挑战。" },
  17: { id: 17, name: "暗影幽魂",   hp: 60,  attack: 17, defend: 10, money: 15, exp: 7,  miss: 45, crit: 93, desc: "飘忽不定的幽灵，拥有极高的闪避率！" },
  18: { id: 18, name: "紫袍大巫师", hp: 100, attack: 25, defend: 20, money: 25, exp: 15, miss: 15, crit: 92, desc: "精通黑魔法的高阶法师。" },
  19: { id: 19, name: "冰雪女妖",   hp: 100, attack: 30, defend: 0,  money: 0,  exp: 0,  miss: 20, crit: 99, desc: "第7层冰窟守卫，0防御但无金币经验奖励。" },
  20: { id: 20, name: "烈焰女妖",   hp: 100, attack: 40, defend: 13, money: 20, exp: 20, miss: 8,  crit: 50, desc: "第6层熔岩精灵，拥有极高的暴击率！" },
  21: { id: 21, name: "翡翠魔龙",   hp: 175, attack: 45, defend: 25, money: 40, exp: 25, miss: 5,  crit: 95, desc: "盘踞在熔岩深处的巨龙，攻防兼备。" },
  22: { id: 22, name: "黄金史莱姆王", hp: 150, attack: 50, defend: 30, money: 50, exp: 25, miss: 10, crit: 90, desc: "第9层守门首领！打不过它就无法前往顶层。" },
  23: { id: 23, name: "终焉大魔王", hp: 300, attack: 60, defend: 35, money: 0,  exp: 0,  miss: 20, crit: 80, desc: "囚禁公主的魔塔之主！击败他即可迎来结局。" }
};

// Note: tile 9 (secret wall) shows identical info to tile 2 (stone wall),
// and tiles 59 & 60 show identical info so hovering never spoils map secrets!
const TILE_INFO = {
  2:  { name: "坚固石墙", type: "地形障碍", icon: "2", desc: "古老厚重的魔塔石墙。" },
  3:  { name: "黄色木门", type: "机关门", icon: "3", desc: "消耗 1 把黄钥匙开启。" },
  4:  { name: "蓝色法门", type: "机关门", icon: "4", desc: "消耗 1 把蓝钥匙开启。" },
  5:  { name: "赤红封印门", type: "机关门", icon: "5", desc: "消耗 1 把红钥匙开启。" },
  6:  { name: "黄钥匙", type: "钥匙道具", icon: "6", desc: "拾取后黄钥匙 + 1。" },
  7:  { name: "蓝钥匙", type: "钥匙道具", icon: "7", desc: "拾取后蓝钥匙 + 1。" },
  8:  { name: "红钥匙", type: "钥匙道具", icon: "8", desc: "拾取后红钥匙 + 1。" },
  9:  { name: "坚固石墙", type: "地形障碍", icon: "2", desc: "古老厚重的魔塔石墙。" },
  10: { name: "呆萌的老者", type: "指引 NPC", icon: "10", desc: "走到他身边将获得关于第 9 层的重要忠告。" },
  24: { name: "鲜血蝙蝠", type: "神秘守卫", icon: "24", desc: "盘踞在顶层圣殿走廊的诡异血蝠。" },
  25: { name: "死灵巫师", type: "神秘守卫", icon: "25", desc: "盘踞在顶层圣殿走廊的死灵术士。" },
  26: { name: "骸骨剑圣", type: "神秘守卫", icon: "26", desc: "盘踞在顶层圣殿走廊的骸骨剑客。" },
  27: { name: "红袍神秘人", type: "指引 NPC", icon: "27", desc: "走到身边可听取关于前方三只守卫的秘密。" },
  28: { name: "幸运金币", type: "宝物", icon: "28", desc: "拾取后立即获得 金币 + 15。" },
  29: { name: "小红药水", type: "恢复药剂", icon: "29", desc: "饮用后立即恢复 生命值 HP + 18。" },
  30: { name: "大红药水", type: "恢复药剂", icon: "30", desc: "饮用后立即恢复 生命值 HP + 30。" },
  31: { name: "勇者圣剑", type: "传奇圣物", icon: "31", desc: "拾取后永久提升 攻击力 ATK + 10！" },
  32: { name: "攻击红宝石", type: "属性宝石", icon: "32", desc: "拾取后永久提升 攻击力 ATK + 3。" },
  33: { name: "勇者圣盾", type: "传奇圣物", icon: "33", desc: "拾取后永久提升 防御力 DEF + 8！" },
  34: { name: "防御蓝宝石", type: "属性宝石", icon: "34", desc: "拾取后永久提升 防御力 DEF + 2。" },
  35: { name: "怪物图鉴", type: "传奇圣物", icon: "35", desc: "拾取后解锁怪物属性探测，并可按 B 键查看本层怪物图鉴与预计战损！" },
  50: { name: "贪婪祭坛商店", type: "商店交互", icon: "50", desc: "奉献金币提升生命、攻击、防御或购买钥匙。" },
  51: { name: "贪婪祭坛商店", type: "商店交互", icon: "51", desc: "奉献金币提升生命、攻击、防御或购买钥匙。" },
  52: { name: "贪婪祭坛商店", type: "商店交互", icon: "52", desc: "奉献金币提升生命、攻击、防御或购买钥匙。" },
  59: { name: "六芒魔法阵", type: "神秘法阵", icon: "60", desc: "闪烁着诡异红光的六芒星阵，虚实难辨。" },
  60: { name: "六芒魔法阵", type: "神秘法阵", icon: "60", desc: "闪烁着诡异红光的六芒星阵，虚实难辨。" },
  61: { name: "万年寒冰墙", type: "环境障碍", icon: "61", desc: "坚不可摧的极寒冰壁。" },
  62: { name: "炽热熔岩壁", type: "环境障碍", icon: "62", desc: "翻涌着滚烫岩浆的火墙。" },
  63: { name: "魔晶石柱", type: "神殿装饰", icon: "63", desc: "魔王圣殿两侧耸立的蓝水晶柱。" },
  80: { name: "上行阶梯", type: "楼层通道", icon: "80", desc: "通往魔塔更高一层 (Floor + 1)。" },
  90: { name: "下行阶梯", type: "楼层通道", icon: "90", desc: "返回魔塔下一层 (Floor - 1)。" },
  99: { name: "被囚禁的公主", type: "终极目标", icon: "99", desc: "走到公主身边即可成功救出她！" }
};

// ============================================================================
// Zero-Latency WebAudio Engine (Pre-Decoded RAM AudioBuffers, Zero Stutter)
// ============================================================================
const GameAudio = {
  muted: false,
  masterVol: 0.75,
  bgmMode: "auto", // auto | welcome | dungeon | fire | ice | boss
  currentBgmKey: null,
  bgmPlayers: {},
  audioCtx: null,
  sfxGainNode: null,
  sfxBuffers: {},
  lastSfxTime: {},

  init() {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) {
      this.audioCtx = new Ctx();
      this.sfxGainNode = this.audioCtx.createGain();
      this.sfxGainNode.gain.value = this.masterVol * 0.9;
      this.sfxGainNode.connect(this.audioCtx.destination);
    }

    // BGM uses persistent looping HTMLAudioElements (only 1 switches on floor change)
    const bgmFiles = {
      welcome: "assets/welcome.wav",
      dungeon: "assets/audio/bgm_dungeon.wav",
      fire:    "assets/audio/bgm_fire.wav",
      ice:     "assets/audio/bgm_ice.wav",
      boss:    "assets/audio/bgm_boss.wav"
    };
    for (const [k, src] of Object.entries(bgmFiles)) {
      const a = new Audio(src);
      a.loop = true;
      a.preload = "auto";
      a.volume = this.masterVol * 0.55;
      this.bgmPlayers[k] = a;
    }

    // Pre-decode all 16 SFX WAV files into memory AudioBuffers once!
    // This completely eliminates `new Audio()` creation & disk I/O during gameplay.
    const sfxNames = [
      "step", "key", "door", "potion", "gem", "relic",
      "hit", "crit", "miss", "curse", "levelup", "shop",
      "stairs", "secret", "victory", "gameover"
    ];
    if (this.audioCtx) {
      for (const name of sfxNames) {
        fetch(`assets/audio/sfx_${name}.wav`)
          .then((res) => res.arrayBuffer())
          .then((buf) => this.audioCtx.decodeAudioData(buf))
          .then((decoded) => {
            this.sfxBuffers[name] = decoded;
          })
          .catch(() => {});
      }
    }
  },

  ensureContext() {
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume().catch(() => {});
    }
  },

  playSfx(name) {
    if (this.muted || !this.audioCtx) return;
    // Throttle identical SFX within 38ms so rapid pickups never overload audio mixer
    const now = performance.now();
    const minGap = name === "step" ? 55 : 38;
    if (this.lastSfxTime[name] && now - this.lastSfxTime[name] < minGap) {
      return;
    }
    this.lastSfxTime[name] = now;

    this.ensureContext();
    const buffer = this.sfxBuffers[name];
    if (buffer) {
      const src = this.audioCtx.createBufferSource();
      src.buffer = buffer;
      src.connect(this.sfxGainNode);
      src.start(0);
    }
  },

  updateBgmForState(status, floorIdx) {
    let targetKey = "dungeon";
    if (this.bgmMode !== "auto") {
      targetKey = this.bgmMode;
    } else {
      if (status === "welcome" || status === "select") {
        targetKey = "welcome";
      } else {
        targetKey = (FLOOR_THEMES[floorIdx] && FLOOR_THEMES[floorIdx].bgm) || "dungeon";
      }
    }

    if (this.currentBgmKey === targetKey) {
      const cur = this.bgmPlayers[targetKey];
      if (cur && !this.muted && cur.paused) {
        cur.play().catch(() => {});
      }
      return;
    }

    for (const [k, player] of Object.entries(this.bgmPlayers)) {
      if (k !== targetKey && !player.paused) {
        player.pause();
        player.currentTime = 0;
      }
    }

    this.currentBgmKey = targetKey;
    const next = this.bgmPlayers[targetKey];
    if (next) {
      next.volume = this.muted ? 0 : this.masterVol * 0.55;
      if (!this.muted) {
        const playPromise = next.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            next.addEventListener("canplaythrough", () => {
              if (!this.muted && this.currentBgmKey === targetKey && next.paused) {
                next.play().catch(() => {});
              }
            }, { once: true });
          });
        }
      }
    }
  },

  changeBgmMode(mode) {
    this.bgmMode = mode;
    this.currentBgmKey = null;
    this.updateBgmForState(Game.status, Game.player.floor);
  },

  setMasterVolume(v) {
    this.masterVol = Math.max(0, Math.min(1, v));
    if (this.sfxGainNode && this.audioCtx) {
      this.sfxGainNode.gain.setValueAtTime(this.muted ? 0 : this.masterVol * 0.9, this.audioCtx.currentTime);
    }
    for (const player of Object.values(this.bgmPlayers)) {
      player.volume = this.muted ? 0 : this.masterVol * 0.55;
    }
  },

  toggleMute() {
    this.muted = !this.muted;
    const btn = document.getElementById("btnMute");
    if (btn) {
      btn.textContent = this.muted ? "🔇 已静音" : "🔊 音效开启";
      btn.classList.toggle("danger", this.muted);
    }
    if (this.sfxGainNode && this.audioCtx) {
      this.sfxGainNode.gain.setValueAtTime(this.muted ? 0 : this.masterVol * 0.9, this.audioCtx.currentTime);
    }
    for (const [k, player] of Object.entries(this.bgmPlayers)) {
      player.volume = this.muted ? 0 : this.masterVol * 0.55;
      if (this.muted) {
        player.pause();
      } else if (k === this.currentBgmKey) {
        player.play().catch(() => {});
      }
    }
  }
};

// ============================================================================
// Main Game State & High-Performance 60FPS Renderer
// ============================================================================
const Game = {
  status: "welcome", // welcome | select | main | fight | shop | book | tip | help | ending | fail | saveload | cheat
  mode: 1,           // 1 = normal, -1 = GodMode
  animatedFight: true,

  player: {
    hp: 150,
    attack: 14,
    defend: 10,
    money: 0,
    exp: 0,
    miss: 8,
    crit: 93,
    level: 0,
    posx: 6,
    posy: 12,
    floor: 0,
    toward: 3, // 1=Up, 2=Left, 3=Down, 4=Right
    sex: 1,    // 1=Boy, 0=Girl
    need: 5,
    renderX: 6,
    renderY: 12,
    stepAnim: 0
  },

  keys: { yellow: 0, blue: 0, red: 0 },
  tools: { book: 0, sword: 0, shield: 0 },
  monsters: {},
  map: [],

  // Canvas & Offscreen Caches
  canvas: null,
  ctx: null,
  floorCacheCanvas: null,
  floorCacheReady: false,
  glowSprites: {},
  images: {},
  hoverTile: null,
  lastInspectorKey: "",
  uiCache: {},
  logQueue: [],
  logFlushScheduled: false,

  // Capped Object Pools for Particles & Floating Text
  floatingTexts: [],
  particles: [],
  ambientParticles: [],
  screenShake: 0,
  lastFrameTime: 0,
  fightTimer: null,
  activeFightState: null,

  init() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d", { alpha: false });
    this.ctx.imageSmoothingEnabled = false;

    this.initOffscreenCaches();
    GameAudio.init();
    this.preloadImages();
    this.resetDataToInitial();
    this.initAmbientParticles();
    this.buildFloorJumpButtons();
    this.bindEvents();
    this.updateSidebarUI();
    GameAudio.updateBgmForState(this.status, this.player.floor);
    this.log("🏰 欢迎来到《魔塔 Magic Tower》！勇闯十层魔塔，拯救被囚禁于塔顶的公主！");

    this.lastFrameTime = performance.now();
    requestAnimationFrame((ts) => this.renderLoop(ts));
  },

  // Pre-render radial gradients & static 14x14 floor onto offscreen canvases once
  initOffscreenCaches() {
    this.floorCacheCanvas = document.createElement("canvas");
    this.floorCacheCanvas.width = 560;
    this.floorCacheCanvas.height = 560;

    const makeRadialSprite = (size, innerColor, outerColor) => {
      const c = document.createElement("canvas");
      c.width = size;
      c.height = size;
      const gctx = c.getContext("2d");
      const r = size / 2;
      const grad = gctx.createRadialGradient(r, r, 2, r, r, r);
      grad.addColorStop(0, innerColor);
      grad.addColorStop(1, outerColor);
      gctx.fillStyle = grad;
      gctx.fillRect(0, 0, size, size);
      return c;
    };

    this.glowSprites.torchNormal = makeRadialSprite(160, "rgba(255, 230, 150, 0.16)", "rgba(0, 0, 0, 0)");
    this.glowSprites.torchGod    = makeRadialSprite(160, "rgba(251, 146, 60, 0.28)", "rgba(0, 0, 0, 0)");
    this.glowSprites.goldHalo    = makeRadialSprite(44,  "rgba(255, 228, 132, 0.48)", "rgba(255, 228, 132, 0)");
  },

  buildFloorCache() {
    const floorImg = this.images["0"];
    if (!floorImg || !floorImg.complete || floorImg.naturalWidth === 0) return;
    const fctx = this.floorCacheCanvas.getContext("2d");
    fctx.imageSmoothingEnabled = false;
    for (let x = 0; x < 14; x++) {
      for (let y = 0; y < 14; y++) {
        fctx.drawImage(floorImg, x * 40, y * 40, 40, 40);
      }
    }
    this.floorCacheReady = true;
  },

  preloadImages() {
    const ids = [
      "0", "2", "3", "4", "5", "6", "7", "8", "9", "10",
      "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23",
      "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35",
      "50", "51", "52", "59", "60", "61", "62", "63", "64", "80", "90", "99",
      "101", "102", "103", "104", "111", "112", "113", "114",
      "book", "sword", "shield", "tile", "sex0", "sex1",
      "critical", "miss", "levelup", "vs",
      "lowbg", "firebg", "icebg", "highbg",
      "welcome", "select", "shop", "tip1", "tip2", "help", "ending0", "ending1", "fail"
    ];
    for (const id of ids) {
      const img = new Image();
      if (id === "0") {
        img.onload = () => this.buildFloorCache();
      }
      img.src = `assets/${id}.png`;
      this.images[id] = img;
    }
  },

  resetDataToInitial() {
    this.monsters = {};
    for (const [k, v] of Object.entries(MONSTER_DB)) {
      this.monsters[k] = { ...v };
    }
    this.keys = { yellow: 0, blue: 0, red: 0 };
    this.tools = { book: 0, sword: 0, shield: 0 };

    this.map = Array.from({ length: 14 }, () =>
      Array.from({ length: 14 }, () => Array(10).fill(0))
    );
    for (let f = 0; f < 10; f++) {
      const tokens = INITIAL_MAP_STRINGS[f].trim().split(/\s+/);
      for (let idx = 0; idx < 196; idx++) {
        const x = idx % 14;
        const y = Math.floor(idx / 14);
        this.map[x][y][f] = parseInt(tokens[idx], 10);
      }
    }
  },

  chooseSex(sex) {
    if (sex === 1) {
      this.player.hp = 150;
      this.player.attack = 14;
      this.player.miss = 8;
      this.player.crit = 93;
    } else {
      this.player.hp = 200;
      this.player.attack = 13;
      this.player.miss = 18;
      this.player.crit = 99;
    }
    this.player.defend = 10;
    this.player.money = 0;
    this.player.exp = 0;
    this.player.level = 0;
    this.player.posx = 6;
    this.player.posy = 12;
    this.player.renderX = 6;
    this.player.renderY = 12;
    this.player.floor = 0;
    this.player.toward = 3;
    this.player.sex = sex;
    this.player.need = 5;
  },

  newGame() {
    GameAudio.playSfx("key");
    this.resetDataToInitial();
    this.setStatus("select");
  },

  selectRole(sex) {
    GameAudio.playSfx("relic");
    this.chooseSex(sex);
    this.setStatus("main");
    this.updateSidebarUI();
    this.spawnBurst(this.player.posx, this.player.posy, "#ffe484", 16);
    this.log(`✨ 你选择了【${sex === 1 ? "码农 (少年)" : "女码农 (少女)"}】，踏入魔塔第 1 层！`);
  },

  showWelcome() {
    this.setStatus("welcome");
  },

  setStatus(newStatus) {
    this.status = newStatus;
    const overlays = {
      welcome:  "overlayWelcome",
      select:   "overlaySelect",
      fight:    "overlayFight",
      shop:     "overlayShop",
      book:     "overlayBook",
      event:    "overlayEvent",
      saveload: "overlaySaveLoad",
      cheat:    "overlayCheat"
    };
    for (const id of Object.values(overlays)) {
      const el = document.getElementById(id);
      if (el) el.classList.remove("active");
    }

    if (newStatus === "welcome") {
      document.getElementById("overlayWelcome").classList.add("active");
    } else if (newStatus === "select") {
      document.getElementById("overlaySelect").classList.add("active");
    } else if (newStatus === "fight") {
      document.getElementById("overlayFight").classList.add("active");
    } else if (newStatus === "shop") {
      this.refreshShopUI();
      document.getElementById("overlayShop").classList.add("active");
    } else if (newStatus === "book") {
      this.renderBookUI();
      document.getElementById("overlayBook").classList.add("active");
    } else if (["tip", "help", "ending", "fail"].includes(newStatus)) {
      document.getElementById("overlayEvent").classList.add("active");
    } else if (newStatus === "saveload") {
      document.getElementById("overlaySaveLoad").classList.add("active");
    } else if (newStatus === "cheat") {
      document.getElementById("overlayCheat").classList.add("active");
    }

    GameAudio.updateBgmForState(this.status, this.player.floor);
  },

  closeOverlay() {
    if (this.status === "welcome" || this.status === "select") return;
    this.setStatus("main");
    this.updateSidebarUI();
  },

  // ==========================================================================
  // Movement & Map Interaction
  // ==========================================================================
  step(dx, dy, toward) {
    if (this.status !== "main") return;
    this.player.toward = toward;
    const tx = this.player.posx + dx;
    const ty = this.player.posy + dy;
    if (tx < 0 || tx >= 14 || ty < 0 || ty >= 14) return;

    const f = this.player.floor;
    const tmp = this.map[tx][ty][f];

    const canWalk =
      tmp === 0 ||
      (tmp > 5 && tmp < 10) ||
      (tmp > 10 && tmp < 27) ||
      (tmp > 27 && tmp <= 35) ||
      tmp === 59 ||
      (tmp === 3 && this.keys.yellow > 0) ||
      (tmp === 4 && this.keys.blue > 0) ||
      (tmp === 5 && this.keys.red > 0);

    if (canWalk) {
      this.map[tx][ty][f] = 0;
      this.player.posx = tx;
      this.player.posy = ty;
      this.player.stepAnim = 1.0;
      if (this.particles.length < 64) {
        this.particles.push({
          x: (tx + 0.5) * 40,
          y: (ty + 0.85) * 40,
          vx: (Math.random() - 0.5) * 18,
          vy: -Math.random() * 12,
          size: 3,
          color: "rgba(200, 200, 220, 0.5)",
          life: 0.22,
          maxLife: 0.22
        });
      }
      if (tmp === 0) {
        GameAudio.playSfx("step");
      }
    } else if ([2, 60, 61, 62, 63].includes(tmp)) {
      return;
    } else if (tmp === 3 || tmp === 4 || tmp === 5) {
      const doorNames = { 3: "黄钥匙", 4: "蓝钥匙", 5: "红钥匙" };
      this.spawnFloatText(tx, ty, `需要${doorNames[tmp]}!`, "#f87171");
      this.log(`🔒 门锁着！你需要一把【${doorNames[tmp]}】才能打开它。`);
      return;
    }

    this.handleTileAction(tmp, tx, ty);
    this.updateSidebarUI();
    if (this.hoverTile) {
      this.updateInspector(this.hoverTile.x, this.hoverTile.y);
    }
  },

  handleTileAction(tmp, tx, ty) {
    switch (tmp) {
      case 3:
        this.keys.yellow = Math.max(0, this.keys.yellow - 1);
        GameAudio.playSfx("door");
        this.spawnBurst(tx, ty, "#fde047", 10);
        this.spawnFloatText(tx, ty, "黄钥匙 -1", "#fde047");
        break;
      case 4:
        this.keys.blue = Math.max(0, this.keys.blue - 1);
        GameAudio.playSfx("door");
        this.spawnBurst(tx, ty, "#60a5fa", 10);
        this.spawnFloatText(tx, ty, "蓝钥匙 -1", "#60a5fa");
        break;
      case 5:
        this.keys.red = Math.max(0, this.keys.red - 1);
        GameAudio.playSfx("door");
        this.spawnBurst(tx, ty, "#f87171", 10);
        this.spawnFloatText(tx, ty, "红钥匙 -1", "#f87171");
        break;
      case 6:
        this.keys.yellow += 1;
        GameAudio.playSfx("key");
        this.spawnBurst(tx, ty, "#fde047", 8);
        this.spawnFloatText(tx, ty, "黄钥匙 +1", "#fde047");
        this.log("🗝️ 拾取了【黄钥匙】× 1");
        break;
      case 7:
        this.keys.blue += 1;
        GameAudio.playSfx("key");
        this.spawnBurst(tx, ty, "#60a5fa", 8);
        this.spawnFloatText(tx, ty, "蓝钥匙 +1", "#60a5fa");
        this.log("🗝️ 拾取了【蓝钥匙】× 1");
        break;
      case 8:
        this.keys.red += 1;
        GameAudio.playSfx("key");
        this.spawnBurst(tx, ty, "#f87171", 8);
        this.spawnFloatText(tx, ty, "红钥匙 +1", "#f87171");
        this.log("🗝️ 拾取了【红钥匙】× 1");
        break;
      case 9:
        GameAudio.playSfx("secret");
        this.spawnBurst(tx, ty, "#c084fc", 14);
        this.spawnFloatText(tx, ty, "✨ 发现隐藏暗墙!", "#c084fc");
        this.log("🔮 奇迹！你穿过了伪装的隐藏暗墙！");
        break;
      case 59:
        GameAudio.playSfx("secret");
        this.spawnBurst(tx, ty, "#f43f5e", 12);
        this.spawnFloatText(tx, ty, "✨ 破除幻阵!", "#fb7185");
        this.log("🔯 你踏破了虚幻六芒魔法阵！");
        break;
      case 10:
        GameAudio.playSfx("key");
        this.saveToSlot("auto_f8", "第8层老者自动备份");
        this.showNpcTipOverlay(1);
        break;
      case 27:
        GameAudio.playSfx("key");
        this.showNpcTipOverlay(2);
        break;
      case 11: case 12: case 13: case 14: case 15: case 16:
      case 17: case 18: case 19: case 20: case 21: case 22: case 23:
        this.startFight(tmp);
        break;
      case 24:
        this.player.hp = Math.floor(this.player.hp / 3);
        GameAudio.playSfx("curse");
        this.screenShake = 8;
        this.spawnBurst(tx, ty, "#dc2626", 16);
        this.spawnFloatText(tx, ty, "🩸 鲜血诅咒 HP ÷ 3!", "#ef4444");
        this.log("🩸 遭遇【鲜血蝙蝠】诅咒！生命值骤降至原本的 1/3！");
        break;
      case 25:
        this.player.defend = Math.floor(this.player.defend / 3);
        GameAudio.playSfx("curse");
        this.screenShake = 8;
        this.spawnBurst(tx, ty, "#9333ea", 16);
        this.spawnFloatText(tx, ty, "💀 死灵诅咒 DEF ÷ 3!", "#c084fc");
        this.log("💀 遭遇【死灵巫师】诅咒！防御力骤降至原本的 1/3！");
        break;
      case 26:
        this.player.attack = Math.floor(this.player.attack / 3);
        GameAudio.playSfx("curse");
        this.screenShake = 8;
        this.spawnBurst(tx, ty, "#ea580c", 16);
        this.spawnFloatText(tx, ty, "⚔️ 断剑诅咒 ATK ÷ 3!", "#fb923c");
        this.log("⚔️ 遭遇【骸骨剑圣】诅咒！攻击力骤降至原本的 1/3！");
        break;
      case 28:
        this.player.money += 15;
        GameAudio.playSfx("shop");
        this.spawnBurst(tx, ty, "#facc15", 8);
        this.spawnFloatText(tx, ty, "💰 金币 +15", "#facc15");
        this.log("💰 拾取了幸运金币，金币 + 15！");
        break;
      case 29:
        this.player.hp += 18;
        GameAudio.playSfx("potion");
        this.spawnBurst(tx, ty, "#4ade80", 8);
        this.spawnFloatText(tx, ty, "❤️ HP +18", "#4ade80");
        this.log("🧪 饮用小红药水，生命值 + 18！");
        break;
      case 30:
        this.player.hp += 30;
        GameAudio.playSfx("potion");
        this.spawnBurst(tx, ty, "#22c55e", 10);
        this.spawnFloatText(tx, ty, "❤️ HP +30", "#4ade80");
        this.log("🧪 饮用大红药水，生命值 + 30！");
        break;
      case 31:
        this.tools.sword = 1;
        this.player.attack += 10;
        GameAudio.playSfx("relic");
        this.screenShake = 5;
        this.spawnBurst(tx, ty, "#ffe484", 18);
        this.spawnFloatText(tx, ty, "🗡️ 勇者圣剑 ATK +10!", "#ffe484");
        this.log("🗡️ 获得传世圣物【勇者圣剑】！攻击力暴涨 +10！");
        break;
      case 32:
        this.player.attack += 3;
        GameAudio.playSfx("gem");
        this.spawnBurst(tx, ty, "#f87171", 8);
        this.spawnFloatText(tx, ty, "⚔️ ATK +3", "#f87171");
        this.log("♦️ 吸收红宝石之力，攻击力 + 3！");
        break;
      case 33:
        this.tools.shield = 1;
        this.player.defend += 8;
        GameAudio.playSfx("relic");
        this.screenShake = 5;
        this.spawnBurst(tx, ty, "#60a5fa", 18);
        this.spawnFloatText(tx, ty, "🛡️ 勇者圣盾 DEF +8!", "#93c5fd");
        this.log("🛡️ 获得传世圣物【勇者圣盾】！防御力暴涨 +8！");
        break;
      case 34:
        this.player.defend += 2;
        GameAudio.playSfx("gem");
        this.spawnBurst(tx, ty, "#60a5fa", 8);
        this.spawnFloatText(tx, ty, "🛡️ DEF +2", "#60a5fa");
        this.log("🔷 吸收蓝宝石之力，防御力 + 2！");
        break;
      case 35:
        this.tools.book = 1;
        GameAudio.playSfx("relic");
        this.spawnBurst(tx, ty, "#4ade80", 16);
        this.spawnFloatText(tx, ty, "📖 获得怪物图鉴 (按B查看)", "#4ade80");
        this.log("📖 获得【怪物图鉴】！已解锁怪物属性探测，可随时按 B 键或点击图鉴查看本层怪物信息与预计伤害。");
        break;
      case 50:
      case 51:
      case 52:
        GameAudio.playSfx("shop");
        this.setStatus("shop");
        break;
      case 80:
        if (this.player.floor < 9) {
          this.player.floor += 1;
          GameAudio.playSfx("stairs");
          this.initAmbientParticles();
          GameAudio.updateBgmForState(this.status, this.player.floor);
          this.spawnBurst(this.player.posx, this.player.posy, "#5ce1e6", 12);
          this.spawnFloatText(this.player.posx, this.player.posy, `▲ 登上第 ${this.player.floor + 1} 层`, "#5ce1e6");
          this.log(`🪜 沿着石阶而上，来到了【魔塔第 ${this.player.floor + 1} 层】！`);
        }
        break;
      case 90:
        if (this.player.floor > 0) {
          this.player.floor -= 1;
          GameAudio.playSfx("stairs");
          this.initAmbientParticles();
          GameAudio.updateBgmForState(this.status, this.player.floor);
          this.spawnBurst(this.player.posx, this.player.posy, "#f6c95e", 12);
          this.spawnFloatText(this.player.posx, this.player.posy, `▼ 返回第 ${this.player.floor + 1} 层`, "#f6c95e");
          this.log(`🪜 沿着石阶而下，回到了【魔塔第 ${this.player.floor + 1} 层】。`);
        }
        break;
      case 99:
        GameAudio.playSfx("victory");
        this.showEndingOverlay();
        break;
      default:
        break;
    }
  },

  // ==========================================================================
  // Combat System
  // ==========================================================================
  getExpectedDamage(monsterId) {
    const m = this.monsters[monsterId];
    if (!m) return 0;
    const dmg1 = Math.max(this.player.attack - m.defend, 1);
    const dmg2 = Math.max(m.attack - this.player.defend, 1);
    const turns = (m.hp % dmg1 === 0) ? (m.hp / dmg1 - 1) : Math.floor(m.hp / dmg1);
    return turns * dmg2;
  },

  startFight(monsterId) {
    const m = this.monsters[monsterId];
    if (!m) return;

    let bgFile = "lowbg.png";
    if (this.player.floor === 5) bgFile = "firebg.png";
    else if (this.player.floor === 6) bgFile = "icebg.png";
    else if (this.player.floor === 9) bgFile = "highbg.png";

    document.getElementById("fightStageBg").style.backgroundImage = `url('assets/${bgFile}')`;
    document.getElementById("fightPlayerSprite").src = `assets/sex${this.player.sex}.png`;
    document.getElementById("fightMonsterSprite").src = `assets/${monsterId}.png`;
    document.getElementById("fightMonsterName").textContent = m.name;
    // During combat, the monster's stats are briefly visible on the battle panel
    document.getElementById("fightMonsterStatsSub").textContent = `ATK ${m.attack} · DEF ${m.defend}`;
    document.getElementById("fightSwordIcon").style.display = this.tools.sword ? "block" : "none";
    document.getElementById("fightShieldIcon").style.display = this.tools.shield ? "block" : "none";
    document.getElementById("fightRewardMoney").textContent = `💰 金币 + ${m.money}`;
    document.getElementById("fightRewardExp").textContent = `✨ 经验 + ${m.exp}`;
    document.getElementById("fightLevelupBanner").classList.remove("show");

    const startPlayerHp = this.player.hp;
    const startMonsterHp = m.hp;
    let playerHp = startPlayerHp;
    let monsterHp = startMonsterHp;
    let playerMiss = 0, monsterMiss = 0;
    let playerCrit = 0, monsterCrit = 0;
    const events = [];

    while (true) {
      let random = Math.floor(Math.random() * 99) + 1;
      let damage = Math.max(this.player.attack - m.defend, 1);
      const isPlayerCrit = random >= this.player.crit;
      if (isPlayerCrit) damage += Math.floor(damage * 0.5);
      const isMonsterDodge = random <= m.miss;
      const actualDmgToMonster = isMonsterDodge ? 0 : damage;
      monsterHp = Math.max(0, monsterHp - actualDmgToMonster);
      if (isMonsterDodge) playerMiss++;
      if (isPlayerCrit) monsterCrit++;

      events.push({
        actor: "player",
        dmg: actualDmgToMonster,
        crit: isPlayerCrit,
        miss: isMonsterDodge,
        pHp: playerHp,
        mHp: monsterHp,
        pCrit: playerCrit,
        mCrit: monsterCrit,
        pMiss: playerMiss,
        mMiss: monsterMiss
      });

      if (monsterHp <= 0) break;

      random = Math.floor(Math.random() * 99) + 1;
      damage = Math.max(m.attack - this.player.defend, 1);
      const isMonsterCrit = random >= m.crit;
      if (isMonsterCrit) damage += Math.floor(damage * 0.5);
      const isPlayerDodge = random <= this.player.miss;
      const actualDmgToPlayer = isPlayerDodge ? 0 : this.mode * damage;
      playerHp = Math.max(0, playerHp - actualDmgToPlayer);
      if (isPlayerDodge) monsterMiss++;
      if (isMonsterCrit) playerCrit++;

      events.push({
        actor: "monster",
        dmg: actualDmgToPlayer,
        crit: isMonsterCrit,
        miss: isPlayerDodge,
        pHp: playerHp,
        mHp: monsterHp,
        pCrit: playerCrit,
        mCrit: monsterCrit,
        pMiss: playerMiss,
        mMiss: monsterMiss
      });

      if (playerHp <= 0) break;
    }

    if (this.fightTimer) {
      clearInterval(this.fightTimer);
      this.fightTimer = null;
    }

    this.activeFightState = {
      monster: m,
      startPlayerHp,
      startMonsterHp,
      finalPlayerHp: playerHp,
      finalMonsterHp: monsterHp,
      playerCrit,
      monsterCrit,
      playerMiss,
      monsterMiss,
      rewardApplied: false,
      leveledUp: false,
      events,
      eventIdx: 0,
      finished: false,
      startedAt: performance.now()
    };

    this.setStatus("fight");

    if (!this.animatedFight) {
      this.showFinalFightSummary();
    } else {
      document.getElementById("fightContinueBtnText").textContent = "⏩ 点击或按键跳过动画 / 继续";
      this.updateFightFrameUI(startPlayerHp, startMonsterHp, 0, 0, 0, 0, "⚔️ 战斗开始！");
      const stepMs = events.length > 20 ? Math.max(65, Math.floor(2600 / events.length)) : 165;
      this.fightTimer = setInterval(() => this.stepFightAnimation(), stepMs);
    }
  },

  stepFightAnimation() {
    const st = this.activeFightState;
    if (!st || st.finished) return;
    if (st.eventIdx >= st.events.length) {
      this.showFinalFightSummary();
      return;
    }

    const ev = st.events[st.eventIdx++];
    const pStage = document.getElementById("fightPlayerStage");
    const mStage = document.getElementById("fightMonsterStage");
    const pPopup = document.getElementById("badgePlayerPopup");
    const mPopup = document.getElementById("badgeMonsterPopup");

    pPopup.classList.remove("show");
    mPopup.classList.remove("show");

    if (ev.actor === "player") {
      pStage.style.transform = "translateX(18px) scale(1.08)";
      setTimeout(() => { pStage.style.transform = ""; }, 110);
      if (ev.miss) {
        mPopup.innerHTML = `<img class="pixel-img" src="assets/miss.png" />`;
        mPopup.classList.add("show");
        GameAudio.playSfx("miss");
      } else if (ev.crit) {
        mPopup.innerHTML = `<img class="pixel-img" src="assets/critical.png" />`;
        mPopup.classList.add("show");
        GameAudio.playSfx("crit");
      } else {
        GameAudio.playSfx("hit");
      }
    } else {
      mStage.style.transform = "translateX(-18px) scale(1.08)";
      setTimeout(() => { mStage.style.transform = ""; }, 110);
      if (ev.miss) {
        pPopup.innerHTML = `<img class="pixel-img" src="assets/miss.png" />`;
        pPopup.classList.add("show");
        GameAudio.playSfx("miss");
      } else if (ev.crit) {
        pPopup.innerHTML = `<img class="pixel-img" src="assets/critical.png" />`;
        pPopup.classList.add("show");
        GameAudio.playSfx("crit");
      } else {
        GameAudio.playSfx("hit");
      }
    }

    this.player.hp = ev.pHp;
    this.updateSidebarUI();

    this.updateFightFrameUI(
      ev.pHp,
      ev.mHp,
      ev.pCrit,
      ev.mCrit,
      ev.pMiss,
      ev.mMiss,
      `第 ${Math.ceil(st.eventIdx / 2)} 回合`
    );
  },

  updateFightFrameUI(pHp, mHp, pCrit, mCrit, pMiss, mMiss, roundLabel) {
    const st = this.activeFightState;
    if (!st) return;
    document.getElementById("fightRoundIndicator").textContent = roundLabel;
    document.getElementById("fightPlayerHpText").textContent = `${st.startPlayerHp}  ->  ${pHp}`;
    document.getElementById("fightMonsterHpText").textContent = `${st.startMonsterHp}  ->  ${mHp}`;

    const pPct = Math.max(0, Math.min(100, (pHp / Math.max(1, st.startPlayerHp)) * 100));
    const mPct = Math.max(0, Math.min(100, (mHp / Math.max(1, st.startMonsterHp)) * 100));
    document.getElementById("fightPlayerHpBar").style.width = `${pPct}%`;
    document.getElementById("fightMonsterHpBar").style.width = `${mPct}%`;

    document.getElementById("fightPlayerCrit").textContent = `我方受暴击 (Crit) : ${pCrit}`;
    document.getElementById("fightMonsterCrit").textContent = `我方打出暴击 (Crit) : ${mCrit}`;
    document.getElementById("fightPlayerMiss").textContent = `我方发生失误 (Miss) : ${pMiss}`;
    document.getElementById("fightMonsterMiss").textContent = `敌方攻击落空 (Miss) : ${mMiss}`;
  },

  showFinalFightSummary() {
    if (this.fightTimer) {
      clearInterval(this.fightTimer);
      this.fightTimer = null;
    }
    const st = this.activeFightState;
    if (!st || st.finished) return;
    st.finished = true;

    // Apply post-battle HP, Gold, EXP, and Level-Up AFTER the combat animation finishes
    if (!st.rewardApplied) {
      st.rewardApplied = true;
      const m = st.monster;
      this.player.hp = st.finalPlayerHp;
      this.player.money += m.money;
      this.player.exp += m.exp;

      while (this.player.exp >= this.player.need && this.player.hp > 0) {
        this.player.exp -= this.player.need;
        this.player.level += 1;
        this.player.hp += 10;
        this.player.attack += 1;
        this.player.defend += 1;
        this.player.need = Math.floor(this.player.need * 1.5) + 1;
        st.leveledUp = true;
      }
    }

    this.updateFightFrameUI(
      st.finalPlayerHp,
      st.finalMonsterHp,
      st.playerCrit,
      st.monsterCrit,
      st.playerMiss,
      st.monsterMiss,
      st.finalPlayerHp > 0 ? "✅ 战斗胜利！" : "💀 战斗失败..."
    );
    document.getElementById("fightContinueBtnText").textContent = "✅ 点击或按任意键继续";

    const lostHp = st.startPlayerHp - st.finalPlayerHp;
    this.log(
      `⚔️ 击败【${st.monster.name}】！耗时 ${Math.ceil(st.events.length / 2)} 回合，` +
      `战损 ${lostHp >= 0 ? "-" + lostHp : "+" + (-lostHp)} HP，获得 ${st.monster.money} G / ${st.monster.exp} EXP。`
    );

    if (st.leveledUp) {
      document.getElementById("fightLevelupBanner").classList.add("show");
      if (!this.animatedFight || st.eventIdx === 0) {
        GameAudio.playSfx(st.monsterCrit > 0 ? "crit" : "hit");
        setTimeout(() => GameAudio.playSfx("levelup"), 75);
      } else {
        GameAudio.playSfx("levelup");
      }
      this.log(`🆙 升级啦！当前等级提升至 Lv ${this.player.level + 1}（HP+10, ATK+1, DEF+1）！`);
    } else if (!this.animatedFight || st.eventIdx === 0) {
      GameAudio.playSfx(st.monsterCrit > 0 ? "crit" : "hit");
      if (st.finalPlayerHp > 0) {
        setTimeout(() => GameAudio.playSfx("key"), 80);
      }
    } else if (st.finalPlayerHp > 0) {
      GameAudio.playSfx("key");
    }

    this.updateSidebarUI();
  },

  finishFightOverlay() {
    if (this.status !== "fight") return;
    const st = this.activeFightState;
    if (st && !st.finished) {
      this.showFinalFightSummary();
      return;
    }
    if (this.player.hp <= 0) {
      GameAudio.playSfx("gameover");
      this.showGameOverOverlay();
    } else {
      this.closeOverlay();
    }
  },

  // ==========================================================================
  // Shop System
  // ==========================================================================
  refreshShopUI() {
    document.getElementById("shopGoldDisplay").textContent = this.player.money;
    document.getElementById("shopBtn1").disabled = this.player.money < 50;
    document.getElementById("shopBtn2").disabled = this.player.money < 50;
    document.getElementById("shopBtn3").disabled = this.player.money < 50;
    document.getElementById("shopBtn4").disabled = this.player.money < 40;
    document.getElementById("shopBtn5").disabled = this.player.money < 120;
    document.getElementById("shopBtn6").disabled = this.player.money < 300;
  },

  buyShop(itemIdx) {
    if (this.status !== "shop") return;
    const m = this.player.money;
    let bought = false;
    if (itemIdx === 1 && m >= 50) {
      this.player.money -= 50;
      this.player.hp += 30;
      bought = true;
      this.log("🛒 商店购买：花费 50 G，生命值 HP + 30！");
    } else if (itemIdx === 2 && m >= 50) {
      this.player.money -= 50;
      this.player.attack += 2;
      bought = true;
      this.log("🛒 商店购买：花费 50 G，攻击力 ATK + 2！");
    } else if (itemIdx === 3 && m >= 50) {
      this.player.money -= 50;
      this.player.defend += 1;
      bought = true;
      this.log("🛒 商店购买：花费 50 G，防御力 DEF + 1！");
    } else if (itemIdx === 4 && m >= 40) {
      this.player.money -= 40;
      this.keys.yellow += 1;
      bought = true;
      this.log("🛒 商店购买：花费 40 G，黄钥匙 + 1！");
    } else if (itemIdx === 5 && m >= 120) {
      this.player.money -= 120;
      this.keys.blue += 1;
      bought = true;
      this.log("🛒 商店购买：花费 120 G，蓝钥匙 + 1！");
    } else if (itemIdx === 6 && m >= 300) {
      this.player.money -= 300;
      this.keys.red += 1;
      bought = true;
      this.log("🛒 商店购买：花费 300 G，红钥匙 + 1！");
    }

    if (bought) {
      GameAudio.playSfx("shop");
      this.refreshShopUI();
      this.updateSidebarUI();
    }
  },

  // ==========================================================================
  // Monster Book System (Strictly requires `this.tools.book === 1`)
  // ==========================================================================
  toggleBook() {
    if (this.status === "book") {
      this.closeOverlay();
      return;
    }
    if (this.status !== "main") return;
    if (!this.tools.book) {
      this.spawnFloatText(this.player.posx, this.player.posy, "🔒 需先获得怪物图鉴!", "#f87171");
      this.log("📖 你还没有获得【怪物图鉴】，无法查看怪物属性（请先拾取第 1 层左下角的绿皮书）！");
      return;
    }
    GameAudio.playSfx("key");
    this.setStatus("book");
  },

  renderBookUI() {
    const container = document.getElementById("bookListContainer");
    const f = this.player.floor;
    const exist = {};
    for (let x = 0; x < 14; x++) {
      for (let y = 0; y < 14; y++) {
        const id = this.map[x][y][f];
        if (id >= 11 && id <= 23) {
          exist[id] = (exist[id] || 0) + 1;
        }
      }
    }

    const ids = Object.keys(exist).map(Number).sort((a, b) => a - b);
    if (ids.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-dim);">🎉 本层所有常规怪物已被全部肃清！</div>`;
      return;
    }

    container.innerHTML = ids.map((id) => {
      const m = this.monsters[id];
      const expDmg = this.getExpectedDamage(id);
      const critChance = 100 - m.crit;
      let badgeBg = "rgba(34, 197, 94, 0.2)";
      let badgeColor = "#4ade80";
      let badgeBorder = "rgba(34, 197, 94, 0.45)";
      if (expDmg >= this.player.hp) {
        badgeBg = "rgba(239, 68, 68, 0.25)";
        badgeColor = "#f87171";
        badgeBorder = "#ef4444";
      } else if (expDmg > this.player.hp * 0.35) {
        badgeBg = "rgba(234, 179, 8, 0.22)";
        badgeColor = "#fde047";
        badgeBorder = "#eab308";
      }
      return `
        <div class="book-item">
          <img class="pixel-img" src="assets/${id}.png" />
          <div style="flex:1;">
            <div style="font-weight:800; color:var(--gold-bright); font-size:13px; margin-bottom:4px;">
              ${m.name} <span style="font-size:11px; color:var(--text-dim);">本层剩余 ×${exist[id]}</span>
            </div>
            <div class="book-item-info">
              <span style="color:#4ade80;">HP: ${m.hp}</span>
              <span style="color:#f87171;">ATK: ${m.attack}</span>
              <span style="color:#60a5fa;">DEF: ${m.defend}</span>
              <span style="color:#facc15;">金币: ${m.money}</span>
              <span style="color:#93c5fd;">EXP: ${m.exp}</span>
              <span style="color:#2dd4bf;">闪避: ${m.miss}%</span>
              <span style="color:#c084fc;">暴击: ${critChance}%</span>
            </div>
          </div>
          <div class="book-dmg-badge" style="background:${badgeBg}; color:${badgeColor}; border:1px solid ${badgeBorder};">
            <div style="font-size:10px; opacity:0.85;">预计战损</div>
            <div style="font-size:15px;">${expDmg} HP</div>
          </div>
        </div>
      `;
    }).join("");
  },

  // ==========================================================================
  // NPC Tips, Help, Endings
  // ==========================================================================
  showNpcTipOverlay(tipNum) {
    const content = document.getElementById("eventOverlayContent");
    if (tipNum === 1) {
      content.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
          <img class="pixel-img" src="assets/10.png" style="width:48px;height:48px;" />
          <div style="text-align:left;">
            <h3 style="margin:0; color:var(--gold-bright);">🧙‍♂️ 呆萌的老者 (第 8 层忠告)</h3>
            <span style="font-size:11px; color:#4ade80;">✅ 已自动为你创建【第8层老者自动备份】存档！</span>
          </div>
        </div>
        <img class="orig-img-frame" src="assets/tip1.png" alt="Oldman Tip" />
        <div style="margin-top:14px;">
          <button class="btn gold" onclick="Game.closeOverlay()">👍 谨记教诲，继续前进 (任意键退出)</button>
        </div>
      `;
    } else {
      content.innerHTML = `
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
          <img class="pixel-img" src="assets/27.png" style="width:48px;height:48px;" />
          <div style="text-align:left;">
            <h3 style="margin:0; color:#f87171;">🔮 神秘人的警告 (第 10 层决战前夕)</h3>
            <span style="font-size:11px; color:var(--text-dim);">前方三只守卫会按百分比直接削减你的生命、防御与攻击！</span>
          </div>
        </div>
        <img class="orig-img-frame" src="assets/tip2.png" alt="Sorceress Tip" />
        <div style="margin-top:14px;">
          <button class="btn gold" onclick="Game.closeOverlay()">⚔️ 勇往直前 (任意键退出)</button>
        </div>
      `;
    }
    this.setStatus("tip");
  },

  toggleHelp() {
    if (this.status === "help") {
      this.closeOverlay();
      return;
    }
    const content = document.getElementById("eventOverlayContent");
    content.innerHTML = `
      <h3 style="margin:0 0 10px; color:var(--gold-bright);">❓ 游戏帮助与快捷键指南 =w=</h3>
      <img class="orig-img-frame" src="assets/help.png" alt="Help" />
      <div style="margin-top:10px; font-size:12px; color:#e5e7eb; background:rgba(255,255,255,0.06); padding:7px 14px; border-radius:8px; border:1px solid rgba(255,255,255,0.12);">
        ⌨️ 移动：<strong style="color:var(--gold-bright);">方向键 / W A S D</strong> · 快速存档：<strong style="color:var(--gold-bright);">M / K</strong> · 快速读档：<strong style="color:var(--gold-bright);">L</strong> · 怪物图鉴：<strong style="color:var(--gold-bright);">B</strong>
      </div>
      <div style="margin-top:12px;">
        <button class="btn gold" onclick="Game.closeOverlay()">✨ 返回游戏 (任意键退出)</button>
      </div>
    `;
    this.setStatus("help");
  },

  showEndingOverlay() {
    const endingImg = this.player.sex === 1 ? "assets/ending1.png" : "assets/ending0.png";
    const endingTitle = this.player.sex === 1
      ? "👑 完美通关：勇敢的码农少年救出了公主！"
      : "🌸 百合结局：机智的女码农少女救出了公主！";
    const content = document.getElementById("eventOverlayContent");
    content.innerHTML = `
      <h2 style="margin:0 0 10px; color:var(--gold-bright);">${endingTitle}</h2>
      <img class="orig-img-frame" src="${endingImg}" alt="Ending" />
      <div style="margin-top:16px; display:flex; gap:10px;">
        <button class="btn gold" onclick="Game.newGame()">✨ 再玩一局 (体验另一角色结局)</button>
        <button class="btn" onclick="Game.showWelcome()">🏰 返回主菜单</button>
      </div>
    `;
    this.setStatus("ending");
    this.log(`🎉 恭喜通关！${endingTitle}`);
  },

  showGameOverOverlay() {
    const content = document.getElementById("eventOverlayContent");
    content.innerHTML = `
      <h2 style="margin:0 0 10px; color:#f87171;">💀 胜败乃兵家常事，大侠请重新来过</h2>
      <img class="orig-img-frame" src="assets/fail.png" alt="Game Over" />
      <div style="margin-top:16px; display:flex; gap:10px;">
        <button class="btn gold" onclick="Game.openSaveLoadModal('load')">📂 读取存档</button>
        <button class="btn" onclick="Game.newGame()">✨ 重新开始</button>
      </div>
    `;
    this.setStatus("fail");
  },

  handleEventOverlayClick() {
    if (this.status === "tip" || this.status === "help") {
      this.closeOverlay();
    }
  },

  // ==========================================================================
  // Save & Load System
  // ==========================================================================
  serializeState(label) {
    return {
      label: label || `第 ${this.player.floor + 1} 层存档`,
      timestamp: new Date().toLocaleString("zh-CN", { hour12: false }),
      player: { ...this.player },
      keys: { ...this.keys },
      tools: { ...this.tools },
      mode: this.mode,
      map: JSON.parse(JSON.stringify(this.map))
    };
  },

  saveToSlot(slotKey, label) {
    const data = this.serializeState(label);
    localStorage.setItem(`magictower_save_${slotKey}`, JSON.stringify(data));
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.nativeSave) {
      window.webkit.messageHandlers.nativeSave.postMessage({ slot: slotKey, data });
    }
  },

  loadFromSlot(slotKey) {
    const raw = localStorage.getItem(`magictower_save_${slotKey}`);
    if (!raw) return false;
    try {
      const data = JSON.parse(raw);
      this.player = {
        ...data.player,
        renderX: data.player.posx,
        renderY: data.player.posy,
        stepAnim: 0
      };
      this.keys = { ...data.keys };
      this.tools = { ...data.tools };
      this.mode = data.mode || 1;
      this.map = data.map;
      this.resetMonstersOnly();
      this.setStatus("main");
      this.initAmbientParticles();
      this.updateSidebarUI();
      GameAudio.playSfx("relic");
      this.spawnBurst(this.player.posx, this.player.posy, "#60a5fa", 14);
      this.log(`📂 已成功读取存档：【${data.label}】（第 ${this.player.floor + 1} 层，Lv ${this.player.level + 1}）`);
      return true;
    } catch (e) {
      return false;
    }
  },

  resetMonstersOnly() {
    this.monsters = {};
    for (const [k, v] of Object.entries(MONSTER_DB)) {
      this.monsters[k] = { ...v };
    }
  },

  quickSave() {
    if (this.status !== "main") return;
    this.saveToSlot("quick", "快速存档 (快捷键 M / K)");
    GameAudio.playSfx("relic");
    this.spawnFloatText(this.player.posx, this.player.posy, "💾 快速存档成功!", "#4ade80");
    this.log(`💾 已保存进度至【快速存档】（第 ${this.player.floor + 1} 层，HP ${this.player.hp}）。`);
  },

  quickLoad() {
    if (!this.loadFromSlot("quick")) {
      if (!this.loadFromSlot("slot1")) {
        this.log("⚠️ 暂无可读取的快速存档！请先按 M 或 K 保存存档。");
      }
    }
  },

  quickLoadFromWelcome() {
    if (this.loadFromSlot("quick") || this.loadFromSlot("slot1") || this.loadFromSlot("auto_f8")) {
      return;
    }
    this.newGame();
  },

  openSaveLoadModal(mode) {
    const title = document.getElementById("saveLoadModalTitle");
    title.textContent = mode === "save" ? "💾 选择槽位保存当前进度" : "📂 选择槽位读取存档";

    const slots = [
      { key: "quick",   title: "⚡ 快速存档槽 (快捷键 M / K 存档 · L 读档)" },
      { key: "slot1",   title: "📘 手动存档槽位 1" },
      { key: "slot2",   title: "📗 手动存档槽位 2" },
      { key: "auto_f8", title: "🧙‍♂️ 第8层老者自动备份槽" }
    ];

    const container = document.getElementById("saveSlotsContainer");
    container.innerHTML = slots.map((s) => {
      const raw = localStorage.getItem(`magictower_save_${s.key}`);
      let infoHtml = `<span style="color:var(--text-dim); font-size:12px;">— 空槽位 —</span>`;
      let hasData = false;
      if (raw) {
        try {
          const d = JSON.parse(raw);
          hasData = true;
          const roleName = d.player.sex === 1 ? "码农" : "女码农";
          infoHtml = `
            <div style="font-size:12px; color:#e5e7eb;">
              <strong>第 ${d.player.floor + 1} 层</strong> · ${roleName} Lv ${d.player.level + 1} · HP ${d.player.hp} · ATK ${d.player.attack} · DEF ${d.player.defend} · 💰 ${d.player.money}
            </div>
            <div style="font-size:10.5px; color:var(--text-dim); margin-top:2px;">保存时间：${d.timestamp}</div>
          `;
        } catch (e) {}
      }

      const actionBtn = mode === "save"
        ? `<button class="btn gold" onclick="Game.saveToSlot('${s.key}', '${s.title}'); Game.closeOverlay(); GameAudio.playSfx('relic'); Game.log('💾 已保存至【${s.title}】');">💾 写入存档</button>`
        : `<button class="btn gold" ${hasData ? "" : "disabled"} onclick="Game.loadFromSlot('${s.key}')">📂 读取此档</button>`;

      return `
        <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12); border-radius:10px; padding:10px 14px; display:flex; align-items:center; justify-content:space-between;">
          <div>
            <div style="font-weight:700; color:var(--gold-bright); font-size:13px; margin-bottom:3px;">${s.title}</div>
            ${infoHtml}
          </div>
          ${actionBtn}
        </div>
      `;
    }).join("");

    this.setStatus("saveload");
  },

  // ==========================================================================
  // Cheat System
  // ==========================================================================
  toggleCheatModal() {
    if (this.status === "cheat") {
      this.closeOverlay();
    } else if (this.status === "main") {
      this.setStatus("cheat");
    }
  },

  buildFloorJumpButtons() {
    const wrap = document.getElementById("floorJumpBtns");
    if (!wrap) return;
    let html = "";
    for (let i = 0; i < 10; i++) {
      html += `<button class="btn" style="padding:3px 8px;" onclick="Game.jumpToFloor(${i})">${i + 1}F</button>`;
    }
    wrap.innerHTML = html;
  },

  jumpToFloor(fIdx) {
    this.player.floor = fIdx;
    GameAudio.playSfx("stairs");
    this.initAmbientParticles();
    GameAudio.updateBgmForState(this.status, this.player.floor);
    this.updateSidebarUI();
    this.log(`⚡ 金手指传送：直达【魔塔第 ${fIdx + 1} 层】！`);
  },

  cheat(type) {
    switch (type) {
      case "hp":
        this.player.hp += 100;
        GameAudio.playSfx("potion");
        this.spawnFloatText(this.player.posx, this.player.posy, "⚡ Cheat: HP +100", "#4ade80");
        this.log("⚡ 金手指生效：生命值 HP + 100！");
        break;
      case "atk":
        this.player.attack += 3;
        GameAudio.playSfx("gem");
        this.spawnFloatText(this.player.posx, this.player.posy, "⚡ Cheat: ATK +3", "#f87171");
        this.log("⚡ 金手指生效：攻击力 Attack + 3！");
        break;
      case "def":
        this.player.defend += 2;
        GameAudio.playSfx("gem");
        this.spawnFloatText(this.player.posx, this.player.posy, "⚡ Cheat: DEF +2", "#60a5fa");
        this.log("⚡ 金手指生效：防御力 Defend + 2！");
        break;
      case "money":
        this.player.money += 50;
        GameAudio.playSfx("shop");
        this.spawnFloatText(this.player.posx, this.player.posy, "⚡ Cheat: Money +50", "#facc15");
        this.log("⚡ 金手指生效：金币 Money + 50！");
        break;
      case "level":
        this.player.level += 1;
        this.player.hp += 10;
        this.player.attack += 1;
        this.player.defend += 1;
        this.player.need = Math.floor(this.player.need * 1.5) + 1;
        GameAudio.playSfx("levelup");
        this.spawnFloatText(this.player.posx, this.player.posy, "⚡ Cheat: Level +1", "#ffe484");
        this.log("⚡ 金手指生效：等级提升 Level + 1 (HP+10, ATK+1, DEF+1)！");
        break;
      case "yellow":
        this.keys.yellow += 1;
        GameAudio.playSfx("key");
        this.log("⚡ 金手指生效：黄钥匙 + 1！");
        break;
      case "blue":
        this.keys.blue += 1;
        GameAudio.playSfx("key");
        this.log("⚡ 金手指生效：蓝钥匙 + 1！");
        break;
      case "red":
        this.keys.red += 1;
        GameAudio.playSfx("key");
        this.log("⚡ 金手指生效：红钥匙 + 1！");
        break;
      case "book":
        this.tools.book = 1 - this.tools.book;
        GameAudio.playSfx("relic");
        this.log(`⚡ 金手指生效：怪物图鉴 ${this.tools.book ? "已开启" : "已移除"}！`);
        break;
      case "sword":
        this.tools.sword = 1 - this.tools.sword;
        this.player.attack += this.tools.sword ? 10 : -10;
        GameAudio.playSfx("relic");
        this.log(`⚡ 金手指生效：勇者圣剑 ${this.tools.sword ? "已装备 (ATK+10)" : "已卸下 (ATK-10)"}！`);
        break;
      case "shield":
        this.tools.shield = 1 - this.tools.shield;
        this.player.defend += this.tools.shield ? 8 : -8;
        GameAudio.playSfx("relic");
        this.log(`⚡ 金手指生效：勇者圣盾 ${this.tools.shield ? "已装备 (DEF+8)" : "已卸下 (DEF-8)"}！`);
        break;
      case "god":
        this.mode = -this.mode;
        GameAudio.playSfx("levelup");
        this.log(`🔥 金手指生效：God Mode ${this.mode === -1 ? "已开启（战斗受击反而回血！）" : "已关闭"}！`);
        break;
    }
    this.updateSidebarUI();
    if (this.hoverTile) {
      this.updateInspector(this.hoverTile.x, this.hoverTile.y);
    }
  },

  // ==========================================================================
  // Diffed UI Sidebar & Book-Gated Inspector Updates (Zero Layout Thrashing)
  // ==========================================================================
  setTextIfChanged(id, val) {
    const str = String(val);
    if (this.uiCache[id] !== str) {
      this.uiCache[id] = str;
      const el = document.getElementById(id);
      if (el) el.textContent = str;
    }
  },

  updateSidebarUI() {
    const p = this.player;
    const theme = FLOOR_THEMES[p.floor] || FLOOR_THEMES[0];
    this.setTextIfChanged("uiFloorTitle", `魔塔 第 ${p.floor + 1} 层`);
    this.setTextIfChanged("uiFloorSub", theme.name);

    if (this.uiCache.godMode !== this.mode) {
      this.uiCache.godMode = this.mode;
      document.getElementById("uiGodBadge").classList.toggle("visible", this.mode === -1);
      document.getElementById("btnCheatDrawer").classList.toggle("active-toggle", this.mode === -1);
    }

    const avatarSrc = `assets/sex${p.sex}.png`;
    if (this.uiCache.avatarSrc !== avatarSrc) {
      this.uiCache.avatarSrc = avatarSrc;
      document.getElementById("uiHeroAvatar").src = avatarSrc;
    }

    this.setTextIfChanged("uiHeroName", p.sex === 1 ? "码农" : "女码农");
    this.setTextIfChanged("uiHeroLv", `Lv ${p.level + 1}`);

    const expPct = Math.round(Math.max(0, Math.min(100, (p.exp / Math.max(1, p.need)) * 100)));
    if (this.uiCache.expPct !== expPct) {
      this.uiCache.expPct = expPct;
      document.getElementById("uiExpBar").style.width = `${expPct}%`;
    }
    this.setTextIfChanged("uiExpCur", `EXP: ${p.exp}`);
    this.setTextIfChanged("uiExpNeed", `距升级: ${Math.max(0, p.need - p.exp)}`);

    this.setTextIfChanged("uiHp", p.hp);
    this.setTextIfChanged("uiAtk", p.attack);
    this.setTextIfChanged("uiDef", p.defend);
    this.setTextIfChanged("uiMoney", p.money);
    this.setTextIfChanged("uiCrit", `${100 - p.crit}%`);
    this.setTextIfChanged("uiMiss", `${p.miss}%`);

    this.setTextIfChanged("uiKeyYellow", this.keys.yellow);
    this.setTextIfChanged("uiKeyBlue", this.keys.blue);
    this.setTextIfChanged("uiKeyRed", this.keys.red);

    if (this.uiCache.book !== this.tools.book) {
      this.uiCache.book = this.tools.book;
      document.getElementById("slotBook").classList.toggle("owned", !!this.tools.book);
      this.setTextIfChanged("uiInspectorHint", this.tools.book ? "✅ 图鉴已激活" : "🔒 需图鉴看怪属性");
    }
    if (this.uiCache.sword !== this.tools.sword) {
      this.uiCache.sword = this.tools.sword;
      document.getElementById("slotSword").classList.toggle("owned", !!this.tools.sword);
    }
    if (this.uiCache.shield !== this.tools.shield) {
      this.uiCache.shield = this.tools.shield;
      document.getElementById("slotShield").classList.toggle("owned", !!this.tools.shield);
    }
  },

  updateInspector(gx, gy) {
    if (gx < 0 || gx >= 14 || gy < 0 || gy >= 14) return;
    const f = this.player.floor;
    const id = this.map[gx][gy][f];
    const isHeroTile = (gx === this.player.posx && gy === this.player.posy);

    const cacheKey = `${f}:${gx}:${gy}:${id}:${isHeroTile}:${this.tools.book}:${this.player.hp}:${this.player.attack}:${this.player.defend}:${this.mode}`;
    if (this.lastInspectorKey === cacheKey) return;
    this.lastInspectorKey = cacheKey;

    const box = document.getElementById("uiInspector");

    if (isHeroTile) {
      box.innerHTML = `
        <div class="inspector-header">
          <div class="inspector-icon"><img class="pixel-img" src="assets/sex${this.player.sex}.png" /></div>
          <div>
            <div class="inspector-title">${this.player.sex === 1 ? "码农 (少年)" : "女码农 (少女)"}</div>
            <div class="inspector-type">当前英雄坐标 (${gx}, ${gy})</div>
          </div>
        </div>
        <div style="font-size:12px; color:#d1d5db; line-height:1.45;">
          你的使命是突破 10 层魔塔并击败顶层的大魔王，救出公主！
        </div>
      `;
      return;
    }

    // Monsters 11..23: Gated behind Monster Book (`this.tools.book`)!
    if (id >= 11 && id <= 23) {
      const m = this.monsters[id];
      if (!this.tools.book) {
        box.innerHTML = `
          <div class="inspector-header">
            <div class="inspector-icon"><img class="pixel-img" src="assets/${id}.png" /></div>
            <div>
              <div class="inspector-title">${m.name}</div>
              <div class="inspector-type">魔塔怪物 · 坐标 (${gx}, ${gy})</div>
            </div>
          </div>
          <div style="font-size:12px; color:#9ca3af; line-height:1.45;">
            🔒 尚未获得【怪物图鉴】，无法探测该怪物的具体生命、攻防数值与预计战损。
          </div>
          <div class="inspector-dmg-banner" style="background:rgba(255,255,255,0.06); color:#fde047; border:1px solid rgba(250,204,21,0.3);">
            💡 请先拾取第 1 层左下角的绿皮【怪物图鉴】
          </div>
        `;
        return;
      }

      const expDmg = this.getExpectedDamage(id);
      const dmgPerHit = Math.max(1, this.player.attack - m.defend);
      const monDmgPerHit = Math.max(1, m.attack - this.player.defend);
      let bannerStyle = "background:rgba(34,197,94,0.2); color:#4ade80; border:1px solid rgba(34,197,94,0.45);";
      let statusText = `预计战损: ${expDmg} HP (可安全击败)`;
      if (expDmg >= this.player.hp && this.mode !== -1) {
        bannerStyle = "background:rgba(239,68,68,0.25); color:#fca5a5; border:1px solid #ef4444;";
        statusText = `⚠️ 危险! 预计战损 ${expDmg} HP 超过当前生命`;
      } else if (this.mode === -1) {
        bannerStyle = "background:rgba(251,146,60,0.25); color:#fed7aa; border:1px solid #fb923c;";
        statusText = `⚡ GodMode 预计反回血: +${expDmg} HP`;
      }
      box.innerHTML = `
        <div class="inspector-header">
          <div class="inspector-icon"><img class="pixel-img" src="assets/${id}.png" /></div>
          <div>
            <div class="inspector-title">${m.name}</div>
            <div class="inspector-type">魔塔怪物 · 坐标 (${gx}, ${gy})</div>
          </div>
        </div>
        <div class="inspector-grid">
          <span style="color:#4ade80;">生命: ${m.hp}</span>
          <span style="color:#facc15;">金币/经验: ${m.money}/${m.exp}</span>
          <span style="color:#f87171;">攻击: ${m.attack} (伤你${monDmgPerHit})</span>
          <span style="color:#60a5fa;">防御: ${m.defend} (受${dmgPerHit})</span>
          <span style="color:#2dd4bf;">闪避: ${m.miss}%</span>
          <span style="color:#c084fc;">暴击: ${100 - m.crit}%</span>
        </div>
        <div class="inspector-dmg-banner" style="${bannerStyle}">${statusText}</div>
      `;
      return;
    }

    if (TILE_INFO[id]) {
      const info = TILE_INFO[id];
      const iconId = info.icon || id;
      box.innerHTML = `
        <div class="inspector-header">
          <div class="inspector-icon"><img class="pixel-img" src="assets/${iconId}.png" /></div>
          <div>
            <div class="inspector-title">${info.name}</div>
            <div class="inspector-type">${info.type} · 坐标 (${gx}, ${gy})</div>
          </div>
        </div>
        <div style="font-size:12px; color:#d1d5db; line-height:1.45;">
          ${info.desc}
        </div>
      `;
    }
  },

  log(msg) {
    const t = new Date().toTimeString().slice(0, 8);
    this.logQueue.push({ t, msg });
    if (!this.logFlushScheduled) {
      this.logFlushScheduled = true;
      requestAnimationFrame(() => this.flushLogs());
    }
  },

  flushLogs() {
    this.logFlushScheduled = false;
    if (this.logQueue.length === 0) return;
    const box = document.getElementById("uiLogBox");
    if (!box) {
      this.logQueue.length = 0;
      return;
    }
    const frag = document.createDocumentFragment();
    for (let i = this.logQueue.length - 1; i >= 0; i--) {
      const item = this.logQueue[i];
      const div = document.createElement("div");
      div.className = "log-entry";
      const timeSpan = document.createElement("span");
      timeSpan.className = "time";
      timeSpan.textContent = `[${item.t}]`;
      div.appendChild(timeSpan);
      div.appendChild(document.createTextNode(item.msg));
      frag.appendChild(div);
    }
    this.logQueue.length = 0;
    box.prepend(frag);
    while (box.children.length > 30) {
      box.removeChild(box.lastChild);
    }
  },

  // ==========================================================================
  // Particles, Floating Text & 60FPS Canvas Render Loop
  // ==========================================================================
  initAmbientParticles() {
    this.ambientParticles = [];
    const f = this.player.floor;
    const count = (f === 5 || f === 6 || f === 9) ? 24 : 12;
    for (let i = 0; i < count; i++) {
      this.ambientParticles.push({
        x: Math.random() * 560,
        y: Math.random() * 560,
        vx: (Math.random() - 0.5) * 14,
        vy: f === 5 ? -(15 + Math.random() * 25) : (f === 6 ? (12 + Math.random() * 18) : (Math.random() - 0.5) * 10),
        size: 1.5 + Math.random() * 2.2,
        alpha: 0.25 + Math.random() * 0.5,
        color: f === 5 ? "#fb923c" : (f === 6 ? "#bae6fd" : (f === 9 ? "#f43f5e" : "#fde047"))
      });
    }
  },

  spawnFloatText(gx, gy, text, color) {
    // Cap floating texts to 12 so rapid item pickups never pile up
    if (this.floatingTexts.length >= 12) {
      this.floatingTexts.shift();
    }
    this.floatingTexts.push({
      x: (gx + 0.5) * 40,
      y: gy * 40 + 10,
      text,
      color: color || "#fff",
      life: 0.9,
      maxLife: 0.9
    });
  },

  spawnBurst(gx, gy, color, count = 8) {
    const cx = (gx + 0.5) * 40;
    const cy = (gy + 0.5) * 40;
    for (let i = 0; i < count; i++) {
      if (this.particles.length >= 64) {
        // Overwrite oldest particle in O(1)
        this.particles[i % 64] = {
          x: cx,
          y: cy,
          vx: (Math.random() - 0.5) * 110,
          vy: (Math.random() - 0.5) * 110,
          size: 2.5 + Math.random() * 2.5,
          color,
          life: 0.38 + Math.random() * 0.2,
          maxLife: 0.58
        };
      } else {
        const ang = Math.random() * Math.PI * 2;
        const spd = 25 + Math.random() * 65;
        this.particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd,
          size: 2.5 + Math.random() * 2.5,
          color,
          life: 0.38 + Math.random() * 0.2,
          maxLife: 0.58
        });
      }
    }
  },

  renderLoop(timestamp) {
    const dt = Math.min(0.033, Math.max(0.005, (timestamp - this.lastFrameTime) * 0.001));
    this.lastFrameTime = timestamp;
    const t = timestamp * 0.001;
    const ctx = this.ctx;
    const TILE = 40;

    ctx.save();
    if (this.screenShake > 0.2) {
      const sx = (Math.random() - 0.5) * this.screenShake;
      const sy = (Math.random() - 0.5) * this.screenShake;
      ctx.translate(sx, sy);
      this.screenShake *= 0.84;
    }

    // 1. Draw cached 14x14 floor in ONE single drawImage call
    if (!this.floorCacheReady) {
      this.buildFloorCache();
    }
    if (this.floorCacheReady) {
      ctx.drawImage(this.floorCacheCanvas, 0, 0);
    } else {
      ctx.fillStyle = "#1f2937";
      ctx.fillRect(0, 0, 560, 560);
    }

    const f = this.player.floor;

    // 2. Draw Map Objects
    for (let x = 0; x < 14; x++) {
      const col = this.map[x];
      const px = x * TILE;
      for (let y = 0; y < 14; y++) {
        const id = col[y][f];
        if (id === 0) continue;

        const img = this.images[String(id)];
        if (!img || !img.complete) continue;

        const py = y * TILE;

        // Monsters (11..26)
        if (id >= 11 && id <= 26) {
          const bob = Math.sin(t * 4.2 + x * 0.7 + y * 1.1) * 2.0;
          ctx.fillStyle = "rgba(0, 0, 0, 0.42)";
          ctx.fillRect(px + 9, py + TILE - 6, 22, 4);
          ctx.drawImage(img, px + 2, py + bob, TILE - 4, TILE - 4);
        }
        // Collectible Items (6..8 Keys, 28..35 Potions/Gems/Relics)
        else if ((id >= 6 && id <= 8) || (id >= 28 && id <= 35)) {
          const floatY = Math.sin(t * 3.6 + x + y) * 2.5;
          if (id === 31 || id === 33 || id === 35 || id === 99) {
            ctx.drawImage(this.glowSprites.goldHalo, px - 2, py - 2);
          }
          ctx.drawImage(img, px + 3, py + 3 + floatY, TILE - 6, TILE - 6);
        }
        // Princess (99) & NPCs (10, 27)
        else if (id === 99 || id === 10 || id === 27) {
          const bob = Math.sin(t * 3 + x) * 1.5;
          if (id === 99) {
            ctx.drawImage(this.glowSprites.goldHalo, px - 2, py - 2);
          }
          ctx.drawImage(img, px + 2, py + bob, TILE - 4, TILE - 4);
        }
        // Standard Walls, Doors, Shop, Stairs, Lava, Ice
        else {
          ctx.drawImage(img, px, py, TILE, TILE);
        }
      }
    }

    // 3. Smooth Player Interpolation & Pre-Cached Torchlight Sprite
    this.player.renderX += (this.player.posx - this.player.renderX) * 0.38;
    this.player.renderY += (this.player.posy - this.player.renderY) * 0.38;
    if (this.player.stepAnim > 0) {
      this.player.stepAnim = Math.max(0, this.player.stepAnim - 0.14);
    }

    const heroSpriteKey = `1${this.player.sex}${this.player.toward}`;
    const heroImg = this.images[heroSpriteKey];
    const hx = this.player.renderX * TILE;
    const hy = this.player.renderY * TILE;
    const hopY = -Math.sin(this.player.stepAnim * Math.PI) * 4.5;

    // Fast pre-rendered torchlight blit
    const torchSprite = this.mode === -1 ? this.glowSprites.torchGod : this.glowSprites.torchNormal;
    ctx.drawImage(torchSprite, hx + 20 - 80, hy + 20 - 80);

    // Player shadow
    ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
    ctx.fillRect(hx + 9, hy + 34, 22, 4);

    if (heroImg && heroImg.complete) {
      ctx.drawImage(heroImg, hx + 2, hy + 1 + hopY, TILE - 4, TILE - 4);
    }

    // 4. Hover Tile Highlight
    if (this.hoverTile && this.status === "main") {
      ctx.strokeStyle = "rgba(255, 228, 132, 0.75)";
      ctx.lineWidth = 2;
      ctx.strokeRect(this.hoverTile.x * TILE + 1, this.hoverTile.y * TILE + 1, TILE - 2, TILE - 2);
    }

    // 5. Ambient Floor Particles
    const theme = FLOOR_THEMES[f] || FLOOR_THEMES[0];
    ctx.fillStyle = theme.ambient;
    ctx.fillRect(0, 0, 560, 560);

    for (let i = 0; i < this.ambientParticles.length; i++) {
      const ap = this.ambientParticles[i];
      ap.x += ap.vx * dt;
      ap.y += ap.vy * dt;
      if (ap.x < 0) ap.x = 560;
      else if (ap.x > 560) ap.x = 0;
      if (ap.y < 0) ap.y = 560;
      else if (ap.y > 560) ap.y = 0;
      ctx.globalAlpha = ap.alpha;
      ctx.fillStyle = ap.color;
      ctx.fillRect(ap.x, ap.y, ap.size, ap.size);
    }
    ctx.globalAlpha = 1;

    // 6. Burst Particles (O(1) swap-and-pop removal)
    let pLen = this.particles.length;
    for (let i = pLen - 1; i >= 0; i--) {
      const pt = this.particles[i];
      pt.x += pt.vx * dt;
      pt.y += pt.vy * dt;
      pt.life -= dt;
      if (pt.life <= 0) {
        this.particles[i] = this.particles[pLen - 1];
        this.particles.pop();
        pLen--;
        continue;
      }
      ctx.globalAlpha = pt.life / pt.maxLife;
      ctx.fillStyle = pt.color;
      ctx.fillRect(pt.x, pt.y, pt.size, pt.size);
    }
    ctx.globalAlpha = 1;

    // 7. Floating Combat / Pickup Texts
    if (this.floatingTexts.length > 0) {
      ctx.font = "bold 13px -apple-system, 'PingFang SC', sans-serif";
      ctx.textAlign = "center";
      for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
        const ft = this.floatingTexts[i];
        ft.y -= 26 * dt;
        ft.life -= dt;
        if (ft.life <= 0) {
          this.floatingTexts.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = ft.life / ft.maxLife;
        ctx.fillStyle = "#000";
        ctx.fillText(ft.text, ft.x + 1, ft.y + 1);
        ctx.fillStyle = ft.color;
        ctx.fillText(ft.text, ft.x, ft.y);
      }
      ctx.globalAlpha = 1;
    }

    ctx.restore();
    requestAnimationFrame((ts) => this.renderLoop(ts));
  },

  // ==========================================================================
  // Keyboard & Mouse Input Bindings
  // ==========================================================================
  bindEvents() {
    window.addEventListener("keydown", (e) => {
      GameAudio.ensureContext();
      const key = e.key;

      if (this.status === "welcome") {
        if (key === "1" || key === "Enter") this.newGame();
        else if (key === "2") this.quickLoadFromWelcome();
        return;
      }

      if (this.status === "select") {
        if (key === "1") this.selectRole(1);
        else if (key === "2") this.selectRole(0);
        else if (key === "Escape") this.showWelcome();
        return;
      }

      if (this.status === "fight") {
        e.preventDefault();
        if (e.repeat) return;
        if (
          this.activeFightState &&
          !this.activeFightState.finished &&
          performance.now() - this.activeFightState.startedAt < 250
        ) {
          return;
        }
        this.finishFightOverlay();
        return;
      }

      if (this.status === "shop") {
        if (["1", "2", "3", "4", "5", "6"].includes(key)) {
          this.buyShop(parseInt(key, 10));
        } else if (key.toLowerCase() === "q" || key === "Escape") {
          this.closeOverlay();
        }
        return;
      }

      if (this.status === "book" || this.status === "tip" || this.status === "help" || this.status === "saveload" || this.status === "cheat") {
        e.preventDefault();
        this.closeOverlay();
        return;
      }

      if (this.status === "main") {
        switch (key) {
          case "ArrowUp":
          case "w":
          case "W":
            e.preventDefault();
            this.step(0, -1, 1);
            break;
          case "ArrowLeft":
          case "a":
          case "A":
            e.preventDefault();
            this.step(-1, 0, 2);
            break;
          case "ArrowDown":
          case "s":
          case "S":
            e.preventDefault();
            this.step(0, 1, 3);
            break;
          case "ArrowRight":
          case "d":
          case "D":
            e.preventDefault();
            this.step(1, 0, 4);
            break;
          case "b":
          case "B":
            this.toggleBook();
            break;
          case "k":
          case "K":
          case "m":
          case "M":
            e.preventDefault();
            this.quickSave();
            break;
          case "l":
          case "L":
            this.quickLoad();
            break;
          case "h":
          case "H":
            this.toggleHelp();
            break;
          case "c":
          case "C":
            this.toggleCheatModal();
            break;
          case "n":
          case "N":
            this.newGame();
            break;
          default:
            break;
        }
      }
    });

    this.canvas.addEventListener("mousemove", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const gx = Math.floor(((e.clientX - rect.left) / rect.width) * 14);
      const gy = Math.floor(((e.clientY - rect.top) / rect.height) * 14);
      if (gx >= 0 && gx < 14 && gy >= 0 && gy < 14) {
        if (!this.hoverTile || this.hoverTile.x !== gx || this.hoverTile.y !== gy) {
          this.hoverTile = { x: gx, y: gy };
          this.updateInspector(gx, gy);
        }
      }
    });

    this.canvas.addEventListener("mouseleave", () => {
      this.hoverTile = null;
    });

    this.canvas.addEventListener("click", (e) => {
      GameAudio.ensureContext();
      if (this.status !== "main") return;
      const rect = this.canvas.getBoundingClientRect();
      const gx = Math.floor(((e.clientX - rect.left) / rect.width) * 14);
      const gy = Math.floor(((e.clientY - rect.top) / rect.height) * 14);
      const dx = gx - this.player.posx;
      const dy = gy - this.player.posy;
      if (Math.abs(dx) + Math.abs(dy) === 1) {
        const toward = dy === -1 ? 1 : (dx === -1 ? 2 : (dy === 1 ? 3 : 4));
        this.step(dx, dy, toward);
      }
    });
  }
};

window.addEventListener("DOMContentLoaded", () => {
  Game.init();
});
