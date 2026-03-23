import {test,expect} from "@playwright/test";

test(" pass punpro login test",async({page})=>{
    await page.goto('https://staging-www.punpro.com/login');
   await page.getByRole('button', { name: 'เข้าสู่ระบบด้วยอีเมล' }).click();
  await page.getByRole('textbox', { name: 'email' }).click();
  await page.getByRole('textbox', { name: 'email' }).fill('testpunpro@gmail.com');
  await page.getByRole('textbox', { name: 'email' }).press('Tab');
  await page.getByRole('textbox', { name: 'password' }).fill('123456');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ', exact: true }).click();
  await page.goto('https://staging-www.punpro.com/'); 
});

test("fail punpro login test",async({page})=>{
    await page.goto('https://staging-www.punpro.com/login');
    await page.getByRole('button', { name: 'เข้าสู่ระบบด้วยอีเมล' }).click();
  await page.getByRole('textbox', { name: 'email' }).click();
  await page.getByRole('textbox', { name: 'email' }).fill('testpunpro@gmail.com');
  await page.getByRole('textbox', { name: 'email' }).press('Tab');
  await page.getByRole('textbox', { name: 'password' }).fill('123');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ', exact: true }).click();
  await expect(page.getByLabel('', { exact: true })).toContainText('');
  await expect(page.locator('#swal2-content')).toContainText('The password is invalid or the user does not have a password.');
  await expect(page.getByRole('button')).toContainText('OK');
  await page.screenshot({path:'FailLogin.png'}); 
  await page.getByRole('button', { name: 'OK' }).click();
});


