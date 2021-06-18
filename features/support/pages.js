import {LandingPage} from '../page-objects/landingPage'
import {CallPage} from '../page-objects/callPage'
import {GamePage} from '../page-objects/gamePage'

class Pages {
    constructor() {
        this.user1 = {
            landingPage: new LandingPage('user1'),
            callPage: new CallPage('user1')
        }
        this.user2 = {
            landingPage: new LandingPage('user2'),
            callPage: new CallPage('user2')
        }
        this.gamePage = new GamePage()
    }
}

const pages = new Pages()
export {pages}