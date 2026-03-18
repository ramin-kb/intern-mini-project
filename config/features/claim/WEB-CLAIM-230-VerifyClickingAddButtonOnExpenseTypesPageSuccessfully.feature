Feature: Claim

    Scenario: Verify clicking “Add” button on Expense Types page successfully
        Given I am on the Expense Types page
        When I click the “Add” button
        Then I should see an Add Expense Type page