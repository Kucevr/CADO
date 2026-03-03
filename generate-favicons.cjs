const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const svgPath = path.join(publicDir, 'favicon.svg');
const svgBuffer = fs.readFileSync(svgPath);

async function generate() {
  // favicon-16x16.png
  await sharp(svgBuffer).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('✓ favicon-16x16.png');

  // favicon-32x32.png
  await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('✓ favicon-32x32.png');

  // apple-touch-icon.png (180x180)
  await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ apple-touch-icon.png');

  // android-chrome-192x192.png
  await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  console.log('✓ android-chrome-192x192.png');

  // android-chrome-512x512.png
  await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  console.log('✓ android-chrome-512x512.png');

  // mstile-150x150.png (Windows tiles)
  await sharp(svgBuffer).resize(150, 150).png().toFile(path.join(publicDir, 'mstile-150x150.png'));
  console.log('✓ mstile-150x150.png');

  // OG image (1200x630) — dark background with logo centered
  const ogWidth = 1200;
  const ogHeight = 630;
  const logoSize = 280;
  const logoBuffer = await sharp(svgBuffer).resize(logoSize, logoSize).png().toBuffer();
  
  const ogSvg = `<svg width="${ogWidth}" height="${ogHeight}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${ogWidth}" height="${ogHeight}" fill="#141414"/>
    <text x="${ogWidth/2}" y="${ogHeight - 80}" font-family="Georgia, serif" font-size="28" fill="#ffffff80" text-anchor="middle" letter-spacing="8">ARCHITECTURE &amp; INTERIOR DESIGN</text>
  </svg>`;
  
  await sharp(Buffer.from(ogSvg))
    .composite([{
      input: logoBuffer,
      left: Math.round((ogWidth - logoSize) / 2),
      top: Math.round((ogHeight - logoSize) / 2) - 30,
    }])
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  console.log('✓ og-image.png (1200x630)');

  // Generate favicon.ico from 16, 32, 48 px PNGs
  // ICO is just a container — we'll create a simple 32px one
  const ico32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  // Create a minimal ICO file (single 32x32 PNG image)
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);    // reserved
  icoHeader.writeUInt16LE(1, 2);    // type: 1 = ICO
  icoHeader.writeUInt16LE(1, 4);    // count: 1 image
  
  const icoEntry = Buffer.alloc(16);
  icoEntry.writeUInt8(32, 0);       // width
  icoEntry.writeUInt8(32, 1);       // height
  icoEntry.writeUInt8(0, 2);        // color palette
  icoEntry.writeUInt8(0, 3);        // reserved
  icoEntry.writeUInt16LE(1, 4);     // color planes
  icoEntry.writeUInt16LE(32, 6);    // bits per pixel
  icoEntry.writeUInt32LE(ico32.length, 8);   // size of image data
  icoEntry.writeUInt32LE(22, 12);   // offset (6 header + 16 entry = 22)
  
  const icoFile = Buffer.concat([icoHeader, icoEntry, ico32]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoFile);
  console.log('✓ favicon.ico');

  console.log('\nAll favicons generated successfully!');
}

generate().catch(console.error);
