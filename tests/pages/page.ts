import {Locator} from "@playwright/test";
import {Page} from '@playwright/test'


export class ToDoPage {
    readonly todoTextInput: Locator;
    readonly todoItemToggle: Locator;
    readonly activeLink: Locator;
    readonly completedLink: Locator;
    readonly todoItemLabel: Locator;

    constructor(page: Page) {
        this.todoTextInput = page.getByTestId('text-input');
        this.todoItemToggle = page.getByTestId('todo-item-toggle');
        this.activeLink = page.getByRole('link', {name: 'active'});
        this.completedLink = page.getByRole('link', {name: 'completed'})
        this.todoItemLabel = page.getByTestId('todo-item-label');

    }
}