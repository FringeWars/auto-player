Feature: a turn is run

  Background: A game between Robots & Zombies
    Given player 1 is "robots"
    And player 1 has 10 minions
    And player 1 minions move randomly
    And player 1 units move randomly
    And player 2 is "zombies"
    And player 2 has 10 minions
    And player 2 minions move randomly
    And player 2 units move randomly

  @only
  Scenario: a complete turn
    When the turn starts
    Then the "movement" phase is reached
    And each minion must move following it's "movement" behaviour
    And each unit must move following it's "movement" behaviour

  Scenario: Combat phase
    When the combat phase is reached
    Then all combats are resolved

  Scenario: No space for remaining units after a combat
    When there is no space for remaining units after a combat
    Then attacking units with no space must return to its previous territory

  Scenario: Unit recruitment
    When the recruitment phase is reached
    Then all buildings produces units
    And all buildings produces minions

  Scenario: Build construction
    When the build phase is reached
    Then one building is made in one territory

  Scenario: Game ends
    When one player destroys an enemy stronghold
    Then the game finish
    Then the player without stronghold looses the game

