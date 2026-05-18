const { test, expect } = require('@playwright/test');

test('file upload example', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');

  await page.waitForTimeout(3000);

  // Upload file using unique id
  await page.locator('#file-upload')
    .setInputFiles('C:/Users/sakaramsetty/Downloads/bdd.txt');

    await page.waitForTimeout(3000);

  // Click upload button
  await page.locator('#file-submit').click();

  await page.waitForTimeout(3000);

  // Verify upload success
  await expect(page.locator('h3'))
    .toHaveText('File Uploaded!');

  // Verify uploaded file name
  await expect(page.locator('#uploaded-files'))
    .toHaveText('bdd.txt');

});