import {LandingPage} from '../page-objects/landingPage'

class Pages {
    constructor() {
        this.user1 = {
            landingPage: new LandingPage('user1')
        }
        this.user2 = {
            landingPage: new LandingPage('user2')
        }
    }
}

const pages = new Pages()
export {pages}