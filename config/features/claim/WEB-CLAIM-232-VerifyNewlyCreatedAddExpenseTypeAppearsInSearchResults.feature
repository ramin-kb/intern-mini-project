Feature: Claim

    Scenario: Verify newly created Add Expense Type appears in search results
        Given I am on the Expense Types page
        When I click the “Add” button
        Then I should see an Add Expense Type page
        When I fill in all required fields for a new expense type
        Then the expense type should be added successfully
        When I search for the newly created expense type
        Then I should see the expense type in the search results