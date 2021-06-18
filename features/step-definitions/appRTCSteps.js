import { When, Then } from '@cucumber/cucumber'
import {tests} from '../support/tests'

When("I see that user1 enters the room", function() {
    tests.appRTCTest.firstUserEnterRoom()
})

When("I see that user2 enters the same room", function() {
    tests.appRTCTest.secondUserEnterRoom()
})

Then("I see that both users see self-view window", function() {
    tests.appRTCTest.validateSelfViewWindowForUsers()
})