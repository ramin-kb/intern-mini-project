Feature: Claim

    Scenario: Verify clicking “Edit” icon on Events page successfully
        Given I am on the Employee Claims page
        And I click the config button
        And I navigate to the eventsSubMenu page
        When I enter conEvent in the search box
        Then the event results should be displayed successfully
        When I click the edit button
        Then the claim should display editEvent page successfully