Feature: Claim

    Scenario: Verify Create Claim Request with full criteria successfully
        Given I am on the Employee Claims page
        And I click the assign button
        When I create a claim with fullAssignment data
        Then the record should be saved successfully