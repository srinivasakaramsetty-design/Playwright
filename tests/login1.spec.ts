import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.openURL();

  await loginPage.login('Admin', 'admin123');

  await expect(
    page.locator('h6')
  ).toContainText('Dashboard');

});