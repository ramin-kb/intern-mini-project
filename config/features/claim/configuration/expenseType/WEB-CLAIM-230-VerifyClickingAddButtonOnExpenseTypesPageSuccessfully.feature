Feature: Claim

    Scenario: Verify clicking “Add” button on Expense Types page successfully
        Given I am on the Employee Claims page
        And I click the config button
        And I navigate to the expenseSubMenu page
        When I click the add button
        Then the claim should display addExpense page successfully