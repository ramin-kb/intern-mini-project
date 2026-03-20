import { $ } from "@wdio/globals";
import Page from "./page";
import * as dotenv from 'dotenv';

dotenv.config();
export type LoginType = 
    | 'valid';

export class LoginPage extends Page {
    async open() {
        await super.open('');
    }

    public get username() {
        return $('//input[@name="username"]');
    }
    public get password() {
        return $('//input[@name="password"]');
    }
    public get loginButton() {
        return $('//button[normalize-space()="Login"]')
    }

    // public async openLoginPage(){
    //     await this.open('');
    //     await this.waitForPageLoad();
    // }

    public async performLogin() {
        await this.setInputValue(this.username, process.env.ACCOUNT_USERNAME!);
        await this.setInputValue(this.password, process.env.ACCOUNT_PASSWORD!);
        await this.clickElement(this.loginButton);
    }

    public async goToDashBoardPage() {
        await this.waitUntilUrlContains('/dashboard');
    }

}
export default new LoginPage();