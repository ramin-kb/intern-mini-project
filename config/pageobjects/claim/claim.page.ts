import { $ } from '@wdio/globals'
import Page from '../page';
import * as dotenv from 'dotenv';

import { claimData } from '../../data/claim.data';

dotenv.config();

export type searchClaimType = 'full' | 'invalid' | 'employee' | 'referenceId' 
| 'event' | 'fromDateAndToDate' | 'include' | 'conEvent' | 'events' | 'expense';

export type createClaimType = 'fullAssignment' | 'own';

export type claimMessage = 'saved' | 'updated' | 'deleted';

export type configType = 'events' | 'expense';

class ClaimPage extends Page {
    private lastEventName: string = '';
    private lastExpenseName: string = '';

    get claimMenu() {
        return $('//a[normalize-space()="Claim"]');
    }
    get myClaimSubMenu() {
        return $('//a[normalize-space()="My Claims"]');
    }
    get submitClaimSubMenu() {
        return $('//a[normalize-space()="Submit Claim"]');
    }
    get configurationSubMenu() {
        return $('//span[normalize-space()="Configuration"]');
    }
    get eventsSubMenu() {
        return $('//a[normalize-space()="Events"]');
    }
    get expenseSubMenu() {
        return $('//a[normalize-space()="Expense Types"]');
    }
    get createClaimTitle() {
        return $('//h6[normalize-space()="Create Claim Request"]');
    }
    get addEventTitle() {
        return $('//h6[normalize-space()="Add Event"]');
    }
    get editEventTitle() {
        return $('//h6[normalize-space()="Edit Event"]');
    }
    get addExpenseTitle() {
        return $('//h6[normalize-space()="Add Expense Type"]');
    }
    get editExpenseTitle() {
        return $('//h6[normalize-space()="Edit Expense Type"]');
    }
    get employeeInput() {
        return $('(//label[normalize-space()="Employee Name"]/parent::div/following-sibling::div//input)');
    }
    get referenceIdInput() {
        return $('(//label[normalize-space()="Reference Id"]/parent::div/following-sibling::div//input)');
    }
    get fromDateInput() {
        return $('(//label[normalize-space()="From Date"]/parent::div/following-sibling::div//input)');
    }
    get toDateInput() {
        return $('(//label[normalize-space()="To Date"]/parent::div/following-sibling::div//input)');
    }
    get dateInput() {
        return $('(//label[normalize-space()="Date"]/parent::div/following-sibling::div//input)');
    }
    get remarksInput() {
        return $('(//label[normalize-space()="Remarks"]/parent::div/following-sibling::div//textarea)');
    }
    get amountInput() {
        return $('(//label[normalize-space()="Amount"]/parent::div/following-sibling::div//input)');
    }
    get noteInput() {
        return $('(//label[normalize-space()="Note"]/parent::div/following-sibling::div//textarea)');
    }
    get fileInput() {
        return $('//div[normalize-space()="Browse"]/parent::div');
    }
    get commentInput() {
        return $('(//label[normalize-space()="Comment"]/parent::div/following-sibling::div//textarea)');
    }
    get eventNameInput() {
        return $('(//label[normalize-space()="Event Name"]/parent::div/following-sibling::div//input)');
    }
    get expenseTypeInput() {
        return $('(//label[normalize-space()="Name"]/parent::div/following-sibling::div//input)');
    }
    get descriptionInput() {
        return $('(//label[normalize-space()="Description"]/parent::div/following-sibling::div//textarea)');
    }
    public dropdownSelector (Value: string) {
        return $(`//label[normalize-space()="${Value}"]/ancestor::div[contains(@class,"oxd-input-group")]`);
    }
    public dropdownOptions (selectValue: string) {
        return $(`//div[@role="listbox"]//span[normalize-space()='${selectValue}']`);
    }
    get searchButton() {
        return $('//button[normalize-space()="Search"]');
    }
    get assignButton() {
        return $('//button[normalize-space()="Assign Claim"]');
    }
    get createButton() {
        return $('//button[normalize-space()="Create"]');
    }
    get expenseButton() {
        return $('//h6[normalize-space()="Expenses"]/parent::div//button');
    }
    get attachButton() {
        return $('//h6[normalize-space()="Attachments"]/parent::div//button');
    }
    get addButton() {
        return $('//button[normalize-space()="Add"]');
    }
    get saveButton() {
        return $('//button[normalize-space()="Save"]');
    }
    get editButton() {
        return $('button:has(i.bi-pencil-fill)');
    }
    get deleteButton() {
        return $('//button[normalize-space()="Delete Selected"]');
    }
    get confirmationPopupTitle () {
        return $('//p[normalize-space()="Are you Sure?"]');
    }
    get confirmDeleteButton () {
        return $('//button[normalize-space()="Yes, Delete"]');
    }
    get submitButton() {
        return $('//button[normalize-space()="Submit"]');
    }
    get backButton() {
        return $('//button[normalize-space()="Back"]');
    }
    get selectUserCheckbox () {
        return $('//div[contains(@class, "oxd-table-header")]//span[contains(@class, "oxd-checkbox-input")]');
    }
    public async records(value: string) {
        return $(`//div[contains(@class,"oxd-table-cell")]//div[contains(normalize-space(),"${value}")]`);
    }
    get successSavedMessage () {
        return $('//p[normalize-space()="Successfully Saved"]');
    }
    get successUpdatedMessage () {
        return $('//p[normalize-space()="Successfully Updated"]');
    }
    get successDeletedMessage () {
        return $('//p[normalize-space()="Successfully Deleted"]');
    }

