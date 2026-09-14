
<!DOCTYPE html>
<html>
    <head>
        <title>{{ config('app.name', 'Pterodactyl') }}</title>

        @section('meta')
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
            <meta name="csrf-token" content="{{ csrf_token() }}">
            <meta name="robots" content="noindex">
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
            <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32">
            <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16">
            <link rel="manifest" href="/favicons/manifest.json">
            <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#bc6e3c">
            <link rel="shortcut icon" href="/favicons/favicon.ico">
            <meta name="msapplication-config" content="/favicons/browserconfig.xml">
            <meta name="theme-color" content="#0e4688">
        @show

        @section('user-data')
            @if(!is_null(Auth::user()))
                <script>
                    window.PterodactylUser = {!! json_encode(Auth::user()->toVueObject()) !!};
                </script>
            @endif
            @if(!empty($siteConfiguration))
                <script>
                    window.SiteConfiguration = {!! json_encode($siteConfiguration) !!};
                </script>
            @endif
        @show
        <link rel="stylesheet" href="/custom_theme.css">
        @yield('assets')

        @include('layouts.scripts')
    </head>
    <body class="{{ $css['body'] ?? 'bg-neutral-50' }}">
        @section('content')
            @yield('above-container')
            @yield('container')
            @yield('below-container')
        @show
        @section('scripts')
            {!! $asset->js('main.js') !!}
        @show
    </body>
</html>

<!DOCTYPE html>
<html lang="en" data-theme="dracula">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DB Gaming Panel - Ultimate Edition</title>

<!-- Modern Gaming & Techno Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Plus+Jakarta+Sans:wght@400;600;800&family=JetBrains+Mono:wght@400;700&family=VT323&display=swap" rel="stylesheet">

<style>
/* ========================================================
   1. DYNAMIC COLOR ENGINE & 20+ PREMIUM PRESETS
   ======================================================== */
:root {
    --primary: #ff79c6;
    --secondary: #bd93f9;
    --accent: #50fa7b;
    --bg-overlay: rgba(6, 9, 17, 0.85);
    --glass-bg: rgba(18, 22, 36, 0.65);
    --glass-border: rgba(255, 255, 255, 0.1);
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --glow: rgba(255, 121, 198, 0.65);
    --glow-subtle: rgba(255, 121, 198, 0.25);
    --bg-image: url('https://images.wallpapersden.com/image/wl-cristiano-ronaldo-soccer-icon_92705.jpg');
}

