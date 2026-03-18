Feature: Claim

    Scenario: Verify Edit Expense Type with full criteria successfully
        Given I am on the Expense Types page
        When I click the “Edit” icon for an existing expense type
        Then I should see an Edit Expense Type page
        When I update all required fields for the expense type
        Then the expense type should be updated successfully
        When I search for the edited expense type
        Then I should see the updated details in the search results