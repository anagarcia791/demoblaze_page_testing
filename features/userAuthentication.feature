@UserAuthentication
Feature: User Authentication in Demoblaze Page

  Background:
    Given I am on the Demoblaze page

  Scenario Outline: Login with credentials
    When I click login button
    And I enter "<username>" and "<password>"
    And I click submit login button
    Then I see user with logged in session

    Examples:
      | username                    | password      |
      | email_for_testing@email.com | pass_for_test |
