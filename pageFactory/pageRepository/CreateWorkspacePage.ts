import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { testConfig } from '../../testConfig';

let webActions: WebActions;

export class CreateWorkspacePage {

readonly page: Page;
readonly context: BrowserContext;
readonly CLICK_ADD: Locator;
readonly WORKSPACE_NAME: Locator;
readonly CLICK_WORKSPACE_TYPE: Locator;
readonly SELECT_WORKSPCAE_TYPE: Locator;
readonly CREATE_WORKSPACE_SUBMIT: Locator;
readonly SHOW_LATER_BUTTON: Locator;

constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
    webActions = new WebActions(this.page, this.context);
    this.CLICK_ADD = page.getByTestId('home-navigation-create-team-button');
    this.WORKSPACE_NAME = page.getByTestId('header-create-team-name-input');
    this.CLICK_WORKSPACE_TYPE = page.getByTestId('header-create-team-type-input').locator('div').first();
    this.SELECT_WORKSPCAE_TYPE = page.getByTestId('header-create-team-type-input-engineering-it');
    this.CREATE_WORKSPACE_SUBMIT =  page.getByTestId('header-create-team-submit-button');
    this.SHOW_LATER_BUTTON=page.getByTestId('show-later-button');

}

async clickForCreateWorkspace(): Promise<void> {
    await this.CLICK_ADD.click();
}

async workspaceNAme(): Promise<void> {
    await this.WORKSPACE_NAME.fill(testConfig.workspaceName);
}

async selectWorkspaceType(): Promise<void> {
    await this.CLICK_WORKSPACE_TYPE.click();
    await this.SELECT_WORKSPCAE_TYPE.click();
}

async clickWorkspaceSubmitButton(): Promise<void> {
    await this.CREATE_WORKSPACE_SUBMIT.click();
    await this.SHOW_LATER_BUTTON.click();
}
}