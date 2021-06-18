import {Page} from './basePage'

export class GamePage extends Page {
    getGameFrame() {
        return $('#iframe1')
    }

    getGameContainer() {
        return $('.game-container')
    }

    getSquareNumbers() {
        return $$('.tile-inner')
    }

    getPositionSquares() {
        return $$('[class*="tile tile-2"]')
    }

    getScore() {
        return $('.score-container')
    }

    openPage() {
        browser.url('https://www.mathsisfun.com/games/2048.html')
    }

    getSquareValues() {
        return this.getSquareNumbers().map(square => square.getText())
    }

    makeMove() {
        const [squareOnePosition, squareTwoPosition] = this.getPositionSquares().map(squareElement => squareElement.getAttribute('class').substring(26,29).split('-'))
        const squareOne = {
            column: squareOnePosition[0],
            row: squareOnePosition[1]
        }
        const squareTwo = {
            column: squareTwoPosition[0],
            row: squareTwoPosition[1]
        }
        if (squareOne.column === squareTwo.column) {
            browser.keys('ArrowDown')
            return
        }
        if (squareOne.row === squareTwo.row) {
            browser.keys('ArrowLeft')
            return
        }
        browser.keys('ArrowRight')
    }
}