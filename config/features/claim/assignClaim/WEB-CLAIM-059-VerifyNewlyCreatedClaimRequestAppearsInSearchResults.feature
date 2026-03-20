Feature: Claim

    Scenario: Verify newly created Claim Request appears in search results
        Given I am on the Employee Claims page
        And I click the assign button
        When I create a claim with fullAssignment data
        Then the record should be saved successfully
        When I search for the newly created claim request
        Then the claim results should be displayed successfully