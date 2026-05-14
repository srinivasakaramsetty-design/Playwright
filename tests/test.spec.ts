
import { test, expect } from '@playwright/test';
test('Swag Labs login', async ({ page }) => 
    {

  await page.goto('https://www.saucedemo.com/');

  const username = page.locator('#user-name');
  const password = page.locator('#password');
  const loginBtn = page.locator('#login-button');

  await username.fill('standard_user');
  await password.fill('secret_sauce');
  await loginBtn.click();

  await expect(page).toHaveURL(/inventory/);
});