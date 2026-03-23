Feature: Claim

    Scenario: Verify search Employee Claims with From Date and To Date successfully
        Given I am on the Employee Claims page
        When I enter fromDateAndToDate in the search box
        Then the claim results should be displayed successfully