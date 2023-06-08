import test from '@lib/BaseTest';

test(`Generate and verify HAR file for Login Page.`, async ({ page, loginPage,createWorkspacePage, webActions }) => {
    // To record HAR file use below line where "update:true"
    // This line creates a directory named har and stores all the har related files in it.
    await page.routeFromHAR('har/loginPage.har', { update: true });

    // Once you record the har file you can uncomment the below line for Network Replay with update:false
    //The below line uses the har file from the recoded directory.
    // await page.routeFromHAR('har/loginPage.har',{update:false});
    await loginPage.navigateToURL();
    await webActions.clickByText('Input');
    await loginPage.clickOnLoginMainButton();
    await loginPage.clickOnContinueBtn();
    await loginPage.loginToApplication();
    await loginPage.clickOnLoginSuccess();
    // await createWorkspacePage.CLICK_ADD();
   
});