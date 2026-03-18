Feature: Claim

    Scenario: Verify newly created Claim Request appears in search results
        Given I am on the Employee Claims page
        When I fill in all required fields for a new claim request
        Then the claim should be created successfully
        When I search for the newly created claim request
        Then the claim request should appear in the search results