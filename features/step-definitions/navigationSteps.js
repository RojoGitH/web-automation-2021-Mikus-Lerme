import { Given } from '@cucumber/cucumber'
import {tests} from '../support/tests'

Given("I see both users have opened the page and connected to server", function() {
    tests.navigationTest.openLandingPage()
})