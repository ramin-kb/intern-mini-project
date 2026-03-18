Feature: Claim

    Scenario: Verify Expense Types can be Deleted successfully
        Given I am on the Expense Types page
        When I click the “Delete” icon for an existing expense type
        Then I should see a confirmation dialog for deleting the expense type
        When I confirm the deletion of the expense type
        Then the expense type should be deleted successfully