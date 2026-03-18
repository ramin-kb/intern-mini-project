Feature: Claim

    Scenario: Verify edited Event displays updated details in search results
        Given I am on the Events page
        When I click the “Edit” icon for an existing event
        Then I should see an Edit Event Page
        When I fill in all required fields for the edited event
        Then the event should be updated successfully
        When I search for the edited event
        Then the event should appear in the search results with the updated details