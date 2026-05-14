import { test, expect } from '@playwright/test'; // Importing the test and expect functions from Playwright's testing library

test('should wait for an element to be visible', async ({ page }) => {
  // Navigate to a sample page
  await page.goto('https://www.saucedemo.com/');

    // Wait for the username input to be visible

    await page.waitForSelector('#user-name', {
    state: 'visible'
    });

    // Wait for the password input to be visible
    await page.waitForSelector('#password', {
    state: 'visible'
    });

        await page.waitForTimeout(3000);

        await page.locator('#user-name').fill('standard_user');

  // 👉 ENTER PASSWORD HERE
      await page.locator('#password').fill('secret_sauce');

       await page.locator('#login-button').click();
}
);

