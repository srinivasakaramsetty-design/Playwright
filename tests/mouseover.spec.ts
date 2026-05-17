import { test } from '@playwright/test';

test('Amazon Mouse Hover Example', async ({ page }) => {

  // Open Amazon
  await page.goto('https://www.amazon.in');

  // Wait
  await page.waitForTimeout(3000);

  // Mouse hover on Accounts & Lists
  await page.locator('#nav-link-accountList').hover();

  // Wait for observation
  await page.waitForTimeout(5000);

});