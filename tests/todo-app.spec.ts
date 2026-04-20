import {test,Locator,expect} from "@playwright/test";

const URL='https://todo-app.tallinn-learning.ee/'

test('test a task', async ({page}) => {
    await page.goto(URL)

    const todoInput:Locator = page.getByTestId('text-input')
    await todoInput.fill('water a plant')
    await todoInput.press('Enter')

    const todoTask:Locator = page.getByTestId('todo-item-label')
    await expect(todoTask).toBeVisible()
});

test('test that 2 tasks and validate filters', async ({page}) => {
    await page.goto(URL)

    const todoInput:Locator = page.getByTestId('text-input')
    await todoInput.fill('water a plant')
    await todoInput.press('Enter')


    await todoInput.fill('Go to the gym')
    await todoInput.press('Enter')

    const todoTask:Locator = page.getByTestId('todo-item-label')

    await expect(todoTask).toHaveCount(2)
    const completedLink = page.getByRole('link', {name:'Completed'})
    await completedLink.click();
    await expect(todoTask).toHaveCount(0)


});


test('create a task and mark as completed', async ({page}) => {
    await page.goto(URL)

    const todoInput:Locator = page.getByTestId('text-input')
    await todoInput.fill('water a plant')
    await todoInput.press('Enter')
    const toggle = page.getByTestId('todo-item-toggle')
    await toggle.click()

    const todoTask:Locator = page.getByTestId('todo-item-label')
    await expect(todoTask).toHaveCount(1)


    const completedLink = page.getByRole('link', {name: 'Completed'})
    await completedLink.click();
    await expect(todoTask).toHaveCount(1)


    const activeLink = page.getByRole('link', {name: 'Active'})
    await activeLink.click();
    await expect(todoTask).toHaveCount(0)


    const clear = page.getByRole('button', {name: 'Clear completed'})
    await clear.click()
    await expect(todoTask).toHaveCount(0)
});

test.only('create a task and rename it', async ({page}) => {
    await page.goto(URL)

    const todoInput:Locator = page.getByTestId('text-input')
    await todoInput.fill('water a plant')
    await todoInput.press('Enter')

    const todoTask:Locator = page.getByTestId('todo-item-label')

    await todoTask.dblclick()
    await page.getByTestId('todo-item').getByTestId('text-input').fill('kwa');
    await page.getByTestId('todo-item').getByTestId('test-input').press('Enter');

});