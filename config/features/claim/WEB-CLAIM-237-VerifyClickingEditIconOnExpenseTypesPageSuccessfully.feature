Feature: Claim

    Scenario: Verify clicking “Edit” icon on Expense Types page successfully
        Given I am on the Expense Types page
        When I click the “Edit” icon for an existing expense type
        Then I should see an Edit Expense Type page