Feature: Claim

    Scenario: Verify clicking “Delete” icon on Expense Types page successfully
        Given I am on the Expense Types page
        When I click the “Delete” icon for an existing expense type
        Then I should see a confirmation dialog for deleting the expense type