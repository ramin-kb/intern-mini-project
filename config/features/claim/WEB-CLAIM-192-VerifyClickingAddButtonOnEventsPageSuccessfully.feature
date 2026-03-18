Feature: Claim

    Scenario: Verify clicking “Add” button on Events page successfully
        Given I am on the Events page
        When I click the “Add” button
        Then I should see a Add Event Page