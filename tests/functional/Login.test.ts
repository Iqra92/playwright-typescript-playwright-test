import test from '@lib/BaseTest';

// We can use Steps like in Cucmber format as shown below

test(`@Test case of Trello Login`, async ({ loginPage, webActions }) => {
    await test.step(`Navigate to Trello Application`, async () => {
        await loginPage.navigateToURL();
    });

    await test.step(`Click on Login button in Main page`, async () => {
        await loginPage.clickOnLoginMainButton();
    });
    await test.step(`Login to Trello application`, async () => {
        await loginPage.loginToApplication();
    });

    await test.step(`Login to Trello application Success`, async () => {
        await loginPage.clickOnLoginSuccess();
    });

}); 