Feature: Claim

    Scenario: Verify newly created Add Event appears in search results
        Given I am on the Events page
        When I click the “Add” button
        Then I should see a Add Event Page
        When I fill in all required fields for a new event
        Then the event should be added successfully
        When I search for the newly created event
        Then the event should appear in the search results