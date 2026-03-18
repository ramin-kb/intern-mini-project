Feature: Claim

    Scenario: Verify newly created Claim Request on Submit Claim page appears in search results
        Given I am on the Submit Claim page
        When I fill in all required fields for a new claim request
        Then the claim request should be submitted successfully
        When I search for the newly created claim request
        Then the claim request should appear in the search results