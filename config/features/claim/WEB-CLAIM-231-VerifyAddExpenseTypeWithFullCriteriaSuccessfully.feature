Feature: Claim

    Scenario: Verify Add Expense Type with full criteria successfully
        Given I am on the Expense Types page
        When I click the “Add” button
        Then I should see an Add Expense Type page
        When I fill in all required fields for a new expense type
        Then the expense type should be added successfully