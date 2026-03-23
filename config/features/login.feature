Feature: Login

    Scenario: Verify Login Successfully With Valid Credentials
        Given I am on the login page
        When I login with valid credentials
        Then I should see dashboard