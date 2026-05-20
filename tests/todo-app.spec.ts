import {test, expect} from "@playwright/test";
import {ToDoPage} from "./pages/page";


const URL = 'https://todo-app.tallinn-learning.ee/';

let todoPage: ToDoPage;

test.beforeEach(async ({page}) => {
    await page.goto(URL);

    todoPage = new ToDoPage(page);
});

test('test a task', async () => {
    const input = todoPage.todoTextInput;

    await input.fill('water a plant')
    await input.press('Enter')

    const task = todoPage.todoItemLabel;

    await expect(task).toBeVisible()
});

test('test that 2 tasks and validate filters', async () => {
    const input = todoPage.todoTextInput;

    await input.fill('water a plant')
    await input.press('Enter')

    await input.fill('Go to the gym')
    await input.press('Enter')

    const task = todoPage.todoItemLabel;

    await expect(task).toHaveCount(2)

    const completeTask = todoPage.completedLink;

    await completeTask.click();

    await expect(task).toHaveCount(0)
});


test('create a task and mark as completed', async () => {
    const input = todoPage.todoTextInput;

    await input.fill('water a plant')
    await input.press('Enter')

    const toggle = todoPage.todoItemToggle
    await toggle.click()

    const task = todoPage.todoItemLabel;
    await expect(task).toHaveCount(1)

    const completeTask = todoPage.completedLink;
    await completeTask.click();
    await expect(task).toHaveCount(1)

    const markCompleted = todoPage.completedLink
    await markCompleted.click()

    await expect(markCompleted).toHaveCount(1)
});

test('create a task and rename it', async ({page}) => {
    const input = todoPage.todoTextInput;

    await input.fill('water a plant')
    await input.press('Enter')

    const todoItemLabel = todoPage.todoItemLabel;
    await todoItemLabel.dblclick();

    const todoItemInput = page.getByTestId('todo-item').getByTestId('text-input')

    await todoItemInput.fill('kwa');
    await todoItemInput.press('Enter');
    await expect(todoItemLabel).toContainText('kwa');



});