Feature: Claim

    Scenario: Verify clicking “Delete” icon on Events page successfully
        Given I am on the Events page
        When I click the “Delete” icon for an existing event
        Then I should see a confirmation dialog for deleting the event