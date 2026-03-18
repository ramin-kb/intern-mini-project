Feature: Claim

    Scenario: Verify multiple Events can be Deleted successfully
        Given I am on the Events page
        And I have selected multiple events
        When I click the “Delete” icon for the selected events
        Then I should see a confirmation dialog for deleting the events
        When I confirm the deletion of the events
        Then the events should be deleted successfully