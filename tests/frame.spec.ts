import { test } from '@playwright/test';

test('Handle frame', async ({ page }) => {

  await page.goto('https://demoqa.com/frames');

  // Pause execution
  await page.pause();

  // entry frame using frame locator

  const frame = page.frameLocator('#frame1');

  // Wait for element inside frame

  await frame.locator('#sampleHeading')
    .waitFor({ state: 'visible', timeout: 5000 });

    // Get text from frame

  const text = await frame.locator('#sampleHeading').textContent();

  console.log('Frame Text:', text);

});