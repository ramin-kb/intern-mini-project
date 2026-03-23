Feature: Claim

    Scenario: Verify Create Claim Request with full criteria on Submit Claim page successfully
        Given I am on the Employee Claims page
        And I navigate to the submitClaimsSubMenu page
        When I create a claim with own data
        Then the record should be saved successfully