import { test } from '@playwright/test';

test('Google screenshot example', async ({ page }) => {

  // Open Google
  await page.goto('https://www.google.com');

  await page.waitForTimeout(2000);

  // Enter text in search box
  await page.locator('textarea[name="q"]')
    .fill('Playwright automation');

  // Wait 2 seconds
  await page.waitForTimeout(2000);

  // Take screenshot
  await page.screenshot({
    path: 'E:/playright/tests/google-search.png',
    fullPage: true
  });



});