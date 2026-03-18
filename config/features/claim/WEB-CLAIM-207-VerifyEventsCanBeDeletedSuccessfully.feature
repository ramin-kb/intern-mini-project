Feature: Claim

    Scenario: Verify Events can be Deleted successfully
        Given I am on the Events page
        When I click the “Delete” icon for an existing event
        Then I should see a confirmation dialog for deleting the event
        When I confirm the deletion of the event
        Then the event should be deleted successfully