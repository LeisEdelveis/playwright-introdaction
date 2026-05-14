
import {expect,test,Locator} from "@playwright/test";


test.beforeEach(async ({ page }) => {
  const path = require('path');
  const filePath = `file://${path.resolve('html/dummy-order.html')}`;
  await page.goto(filePath);
})

test('all elements are visible', async ({ page }) => {
  const orderButton: Locator = page.getByTestId('submit-order')
  const usernameField: Locator = page.getByTestId('username')
  const emailField: Locator = page.getByTestId('email')

  await expect(orderButton).toBeVisible();
  await expect(usernameField).toBeVisible();
  await expect(usernameField).toBeVisible();
  await expect(orderButton).toBeDisabled();

});

test('Fill all fields and place an order', async ({ page }) => {
  const orderButton: Locator = page.getByTestId('submit-order')
  const usernameField: Locator = page.getByTestId('username')
  const emailField: Locator = page.getByTestId('email')

  const popupOk:Locator = page.locator('#popup-message')

  await usernameField.fill('TinyName')
  await emailField.fill('HolyEmail@mail.com')
  await orderButton.click();



  await expect(popupOk).toBeVisible();

});


test('Verify email field validation', async ({ page }) => {
  const orderButton: Locator = page.getByTestId('submit-order')
  const usernameField: Locator = page.getByTestId('username')
  const emailField: Locator = page.getByTestId('email')

  const popupOk:Locator = page.locator('#popup-message')

  await usernameField.fill('TinyName')
  await emailField.fill('HolyEmail@mail')
  await expect(orderButton).toBeDisabled();
});

test('Verify that username is needed', async ({ page }) => {
  const orderButton: Locator = page.getByTestId('submit-order')
  const usernameField: Locator = page.getByTestId('username')
  const emailField: Locator = page.getByTestId('email')


  await emailField.fill('HolyEmail@mail.com')
  await expect(orderButton).toBeDisabled();
});






