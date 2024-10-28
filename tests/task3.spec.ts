import { test, expect } from '@playwright/test';

test('Search by computer and verify the number of items is equavual to the message', async ({ page }) => {
    await page.goto('https://computer-database.gatling.io/computers');
    const filterinput = page.locator('#searchbox')
    await filterinput.fill('ACE')
     
    const filterBynameBtn =page.locator('#searchsubmit')
    await filterBynameBtn.click();
    
    const computers = page.locator('tbody tr td a')
    var numberofcomputers = await computers.count()
    
    const searchResultMsg = page.locator('#main h1')
    await expect(searchResultMsg).toHaveText(numberofcomputers + " " + "computers found")
    await expect(searchResultMsg).toHaveText(`${numberofcomputers} computers found`)
});
