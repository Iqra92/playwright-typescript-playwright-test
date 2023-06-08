import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { testConfig } from '../../testConfig';

let webActions: WebActions;

export class SetLabelCard {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly Click_Card_Edit: Locator;
    readonly Click_Label: Locator;
    readonly Click_Major_Label: Locator;
    readonly Close_Popup: Locator;
    readonly Close_Dialog: Locator;
  

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.Click_Card_Edit = page.getByRole('link', { name: 'Test Automation' });
        this.Click_Label =  page.getByRole('link', { name: ' Labels' });
        this.Click_Major_Label = page.getByRole('listitem').filter({ hasText: 'Major' }).locator('svg').first();
        this.Close_Popup =   page.getByTestId('popover-close');
        this.Close_Dialog = page.getByRole('button', { name: 'Close dialog' });
    
    }

    async setLabelOnCard(): Promise<void> {
        await this.Click_Card_Edit.click();
        await this.Click_Label.click();
        await this.Click_Major_Label.click();
       // await this.Close_Popup.fill(testConfig.addCardDesc);
        //await this.Close_Dialog.click();
    }
}