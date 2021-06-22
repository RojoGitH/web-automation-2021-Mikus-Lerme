import {pages} from '../support/pages'

export class NavigationTest {
    openLandingPage() {
        pages.user1.landingPage.openPage()
        pages.user2.landingPage.openPage()
        pages.user1.landingPage.userConnected().waitForDisplayed()
        pages.user2.landingPage.userConnected().waitForDisplayed()

        expect(pages.user1.landingPage.userConnected().getText()).toEqual('Connected to the MQTT.Cool server')
        expect(pages.user2.landingPage.userConnected().getText()).toEqual('Connected to the MQTT.Cool server')
    }
}