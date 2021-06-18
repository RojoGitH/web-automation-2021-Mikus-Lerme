import { Given } from '@cucumber/cucumber'
import {tests} from '../support/tests'

Given("I am on the Landing page", function() {
    tests.navigationTest.openLandingPage()
})

Given("I am on the Game page", function() {
    tests.gameTest.openGamePage()
})