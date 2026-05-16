// assertions.spec.ts

import { test, expect } from '@playwright/test';

test('Swag Labs Assertions Demo', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

   await page.waitForTimeout(1000);


  // Login Page Assertions
  await expect(page).toHaveTitle(/Swag Labs/);

  const username = page.locator('#user-name');
  const password = page.locator('#password');
  const loginBtn = page.locator('#login-button');

  await expect(username).toBeVisible();
  await expect(password).toBeVisible();
  await expect(loginBtn).toBeEnabled();

   await page.waitForTimeout(1000);

  // Login
  await username.fill('standard_user');
    await page.waitForTimeout(2000);
  await password.fill('secret_sauce');
    await page.waitForTimeout(2000);

  await expect(username).toHaveValue('standard_user');
  await expect(password).toHaveValue('secret_sauce');

  await loginBtn.click();

    await page.waitForTimeout(2000);

  // Inventory Page Assertions
  await expect(page).toHaveURL(/inventory/);

  const appLogo = page.locator('.app_logo');
  const products = page.locator('.inventory_item');
  const addToCartBtn = page.locator('#add-to-cart-sauce-labs-backpack');

  await expect(appLogo).toContainText('Swag Labs');
  await expect(products).toHaveCount(6);
  await expect(addToCartBtn).toBeVisible();

  await page.waitForTimeout(2000);

  // Add Product

  // Add Product
  await addToCartBtn.click();

 await page.waitForTimeout(2000);


  // Add Product

  // Cart Assertion
  const cartBadge = page.locator('.shopping_cart_badge');

  await expect(cartBadge).toHaveText('1');

   await page.waitForTimeout(1000);


  console.log('ALL ASSERTIONS PASSED SUCCESSFULLY');
});