Feature: Claim

    Scenario: Verify Event Name selection updates the field value
        Given I am on the Employee Claims page
        When I click on the Event Name dropdown
        And I select an event name from the dropdown
        Then the selected event name should be displayed in the field value successfully