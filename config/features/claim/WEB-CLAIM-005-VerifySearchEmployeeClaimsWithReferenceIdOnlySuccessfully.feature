Feature: Claim

    Scenario: Verify search Employee Claims with Reference Id only successfully
        Given I am on the Employee Claims page
        When I enter reference id in the search box
        Then the search results should be displayed successfully