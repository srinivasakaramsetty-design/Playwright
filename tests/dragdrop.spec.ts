import { test} from '@playwright/test';

test('drag and drop test', async ({ page }) => {

  // Open website
  await page.goto('https://demoqa.com/droppable');

  // Source element
  const source = page.locator('#draggable').first();

  await page.waitForTimeout(2000); // Wait for 2 seconds

  // Target element
  const target = page.locator('.simple-drop-container #droppable');

  // Drag and Drop
  await source.dragTo(target);

});