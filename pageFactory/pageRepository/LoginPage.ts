import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { testConfig } from '../../testConfig';

let webActions: WebActions;

export class LoginPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly LOGIN_BUTTON: Locator;
    readonly USERNAME_EDITBOX: Locator;
    readonly CONTINUE_BUTTON: Locator;
    readonly PASSWORD_EDITBOX: Locator;
    readonly LOGIN_BUTTON_SUCCESS: Locator;


    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.USERNAME_EDITBOX = page.getByPlaceholder('Enter email');
        this.CONTINUE_BUTTON = page.getByRole('button', { name: 'Continue' });
        this.PASSWORD_EDITBOX = page.getByPlaceholder('Enter password');
        this.LOGIN_BUTTON = page.getByTestId('bignav').getByRole('link', { name: 'Log in' });
        this.LOGIN_BUTTON_SUCCESS=page.getByRole('button', { name: 'Log in' });
   
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto("/");
    }

    async clickOnLoginMainButton(): Promise<void> {
        await this.LOGIN_BUTTON.click();
    }
    async clickOnContinueBtn(): Promise<void> {
        await this.CONTINUE_BUTTON.click();
    }
    async loginToApplication(): Promise<void> {
        const decipherPassword = await webActions.decipherPassword();
        await this.USERNAME_EDITBOX.fill(testConfig.username);
        await this.CONTINUE_BUTTON.click();
        await this.PASSWORD_EDITBOX.fill(testConfig.password);
        // await this.LOGIN_BUTTON.click();
    }
    
    async clickOnLoginSuccess(): Promise<void> {
        await this.LOGIN_BUTTON_SUCCESS.click();
    }

    // async verifyProfilePage(): Promise<void> {
    //     await expect(this.BOOKS_SEARCH_BOX).toBeVisible();
    // }
}