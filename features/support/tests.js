import {NavigationTest} from '../test-objects/navigationTest'
import {chatTest} from '../test-objects/chatTest'
import {pages} from './pages'

export class Tests {
    constructor(pages) {
        this.navigationTest = new NavigationTest(pages)
        this.chatTest = new chatTest(pages)
    }
}

const tests = new Tests(pages)
export {tests}