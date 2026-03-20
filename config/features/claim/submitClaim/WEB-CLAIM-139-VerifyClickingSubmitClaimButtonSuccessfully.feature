Feature: Claim

    Scenario: Verify clicking “Submit Claim” button successfully
        Given I am on the Employee Claims page
        When I navigate to the submitClaimsSubMenu page
        Then the claim should display create page successfully