import {pages} from '../support/pages'

export class GameTest {
    openGamePage() {
        pages.gamePage.openPage()
        browser.switchToFrame(pages.gamePage.getGameFrame())
        pages.gamePage.getGameContainer().waitForDisplayed()
    }

    validateScoreZero() {
        expect(pages.gamePage.getScore().getText()).toEqual('0')
    }

    validateSquareStartValues() {
        const squareNumber = pages.gamePage.getSquareNumbers()
        expect(squareNumber.length).toEqual(2)
        for (const item of squareNumber) {
            expect(item.getText()).toEqual('2')
        }
    }

    makeGameMoves() {
        let moveCount = 0
        pages.gamePage.getGameContainer().scrollIntoView()
        browser.waitUntil(() => {
            pages.gamePage.makeMove()
            moveCount += 1

            browser.pause(1000)
            const score = pages.gamePage.getScore().getText()

            return parseInt(score) >= 4
        })
        expect(moveCount).toBeGreaterThan(0)
        expect(moveCount).toBeLessThanOrEqual(3)
    }

    validateScoreFour() {
        expect(pages.gamePage.getScore().getText()).toEqual('4')
    }

    validateSquareEndValues() {
        const squareNumbers = pages.gamePage.getSquareValues()
        const fourValueSquares = squareNumbers.find(number => number === '4')
        expect(fourValueSquares.length).toBeGreaterThanOrEqual(1)
    }
}