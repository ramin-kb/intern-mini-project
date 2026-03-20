import { Before, After } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';

Before(async () => {
    await LoginPage.open();
    await LoginPage.performLogin();
});

After(async () => {
    await browser.deleteCookies(); 
})