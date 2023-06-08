const { chromium } = require("playwright");
import { Page, BrowserContext, Locator, expect, request } from '@playwright/test';
import { APIActions } from '@lib/APIActions';
import test from '@lib/BaseTest';
import { AddCardPage } from '@pages/AddCardPage';
import { Token } from 'monaco-editor';
// const TRELLO_API_KEY = "64fc3f6eb0c94583d2d5dd729c0e8fe0";
// const TRELLO_TOKEN = "8d6cf76288a43b0d09ce35e251dad55407e91462f98209af0238e0fed4c718e1";
// const BOARD_NAME = "Oyawin";
// const apiUrl = `https://api.trello.com/1/boards/`;
const apiActions = new APIActions();
const DataPayroll = {name:"unique",defaultLists:true,idOrganization:"647bc0937dc653e8e0965da2",prefs_background_url:"https://images.unsplash.com/photo-1685665509769-3a907848565f?ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjg1ODY1NTI4fA&ixlib=rb-4.0.3&w=2560&h=2048&q=90",prefs_permissionLevel:"org",prefs_selfJoin:true,token:"6190afbf407fc55ea840dc68/ATTSQbO9tYiTESkpSD9ZnOKrmTt0fHDlR4T2NNLVBWR2niNfUrcmKYZjNjMMuGst3BVo90A4CCF0",dsc:"004496c446f2b33758bb2c4aa3d599cbc4f096d4f8a3079da20a3c79198f1455"};
var myBoardID = 'asd'

test(`@Test Cases: API- UI Test Automation Case for Trello`, async ({ loginPage,createWorkspacePage,webActions,baseURL,playwright,addCardPage,setlabelcard}) => {
    await test.step(`Navigate to Application`, async () => {
        await loginPage.navigateToURL();
    });

    await test.step(`Click on Login button in Main page`, async () => {
        await loginPage.clickOnLoginMainButton();
    });
    await test.step(`Login to Trello application`, async () => {
        await loginPage.loginToApplication();
    })

    await test.step(`Login to Trello application Success`, async () => {
        await loginPage.clickOnLoginSuccess();
    });

    await test.step(`Click For Add Workspace`, async () => {
        await createWorkspacePage.clickForCreateWorkspace();
    });
  
    await test.step(`Add Workspace Name`, async () => {
        await createWorkspacePage.workspaceNAme();
    });

    await test.step(`add Workspace Type`, async () => {
        await createWorkspacePage.selectWorkspaceType();
    });

    await test.step(`Click to Submit Button`, async () => {
        await createWorkspacePage.clickWorkspaceSubmitButton();
    });

   // * In Case you application has token system, Please use the below code

//     await test.step(`Create Board through API`, async () => {
//     const apiContext = await playwright.request.newContext({
//         baseURL: baseURL,
//         extraHTTPHeaders: {
//             'Autorization': `token`
//         }
//     });
  
//     const response = await apiContext.post(`https://api.trello.com/1/boards/`);
//     await apiActions.verifyStatusCode(response);
//     console.log(response.status);

//     //* Body Response Params and Body Response Headers are stored in single text file separated by #
//     const responseBodyParams = (await apiActions.readValuesFromTextFile(`getUsers`)).split(`#`)[0];
//     await apiActions.verifyResponseBody(responseBodyParams, await response.json(), `Response Body`);

//     const responseBodyHeaders = (await apiActions.readValuesFromTextFile(`getUsers`)).split(`#`)[1];
//     await apiActions.verifyResponseHeader(responseBodyHeaders, response.headersArray(), `Response Headers`);
// });

    await test.step(`Creating a new trello board`, async () => {

        const baseUrl = 'https://api.trello.com/1/boards/';
        const name = '?name=Oyawin';
        const key = '&key=64fc3f6eb0c94583d2d5dd729c0e8fe0';
        const token = '&token=8d6cf76288a43b0d09ce35e251dad55407e91462f98209af0238e0fed4c718e1'
        const url = baseUrl + name + key + token;
        const apiContext = await playwright.request.newContext();
        const boardResponse = await apiContext.post(url)

                       const resBody =         JSON.parse(await boardResponse.text())
                       myBoardID =  resBody.id
                       console.log(resBody)
                       console.log(resBody.id)
    //    const boardResponseJson =  await boardResponse.json();
    //    const boardId = await boardResponseJson.idBoard;
    //     console.log('Board ID:', boardId);
    //    console.log(boardResponseJson.status);

    }); 

    await test.step(`Creating a new card on the board.`, async () => {
        await addCardPage.addCard();
    });


    
    await test.step(`Creating a new Label Major`, async () => {

        const baseUrl = 'https://api.trello.com/1/labels';
        const name = '?name=Major';
        const color = '&color=green';
        const idBoard = '&idBoard='+myBoardID
        const key = '&key=64fc3f6eb0c94583d2d5dd729c0e8fe0';
        const token = '&token=8d6cf76288a43b0d09ce35e251dad55407e91462f98209af0238e0fed4c718e1'
        const url = baseUrl + name + key + token+color+idBoard;
        const apiContext = await playwright.request.newContext();
        const boardResponse = await apiContext.post(url)
       const boardResponseJson =  await boardResponse.json();
       
       console.log(boardResponseJson.status);

    }); 

    await test.step(`Set the Major label to the card.`, async () => {
        await setlabelcard.setLabelOnCard();
    });


});