/* 20+ Premium Theme Presets */
[data-theme="dracula"]          { --primary: #ff79c6; --secondary: #bd93f9; --accent: #50fa7b; --glow: rgba(255, 121, 198, 0.65); --glow-subtle: rgba(255, 121, 198, 0.25); }
[data-theme="cyber-neon"]       { --primary: #00ff88; --secondary: #00f2fe; --accent: #7f00ff; --glow: rgba(0, 255, 136, 0.65); --glow-subtle: rgba(0, 255, 136, 0.25); }
[data-theme="electric-cyan"]    { --primary: #00f2fe; --secondary: #3b82f6; --accent: #1d4ed8; --glow: rgba(0, 242, 254, 0.65); --glow-subtle: rgba(0, 242, 254, 0.25); }
[data-theme="crimson-red"]      { --primary: #ff0055; --secondary: #ff5050; --accent: #990033; --glow: rgba(255, 0, 85, 0.65); --glow-subtle: rgba(255, 0, 85, 0.25); }
[data-theme="emerald-mine"]     { --primary: #10b981; --secondary: #34d399; --accent: #047857; --glow: rgba(16, 185, 129, 0.65); --glow-subtle: rgba(16, 185, 129, 0.25); }
[data-theme="amber-gold"]       { --primary: #f59e0b; --secondary: #fbbf24; --accent: #b45309; --glow: rgba(245, 158, 11, 0.65); --glow-subtle: rgba(245, 158, 11, 0.25); }
[data-theme="deep-purple"]      { --primary: #a855f7; --secondary: #c084fc; --accent: #6366f1; --glow: rgba(168, 85, 247, 0.65); --glow-subtle: rgba(168, 85, 247, 0.25); }
[data-theme="sunset-orange"]    { --primary: #ff5e36; --secondary: #ffa200; --accent: #ff0055; --glow: rgba(255, 94, 54, 0.65); --glow-subtle: rgba(255, 94, 54, 0.25); }
[data-theme="tokyo-night"]      { --primary: #f7768e; --secondary: #7aa2f7; --accent: #bb9af7; --glow: rgba(247, 118, 142, 0.65); --glow-subtle: rgba(247, 118, 142, 0.25); }
[data-theme="matrix-green"]     { --primary: #00ff41; --secondary: #008f11; --accent: #003b00; --glow: rgba(0, 255, 65, 0.65); --glow-subtle: rgba(0, 255, 65, 0.25); }
[data-theme="ocean-blue"]       { --primary: #00b4d8; --secondary: #90e0ef; --accent: #0077b6; --glow: rgba(0, 180, 216, 0.65); --glow-subtle: rgba(0, 180, 216, 0.25); }
[data-theme="synthwave-80s"]    { --primary: #ff007f; --secondary: #7928ca; --accent: #00f2fe; --glow: rgba(255, 0, 127, 0.65); --glow-subtle: rgba(255, 0, 127, 0.25); }
[data-theme="cyberpunk-2077"]   { --primary: #fcee0a; --secondary: #00f0ff; --accent: #ff0055; --glow: rgba(252, 238, 10, 0.65); --glow-subtle: rgba(252, 238, 10, 0.25); }
[data-theme="valorant-red"]     { --primary: #ff4655; --secondary: #0f1923; --accent: #ece8e1; --glow: rgba(255, 70, 85, 0.65); --glow-subtle: rgba(255, 70, 85, 0.25); }
[data-theme="nordic-frost"]     { --primary: #88c0d0; --secondary: #81a1c1; --accent: #b48ead; --glow: rgba(136, 192, 208, 0.65); --glow-subtle: rgba(136, 192, 208, 0.25); }
[data-theme="nether-flame"]     { --primary: #ff4500; --secondary: #ff8c00; --accent: #ffd700; --glow: rgba(255, 69, 0, 0.65); --glow-subtle: rgba(255, 69, 0, 0.25); }
[data-theme="end-void"]         { --primary: #d8b4fe; --secondary: #a855f7; --accent: #10b981; --glow: rgba(216, 180, 254, 0.65); --glow-subtle: rgba(216, 180, 254, 0.25); }
[data-theme="obsidian-dark"]    { --primary: #e2e8f0; --secondary: #64748b; --accent: #3b82f6; --glow: rgba(226, 232, 240, 0.55); --glow-subtle: rgba(226, 232, 240, 0.2); }
[data-theme="sakura-pink"]      { --primary: #ffb7c5; --secondary: #ff69b4; --accent: #ffffff; --glow: rgba(255, 183, 197, 0.65); --glow-subtle: rgba(255, 183, 197, 0.25); }
[data-theme="acid-slime"]       { --primary: #a3e635; --secondary: #4ade80; --accent: #0284c7; --glow: rgba(163, 230, 53, 0.65); --glow-subtle: rgba(163, 230, 53, 0.25); }
[data-theme="royal-gold"]       { --primary: #ffd700; --secondary: #dfa100; --accent: #ffffff; --glow: rgba(255, 215, 0, 0.65); --glow-subtle: rgba(255, 215, 0, 0.25); }
[data-theme="hyper-violet"]     { --primary: #d946ef; --secondary: #8b5cf6; --accent: #06b6d4; --glow: rgba(217, 70, 239, 0.65); --glow-subtle: rgba(217, 70, 239, 0.25); }

/* ========================================================
   2. GLOBAL BASE & ANIMATED GRADIENTS
   ======================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    transition: color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}

body {
    background: linear-gradient(var(--bg-overlay), var(--bg-overlay)), var(--bg-image) no-repeat center center fixed;
    background-size: cover;
    color: var(--text-main);
    min-height: 100vh;
    padding: 1.5rem 1rem;
}

::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: rgba(0,0,0,0.3); }
::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 10px; box-shadow: 0 0 10px var(--glow); }

/* Animated Gradient Lines */
@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.animated-gradient-border::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), var(--secondary), var(--accent), var(--primary));
    background-size: 300% 300%;
    animation: gradientShift 4s ease infinite;
    box-shadow: 0 0 12px var(--glow);
}

/* Dynamic Pterodactyl UI Overrides */
.nav-tab.active, nav a.active, .tab-item.active, [class*="Navigation"] a.active {
    border-bottom: 2px solid var(--primary) !important;
    color: var(--primary) !important;
    text-shadow: 0 0 12px var(--glow) !important;
}

.file-row:hover, table tbody tr:hover, [class*="FileObject"]:hover {
    background: var(--glow-subtle) !important;
    border-left: 2px solid var(--primary) !important;
    box-shadow: inset 0 0 15px var(--glow-subtle) !important;
}

/* ========================================================
   FILE MANAGER NEON GLOW CUSTOMIZATION
   ======================================================== */
/* Folder & File Icons Glow */
svg[class*="FolderIcon"], 
svg[class*="FileIcon"], 
svg.text-cyan-500, 
[class*="FileObject"] svg, 
[class*="FileManager"] svg {
    fill: var(--primary) !important;
    color: var(--primary) !important;
    filter: drop-shadow(0 0 8px var(--glow)) drop-shadow(0 0 15px var(--glow)) !important;
}

/* File & Folder Text Glow */
[class*="FileObject"] a, 
[class*="FileObject"] span, 
[class*="FileManager"] a, 
[class*="FileManager"] span, 
.file-name, 
td a {
    color: var(--primary) !important;
    text-shadow: 0 0 8px var(--glow), 0 0 16px var(--glow-subtle) !important;
}

input[type="checkbox"]:checked {
    accent-color: var(--primary) !important;
}

/* ========================================================
   CUSTOM START, RESTART, STOP BUTTON OVERRIDES
   ======================================================== */
button[data-btn="start"], button.ptero-btn-start {
    background: linear-gradient(135deg, #2563eb, #3b82f6) !important;
    color: #ffffff !important;
    border: 1px solid #60a5fa !important;
    box-shadow: 0 0 12px rgba(59, 130, 246, 0.5), inset 0 0 8px rgba(255, 255, 255, 0.2) !important;
    border-radius: 8px !important;
    font-weight: 800 !important;
    text-transform: uppercase !important;
    transition: all 0.25s ease-in-out !important;
}

button[data-btn="start"]:hover, button.ptero-btn-start:hover {
    background: linear-gradient(135deg, #1d4ed8, #2563eb) !important;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.9) !important;
    transform: translateY(-2px) !important;
}

button[data-btn="restart"], button.ptero-btn-restart {
    background: linear-gradient(135deg, #475569, #64748b) !important;
    color: #ffffff !important;
    border: 1px solid #94a3b8 !important;
    box-shadow: 0 0 12px rgba(100, 116, 139, 0.5), inset 0 0 8px rgba(255, 255, 255, 0.2) !important;
    border-radius: 8px !important;
    font-weight: 800 !important;
    text-transform: uppercase !important;
    transition: all 0.25s ease-in-out !important;
}

button[data-btn="restart"]:hover, button.ptero-btn-restart:hover {
    background: linear-gradient(135deg, #334155, #475569) !important;
    box-shadow: 0 0 20px rgba(148, 163, 184, 0.9) !important;
    transform: translateY(-2px) !important;
}

button[data-btn="stop"], button.ptero-btn-stop {
    background: linear-gradient(135deg, #dc2626, #ef4444) !important;
    color: #ffffff !important;
    border: 1px solid #f87171 !important;
    box-shadow: 0 0 12px rgba(239, 68, 68, 0.5), inset 0 0 8px rgba(255, 255, 255, 0.2) !important;
    border-radius: 8px !important;
    font-weight: 800 !important;
    text-transform: uppercase !important;
    transition: all 0.25s ease-in-out !important;
}

button[data-btn="stop"]:hover, button.ptero-btn-stop:hover {
    background: linear-gradient(135deg, #b91c1c, #dc2626) !important;
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.9) !important;
    transform: translateY(-2px) !important;
}

/* ========================================================
   3. MINECRAFT-STYLE 3D BUTTONS WITH NEON GLOW
   ======================================================== */
.mc-btn {
    position: relative;
    background: #3c3c3c;
    border: 2px solid #000;
    box-shadow: inset -2px -4px 0px 0px #1e1e1e, inset 2px 2px 0px 0px #606060, 0 0 8px var(--glow-subtle);
    color: #fff;
    font-family: 'VT323', monospace;
    font-size: 1.1rem;
    padding: 5px 14px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    letter-spacing: 1px;
    user-select: none;
    text-shadow: 2px 2px 0px #000;
    border-radius: 2px;
}

.mc-btn:hover {
    background: #4a4a4a;
    border-color: var(--primary);
    box-shadow: inset -2px -4px 0px 0px #2a2a2a, inset 2px 2px 0px 0px #808080, 0 0 18px var(--glow), inset 0 0 10px var(--glow-subtle);
    color: var(--primary);
    text-shadow: 0 0 8px var(--glow);
}

.mc-btn:active {
    box-shadow: inset 2px 2px 0px 0px #1e1e1e, inset -2px -2px 0px 0px #606060, 0 0 12px var(--glow);
    transform: translateY(2px);
}

/* ========================================================
   4. DASHBOARD CARDS & LAYOUT WITH ENHANCED GLOW
   ======================================================== */
.dashboard-container {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.glass-card {
    background: var(--glass-bg);
    border: 1px solid var(--primary);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 16px;
    padding: 1.2rem 1.4rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px var(--glow-subtle);
    position: relative;
    overflow: hidden;
}

.glass-card:hover {
    border-color: var(--primary);
    box-shadow: 0 12px 35px var(--glow-subtle), 0 0 25px var(--glow);
}

/* Top Navbar */
.top-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.85rem 1.4rem;
}

.brand-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2rem;
    font-weight: 900;
    letter-spacing: 1.5px;
    color: #fff;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 8px;
    text-shadow: 0 0 15px var(--glow);
}

.brand-title span { 
    color: var(--primary); 
    text-shadow: 0 0 18px var(--glow);
}

.top-right-controls {
    display: flex;
    align-items: center;
    gap: 12px;
}

#hiddenBgInput { display: none; }

.status-badge {
    padding: 6px 14px;
    border-radius: 20px;
    font-family: 'Orbitron', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--primary);
    background: var(--glow-subtle);
    color: var(--primary);
    box-shadow: 0 0 16px var(--glow);
    text-shadow: 0 0 8px var(--glow);
}

.status-dot {
    width: 7px;
    height: 7px;
    background: currentColor;
    border-radius: 50%;
    box-shadow: 0 0 12px currentColor, 0 0 20px currentColor;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; filter: drop-shadow(0 0 8px currentColor); }
    50% { opacity: 0.3; filter: drop-shadow(0 0 2px currentColor); }
}

/* Grid Layout */
.grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.2rem;
}

.card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--text-muted);
    letter-spacing: 0.5px;
}

.card-header span.icon { font-size: 1.05rem; }

.card-value {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.75rem;
    font-weight: 900;
    margin: 0.4rem 0 0.2rem 0;
    color: var(--primary);
    text-shadow: 0 0 16px var(--glow);
}

.card-subtext {
    color: var(--text-muted);
    font-size: 0.75rem;
    font-weight: 600;
}

.info-pills {
    display: flex;
    gap: 8px;
    margin-top: 12px;
}

.pill {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--primary);
    padding: 4px 10px;
    border-radius: 8px;
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--text-main);
    box-shadow: 0 0 8px var(--glow-subtle);
}

.console-header-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;
}

.console-box {
    background: rgba(3, 5, 10, 0.85);
    border: 1px solid var(--primary);
    border-radius: 10px;
    padding: 0.85rem 1rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: var(--primary);
    height: 120px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
    box-shadow: inset 0 0 15px rgba(0,0,0,0.8), 0 0 15px var(--glow-subtle);
    text-shadow: 0 0 6px var(--glow-subtle);
}

/* Floating Select Box */
.theme-select-box {
    position: fixed;
    bottom: 18px;
    right: 18px;
    z-index: 99;
}

.theme-dropdown {
    background: #3c3c3c;
    color: var(--primary);
    border: 2px solid var(--primary);
    box-shadow: inset -2px -4px 0px 0px #1e1e1e, inset 2px 2px 0px 0px #606060, 0 0 15px var(--glow);
    padding: 6px 14px;
    font-family: 'VT323', monospace;
    font-size: 1.15rem;
    cursor: pointer;
    outline: none;
    text-shadow: 1px 1px 0px #000, 0 0 8px var(--glow);
    border-radius: 4px;
}

.theme-dropdown:hover {
    border-color: var(--primary);
    color: var(--primary);
    box-shadow: 0 0 22px var(--glow), inset 0 0 8px var(--glow-subtle);
}
</style>
</head>
<body>

<div class="dashboard-container">
    <!-- Top Bar -->
    <div class="glass-card animated-gradient-border top-navbar">
        <div class="brand-title">
            <span>⚡ DB GAMING</span> PANEL
        </div>
        
        <div class="top-right-controls">
            <!-- UNTOUCHED CHANGE BG BUTTON STYLED AS MINECRAFT BUTTON -->
            <input type="file" id="hiddenBgInput" accept="image/*" onchange="uploadCustomBackground(event)">
            <button class="mc-btn" onclick="document.getElementById('hiddenBgInput').click()">
                🖼️ Change BG
            </button>
            
            <div class="status-badge" id="systemStatus">
                <span class="status-dot"></span> <span id="statusText">SYSTEM ONLINE</span>
            </div>
        </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid-layout">
        <!-- UNTOUCHED NETWORK PING CARD WITH REAL-TIME UPDATE -->
        <div class="glass-card animated-gradient-border">
            <div class="card-header"><span class="icon">📶</span> Network Ping</div>
            <div class="card-value" id="pingValue">18 ms</div>
            <div class="card-subtext">Node: Singapore (SG-01)</div>
            <div class="info-pills">
                <span class="pill">⚡ Low Latency</span>
                <span class="pill">🛡️ Anti-DDoS</span>
            </div>
        </div>

        <!-- CARD 2: Shield Protection -->
        <div class="glass-card animated-gradient-border">
            <div class="card-header"><span class="icon">🛡️</span> Shield Protection</div>
            <div class="card-value">Secured</div>
            <div class="card-subtext">Automated Threat Mitigation</div>
            <div class="info-pills">
                <span class="pill">Firewall: Active</span>
                <span class="pill">SSL v3</span>
            </div>
        </div>

        <!-- CARD 3: Engine State WITH REAL-TIME UPDATE -->
        <div class="glass-card animated-gradient-border">
            <div class="card-header"><span class="icon">⚡</span> Engine State</div>
            <div class="card-value" id="tpsValue">20.0 TPS</div>
            <div class="card-subtext">Peak Performance Mode</div>
            <div class="info-pills">
                <span class="pill">PaperMC</span>
                <span class="pill">JVM Opt</span>
            </div>
        </div>
    </div>

    <!-- Terminal Area -->
    <div class="glass-card animated-gradient-border">
        <div class="console-header-actions">
            <div class="card-header"><span class="icon">📟</span> Live System Console</div>
            <button class="mc-btn" onclick="clearConsole()">Clear Logs</button>
        </div>
        <div class="console-box" id="consoleLogs">
            <div>[SYSTEM]: Dashboard loaded successfully.</div>
        </div>
    </div>
</div>

<!-- Floating 20+ Theme Preset Selector -->
<div class="theme-select-box">
    <select class="theme-dropdown" id="themeSelector" onchange="changeTheme(this.value)">
        <option value="dracula">🧛 Dracula</option>
        <option value="cyber-neon">💚 Cyber Neon</option>
        <option value="electric-cyan">🩵 Electric Cyan</option>
        <option value="crimson-red">❤️ Crimson Red</option>
        <option value="emerald-mine">❇️ Emerald Minecraft</option>
        <option value="amber-gold">💛 Amber Gold</option>
        <option value="deep-purple">💜 Deep Purple</option>
        <option value="sunset-orange">🧡 Sunset Orange</option>
        <option value="tokyo-night">🌃 Tokyo Night</option>
        <option value="matrix-green">📟 Matrix Green</option>
        <option value="ocean-blue">🌊 Ocean Blue</option>
        <option value="synthwave-80s">🕶️ Synthwave 80s</option>
        <option value="cyberpunk-2077">🤖 Cyberpunk 2077</option>
        <option value="valorant-red">🎯 Valorant Red</option>
        <option value="nordic-frost">❄️ Nordic Frost</option>
        <option value="nether-flame">🔥 Nether Flame</option>
        <option value="end-void">🌌 End Void</option>
        <option value="obsidian-dark">🖤 Obsidian Dark</option>
        <option value="sakura-pink">🌸 Sakura Pink</option>
        <option value="acid-slime">🧪 Acid Slime</option>
        <option value="royal-gold">👑 Royal Gold</option>
        <option value="hyper-violet">⚡ Hyper Violet</option>
    </select>
</div>

<script>
// --- Real-time updates without refresh ---
setInterval(() => {
    // Dynamic Ping updates (14ms - 24ms)
    const randomPing = Math.floor(Math.random() * 11) + 14;
    document.getElementById('pingValue').innerText = `${randomPing} ms`;

    // Dynamic TPS updates (19.8 - 20.0 TPS)
    const randomTps = (19.8 + (Math.random() * 0.2)).toFixed(1);
    document.getElementById('tpsValue').innerText = `${randomTps} TPS`;
}, 3000);

// Dynamic Console Logs Simulation
const sampleLogs = [
    "[NETWORK]: Ping optimized to Singapore Node.",
    "[SECURITY]: DDoS packet filter verified.",
    "[JVM]: Garbage collection completed smoothly.",
    "[SERVER]: World chunk data saved successfully."
];

setInterval(() => {
    const randomLog = sampleLogs[Math.floor(Math.random() * sampleLogs.length)];
    addLog(randomLog);
}, 7000);

function addLog(message) {
    const consoleBox = document.getElementById('consoleLogs');
    const time = new Date().toLocaleTimeString();
    consoleBox.innerHTML += `<div>[${time}] ${message}</div>`;
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

function clearConsole() {
    document.getElementById('consoleLogs').innerHTML = '<div>[SYSTEM]: Console cleared.</div>';
}

function uploadCustomBackground(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgUrl = `url('${e.target.result}')`;
            document.documentElement.style.setProperty('--bg-image', imgUrl);
            localStorage.setItem('custom_bg_img', imgUrl);
            addLog('[BG ENGINE]: Custom Background applied.');
        };
        reader.readAsDataURL(file);
    }
}

/* Per-User Theme Persistence */
function changeTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('selected_theme', themeName);
    addLog(`[THEME]: Switched to "${themeName}". Saved per-user.`);
}

/* Target Real React Pterodactyl Start/Restart/Stop Buttons */
function updatePterodactylButtons() {
    document.querySelectorAll('button').forEach(btn => {
        const txt = btn.innerText.trim().toLowerCase();
        if (txt === 'start' && !btn.classList.contains('ptero-btn-start')) {
            btn.classList.add('ptero-btn-start');
            btn.setAttribute('data-btn', 'start');
        } else if (txt === 'restart' && !btn.classList.contains('ptero-btn-restart')) {
            btn.classList.add('ptero-btn-restart');
            btn.setAttribute('data-btn', 'restart');
        } else if (txt === 'stop' && !btn.classList.contains('ptero-btn-stop')) {
            btn.classList.add('ptero-btn-stop');
            btn.setAttribute('data-btn', 'stop');
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    // Load per-user theme settings from LocalStorage
    const savedTheme = localStorage.getItem('selected_theme') || 'dracula';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.getElementById('themeSelector').value = savedTheme;

    // Load custom background settings
    const savedBg = localStorage.getItem('custom_bg_img');
    if (savedBg) {
        document.documentElement.style.setProperty('--bg-image', savedBg);
    }

    // Continuously observe Pterodactyl's dynamic button loading
    updatePterodactylButtons();
    const observer = new MutationObserver(updatePterodactylButtons);
    observer.observe(document.body, { childList: true, subtree: true });
});
</script>

</body>
</html>
