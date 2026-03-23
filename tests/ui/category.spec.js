import { test, expect } from '@playwright/test';

test("check category test",async({page})=>{
    await page.goto('https://staging-www.punpro.com/category_groups/products');
    await page.getByTitle('รองเท้าผ้าใบผู้หญิง').click();
  await page.getByRole('link', { name: 'link', exact: true }).first().click();
  await page.getByRole('button', { name: 'Next slide' }).first().click();
  await page.getByRole('button', { name: 'Next slide' }).first().click();
  await page.locator('[id="1070-check"]').getByRole('button', { name: 'Next slide' }).click();
  await page.locator('[id="1070-check"]').getByRole('button', { name: 'Next slide' }).click();
  await page.locator('[id="1070-check"]').getByRole('button', { name: 'Next slide' }).click();
  await page.goto('https://staging-www.punpro.com/category_groups/products');
});