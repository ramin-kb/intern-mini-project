Feature: Claim

    Scenario: Verify newly created Add Event appears in search results
        Given I am on the Employee Claims page
        And I click the config button
        And I navigate to the eventsSubMenu page
        When I click the add button
        Then the claim should display addEvent page successfully
        When I add new events for a configuration
        Then the record should be saved successfully
        When I search for the newly created events
        Then the event results should be displayed successfully