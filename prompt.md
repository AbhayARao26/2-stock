You are a senior frontend engineer and UI/UX designer specializing in emotionally engaging interactive web experiences.

Your task is to build a production-quality romantic storytelling web application using React (Vite), Tailwind CSS, and optionally Framer Motion for animations.

This application must feel premium, smooth, and emotionally immersive — NOT like a generic template or over-animated toy project.

-----------------------------------

🎯 OBJECTIVE

Create a single-page interactive anniversary experience that:
- Plays a custom song
- Displays synchronized lyrics
- Transitions through images tied to memories
- Ends with an emotional message and replay option

The experience should feel like a “digital love letter”.

-----------------------------------

🧑‍💻 TECH STACK (MANDATORY)

- React (Vite)
- Tailwind CSS
- Optional: Framer Motion (preferred for transitions)
- No backend required
- No routing library — use state-based screen switching

-----------------------------------

🧱 ARCHITECTURE REQUIREMENTS

- Use modular component structure
- Maintain clean separation of concerns
- Avoid monolithic components

Required structure:

src/
  components/
    Landing.jsx
    Loading.jsx
    Player.jsx
    Ending.jsx
    FloatingHearts.jsx
  data/
    lyrics.js
    scenes.js
  App.jsx
  main.jsx
  index.css

-----------------------------------

🎨 GLOBAL DESIGN SYSTEM

Theme:
- Romantic, soft, minimal, elegant

Colors:
- Background gradient: #ffd6e0 → #ffc0cb (baby pink)
- Text: white (#ffffff) with soft opacity variations
- Overlay: rgba(0,0,0,0.3) for readability on images

Typography:
- Use Poppins or Playfair Display
- Large, readable, centered text

Spacing:
- Generous whitespace
- Avoid clutter

-----------------------------------

💗 BACKGROUND ANIMATION (CRITICAL FEATURE)

Create a reusable <FloatingHearts /> component.

Behavior:
- ~20 floating hearts
- Randomized:
  - size (10px–40px)
  - position (left %)
  - opacity (0.2–0.6)
  - blur (0–2px)
  - animation duration (6–15s)

Animation:
- Hearts float upward continuously
- Slight horizontal drift
- Fade in → visible → fade out
- Infinite loop

Implementation:
- Prefer CSS keyframes for performance
- Use Tailwind where possible, custom CSS where needed

IMPORTANT:
- Must be subtle and aesthetic
- Must NOT impact performance

-----------------------------------

🧭 APPLICATION FLOW (STATE-DRIVEN)

Use a single state variable:

const [screen, setScreen] = useState("landing")

Valid states:
- "landing"
- "loading"
- "player"
- "ending"

NO React Router.

-----------------------------------

🌷 SCREEN 1: LANDING

Content (centered):
"Hey Poovy…  
I made something for you that I think you'll love ❤️"

Button:
"Click to Begin"

Behavior:
- On click:
  - Trigger transition to "loading"
  - Also unlock audio playback (user interaction requirement)

Animations:
- Text fades in on mount
- Button has hover scale effect

-----------------------------------

⏳ SCREEN 2: LOADING

Duration:
- 2–3 seconds (use setTimeout)

Content:
"Loading 2 years of memories..."

Optional:
- Animated dots OR progress bar

After timeout:
→ transition to "player"

-----------------------------------

🎶 SCREEN 3: PLAYER (CORE EXPERIENCE)

This is the most important part.

-----------------------------------

🔊 AUDIO SYSTEM

- Use <audio> element with useRef
- Playback must start ONLY after user interaction
- Handle:
  - play()
  - currentTime
  - onended → trigger ending screen

-----------------------------------

📝 LYRICS SYNCHRONIZATION

Input format (data/lyrics.js):

[
  { time: 0, text: "..." },
  { time: 8, text: "..." }
]

Logic:
- Continuously track audio.currentTime
- Determine current lyric based on timestamps
- Display ONE line at a time

Animation:
- Smooth fade-in for text
- Optional slight upward motion

-----------------------------------

🖼️ IMAGE TRANSITIONS

Input format (data/scenes.js):

[
  { time: 0, image: "/images/1.jpg" },
  { time: 10, image: "/images/2.jpg" }
]

Behavior:
- Background image updates based on timestamp
- Smooth crossfade between images
- Apply:
  - dark overlay (for readability)
  - subtle zoom (scale 1 → 1.05)

-----------------------------------

📐 PLAYER LAYOUT

- Fullscreen container
- Background image layer
- Overlay layer (dark tint)
- Centered lyrics text

Z-index layering must be correct.

-----------------------------------

🌑 SCREEN 4: ENDING

Trigger:
- When audio finishes

Sequence:
1. Fade entire screen to black
2. Then display:

"Will you keep making memories with me?"

Below:
"Happy 2 year Anniversary Poorvi ❤️"

Button:
"Replay"

Replay behavior:
- Reset audio currentTime to 0
- Return to "player"

-----------------------------------

🎬 ANIMATION GUIDELINES

- Use Framer Motion for:
  - Screen transitions (fade in/out)
  - Text transitions
  - Image opacity transitions

- Animations must be:
  - Smooth
  - Subtle
  - Emotionally supportive (NOT flashy)

-----------------------------------

⚠️ PERFORMANCE CONSTRAINTS

- No heavy re-renders
- Use efficient intervals or requestAnimationFrame
- Limit number of animated DOM elements
- Optimize images (assume local assets)

-----------------------------------

📱 RESPONSIVENESS

- Must work well on mobile screens
- Text must remain readable
- Avoid overflow issues

-----------------------------------

🧪 ACCEPTANCE CRITERIA

The app is complete ONLY if:

✔ Landing → Loading → Player → Ending flow works seamlessly  
✔ Audio plays correctly and syncs with lyrics  
✔ Images transition smoothly  
✔ Background hearts animation is subtle and continuous  
✔ No console errors  
✔ Works on both desktop and mobile  
✔ UI feels premium and not cluttered  

-----------------------------------

📦 OUTPUT REQUIREMENTS

Provide:

1. Full working code (all files)
2. Tailwind setup instructions
3. Sample lyrics.js and scenes.js
4. Instructions to run locally
5. Clean, readable, well-structured code

DO NOT provide partial snippets — provide a complete working project.

-----------------------------------

FINAL NOTE

Prioritize emotional experience, smoothness, and polish over unnecessary complexity.

The result should feel like a thoughtful, handcrafted digital memory — not a generic UI project.

------------------------------