import { test } from '@playwright/test';

test('Scroll to Static Web Table', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Scroll to table
  await page.locator('#productTable')
    .scrollIntoViewIfNeeded();

  await page.waitForTimeout(3000);

  // Store locator
  const rows = page.locator('#productTable tbody tr');

  // Count rows
  const rowCount = await rows.count();

   console.log('-----------------------------------');

  console.log(`Total number of rows in the table: ${rowCount}`);

  // Loop through rows
  for (let i = 0; i < rowCount; i++) {

    
    const cols = await rows.nth(i)
      .locator('td')
      .allTextContents();

    // Add spacing between columns
    console.log(cols.join('   |   '));

     

    
  }

});

