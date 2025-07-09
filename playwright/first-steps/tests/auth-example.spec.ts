import { test, expect } from '@playwright/test';

test('saucedemo', { 
  tag:'@smoke' }, 
  async ({ page }) => {

    // go to the website
    await page.goto('https://saucedemo.com');

    // login
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByText('Login').click();

    // Save items
    const items = await page.locator('#inventory_container .inventory_item').all();

    // select random item
    const selectRandomItem = Math.floor(Math.random() * items.length);

    // get random item
    const getRandomItem = items[selectRandomItem];

    // get properties
    const expectedDescription = await getRandomItem.locator('.inventory_item_desc').innerText();
    const expectedName = await getRandomItem.locator('.inventory_item_name').innerText();
    const expectedPrice = await getRandomItem.locator('.inventory_item_price').innerText();
    await getRandomItem.getByRole('button', {name: 'Add to cart'}).click();
    
    console.log(`Name: ${expectedName} Descrption: ${expectedDescription} Price: ${expectedPrice}`);

    // add to cart
    
    await page.pause();


});