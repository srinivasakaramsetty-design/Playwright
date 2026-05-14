// hi there

import { test, expect } from '@playwright/test';

test('Dropdown', async ({ page }) => 
{
  await page.goto('https://the-internet.herokuapp.com/dropdown');


  await page.locator('#dropdown').click();

  // await page.selectOption('#dropdownId', '1');

  // await page.selectOption('#dropdown',{ label: 'Option 1' });

  await page.selectOption('#dropdown', '1');

});

