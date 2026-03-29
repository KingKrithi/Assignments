import {test} from '@playwright/test'


test("Todays assignments", async({page})=>
{

await page.goto("https://www.leafground.com/select.xhtml")
await page.locator("//select[@class='ui-selectonemenu']").selectOption({value:'Selenium'})
    const autodrops=page.locator("//select[@class='ui-selectonemenu']/option");
    const autocount= await autodrops.count();
    for(let i=0;i<autocount;i++)
    {
console.log(await autodrops.nth(i).innerText());
    }
await page.locator ("//label[text()='Select Country']").click();
await page.locator("//li[contains(text(),'India')]").click();

    }

)