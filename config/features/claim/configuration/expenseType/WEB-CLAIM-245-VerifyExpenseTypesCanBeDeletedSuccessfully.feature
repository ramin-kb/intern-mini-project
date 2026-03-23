Feature: Claim

    Scenario: Verify Expense Types can be Deleted successfully
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
        When I click the confirmDelete button
        Then the record should be deleted successfully