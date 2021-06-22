import { time } from 'faker';
import { pages } from '../support/pages'

var faker = require('Faker');

var firstUsername = faker.name.firstName()
var firstUserMsg = faker.lorem.words()

var secondUsername = faker.name.firstName()
var secondUserMsg = faker.lorem.words()


export class chatTest {
    firstUserJoin() {
        pages.user1.landingPage.getUsernameField().waitForDisplayed({timeout: 2000})
        pages.user1.landingPage.getUsernameField().click()
        pages.user1.landingPage.getUsernameField().setValue(firstUsername)

        pages.user1.landingPage.getJoinButton().click()
    }

    secondUserJoin() {
        pages.user1.landingPage.getUsernameField().waitForDisplayed({timeout: 2000})
        pages.user2.landingPage.getUsernameField().click()
        pages.user2.landingPage.getUsernameField().setValue(secondUsername)

        pages.user2.landingPage.getJoinButton().click()
    }

    usersConnectBroker() {
        expect(pages.user1.landingPage.userConnectsToBroker().getText()).toEqual('Connected to the MQTT broker at tcp://broker.mqtt.cool:1883')
        expect(pages.user2.landingPage.userConnectsToBroker().getText()).toEqual('Connected to the MQTT broker at tcp://broker.mqtt.cool:1883')
    }

    userValidation() {
        expect(pages.user2.landingPage.secondUserConnected().getText()).toEqual(firstUsername)
        expect(pages.user1.landingPage.firstUserConnected().getText()).toEqual(secondUsername)
    }

    firstUserPost(){
        pages.user1.landingPage.getInputField().waitForDisplayed()
        pages.user1.landingPage.getInputField().click()
        pages.user1.landingPage.getInputField().setValue(firstUserMsg)
        pages.user1.landingPage.getReplyButton().click()
    }

    secondUserPost(){
        pages.user2.landingPage.getInputField().waitForDisplayed()
        pages.user2.landingPage.getInputField().click()
        pages.user2.landingPage.getInputField().setValue(secondUserMsg)
        pages.user2.landingPage.getReplyButton().click()
    }

    firstUserReceivesPost() {
        expect(pages.user1.landingPage.userReadsMsg().getText()).toEqual(secondUsername + ': ' + secondUserMsg)
    }

    secondUserReceivesPost() {
        expect(pages.user2.landingPage.userReadsMsg().getText()).toEqual(firstUsername + ': ' + firstUserMsg)
    }

    usersDisconnect(){
        pages.user1.landingPage.getDisconnectButton().waitForDisplayed()
        
        //time.sleep(1000) neder
        //Tiek uzspiests virsu label nevis poga

        pages.user1.landingPage.getDisconnectButton().click()
        pages.user2.landingPage.getDisconnectButton().click()

        expect(pages.user1.landingPage.userDisconnects().getText()).toEqual('Connection to tcp://broker.mqtt.cool:1883 lost')
        expect(pages.user2.landingPage.userDisconnects().getText()).toEqual('Connection to tcp://broker.mqtt.cool:1883 lost')
    }
}