Feature: Claim

    Scenario: Verify Edit Expense Type with full criteria successfully
        Given I am on the Employee Claims page
        And I click the config button
        And I navigate to the expenseSubMenu page
        When I enter expenseName in the search box
        Then the expense results should be displayed successfully
        When I click the edit button
        Then the claim should display editExpense page successfully
        When I edit the expense with full criteria
        Then the record should be updated successfully