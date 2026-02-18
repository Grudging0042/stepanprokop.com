import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport to a standard desktop size
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  // Navigate to localhost:3000
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Take a screenshot of just the hero section (top portion)
  await page.screenshot({ 
    path: '/tmp/hero-screenshot.png',
    clip: { x: 0, y: 0, width: 1920, height: 800 }
  });
  
  console.log('Hero section screenshot saved to /tmp/hero-screenshot.png');
  
  await browser.close();
})();
