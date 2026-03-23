Feature: Claim

    Scenario: Verify search Employee Claims with Event Name only successfully
        Given I am on the Employee Claims page
        When I enter event in the search box
        Then the claim results should be displayed successfully