import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { WebActions } from '@lib/WebActions';
import { CreateWorkspacePage } from '@pages/CreateWorkspacePage';
import { APIActions } from './APIActions';
import { AddCardPage } from '@pages/AddCardPage';
import { SetLabelCard } from '@pages/SetLabelToCard';




const test = baseTest.extend<{
    webActions: WebActions;
    loginPage: LoginPage;
    createWorkspacePage: CreateWorkspacePage;
    addCardPage: AddCardPage;
    setlabelcard: SetLabelCard;
   
}>({
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    },
    createWorkspacePage: async ({ page, context }, use) => {
        await use(new CreateWorkspacePage(page, context));
    },

    addCardPage: async ({ page, context }, use) => {
        await use(new AddCardPage(page, context));
    },

    setlabelcard: async ({ page, context }, use) => {
        await use(new SetLabelCard(page, context));
    },


})

export default test;