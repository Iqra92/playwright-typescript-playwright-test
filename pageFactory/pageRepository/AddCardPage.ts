import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { testConfig } from '../../testConfig';

let webActions: WebActions;

export class AddCardPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly CretaedBoard_BUTTON: Locator;
    readonly ADDCARD_BUTTON: Locator;
    readonly click_AddCard: Locator;
    readonly ADDCARD_DESC: Locator;
    readonly ADDCARD_SUCESS_BUTTON: Locator;
  

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.CretaedBoard_BUTTON = page.getByRole('link', { name: 'Oyawin' });
        this.ADDCARD_BUTTON =  page.locator('div').filter({ hasText: /^To DoTo Do0 cards$/ }).getByRole('link', { name: 'List actions' });
        this.click_AddCard = page.getByRole('link', { name: 'Add card…' });
        this.ADDCARD_DESC =   page.getByPlaceholder('Enter a title for this card…');
        this.ADDCARD_SUCESS_BUTTON = page.getByRole('button', { name: 'Add card' });
    
    }

    async addCard(): Promise<void> {
        await this.CretaedBoard_BUTTON.click();
        await this.ADDCARD_BUTTON.click();
        await this.click_AddCard.click();
        await this.ADDCARD_DESC.fill(testConfig.addCardDesc);
        await this.ADDCARD_SUCESS_BUTTON.click();
    }
}