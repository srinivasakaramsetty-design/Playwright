import { test, expect } from '@playwright/test';

test('Open Website', async ({ page }) => {

  await page.goto('https://www.google.com');

  const title = await page.title();
  console.log('Page Title is:', title);

  await expect(page).toHaveTitle(/Google/);
  await expect(page).toHaveURL(/google/);

});

