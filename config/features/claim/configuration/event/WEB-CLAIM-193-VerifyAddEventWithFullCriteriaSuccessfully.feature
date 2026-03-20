Feature: Claim

    Scenario: Verify Add Event with full criteria successfully
        Given I am on the Employee Claims page
        And I click the config button
        And I navigate to the eventsSubMenu page
        When I click the add button
        Then the claim should display addEvent page successfully
        When I add new events for a configuration
        Then the record should be saved successfully