import {Page} from './basePage'

export class CallPage extends Page {
    getSmallVideo() {
        return this.browser.$('#mini-video')
    }

    getRemoteVideo() {
        return this.browser.$('#remote-video')
    }
}