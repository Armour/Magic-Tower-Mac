import Cocoa
import WebKit

class AppDelegate: NSObject, NSApplicationDelegate, WKScriptMessageHandler {
    var window: NSWindow!
    var webView: WKWebView!

    func applicationDidFinishLaunching(_ notification: Notification) {
        // 1. Set Custom App Icon in Dock & Application Switcher
        if let iconPath = Bundle.main.path(forResource: "AppIcon", ofType: "icns"),
           let iconImage = NSImage(contentsOfFile: iconPath) {
            NSApplication.shared.applicationIconImage = iconImage
        } else if let pngPath = Bundle.main.path(forResource: "AppIcon", ofType: "png"),
                  let pngImage = NSImage(contentsOfFile: pngPath) {
            NSApplication.shared.applicationIconImage = pngImage
        }

        // 2. Build Native macOS Menu Bar
        setupMenus()

        // 3. Create Main Window
        let windowRect = NSRect(x: 0, y: 0, width: 1100, height: 650)
        window = NSWindow(
            contentRect: windowRect,
            styleMask: [.titled, .closable, .miniaturizable, .resizable],
            backing: .buffered,
            defer: false
        )
        window.title = "魔塔 · Magic Tower"
        window.minSize = NSSize(width: 1060, height: 640)
        window.backgroundColor = NSColor(calibratedRed: 0.05, green: 0.06, blue: 0.09, alpha: 1.0)
        window.titlebarAppearsTransparent = false
        window.center()

        // 4. Configure WKWebView with Audio & Local File Access
        let config = WKWebViewConfiguration()
        config.mediaTypesRequiringUserActionForPlayback = []
        config.preferences.setValue(true, forKey: "allowFileAccessFromFileURLs")
        config.userContentController.add(self, name: "nativeSave")

        webView = WKWebView(frame: window.contentView!.bounds, configuration: config)
        webView.autoresizingMask = [.width, .height]
        webView.setValue(false, forKey: "drawsBackground")
        window.contentView?.addSubview(webView)

        if let indexURL = Bundle.main.url(forResource: "index", withExtension: "html") {
            let resDir = indexURL.deletingLastPathComponent()
            webView.loadFileURL(indexURL, allowingReadAccessTo: resDir)
        }

        window.makeKeyAndOrderFront(nil)
        NSApplication.shared.activate(ignoringOtherApps: true)
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool {
        return true
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if message.name == "nativeSave",
           let body = message.body as? [String: Any] {
            let fm = FileManager.default
            if let appSupport = fm.urls(for: .applicationSupportDirectory, in: .userDomainMask).first {
                let dir = appSupport.appendingPathComponent("MagicTower", isDirectory: true)
                try? fm.createDirectory(at: dir, withIntermediateDirectories: true)
                let fileURL = dir.appendingPathComponent("latest_save.json")
                if let jsonData = try? JSONSerialization.data(withJSONObject: body, options: [.prettyPrinted]) {
                    try? jsonData.write(to: fileURL)
                }
            }
        }
    }

    func evalJS(_ js: String) {
        webView?.evaluateJavaScript(js, completionHandler: nil)
    }

    // Menu Actions
    @objc func actionNewGame() { evalJS("Game.newGame();") }
    @objc func actionSaveGame() { evalJS("Game.quickSave();") }
    @objc func actionLoadGame() { evalJS("Game.quickLoad();") }
    @objc func actionOpenSaveModal() { evalJS("Game.openSaveLoadModal('save');") }
    @objc func actionOpenLoadModal() { evalJS("Game.openSaveLoadModal('load');") }
    @objc func actionBook() { evalJS("Game.toggleBook();") }
    @objc func actionHelp() { evalJS("Game.toggleHelp();") }
    @objc func actionMute() { evalJS("GameAudio.toggleMute();") }

    // Cheat Actions (Matching MainWindow::CreateMenus in mainwindow.cpp)
    @objc func cheatHp() { evalJS("Game.cheat('hp');") }
    @objc func cheatAtk() { evalJS("Game.cheat('atk');") }
    @objc func cheatDef() { evalJS("Game.cheat('def');") }
    @objc func cheatMoney() { evalJS("Game.cheat('money');") }
    @objc func cheatLevel() { evalJS("Game.cheat('level');") }
    @objc func cheatYellow() { evalJS("Game.cheat('yellow');") }
    @objc func cheatBlue() { evalJS("Game.cheat('blue');") }
    @objc func cheatRed() { evalJS("Game.cheat('red');") }
    @objc func cheatBook() { evalJS("Game.cheat('book');") }
    @objc func cheatSword() { evalJS("Game.cheat('sword');") }
    @objc func cheatShield() { evalJS("Game.cheat('shield');") }
    @objc func cheatGodMode() { evalJS("Game.cheat('god');") }

    func setupMenus() {
        let mainMenu = NSMenu()

        // 1. App Menu
        let appMenuItem = NSMenuItem()
        mainMenu.addItem(appMenuItem)
        let appMenu = NSMenu()
        appMenu.addItem(withTitle: "About Magic Tower 魔塔", action: #selector(NSApplication.orderFrontStandardAboutPanel(_:)), keyEquivalent: "")
        appMenu.addItem(NSMenuItem.separator())
        appMenu.addItem(withTitle: "Quit Magic Tower", action: #selector(NSApplication.terminate(_:)), keyEquivalent: "q")
        appMenuItem.submenu = appMenu

        // 2. Game "Menu"
        let fileMenuItem = NSMenuItem()
        mainMenu.addItem(fileMenuItem)
        let fileMenu = NSMenu(title: "Menu")
        fileMenu.addItem(withTitle: "New Game (新游戏)", action: #selector(actionNewGame), keyEquivalent: "n")
        fileMenu.addItem(withTitle: "Quick Save (快速存档)", action: #selector(actionSaveGame), keyEquivalent: "k")
        fileMenu.addItem(withTitle: "Quick Load (快速读档)", action: #selector(actionLoadGame), keyEquivalent: "l")
        fileMenu.addItem(NSMenuItem.separator())
        fileMenu.addItem(withTitle: "Save Slots... (多槽位存档)", action: #selector(actionOpenSaveModal), keyEquivalent: "K")
        fileMenu.addItem(withTitle: "Load Slots... (多槽位读档)", action: #selector(actionOpenLoadModal), keyEquivalent: "L")
        fileMenu.addItem(NSMenuItem.separator())
        fileMenu.addItem(withTitle: "Monster Book (怪物图鉴)", action: #selector(actionBook), keyEquivalent: "b")
        fileMenu.addItem(withTitle: "Game Help (游戏帮助)", action: #selector(actionHelp), keyEquivalent: "h")
        fileMenu.addItem(withTitle: "Mute / Unmute Audio (静音切换)", action: #selector(actionMute), keyEquivalent: "m")
        fileMenuItem.submenu = fileMenu

        // 3. "Cheat!" Menu
        let cheatMenuItem = NSMenuItem()
        mainMenu.addItem(cheatMenuItem)
        let cheatMenu = NSMenu(title: "Cheat!")
        cheatMenu.addItem(withTitle: "HP+100", action: #selector(cheatHp), keyEquivalent: "1")
        cheatMenu.addItem(withTitle: "Attack+3", action: #selector(cheatAtk), keyEquivalent: "2")
        cheatMenu.addItem(withTitle: "Defend+2", action: #selector(cheatDef), keyEquivalent: "3")
        cheatMenu.addItem(withTitle: "Money+50", action: #selector(cheatMoney), keyEquivalent: "4")
        cheatMenu.addItem(withTitle: "Level+1", action: #selector(cheatLevel), keyEquivalent: "5")
        cheatMenu.addItem(NSMenuItem.separator())
        cheatMenu.addItem(withTitle: "YellowKey+1", action: #selector(cheatYellow), keyEquivalent: "6")
        cheatMenu.addItem(withTitle: "BlueKey+1", action: #selector(cheatBlue), keyEquivalent: "7")
        cheatMenu.addItem(withTitle: "RedKey+1", action: #selector(cheatRed), keyEquivalent: "8")
        cheatMenu.addItem(NSMenuItem.separator())
        cheatMenu.addItem(withTitle: "Book (怪物图鉴)", action: #selector(cheatBook), keyEquivalent: "")
        cheatMenu.addItem(withTitle: "Sword (勇者圣剑)", action: #selector(cheatSword), keyEquivalent: "")
        cheatMenu.addItem(withTitle: "Shield (勇者圣盾)", action: #selector(cheatShield), keyEquivalent: "")
        cheatMenu.addItem(NSMenuItem.separator())
        cheatMenu.addItem(withTitle: "GodMode (无敌回血模式)", action: #selector(cheatGodMode), keyEquivalent: "g")
        cheatMenuItem.submenu = cheatMenu

        NSApplication.shared.mainMenu = mainMenu
    }
}

let app = NSApplication.shared
let delegate = AppDelegate()
app.delegate = delegate
app.setActivationPolicy(.regular)
app.run()
