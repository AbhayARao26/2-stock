# Romantic Anniversary App

A Vite + React + Tailwind anniversary story experience with Framer Motion, synced lyrics, scene transitions, and floating hearts.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Assets

- Place your audio at `public/audio/song.mp3`
- Place 15 images at `public/images/1.svg` through `public/images/15.svg`
- Update `src/data/lyrics.js` and `src/data/scenes.js` to match your song timing

## Notes

- The experience uses a single `screen` state in `src/App.jsx`.
- Landing starts audio after the first user click.
- `FloatingHearts` uses CSS keyframes for lightweight animation.
