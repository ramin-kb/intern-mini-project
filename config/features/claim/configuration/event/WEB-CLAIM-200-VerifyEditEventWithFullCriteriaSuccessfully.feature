Feature: Claim

    Scenario: Verify Edit Event with full criteria successfully
        Given I am on the Employee Claims page
        And I click the config button
        And I navigate to the eventsSubMenu page
        When I enter conEvent in the search box
        Then the event results should be displayed successfully
        When I click the edit button
        Then the claim should display editEvent page successfully
        When I edit the events with full criteria
        Then the record should be updated successfully