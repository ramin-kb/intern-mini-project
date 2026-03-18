Feature: Claim

    Scenario: Verify Create Claim Request with full criteria successfully
        Given I am on the Employee Claims page
        When I fill in all required fields for a new claim request
        Then the claim should be created successfully