import { browser, $ } from '@wdio/globals'
import * as dotenv from 'dotenv'

dotenv.config();
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public async open (path: string) {
        await browser.url(`${process.env.BASE_URL}${path}`);
        await browser.maximizeWindow();
    }
    public async waitForPageLoad() {
        await browser.waitUntil(
            async () => await browser.execute(() => document.readyState === 'complete'),
            {
                timeout: 20000,
                timeoutMsg: 'Page did not load within 20 seconds'
            }
        );
    }

    /**
    * Get element from selector or element
    */
    protected async getElement(selector: string | WebdriverIO.Element | ChainablePromiseElement) {
        return (typeof selector === 'string' ? await $(selector) : await selector) as WebdriverIO.Element;
    }

    /**
    * Get element text from selector or element
    */
    public async getElementText(selector: ChainablePromiseElement) {
        const element = await this.getElement(selector);
        await element.waitForDisplayed({timeout:10000});
        return await element.getText();
    }

    /**
    * Wait for element to be clickable
    * Wait for element to be displayed
    * Wait for element to exist
    * @param selector element selector
    * @param timeout timeout in milliseconds (default: 30000)
    */
    public async waitForElClickable(selector: WebdriverIO.Element | ChainablePromiseElement, timeout: number = 30000) {
        const element = await this.getElement(selector);
        await element.waitForClickable({timeout});
    }
    public async waitForElDisplayed(selector: WebdriverIO.Element | ChainablePromiseElement, timeout: number = 30000) {
        const element = await this.getElement(selector);
        await element.waitForDisplayed({timeout});
    }
    public async waitForElExists(selector: WebdriverIO.Element | ChainablePromiseElement, timeout: number = 30000) {
        const element = await this.getElement(selector);
        await element.waitForExist({timeout});
    }



    /**
    * Clear input field using multiple methods to ensure clearing works
    */
    public async clearInputField(selector: WebdriverIO.Element | ChainablePromiseElement) {
        const element = await this.getElement(selector);
        await element.waitForDisplayed({timeout:10000});
        await element.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');
    }

    /**
    * Click element with multiple click methods
    * @param selector element selector
    * @param click method type (default: 'click')
    */

    public async clickElement(selector: WebdriverIO.Element | ChainablePromiseElement) { 
        const element = await this.getElement(selector);
        await element.waitForClickable({timeout: 60000});
        await element.click();
    }

    /**
    * Set input value
    * @param selector input element selector
    * @param value value to set
    */
    public async setInputValue(selector: WebdriverIO.Element | ChainablePromiseElement, value: string) {
        const element = await this.getElement(selector);
        await element.waitForDisplayed({ timeout: 60000 });
        await element.click();
        await this.clearInputField(element);
        await element.setValue(value);
    }

    /**
    * Wait until URL contains text
    * @param urlPart part of URL to check
    * @param timeout timeout in milliseconds (default: 10000)
    */
    public async waitUntilUrlContains(urlPart: string, timeout: number = 60000) {
        await browser.waitUntil(
            async () => {
                const url = await browser.getUrl();
                return url.includes(urlPart);
            }, {
                timeout,
                timeoutMsg: `URL does not contain "${urlPart}" within ${timeout}ms`
            });
    }
}
