Feature: Claim

    Scenario: Verify search Employee Claims with Reference Id only successfully
        Given I am on the Employee Claims page
        When I enter referenceId in the search box
        Then the claim results should be displayed successfully