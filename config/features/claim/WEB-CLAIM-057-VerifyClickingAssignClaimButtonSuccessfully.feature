Feature: Claim

    Scenario: Verify clicking “Assign Claim” button successfully
        Given I am on the Employee Claims page
        When I click the “Assign Claim” button
        Then the claim should display Assign Claim page successfully