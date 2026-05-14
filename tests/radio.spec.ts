import {test, expect} from '@playwright/test';

test('Radio', async ({page}) => {
  await page.goto('https://demoqa.com/radio-button');
  await page.locator('#yesRadio').check();
  const isChecked = await page.locator('#yesRadio').isChecked();
  console.log(isChecked);
});

