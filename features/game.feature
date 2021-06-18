Feature: Puzzle 2048 game

  Scenario: Playing puzzle game until value 4
    Given I am on the Game page
    When I see that score field is 0 points
    And I see that game starts with two value 2 squares on the field
    And I make no more than 3 moves to score 4 points
    Then I see that the score field shows 4 points
    And I see that at least one of the squares have value 4