    public async openClaimMenu() {
        await this.clickElement(this.claimMenu);
    }

    public async selectDropdown(dropdownElement: ChainablePromiseElement, value: string) {
        await this.waitForElClickable(dropdownElement);
        await this.clickElement(dropdownElement);
        await browser.pause(2000);

        const option = await this.dropdownOptions(value);
        await option.waitForDisplayed({timeout:20000});
        await option.click();
        await browser.pause(1000);
    }

    public async selectAutocomplete(inputElement: ChainablePromiseElement, value: string) {
        if (!value) return;
        await this.waitForElClickable(inputElement);
        await this.clearInputField(inputElement);
        await inputElement.addValue(value.slice(0, 16));
        await browser.pause(10000);
        await browser.keys(['ArrowDown', 'Enter']);
    }

    /**
     * Search for claims based on criteria defined in claimData
     * @param type - Search criteria type e.g. 'full', 'employee', 'referenceId'
     */
    public async searchClaim(type: searchClaimType) {
        const data = claimData[type];
        if ('employeeName' in data && data.employeeName) {
            await this.selectAutocomplete(this.employeeInput, data.employeeName);
        }
        if ('referenceId' in data && data.referenceId) {
            await this.selectAutocomplete(this.referenceIdInput, data.referenceId);
        }
        if ('eventName' in data && data.eventName) {
            await this.selectDropdown(this.dropdownSelector("Event Name"),data.eventName);
        }
        if ('conEvent' in data && data.conEvent) {
            await this.selectAutocomplete(this.eventNameInput, data.conEvent);
        }
        if ('status' in data && data.status) {
            await this.selectDropdown(this.dropdownSelector("Status"),data.status)
        }
        if ('fromDate' in data && data.fromDate) {
            await this.setInputValue(this.fromDateInput, data.fromDate);
        }
        if ('toDate' in data && data.toDate) {
            await this.setInputValue(this.toDateInput, data.toDate);
        }
        if ('include' in data && data.include) {
            await this.selectDropdown(this.dropdownSelector("Include"), data.include);
        }
        if ('expenseName' in data && data.expenseName) {
            await this.selectAutocomplete(this.expenseTypeInput, data.expenseName);
        }
        await this.clickElement(this.searchButton);
        await browser.pause(5000);

        const results = await this.getAllResultRecords();
        return results;

    }

    public async getCellText(row: number, cell: number) {
        const cellSelector = `(//div[contains(@class,'oxd-table-body')]//div[@role='row'])[${row}]//div[@role='cell'][${cell}]`;
        const cellElement = await $(cellSelector);
        return await cellElement.getText();
    }

    /**
     * Retrieves all result records from the table based on the specified type
     * @param type - Table type to retrieve records from (default: 'claim')
     * @returns Array of records with fields based on the specified type
     */
    public async getAllResultRecords(type: 'claim' | 'myClaim' | 'event' | 'expense' = 'claim') {
        await browser.waitUntil(
            async () => {
                const el = await $('//div[contains(@class,"oxd-table-body")]');
                return el.isExisting();
            },
            { timeout: 10000 }
        );

        const columnConfig: Record<string, { minCells: number; keys: string[]; startCol: number }> = {
            claim:   { minCells: 4, startCol: 0, keys: ['referenceId', 'employeeName', 'eventName'] },
            myClaim: { minCells: 3, startCol: 1, keys: ['referenceId', 'eventName'] },
            event:   { minCells: 3, startCol: 1, keys: ['eventName', 'status'] },
            expense: { minCells: 3, startCol: 0, keys: ['expenseType', 'status'] },
        };

        const { minCells, keys, startCol } = columnConfig[type];

        return await browser.execute((min, keyList, start) => {
            const getCellText = (cell: Element): string =>
                cell.textContent?.trim() ||
                (cell as HTMLElement).innerText?.trim() ||
                cell.querySelector('div')?.textContent?.trim() || '';

            const rows = document.querySelectorAll('.oxd-table-row');
            const data: Record<string, string>[] = [];

            for (let i = 1; i < rows.length; i++) {
                const cells = rows[i].querySelectorAll('.oxd-table-cell');
                if (cells.length >= min) {
                    const record: Record<string, string> = {};
                    keyList.forEach((key: string, idx: number) => {
                        record[key] = getCellText(cells[start + idx]);
                    });
                    data.push(record);
                }
            }
            return data;
        }, minCells, keys, startCol);
    }

