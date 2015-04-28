Feature: a turn is run

  Background: A game between Robots & Zombies
    Given player 1 is "robots"
    And player 1 minions move randomly
    And player 1 units move randomly
    And player 2 is "zombies"
    And player 2 minions move randomly
    And player 2 units move randomly

  @only
  Scenario: a complete turn
    When the turn starts
    Then the "movement" phase is reached
    And each minion must move following it's "movement" behaviour
    And each unit must move following it's "movement" behaviour
    And the "movement" phase is finished
    Then the "combat" phase is reached
    And each combat it resolves
    And the "combat" phase is finished
    Then all strongholds are alive
    Then the "regrouping" phase is reached
    And each minion must move following it's "regrouping" behaviour
    And each unit must move following it's "regrouping" behaviour
    And the "regrouping" phase is finished
    Then the "recruitment" phase is reached
    And each building recruits randomly
    And the "recruitment" phase is finished
    Then the "building" phase is reached
    And a random unit or minion who is in a territory with no buildings, builds a building
    And the "building" phase is finished
    Then the turn ends and next player starts


