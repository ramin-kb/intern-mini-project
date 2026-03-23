Feature: Claim

    Scenario: Verify Events can be Deleted successfully
        Given I am on the Employee Claims page
        And I click the config button
        And I navigate to the eventsSubMenu page
        When I click the add button
        Then the claim should display addEvent page successfully
        When I add new events for a configuration
        Then the record should be saved successfully
        When I search for the newly created events
        Then the event results should be displayed successfully
        When I select the record from the search results
        And I click the delete button
        Then the claim should display delete page successfully
        When I click the confirmDelete button
        Then the record should be deleted successfully