    /**
     * Verifies that search results are displayed and contain valid data
     * @param type - Table type to verify (default: 'claim')
     */
    public async verifyRecordsFound(type: 'claim' | 'myClaim' | 'event' | 'expense' = 'claim') {
        const records = await this.getAllResultRecords(type);
        expect(records.length).toBeGreaterThan(0);

        for (const [index, record] of records.entries()) {
            console.log({ row: index + 1, ...record });
            for (const [value] of Object.entries(record)) {
                expect(String(value).trim()).toBeTruthy();
            }
        }
    }
    
    private readonly buttons: Record<string, () => Promise<void>> = {
        search: () => this.clickElement(this.searchButton),
        assign: () => this.clickElement(this.assignButton),
        create: () => this.clickElement(this.createButton),
        add: () => this.clickElement(this.addButton),
        edit: () => this.clickElement(this.editButton),
        delete: () => this.clickElement(this.deleteButton),
        confirmDelete: () => this.clickElement(this.confirmDeleteButton),
        save: () => this.clickElement(this.saveButton),
        submit: () => this.clickElement(this.submitButton),
        back: () => this.clickElement(this.backButton),
        config: () => this.clickElement(this.configurationSubMenu),
    };

    public async clickButton(button: string) {
        const action = this.buttons[button];
        if (!action) throw new Error(`Button "${button}" not found`);
        await action();
    }

    private readonly tiles: Record<string, () => Promise<void>> = {
        create: () => this.waitForElDisplayed(this.createClaimTitle),
        addEvent: () => this.waitForElDisplayed(this.addEventTitle),
        addExpense: () => this.waitForElDisplayed(this.addExpenseTitle),
        editEvent: () => this.waitForElDisplayed(this.editEventTitle),
        editExpense: () => this.waitForElDisplayed(this.editExpenseTitle),
        delete: () => this.waitForElDisplayed(this.confirmationPopupTitle),
    }

    public async verifyTitleDisplayed(tile: string) {
        const action = this.tiles[tile];
        if (!action) throw new Error(`Tile "${tile}" not found`);
        await action();
        await browser.pause(5000);
    }

    private readonly pages: Record<string, () => Promise<void>> = {
        employeeClaims: () => this.clickElement(this.claimMenu),
        myClaimsSubMenu: () => this.clickElement(this.myClaimSubMenu),
        submitClaimsSubMenu: () => this.clickElement(this.submitClaimSubMenu),
        configSubMenu: () => this.clickElement(this.configurationSubMenu),
        eventsSubMenu: () => this.clickElement(this.eventsSubMenu),
        expenseSubMenu: () => this.clickElement(this.expenseSubMenu),
    };

    public async clickToPage(pages: string) {
        const action = this.pages[pages];
        if (!action) throw new Error(`Page "${pages}" not found`);
        await action();
    }

    /**
     * Creates a new claim by filling in all required fields and completing the full flow
     * @param type - Claim data type to use e.g. 'fullAssignment', 'own'
     * @returns Reference ID of the created claim
     */
    public async createClaim(type: createClaimType) {
        const data = claimData[type];
        
        if ('employeeName' in data && data.employeeName) await this.selectAutocomplete(this.employeeInput, data.employeeName);    
        if ('event' in data && data.event)    await this.selectDropdown(this.dropdownSelector("Event"), data.event);
        if ('currency' in data && data.currency) await this.selectDropdown(this.dropdownSelector("Currency"), data.currency);
        if ('remarks' in data && data.remarks)  await this.setInputValue(this.remarksInput, data.remarks);
        await this.clickElement(this.createButton);
        await browser.pause(5000);

        const referenceId = await browser.execute((el) => {
            return (el as HTMLInputElement).value;
        }, await this.referenceIdInput);

        await this.clickElement(this.expenseButton);
        if ('expense' in data && data.expense) await this.selectDropdown(this.dropdownSelector("Expense Type"), data.expense);
        if ('date' in data && data.date)        await this.setInputValue(this.dateInput, data.date);
        if ('amount' in data && data.amount)    await this.setInputValue(this.amountInput, data.amount);
        if ('note' in data && data.note)        await this.setInputValue(this.noteInput, data.note);
        await this.clickElement(this.saveButton);

        await this.clickElement(this.attachButton);
        if ('filePath' in data && data.filePath) await this.uploadFile(data.filePath);
        if ('comment' in data && data.comment)  await this.setInputValue(this.commentInput, data.comment);
        await this.clickElement(this.saveButton);

        await this.clickElement(this.submitButton);
        await this.clickElement(this.backButton);

        return referenceId;
        
    }

