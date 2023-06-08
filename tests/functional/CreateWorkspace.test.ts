import test from '@lib/BaseTest';
import { CreateWorkspacePage } from '@pages/CreateWorkspacePage';

// We can use Steps like in Cucmber format as shown below

test(`@Test case for Create Workspace`, async ({ createWorkspacePage, webActions }) => {
    await test.step(`Click For Add Workspace`, async () => {
        await createWorkspacePage.CLICK_ADD;
    });

    await test.step(`Add Workspace Name`, async () => {
        await createWorkspacePage.WORKSPACE_NAME;
    });

    await test.step(`Click Workspace Type`, async () => {
        await createWorkspacePage.CLICK_WORKSPACE_TYPE;
    });

    await test.step(`Select Workspace Type`, async () => {
        await createWorkspacePage.SELECT_WORKSPCAE_TYPE;
    });

    await test.step(`Click to Submit Button`, async () => {
        await createWorkspacePage.CREATE_WORKSPACE_SUBMIT;
    });

    await test.step(`Click Show Later`, async () => {
        await createWorkspacePage.SHOW_LATER_BUTTON;
    });


   
}); 