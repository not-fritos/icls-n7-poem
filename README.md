# N+7 Poetry Animation Website

A vanilla JavaScript and HTML website that animates an n+7 poetry project, where nouns are cycled through dictionary definitions from N+15 back to N+0.

## Features

- **Justified Text Layout**: The poem is displayed with proper text justification
- **Cycling Noun Animation**: Nouns cycle from N+15 → N+14 → ... → N+0
- **Sequential Animation**: After the first noun reaches N+0, the next noun starts cycling
- **Interactive Controls**: Start, pause, and reset the animation
- **Adjustable Speed**: Control animation timing with a slider
- **Click to Cycle**: Click individual nouns to manually cycle them when animation is paused
- **Visual Feedback**: Animated transitions and hover effects for nouns

## Files

- `index.html` - Main HTML structure with responsive design
- `poem-animation.js` - JavaScript animation logic and interactivity
- `script.json` - Original n+7 poetry data (N+0 through N+15)
- `correct-noun-extractor.js` - Data extraction and analysis utilities
- `README.md` - This documentation

## How It Works

1. **Data Extraction**: The `correct-noun-extractor.js` analyzes the JSON data to identify the 15 nouns that transform across the 16 versions
2. **Template Rendering**: The poem template with `___` placeholders is rendered with interactive noun spans
3. **Animation Logic**: Nouns cycle sequentially from N+15 back to N+0, then move to the next noun
4. **User Interaction**: Users can control playback speed, pause/resume, and click individual nouns

## Usage

1. Open `index.html` in a web browser
2. Click "Start Animation" to begin the cycling sequence
3. Use the speed slider to adjust animation timing
4. Click individual nouns to manually cycle them (when paused)
5. Use "Reset" to return to the initial state

## Technical Details

- **Pure Vanilla JavaScript**: No external dependencies
- **CSS Animations**: Smooth transitions using CSS keyframes
- **Responsive Design**: Works on desktop and mobile devices
- **Semantic HTML**: Proper structure for accessibility
