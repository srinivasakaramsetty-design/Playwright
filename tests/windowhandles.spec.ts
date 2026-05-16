import { test, expect } from '@playwright/test';

test('Handle new window', async ({ page, context }) => {

  // Open website
  await page.goto('https://the-internet.herokuapp.com/windows');

  // Wait for new page while clicking
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('text=Click Here')
  ]);

  // Wait for new page to load
  await newPage.waitForLoadState();

  // Print title
  console.log(await newPage.title());

  // Validation
  await expect(newPage.locator('h3'))
    .toHaveText('New Window');

});