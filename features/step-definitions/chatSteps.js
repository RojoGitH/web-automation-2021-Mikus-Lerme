import { When, Then } from '@cucumber/cucumber'
import { tests } from '../support/tests'

When("I see that both users enter the nickname", function () {
    tests.chatTest.firstUserJoin()
    tests.chatTest.secondUserJoin()
})

When("I see that both users connect to broker", function () {
    tests.chatTest.usersConnectBroker()
})

When("I see that both users see themselves and each other in the Connected Users tab", function () {
    tests.chatTest.userValidation()
})

When("I see that user1 sends any message", function () {
    tests.chatTest.firstUserPost()
})

When("I see that user2 receives the sent message", function () {
    tests.chatTest.secondUserReceivesPost()
})

When("I see that user2 sends any message", function () {
    tests.chatTest.secondUserPost()
})

Then("I see that user1 receives the sent message", function () {
    tests.chatTest.firstUserReceivesPost()
})

When("I see that both users can disconnect and lose connection", function () {
    tests.chatTest.usersDisconnect()
})