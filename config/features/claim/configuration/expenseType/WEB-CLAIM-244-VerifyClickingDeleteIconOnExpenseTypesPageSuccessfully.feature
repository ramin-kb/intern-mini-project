Feature: Claim

    Scenario: Verify clicking “Delete” icon on Expense Types page successfully
        Given I am on the Employee Claims page
        And I click the config button
        And I navigate to the expenseSubMenu page
        When I click the add button
        Then the claim should display addExpense page successfully
        When I add new expense for a configuration
        Then the record should be saved successfully
        When I search for the newly created expense
        Then the expense results should be displayed successfully
        When I select the record from the search results
        And I click the delete button
        Then the claim should display delete page successfully