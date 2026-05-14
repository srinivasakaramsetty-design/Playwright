import { test, expect } from '@playwright/test';

test('Frames', async ({ page }) => {

  await page.goto('https://demoqa.com/frames');

  // Switch to iframe
  const frame = page.frameLocator('#frame1');

  // Get text
  const text = await frame.locator('#sampleHeading').textContent();

  // Print text
  console.log(text);

  // Assertion (important for interview)
  await expect(frame.locator('#sampleHeading')).toHaveText('This is a sample page');

});
    