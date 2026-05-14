import { test, expect } from '@playwright/test';

test('logout example', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');

  // Click login button
  await page.locator('button[type="submit"]').click();

  // open profile menu
  await page.locator('.oxd-userdropdown-name').click();

  // logout
  await page.locator('text=Logout').click();

  console.log('Test completed successfully');

});