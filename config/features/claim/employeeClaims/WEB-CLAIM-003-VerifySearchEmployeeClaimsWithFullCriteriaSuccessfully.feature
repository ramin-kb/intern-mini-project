Feature: Claim

    Scenario: Verify search Employee Claims with Full criteria successfully
        Given I am on the Employee Claims page
        When I enter full in the search box
        Then the claim results should be displayed successfully