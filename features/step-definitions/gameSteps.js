import { When, Then } from '@cucumber/cucumber'
import {tests} from '../support/tests'

When("I see that score field is 0 points", function() {
    tests.gameTest.validateScoreZero()
})

When("I see that game starts with two value 2 squares on the field", function() {
    tests.gameTest.validateSquareStartValues()
})

When("I make no more than 3 moves to score 4 points", function() {
    tests.gameTest.makeGameMoves()
})

Then("I see that the score field shows 4 points", function() {
    tests.gameTest.validateScoreFour()
})

Then("I see that at least one of the squares have value 4", function() {
    tests.gameTest.validateSquareEndValues()
})