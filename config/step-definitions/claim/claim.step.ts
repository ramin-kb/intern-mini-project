import { Given, When, Then } from '@cucumber/cucumber';
import  ClaimPage from '../../pageobjects/claim/claim.page';

let referenceId: string;
let createName: string;
Given(/^I am on the Employee Claims page$/, async () => {
    await ClaimPage.openClaimMenu();
});
When(/^I enter (\w+) in the search box$/, async (type) => {
    await ClaimPage.searchClaim(type);
});

When(/^I click the (\w+) button$/, async (button) => {
    await ClaimPage.clickButton(button);
});

When(/^I create a claim with (\w+) data$/, async (type) => {
    referenceId = await ClaimPage.createClaim(type);
});

When(/^I search for the newly created claim request$/, async () => {
    await ClaimPage.searchByReferenceId(referenceId);
});

When(/^I navigate to the (\w+) page$/, async (pages) => {
    await ClaimPage.clickToPage(pages);
});

When(/^I add new (\w+) for a configuration$/, async (type) => {
    createName = await ClaimPage.addConfiguration(type);
});

When(/^I search for the newly created (events|expense)$/, async (type) => {
    await ClaimPage.searchByName(type);
});

When(/^I edit the (\w+) with full criteria$/, async (type) => {
    createName = await ClaimPage.editConfiguration(type);
});

When(/^I select the record from the search results$/, async () => {
    await ClaimPage.selectRecord();
});

Then(/^the (\w+) results should be displayed successfully$/, async (type) => {
    await ClaimPage.verifyRecordsFound(type);
});

Then(/^the claim should display (\w+) page successfully$/, async (title) => {
    await ClaimPage.verifyTitleDisplayed(title);
});

Then(/^the record should be (\w+) successfully$/, async (message) => {
    await ClaimPage.verifyClaimMessage(message);
});