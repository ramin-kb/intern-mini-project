import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page';

const pages: Record<string, typeof LoginPage> = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page: string) => {
    await pages[page].open()
});

When(/^I login with valid credentials$/, async () => {
    await LoginPage.performLogin()
});

Then(/^I should see dashboard$/, async () => {
    await expect(LoginPage.goToDashBoardPage)
});

