# 🎬 StreamVault — Videos, Music, Gallery & Podcasts

<div align="center">

![StreamVault](https://img.shields.io/badge/StreamVault-v2.0-violet?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMiIvPjxwYXRoIGQ9Ik0xNi4yNCA3Ljc2YTYgNiAwIDAgMSAwIDguNDltLTguNDgtOC40OWE2IDYgMCAwIDAgMCA4LjQ5bTExLjMxLTExLjMxYTEwIDEwIDAgMCAxIDAgMTQuMTRtLTE0LjE0LTE0LjE0YTEwIDEwIDAgMCAwIDAgMTQuMTQiLz48L3N2Zz4=)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

**A modern, fully-featured streaming web app for videos, music, and podcasts.**  
**100% JSON-driven • Multi-cloud support • Production-grade quality**

[Live Demo](https://stream-nova.sudhirk926235.workers.dev) · [Features](#-features) · [Quick Start](#-quick-start) · [Add Content](#-adding-content-json-driven) · [Cloud Providers](#-supported-cloud-providers)

</div>

---

## 📸 Screenshots

| Video Player | Music Player | Gallery | Podcasts |
|:---:|:---:|:---:|:---:|
| Full HTML5 controls, YouTube embed | Waveform visualizer, album art | Filterable media grid | Card layout with player |

---

## ✨ Features

### 🎬 4 Main Sections

| Section | Description |
|---------|-------------|
| **🎥 Video** | Full-featured video player with HTML5 controls or YouTube native embed |
| **🎵 Music** | Audio player with animated waveform, spinning album art, speed control |
| **🖼️ Gallery** | Responsive grid of ALL media, click to navigate to player |
| **🎙️ Podcasts** | Podcast player with separate theme, card layout, "Up Next" queue |

### 🎮 Player Controls

#### Video Player (Direct MP4/Dropbox)
- ▶️ Play / Pause (click, spacebar, or K key)
- ⏩ Seek bar with hover time preview + buffer indicator
- 🔊 Always-visible volume slider with mute toggle
- 🖥️ Fullscreen with **auto-rotate on mobile** (landscape lock)
- ⏭️ Skip Forward/Backward (10 seconds)
- ⏯️ Previous / Next track
- ⚡ Playback speed (0.5x – 2x)
- 📊 Auto-detected video quality badge (1080p, 720p, etc.)
- 🔄 Auto-next when video ends
- ⌨️ Full keyboard shortcuts (Space, K, F, M, Arrows)

#### Video Player (YouTube)
- 🎬 YouTube's **native controls** including ⚙️ quality picker (144p → 4K)
- Quality selection **actually works** (native gear icon)
- ⏭️ Our Previous / Next / Fullscreen overlay buttons
- 📺 YouTube suggestions play **within the app** (not in new tab)
- 🔄 Auto-next from your playlist when video/suggestion ends
- 📊 Quality badge shows current resolution
- ✨ "Back to playlist" button when playing YouTube suggestions

#### Audio Player (Music & Podcasts)
- ▶️ Play / Pause
- 📊 Animated waveform visualizer
- 💿 Spinning album art (vinyl-style)
- ⏩ Seek bar with buffered progress
- 🔊 Always-visible volume control with percentage
- ⚡ Speed control (0.5x – 2x)
- 🔁 Repeat toggle
- ⏯️ Previous / Next
- 🔄 Auto-next when track ends
- 🎨 Themed: Emerald for Music, Rose for Podcasts

### 🖼️ Gallery
- Responsive grid: 1 column (mobile) → 4 columns (desktop)
- Filter by type: All / Videos / Music / Podcasts
- Search by title, description, category, tags, author
- Hover effects with play button overlay
- "PLAYING" indicator with equalizer animation on active items
- Click any card → navigates to the correct section + player

### 🔍 Smart Playlists
- Real-time search across title, description, tags, author/host
- Category filter pills
- Thumbnail previews on each item
- Currently playing highlight with equalizer animation
- Rating, views/plays, duration, author metadata
- Cloud provider badges

### 📱 Fully Responsive
- **Desktop**: Side-by-side player + playlist, top navigation bar
- **Tablet**: 2-column grids, adaptive layout
- **Mobile**: Stacked layout, bottom tab bar navigation, larger touch targets
- Safe area padding for notched phones (iOS)
- Touch-optimized slider thumbs

### 🎨 UI/UX Polish
- Dark theme with glassmorphism borders
- Ambient background glow that changes per section
- Smooth fade-in-up animations on section switch
- Card hover lift effects
- Custom scrollbars
- Inter font for clean typography
- Section-specific color themes:
  - 💜 Violet — Videos
  - 💚 Emerald — Music
  - 🧡 Amber — Gallery
  - 🩷 Rose — Podcasts

---

## ☁️ Supported Cloud Providers

StreamVault auto-detects the cloud provider from the URL and uses the optimal player:

| Provider | Link Format | Player | Controls |
|----------|-------------|--------|----------|
| **Direct MP4/MP3** | `https://example.com/video.mp4` | HTML5 `<video>`/`<audio>` | ✅ Full custom controls |
| **YouTube** | `https://youtube.com/watch?v=xxx` | YouTube IFrame API | ✅ Native ⚙️ quality picker |
| **Mega.nz** | `https://mega.nz/file/ID#KEY` | Mega iframe embed | ✅ Mega's controls (encrypted) |
| **Google Drive** | `https://drive.google.com/file/d/ID/view` | Google preview iframe | ✅ Google's player |
| **Dropbox** | `https://dropbox.com/s/HASH/file.mp4` | HTML5 (direct via `?raw=1`) | ✅ Full custom controls |
| **OneDrive** | `https://onedrive.live.com/...` | OneDrive iframe | ✅ Microsoft's player |
| **pCloud** | `https://e.pcloud.link/publink/show?code=...` | pCloud iframe | ✅ pCloud's player |
| **Sync.com** | `https://ln.sync.com/...` | Sync iframe | ✅ Sync's player |
| **Internxt** | `https://internxt.com/...` | Internxt iframe | ✅ Internxt's controls |

### How Auto-Detection Works

```
User puts link in media.json
         ↓
getCloudInfo(url) analyzes URL
         ↓
┌─────────────────────────────────────────┐
│ YouTube?  → YouTube IFrame API Player   │
│ Dropbox?  → HTML5 (direct raw stream)   │
│ Mega.nz?  → Mega iframe (auto-decrypt)  │
│ GDrive?   → Google preview iframe       │
│ OneDrive? → Microsoft embed iframe      │
│ pCloud?   → pCloud iframe               │
│ Sync?     → Sync iframe                 │
│ Internxt? → Internxt iframe             │
│ Other?    → HTML5 direct player         │
└─────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (recommended: 20+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/streamvault.git
cd streamvault

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built app will be in the `dist/` folder as a single HTML file (via `vite-plugin-singlefile`).

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 📝 Adding Content (JSON-Driven)

All content is managed from a single file: **`src/data/media.json`**

The app has 3 arrays: `videos`, `music`, and `podcasts`. Just add/remove objects to update content.

### Video Entry

```json
{
  "id": "v1",
  "title": "Big Buck Bunny",
  "description": "Award-winning animated short film.",
  "link": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "thumbnail": "https://example.com/thumb.jpg",
  "duration": "9:56",
  "category": "Animation",
  "rating": 4.8,
  "views": 1250000,
  "publish_date": "2008-04-10",
  "author": "Blender Foundation",
  "tags": ["animated", "short film", "family"]
}
```

### Music Entry

```json
{
  "id": "m1",
  "title": "Ambient Chill Vibes",
  "description": "Relaxing ambient music for focus.",
  "link": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  "thumbnail": "https://example.com/album-art.jpg",
  "duration": "6:10",
  "category": "Ambient",
  "rating": 4.8,
  "plays": 340000,
  "publish_date": "2023-01-15",
  "author": "SoundHelix",
  "tags": ["ambient", "chill", "relaxing"]
}
```

### Podcast Entry

```json
{
  "id": "p1",
  "title": "The Art of Deep Focus",
  "description": "Techniques for achieving deep focus.",
  "link": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  "thumbnail": "https://example.com/podcast-cover.jpg",
  "duration": "6:10",
  "category": "Productivity",
  "rating": 4.9,
  "plays": 230000,
  "publish_date": "2022-05-10",
  "host": "John Doe",
  "tags": ["focus", "work", "productivity"]
}
```

### Using Different Cloud Providers

```json
// YouTube video
{
  "id": "v10",
  "title": "Nature Documentary 4K",
  "link": "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  "thumbnail": "https://img.youtube.com/vi/LXb3EKWsInQ/hqdefault.jpg",
  ...
}

// Mega.nz encrypted video
{
  "id": "v11",
  "title": "My Private Video",
  "link": "https://mega.nz/file/X9IUWDCK#-fV4vUdjgCdlN9Y-OU4EhGeIvzR3k1snI2iK2G6G6Yc",
  ...
}

// Mega.nz embed (iframe format)
{
  "id": "v12",
  "title": "Mega Embed Video",
  "link": "https://mega.nz/embed/ThYxhY6D#WJLBGxr5EtimKfYlhfbO3vHAZvdntNb9RaHSEhgQyF4",
  ...
}

// Google Drive video
{
  "id": "v13",
  "title": "Drive Video",
  "link": "https://drive.google.com/file/d/1ABCxyz123/view?usp=sharing",
  ...
}

// Dropbox (gets converted to direct stream automatically)
{
  "id": "v14",
  "title": "Dropbox Video",
  "link": "https://www.dropbox.com/s/abc123/video.mp4?dl=0",
  ...
}

// OneDrive
{
  "id": "v15",
  "title": "OneDrive Video",
  "link": "https://1drv.ms/v/s!AiXXXXXXX",
  ...
}

// Mega.nz music
{
  "id": "m10",
  "title": "Encrypted Audio",
  "link": "https://mega.nz/file/K55h0ZCb#fFsSSn3tGh9t-XaJqURBED1PZALpcvVgGStvLEsFZm8",
  ...
}
```

### Field Reference

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `id` | ✅ | string | Unique identifier (e.g., "v1", "m1", "p1") |
| `title` | ✅ | string | Display title |
| `description` | ✅ | string | Short description |
| `link` | ✅ | string | Media URL (any supported provider) |
| `thumbnail` | ❌ | string | Thumbnail/cover image URL |
| `duration` | ❌ | string | Display duration (e.g., "9:56") |
| `category` | ❌ | string | Category for filtering (e.g., "Animation") |
| `rating` | ❌ | number | Rating 1-5 (e.g., 4.8) |
| `views` | ❌ | number | View count (for videos) |
| `plays` | ❌ | number | Play count (for music/podcasts) |
| `publish_date` | ❌ | string | Publish date (e.g., "2026-01-15") |
| `author` | ❌ | string | Author/creator name (for videos/music) |
| `host` | ❌ | string | Host name (for podcasts) |
| `tags` | ❌ | string[] | Array of tags for searching |

> **Tip:** YouTube thumbnails are auto-generated from the video URL. You can omit the `thumbnail` field for YouTube videos, or use `hqdefault.jpg` for best reliability.

---

## 🏗️ Project Architecture

```
streamvault/
├── index.html                      # Entry HTML with async YT API + DNS prefetch
├── package.json                    # Dependencies
├── vite.config.ts                  # Vite + React + Tailwind + SingleFile plugin
├── tsconfig.json                   # TypeScript config
│
├── src/
│   ├── main.tsx                    # React entry point
│   ├── App.tsx                     # Main app — 4 sections, state management
│   ├── index.css                   # Global styles, animations, scrollbars
│   ├── types.ts                    # TypeScript types + cloud provider detection
│   │
│   ├── data/
│   │   └── media.json              # 📦 ALL content — edit this to manage media
│   │
│   ├── utils/
│   │   └── cn.ts                   # Tailwind class merge utility
│   │
│   └── components/
│       ├── Header.tsx              # Top nav (desktop) + bottom tab bar (mobile)
│       ├── VideoPlayer.tsx         # Smart video routing (YouTube/Cloud/Direct)
│       ├── AudioPlayer.tsx         # Audio player with waveform + cloud embed
│       ├── Playlist.tsx            # Searchable playlist with thumbnails
│       ├── Gallery.tsx             # Filterable media grid
│       └── SmartImage.tsx          # Production-grade image with YT fallback
```

### Component Routing Logic

```
VideoPlayer
├── isYouTubeLink(url)?       → YouTubePlayer (IFrame API, native ⚙️)
├── canDirectStream(provider)? → DirectVideoPlayer (HTML5 <video>)
│   └── onError?              → CloudEmbedPlayer (fallback to iframe)
└── else                      → CloudEmbedPlayer (Mega/GDrive/OneDrive/etc.)

AudioPlayer
├── canDirectStream(provider)? → HTML5 <audio> (full custom controls)
└── else                      → Cloud iframe embed + Prev/Next buttons
```

---

## 🛡️ Production Quality

### Zero Console Errors
- **SmartImage** component with YouTube thumbnail fallback chain (`maxresdefault → sddefault → hqdefault → mqdefault → default`)
- `referrerPolicy="no-referrer"` prevents ERR_BLOCKED_BY_ORB
- `decoding="async"` for off-thread image decoding
- No `crossOrigin` attribute on media elements (prevents CORS failures)
- Graceful error handling with gradient fallbacks

### Performance Optimizations
- YouTube API loaded with `<script async>` (non-blocking)
- DNS prefetch for `img.youtube.com`, `commondatastorage.googleapis.com`, `soundhelix.com`
- Preconnect to `youtube.com` for early connection
- Video: `preload="metadata"` (loads headers only, not full video)
- All images: `loading="lazy"` + `decoding="async"`
- Single-file build output via `vite-plugin-singlefile`
- React `memo` on SmartImage to prevent re-renders

### Fullscreen (Robust Cross-Browser)
- Tries ALL vendor prefixes: `requestFullscreen`, `webkitRequestFullscreen`, `webkitRequestFullScreen`, `mozRequestFullScreen`, `msRequestFullscreen`
- Multi-target fallback: container → video element → iframe
- iOS Safari: `webkitEnterFullscreen` on video element
- **Auto-rotate to landscape** on mobile via `screen.orientation.lock('landscape')`
- Listens on all fullscreen change events: `fullscreenchange`, `webkitfullscreenchange`, `mozfullscreenchange`, `MSFullscreenChange`

### YouTube Integration
- YouTube IFrame Player API with `controls: 1` (native quality ⚙️ picker)
- `sandbox` attribute on iframe prevents suggestions from opening new tabs
- `MutationObserver` patches all dynamically created iframes
- Suggestion detection: detects when user plays a YouTube recommendation
- "Back to playlist" banner for navigating back
- Auto-next continues your playlist after suggestions end

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` / `K` | Play / Pause |
| `F` | Toggle Fullscreen |
| `M` | Toggle Mute |
| `←` Left Arrow | Seek backward 10s |
| `→` Right Arrow | Seek forward 10s |
| `↑` Up Arrow | Volume up 10% |
| `↓` Down Arrow | Volume down 10% |

---

## 🧰 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 19.2 | UI framework |
| [Vite](https://vitejs.dev/) | 7.2 | Build tool |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1 | Styling |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 | Type safety |
| [Lucide React](https://lucide.dev/) | 0.575 | Icons |
| [clsx](https://github.com/lukeed/clsx) | 2.1 | Class merging |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.4 | Tailwind deduplication |
| [vite-plugin-singlefile](https://github.com/nickreese/vite-plugin-singlefile) | 2.3 | Single HTML output |

---

## 📋 Browser Support

| Browser | Status |
|---------|--------|
| Chrome 90+ | ✅ Full support |
| Firefox 90+ | ✅ Full support |
| Safari 15+ | ✅ Full support (with webkit fallbacks) |
| Edge 90+ | ✅ Full support |
| Mobile Chrome | ✅ Full support + auto-rotate |
| Mobile Safari | ✅ Full support + webkit fullscreen |
| Samsung Internet | ✅ Full support |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

- **Sample Videos**: [Google Sample Videos](https://goo.gl/i5MIXB) (Big Buck Bunny, Elephant Dream, etc.)
- **Sample Audio**: [SoundHelix](https://www.soundhelix.com/) (procedurally generated music)
- **Icons**: [Lucide](https://lucide.dev/) (beautiful open-source icons)
- **Fonts**: [Inter](https://rsms.me/inter/) by Rasmus Andersson

---

<div align="center">

**Built with ❤️ using React + Vite + Tailwind CSS**

⭐ Star this repo if you found it useful!

</div>
