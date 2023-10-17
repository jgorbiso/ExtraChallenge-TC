import { Selector, t } from 'testcafe'
// import { AngularJSSelector } from 'testcafe-angular-selectors'

class CalculatorPage {
    constructor() {
        this.headerText = Selector('h3');
        this.firstNumberInput = Selector('input').withAttribute('ng-model', 'first');
        this.secondNumberInput = Selector('input').withAttribute('ng-model', 'second');
        this.operatorSelector = Selector('select').withAttribute('ng-model', 'operator');
        this.goButton = Selector('button#gobutton');
        this.resultText = Selector('h2.ng-binding');
        //#region alternative using AngularJSSelector
        // this.firstNumberInput = AngularJSSelector.byModel('first');
        // this.secondNumberInput = AngularJSSelector.byModel('second');
        // this.operatorSelector = AngularJSSelector.byModel('operator');
        //#endregion
    }

    async setFirstNumber(firstNumber) {
        await t
            .typeText(this.firstNumberInput, firstNumber);
    }

    async setSecondNumber(secondNumber) {
        await t
            .typeText(this.secondNumberInput, secondNumber);
    }

    async setOperator(selectedOption) {
        const operatorOtions = this.operatorSelector.find('option');
        await t
            .click(this.operatorSelector)
            .click(operatorOtions.withAttribute('value', selectedOption));
    }

    async clickOnGoButton() {
        await t
            .click(this.goButton);
    }
}

export default new CalculatorPage();