import {expect, Locator, test} from "@playwright/test";

test('with incorrect credentials check auth error', async ({ page }) => {
    const URL= 'https://fe-delivery.tallinn-learning.ee/signin'
    await page.goto(URL)


    const username: Locator = page.getByTestId('username-input')
    const password: Locator = page.getByTestId('password-input')
    const signInButton: Locator = page.getByTestId('signIn-button')
    const error:Locator = page.getByTestId('authorizationError-popup')

    await username.fill('random')
    await password.fill('sffeghjfjhr')
    await signInButton.click();

    await expect(error).toBeVisible()
});