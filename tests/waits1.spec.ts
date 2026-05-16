import { test } from '@playwright/test';

test('Waits Demo', async ({ page }) => {

  // Open Application
  await page.goto('https://www.saucedemo.com/');

  // Wait for 1 second
  await page.waitForTimeout(1000);

  // Enter Username
  await page.locator('#user-name').fill('standard_user');

  // Wait for 2 seconds
  await page.waitForTimeout(2000);

  // Enter Password
  await page.locator('#password').fill('secret_sauce');

  // Wait for 2 seconds
  await page.waitForTimeout(2000);

  // Click Login Button
  await page.locator('#login-button').click();

  // Wait for inventory page URL
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

 // waitForLoadState() means: Wait until the webpage loading is completed.

 await page.waitForLoadState('networkidle');

  // Wait until a specific element appears on the webpage.
  await page.waitForSelector('.inventory_list');

  console.log('Login Successful');
});