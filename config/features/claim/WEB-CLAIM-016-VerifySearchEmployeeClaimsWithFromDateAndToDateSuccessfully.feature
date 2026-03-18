Feature: Claim

    Scenario: Verify search Employee Claims with From Date and To Date successfully
        Given I am on the Employee Claims page
        When I enter from date and to date in the search box
        Then the search results should be displayed successfully