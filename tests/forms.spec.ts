import { test, expect } from '@playwright/test';

test('Practice Form with waits and dropdown value print', async ({ page }) => {

  await page.goto('https://demoqa.com/automation-practice-form');

  await page.waitForLoadState('domcontentloaded');

  // Scroll properly
  await page.locator('#submit').scrollIntoViewIfNeeded();

  // First Name
  await page.locator('#firstName').fill('Srinivas');

  // Last Name
  await page.locator('#lastName').fill('Kumar');

  // Gender Radio Button
  await page.locator('label[for="gender-radio-1"]').click();

  // Hobbies Checkbox
  await page.locator('label[for="hobbies-checkbox-1"]').click();

  // ---------------- STATE ----------------

  await page.locator('#state').click();

  await page.locator('#react-select-3-input').fill('NCR');

  const stateValue =
    await page.locator('#react-select-3-input').inputValue();

  console.log('Selected State:', stateValue);

  await page.keyboard.press('Enter');

  // ---------------- CITY ----------------

  await page.locator('#city').click();

  await page.locator('#react-select-4-input').fill('Delhi');

  const cityValue =
    await page.locator('#react-select-4-input').inputValue();

  console.log('Selected City:', cityValue);

  await page.keyboard.press('Enter');

  // Scroll again before submit
  await page.locator('#submit').scrollIntoViewIfNeeded();

  // Wait for button
  await page.locator('#submit').waitFor({ state: 'visible' });

  // Force click avoids overlay issue
  await page.locator('#submit').click({ force: true });

  // Wait for modal
 
});