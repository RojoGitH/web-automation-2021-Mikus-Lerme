import {NavigationTest} from '../test-objects/navigationTest'
import {AppRTCTest} from '../test-objects/appRTCTest'
import {GameTest} from '../test-objects/gameTest'
import {pages} from './pages'

export class Tests {
    constructor(pages) {
        this.navigationTest = new NavigationTest(pages)
        this.appRTCTest = new AppRTCTest(pages)
        this.gameTest = new GameTest(pages)
    }
}

const tests = new Tests(pages)
export {tests}