    /**
     * Adds a new configuration (event or expense type) by filling in the required fields
     * @param type - Configuration type to add e.g. 'events', 'expense'
     * @returns Name of the created configuration
     */
    public async addConfiguration(type: configType) {
        const data = claimData[type];

        if ('eventName' in data && data.eventName) await this.setInputValue(this.eventNameInput, data.eventName);
        if ('expense' in data && data.expense) await this.setInputValue(this.expenseTypeInput, data.expense);
        if ('description' in data && data.description) await this.setInputValue(this.descriptionInput, data.description);
        await this.clickElement(this.saveButton);
        
        this.lastEventName   = type === 'events'   ? (data as any).eventName : this.lastEventName;
        this.lastExpenseName = type === 'expense' ? (data as any).expense : this.lastExpenseName;
        await browser.pause(5000);

        return type === 'events' ? (data as any).eventName : (data as any).expense;
    }

    /**
     * Edits an existing configuration (event or expense type) by clearing and updating the fields
     * @param type - Configuration type to edit e.g. 'events', 'expense'
     * @returns Updated name of the configuration
     */
    public async editConfiguration(type: configType) {
        const data = claimData[type];
        console.log('type of data:', type);
        console.log('data for configuration:', JSON.stringify(data));
        if ('eventName' in data && data.eventName) {
        await this.clearInputField(this.eventNameInput);
        await this.setInputValue(this.eventNameInput, data.eventName);
        }
        if ('expense' in data && data.expense) {
            await this.clearInputField(this.expenseTypeInput);
            await this.setInputValue(this.expenseTypeInput, data.expense);
        }
        if ('description' in data && data.description) {
            await this.clearInputField(this.descriptionInput);
            await this.setInputValue(this.descriptionInput, data.description);
        }
        await this.clickElement(this.saveButton);
        
        this.lastEventName   = type === 'events'   ? (data as any).eventName : this.lastEventName;
        this.lastExpenseName = type === 'expense' ? (data as any).expense : this.lastExpenseName;

        await browser.pause(5000);
        console.log('lastEventName:', this.lastEventName);
        console.log('lastExpenseName:', this.lastExpenseName);
        return type === 'events' ? (data as any).eventName : (data as any).expenseName;
    }

    public async uploadFile(filePath: string) {
        const input = $('input[type="file"]');
        
        await browser.execute((el) => {
            (el as HTMLElement).style.display = 'block';
            (el as HTMLElement).style.opacity = '1';
            (el as HTMLElement).removeAttribute('hidden');
        }, await input);

        const remoteFilePath = await browser.uploadFile(filePath);
        await input.addValue(remoteFilePath);
        await browser.pause(2000);
    }

    /**
     * Verifies that the correct success/error message is displayed after an action
     * @param message - Expected message type to verify e.g. 'saved', 'updated', 'deleted'
     */
    public async verifyClaimMessage(message: claimMessage) {
        const messages = {
            saved: this.successSavedMessage,
            updated: this.successUpdatedMessage,
            deleted: this.successDeletedMessage,
        };
        const element = messages[message];
        if (!element) {
            console.log(`Unknown message type: ${message}`);
        }
        return element;
    }
    

    /**
     * Searches for a claim using the Reference ID
     * @param referenceId - Reference ID of the claim to search for
     */
    public async searchByReferenceId(referenceId: string) {
        if (!referenceId) {
        console.log('Reference ID is required for search');
        }
        console.log(`Setting value: "${referenceId}" in Reference ID input`);
        await this.selectAutocomplete(this.referenceIdInput, referenceId);
        await expect(this.referenceIdInput).toHaveValue(referenceId);
        await this.clickElement(this.searchButton);
        await browser.pause(5000);
    }

    /**
     * Searches for a claim using the name
     * @param type - Type of claim to search for e.g. 'events', 'expense'
     */
    public async searchByName(type: 'events' | 'expense') {
        const nameMap = {
            events:   { input: this.eventNameInput, value: this.lastEventName },
            expense: { input: this.expenseTypeInput, value: this.lastExpenseName },
        };

        const { input, value } = nameMap[type];
        if (!value) throw new Error(`No stored name for type "${type}"`);
        await this.selectAutocomplete(input, value);
        await this.clickElement(this.searchButton);
        await browser.pause(5000);
    }

    public async selectRecord() {
        await this.clickElement(this.selectUserCheckbox);
    }

}
export default new ClaimPage();