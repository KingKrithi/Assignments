import {test,chromium} from '@playwright/test'
import { channel } from 'node:diagnostics_channel';

test("First launch",async()=>

{
  const browser=  await chromium.launch({channel:"msedge"});
 const context =  await  browser.newContext();
 const page=await context.newPage();
 await page.goto("https://platform.testleaf.com/")

}
)


test("launch using page fixture",async({page})=>

{
  
 await page.goto("https://www.facebook.com/login.php/")


}
)