import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test ('TEST_NAME', async ({ page }) => {

  // open browser and go to the web
  await page.goto('https://www.mercadolibre.com.co')

  // type iphone 
  await page.locator('input[id=\'cb1-edit\']').fill('iPhone');
  await page.keyboard.press('Enter');

  // to validate if the title is visible
  await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible();
  // await page.pause();

  // Get the text about all items or elements  .allallInnerTexts() return array of strings
  const titles = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//li//h3').allInnerTexts();

  // to iterate a title into array
  for (let title of titles){
    console.log('The title is:', title);
  }

  // Locator
  /**
   * getByPlaceholder - Identificar por medio de su placeholder.
   * getByAtlText - identificar por medio del texto alternativo.
   * getByRole - identificar elementos basados en su accesibilidad.
   */

});

test ('TEST_NAME_2', async ({ page }) => {

  // open browser and go to the web
  await page.goto('https://www.mercadolibre.com.co');
  // nth(1) le decimos que es el primer elemento que encuentre.
  await page.getByRole('link', {name: 'Mis compras'}).nth(1).click();

  await page.pause();
});