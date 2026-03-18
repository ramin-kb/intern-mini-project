Feature: Claim

    Scenario: Verify clicking “Edit” icon on Events page successfully
        Given I am on the Events page
        When I click the “Edit” icon for an existing event
        Then I should see an Edit Event Page