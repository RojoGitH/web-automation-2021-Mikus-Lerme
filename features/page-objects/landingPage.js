import {Page} from './basePage'

export class LandingPage extends Page {
    getMainHeader() {
        return this.browser.$('#room-selection > h1')
    }

    getRoomNameInput() {
        return this.browser.$('#room-id-input')
    }

    getJoinButton() {
        return this.browser.$('#join-button')
    }

    openPage() {
        this.browser.url('https://appr.tc/')
    }
}