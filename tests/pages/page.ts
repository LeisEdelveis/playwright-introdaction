import {Locator} from "@playwright/test";
import { Page } from '@playwright/test'
import {lookup} from "node:dns";


export class toDoPage{
    readonly todoInput: Locator;
    readonly page:Locator;
    readonly toggle:Locator;
    readonly clearCompleted:Locator;
    readonly linkCompleted:Locator;
    readonly todoLabel:Locator;



    constructor(todoInput: Locator, page: Locator) {
        this.todoInput = page.getByTestId('text-input');
        this.page = page;
        this.toggle = page.getByTestId('todo-item-toggle');
        this.clearCompleted = page.getByRole('link', {name: 'active'});
        this.linkCompleted = page.getByRole('link', {name: 'completed'})
        this.todoLabel = page.getByTestId('todo-item-label');

    }
}