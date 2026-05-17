import { test, expect } from '@playwright/test';

test('Google Search Naukri', async ({ page }) => {

  // Open Google
  await page.goto('https://www.google.com');

  // Wait for observation
  await page.waitForTimeout(2000);

  // Click on Google search box
  await page.locator('textarea[name="q"]').click();

  // Type Naukri using keyboard
  await page.keyboard.type('Naukri');

  // Wait
  await page.waitForTimeout(2000);

  // Press Enter
 // Press Arrow Down
  await page.keyboard.press('ArrowDown');

    // Wait
    await page.waitForTimeout(2000);

     // Press Enter
  await page.keyboard.press('Enter');

   await page.waitForTimeout(3000);

});