import { test, expect } from '@playwright/test';

test('Handle Alerts', async ({ page }) => {

    // Open website
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Wait for observation
    await page.waitForTimeout(2000);

    // ==============================
    // JS ALERT
    // ==============================

    page.once('dialog', async dialog => {

        console.log('Alert Message:', dialog.message());

        await page.waitForTimeout(1000);

        await dialog.accept();
    });

    await page.click('text=Click for JS Alert');

    await page.waitForTimeout(2000);

    await expect(page.locator('#result'))
        .toHaveText('You successfully clicked an alert');



    // ==============================
    // JS CONFIRM
    // ==============================

    page.once('dialog', async dialog => {

        console.log('Confirm Message:', dialog.message());

        await page.waitForTimeout(1000);

        await dialog.dismiss();
    });

    await page.click('text=Click for JS Confirm');

    await page.waitForTimeout(2000);

    await expect(page.locator('#result'))
        .toHaveText('You clicked: Cancel');



    // ==============================
    // JS PROMPT
    // ==============================

    page.once('dialog', async dialog => {

        console.log('Prompt Message:', dialog.message());

        await page.waitForTimeout(1000);

        await dialog.accept('Playwright');
    });

    await page.click('text=Click for JS Prompt');

    await page.waitForTimeout(2000);

    await expect(page.locator('#result'))
        .toHaveText('You entered: Playwright');

});