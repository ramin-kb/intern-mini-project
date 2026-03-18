Feature: Claim

    Scenario: Verify Edit Event with full criteria successfully
        Given I am on the Events page
        When I click the “Edit” icon for an existing event
        Then I should see an Edit Event Page
        When I fill in all required fields for the edited event
        Then the event should be updated successfully