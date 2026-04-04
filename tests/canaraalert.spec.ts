import {test} from '@playwright/test'

test("alertss", async({page})=>
{
await page.goto("https://www.canarabank.bank.in/pages/Net-banking");


page.on("dialog",async(alert)=>
{
const alerttype=alert.type();
console.log(alerttype);
const alertmessgae=alert.message();
console.log(alertmessgae)
     console.log(alerttype)
    await alert.accept();
   

})

await page.locator("//a[@id='netbanking-link']").click();


})