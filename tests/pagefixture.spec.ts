import {test} from '@playwright/test'

test("launch using page fixture",async({page})=>

{
  
 await page.goto("https://www.facebook.com/login.php/")
 page.waitForLoadState("domcontentloaded")
const title=await page.title();
console.log(title);
const urll= page.url();
console.log(urll)

}
)