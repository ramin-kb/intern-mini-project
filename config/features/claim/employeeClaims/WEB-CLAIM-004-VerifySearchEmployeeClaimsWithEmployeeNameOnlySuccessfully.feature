Feature: Claim

    Scenario: Verify search Employee Claims with Employee Name only successfully
        Given I am on the Employee Claims page
        When I enter employee in the search box
        Then the claim results should be displayed successfully