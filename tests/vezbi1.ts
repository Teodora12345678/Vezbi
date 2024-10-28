import { test, expect } from '@playwright/test';

test.describe('Tests for first day', ()=> {

test.beforeEach(async({page}) =>{
await page.goto("/")
});

  test('test1-Verify page title', async ({ page }) => {
  await expect(page).toHaveTitle('Computer database');
});
  
  test('test2-Add a new computer', async({page})=>{
  const addNewComputer = page.locator('#add');
  await addNewComputer.click();
  
  // Locating a button with the role "button" and name "Computer name"
  const submitButton = await page.getByRole('button', { name: 'Submit' });
  await submitButton.click();

  })

test('test 2 - create new computer', async ({ page }) => {
    await page.goto('https://computer-database.gatling.io/computers');
    await page.getByRole('link', { name: 'Add a new computer' }).click();
    await page.getByLabel('Computer name').click();
    await page.getByLabel('Computer name').fill('test');
    await page.getByLabel('Introduced').click();
    await page.getByLabel('Introduced').fill('2000-01-01');
    await page.getByLabel('Discontinued').click();
    await page.getByLabel('Discontinued').fill('2001-01-01');
    await expect(page.getByLabel('Discontinued')).toBeVisible();
    await page.getByLabel('Company').selectOption('1');
    await expect(page.getByLabel('Company')).toBeVisible();
    await page.getByRole('button', { name: 'Create this computer' }).click();
    await page.getByText('Done ! Computer test has been').click();
    await expect(page.getByText('Done ! Computer test has been')).toBeVisible();
  });
});