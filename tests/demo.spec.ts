// 1. import packages from playwright
import { test, expect } from '@playwright/test';

// 2. write a test case
test('should have the correct title', async ({ page }) => {

    // 3. navigate to the page
    await page.goto('https://demo.automationtesting.in/Register.html');

    // 4. verify page title
    await expect(page).toHaveTitle('Register');

    // 5. wait for page load
    await page.waitForLoadState('domcontentloaded');

    // ---------- INPUT FIELDS ----------
    await page.fill('input[placeholder="First Name"]', 'Srinivas');
    await page.fill('input[placeholder="Last Name"]', 'Reddy');
    await page.fill('textarea[ng-model="Adress"]', 'Hyderabad');
    await page.fill('input[type="email"]', 'qa@test.com');
    await page.fill('input[type="tel"]', '9876543210');

    // assertion for input field
    await expect(page.locator('input[placeholder="First Name"]')).toHaveValue('Srinivas');

    // ---------- RADIO BUTTON ----------
    await page.check('input[value="Male"]');

    await expect(page.locator('input[value="Male"]')).toBeChecked();

    // ---------- CHECKBOX ----------
    await page.check('#checkbox1'); // Cricket
    await page.check('#checkbox2'); // Movies

    await expect(page.locator('#checkbox1')).toBeChecked();
    await expect(page.locator('#checkbox2')).toBeChecked();

    // ---------- DROPDOWN ----------
    await page.selectOption('#Skills', 'Java');

    await expect(page.locator('#Skills')).toHaveValue('Java');

});