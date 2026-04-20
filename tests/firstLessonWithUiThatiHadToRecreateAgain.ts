import {test, expect} from "@playwright/test";

test.only('has title', async ({ page }) => {
    await page.goto('http://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);
});

test.only('get started link', async ({ page} ) => {
    await page.goto('http://playwright.dev');

    await expect(page.getByRole('link', {name: 'Star microsoft/playwright on'})).toBeVisible();

    await page.getByRole('link', {name: 'Get started'}).click();
    await expect(page.getByRole('heading', { name: 'Installation'})).toBeVisible();
});