import {pages} from '../support/pages'

export class NavigationTest {
    openLandingPage() {
        pages.user1.landingPage.openPage()
        pages.user2.landingPage.openPage()
        pages.user1.landingPage.getMainHeader().waitForDisplayed()
        pages.user2.landingPage.getMainHeader().waitForDisplayed()
    }
}