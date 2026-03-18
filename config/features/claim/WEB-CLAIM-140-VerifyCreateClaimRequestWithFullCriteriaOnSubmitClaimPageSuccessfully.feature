Feature: Claim

    Scenario: Verify Create Claim Request with full criteria on Submit Claim page successfully
        Given I am on the Submit Claim page
        When I fill in all required fields for a new claim request
        Then the claim request should be submitted successfully