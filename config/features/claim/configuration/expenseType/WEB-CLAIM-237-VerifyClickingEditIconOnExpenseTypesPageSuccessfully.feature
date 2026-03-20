Feature: Claim

    Scenario: Verify clicking “Edit” icon on Expense Types page successfully
        Given I am on the Employee Claims page
        And I click the config button
        And I navigate to the expenseSubMenu page
        When I enter expenseName in the search box
        Then the expense results should be displayed successfully
        When I click the edit button
        Then the claim should display editExpense page successfully