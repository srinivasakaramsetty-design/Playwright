import { test, expect } from '@playwright/test';

test('should search on YouTube', async ({ page }) => {
  
  // Navigate to YouTube
  await page.goto('https://www.youtube.com', { waitUntil: 'domcontentloaded' });

  // Type in search box
  await page.fill('input[name="search_query"]', 'playwright tutorial');

  // Press Enter
  await page.keyboard.press('Enter');

  // Wait for results page URL
  await expect(page).toHaveURL(/results/);
});