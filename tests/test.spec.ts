import { test, expect } from '@playwright/test';
//test 2

    test('create a new computer', async ({ page }) => {
        await page.goto('https://computer-database.gatling.io/computers');
        await page.getByRole('link', { name: 'Add a new computer' }).click();
        await page.locator('#name').fill('ACE');
        await page.getByLabel('Introduced').click();
        await page.getByLabel('Introduced').fill('2000-01-01');
        await page.getByLabel('Discontinued').click();
        await page.getByLabel('Discontinued').fill('2001-01-01');
        await page.getByLabel('Company').selectOption('1');
        await page.getByRole('button', { name: 'Create this computer' }).click();
        //await page.click('input[type="submit"]');

        //await page.getByText('Done ! Computer test has been created');
        await expect(page.locator(".alert-message")).toBeVisible();

});
