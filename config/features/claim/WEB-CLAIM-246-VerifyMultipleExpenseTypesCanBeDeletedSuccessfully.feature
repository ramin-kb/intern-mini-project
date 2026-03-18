Feature: Claim

    Scenario: Verify multiple Expense Types can be Deleted successfully
        Given I am on the Expense Types page
        And I have selected multiple expense types
        When I click the “Delete” icon for the selected expense types
        Then I should see a confirmation dialog for deleting the expense types
        When I confirm the deletion of the expense types
        Then the expense types should be deleted successfully
