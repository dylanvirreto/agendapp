#!/usr/bin/env node
// scripts/generate-assets.js
// Run: node scripts/generate-assets.js
// Generates placeholder PNG assets required by Expo

const fs = require('fs');
const path = require('path');

// Minimal valid 1x1 PNG in base64 (transparent)
const TRANSPARENT_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);

// Wine-colored 1x1 PNG
const WINE_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAADklEQVQI12P4z8BQDwAEgAF/QualIQAAAABJRU5ErkJggg==',
  'base64'
);

const assetsDir = path.join(__dirname, '..', 'assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

const files = {
  'icon.png': WINE_PNG,
  'splash.png': WINE_PNG,
  'adaptive-icon.png': WINE_PNG,
  'favicon.png': WINE_PNG,
  'notification-icon.png': WINE_PNG,
};

Object.entries(files).forEach(([name, buf]) => {
  const p = path.join(assetsDir, name);
  if (!fs.existsSync(p)) {
    fs.writeFileSync(p, buf);
    console.log(`✓ Created ${name}`);
  } else {
    console.log(`  Exists  ${name}`);
  }
});

console.log('\nDone! Replace assets/ with real images before publishing.\n');
