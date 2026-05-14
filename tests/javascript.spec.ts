import { test, expect } from '@playwright/test';

test('login orangehrm', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.waitForSelector('input[name="username"]');

  await page.fill('input[name="username"]', 'Admin');

  await page.fill('input[name="password"]', 'admin123');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);

});