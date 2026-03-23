Feature: Claim

    Scenario: Verify Add Expense Type with full criteria successfully
        Given I am on the Employee Claims page
        And I click the config button
        And I navigate to the expenseSubMenu page
        When I click the add button
        Then the claim should display addExpense page successfully
        When I add new expense for a configuration
        Then the record should be saved successfully