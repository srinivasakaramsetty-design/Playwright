import  {test, expect} from '@playwright/test';
test('Checkbox', async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await page.locator('input[type="checkbox"]').first().check();
   const isChecked = await page.locator('input[type="checkbox"]').first().isChecked();
   console.log(isChecked);

   await page.locator('input[type="checkbox"]').nth(1).uncheck();
  
}

);