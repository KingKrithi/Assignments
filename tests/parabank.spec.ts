import {test,expect} from '@playwright/test'

test("PW locators", async({page})=>
{

    await page.goto("https://parabank.parasoft.com/parabank/index.htm")
    await page.getByRole("link",{name:"Forgot login info?"}).click()
    await page.getByAltText("ParaBank").click();
    await page.getByText("Locations").first().click();
    await page.getByRole("button",{name:'Search'}).click()
    await page.getByPlaceholder("Search").fill("Chennai")
 await page.getByPlaceholder("Search").press("Enter")
})