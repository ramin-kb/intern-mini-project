Feature: Claim

    Scenario: Verify search Employee Claims with Full criteria successfully
        Given I am on the Employee Claims page
        When I enter full search criteria
        Then the search results should be displayed successfully