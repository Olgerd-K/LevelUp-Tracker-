# LevelUp Tracker

A React-based level progression tracker with beautiful animations and a modern UI.

## Features

- 🎮 Level progression system with XP tracking
- ⭐ Dynamic star rating system
- 🎨 Beautiful animations with Framer Motion
- 📱 Responsive design with Tailwind CSS
- 🎯 Progress bar with smooth animations
- ⌨️ Custom XP input functionality

## Tech Stack

- **Vite** - Fast build tool and development server
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## How to Use

1. **Add XP**: Click the "+25 XP" button to add 25 experience points
2. **Remove XP**: Click the "-25 XP" button to remove 25 experience points
3. **Custom XP**: Type a number in the input field and press Enter to add/remove custom XP
4. **Level Up**: Watch the progress bar fill up and see the level increase
5. **Stars**: Earn stars based on your level (1 star for levels 1-4, 2 stars for levels 5-9, 3 stars for level 10+)

## Project Structure

```
levelup-tracker/
├── src/
│   ├── components/
│   │   └── LevelProgress.jsx    # Main component
│   ├── App.jsx                  # App entry point
│   ├── index.css               # Global styles with Tailwind
│   └── main.jsx                # React entry point
├── public/                     # Static assets
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Dependencies and scripts
```

## Customization

You can easily customize the level progression system by modifying the XP requirements in the `updateXP` function within `LevelProgress.jsx`. Currently, each level requires 100 XP to progress.

## License

This project is open source and available under the MIT License.
