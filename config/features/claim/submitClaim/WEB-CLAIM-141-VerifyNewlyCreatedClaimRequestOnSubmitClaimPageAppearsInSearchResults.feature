Feature: Claim

    Scenario: Verify newly created Claim Request on Submit Claim page appears in search results
        Given I am on the Employee Claims page
        And I navigate to the submitClaimsSubMenu page
        When I create a claim with own data
        Then the record should be saved successfully
        When I search for the newly created claim request
        Then the myClaim results should be displayed successfully