import {pages} from '../support/pages'
let roomName

export class AppRTCTest {
    firstUserEnterRoom() {
        roomName = pages.user1.landingPage.getRoomNameInput().getValue()
        pages.user1.landingPage.getJoinButton().click()
    }

    secondUserEnterRoom() {
        pages.user2.landingPage.getRoomNameInput().setValue(roomName)
        pages.user2.landingPage.getJoinButton().click()
    }

    validateSelfViewWindowForUsers() {
        pages.user1.callPage.getSmallVideo().waitForDisplayed()
        pages.user1.callPage.getRemoteVideo().waitForDisplayed()

        pages.user2.callPage.getSmallVideo().waitForDisplayed()
        pages.user2.callPage.getRemoteVideo().waitForDisplayed()
    }
}