Feature: Video conference

  Scenario: 2 user video conference
    Given I am on the Landing page
    When I see that user1 enters the room
    And I see that user2 enters the same room
    Then I see that both users see self-view window