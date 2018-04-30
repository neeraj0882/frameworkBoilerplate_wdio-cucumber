Feature: Performing a signup

Scenario: Perform a signup
    Given I launch the php travels signup page
    When I enter firtname and lastname <fname> <lname> on the page
    |fname|      |lname|     |mobile|    |email|            |password|
    |"testfirst"||"testlast"||1111111111||test11112@testmail.com||test123|
    And I click signup
    Then I should get to the landing page

Scenario: SignUp page
    Given I am on the landing page
    Then  the name displayed should be correct

