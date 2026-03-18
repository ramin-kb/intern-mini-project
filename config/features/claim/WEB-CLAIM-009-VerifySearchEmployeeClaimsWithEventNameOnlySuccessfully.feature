Feature: Claim

    Scenario: Verify search Employee Claims with Event Name only successfully
        Given I am on the Employee Claims page
        When I enter event name in the search box
        Then the search results should be displayed successfully