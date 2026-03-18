Feature: Claim

    Scenario: Verify Add Event with full criteria successfully
        Given I am on the Events page
        When I click the “Add” button
        Then I should see a Add Event Page
        When I fill in all required fields for a new event
        Then the event should be added successfully