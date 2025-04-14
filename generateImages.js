const fs = require('fs');
const { createCanvas } = require('canvas');
const path = require('path');

const width = 800;
const height = 600;

const outputDir = path.join(__dirname, 'test_photos');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

for (let i = 1; i <= 20; i++) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Set background color
  ctx.fillStyle = `hsl(${i * 18}, 70%, 60%)`; // different color for each
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 48px sans-serif';
  ctx.fillText(`Test Image ${i}`, 200, 300);

  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(outputDir, `photo${i}.jpg`), buffer);
}

console.log('✅ 20 test images created in ./test_photos');
