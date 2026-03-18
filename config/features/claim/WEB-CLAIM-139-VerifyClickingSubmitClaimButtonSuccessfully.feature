Feature: Claim

    Scenario: Verify clicking “Submit Claim” button successfully
        Given I am on the Employee Claims page
        When I click the “Submit Claim” button
        Then I should see a Submit Claim Page