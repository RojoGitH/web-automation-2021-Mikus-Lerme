import {Page} from './basePage'

export class LandingPage extends Page {
    userConnected() {
        return this.browser.$('.text-success')
    }

    userConnectsToBroker() {
        return this.browser.$('.text-success:nth-child(4)')
    }

    getUsernameField() {
        return this.browser.$('#user')
    }

    getJoinButton() {
        return this.browser.$('#connectBtn')
    }

    firstUserConnected() {
        return this.browser.$('.list-group-item:last-child')
    }

    secondUserConnected() {
        return this.browser.$('.list-group-item:nth-last-child(1)')
    }

    getInputField() {
        return this.browser.$('#sendMessage')
    }

    getReplyButton() {
        return this.browser.$('#replyBtn')
    }

    userReadsMsg() {
        return this.browser.$('#messages .text-primary:last-child')
    }

    getDisconnectButton() {
        return this.browser.$('#disconnectBtn')
    }

    userDisconnects() {
        return this.browser.$('.text-info:nth-last-child(2)')
    }

    openPage() {
        this.browser.url('https://demos.mqtt.cool/chat/')
    }
}