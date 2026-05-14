// locators in playwright ? 

// Playwright provides various ways to locate elements on a web page. Here are some common locators you can use in Playwright:

// 1. CSS Selectors: You can use standard CSS selectors to locate elements.
// Example: await page.locator('button.submit').click();

import { test, expect } from '@playwright/test';

test('should locate elements using CSS selectors',
  async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Locate the username input field using CSS selector and type a value
    await page.locator('input[name="username"]').type('Admin');
    


    // Locate the password input field using CSS selector and type a value
    await page.locator('input[name="password"]').type('admin123');

    // Locate the login button using CSS selector and click it
    await page.locator('button[type="submit"]').click();
});