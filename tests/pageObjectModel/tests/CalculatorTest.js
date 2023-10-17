import { ClientFunction } from 'testcafe'
import CalculatorPage from '../pages/CalculatorPage'

const url = 'https://juliemr.github.io/protractor-demo/'

const getUrl = ClientFunction(() => window.location.href);

fixture`Calculator Page`
    .page(url)
    .meta({ action: "Calculator" });

test('Loading Calculator Page', async t => {
    await t
        .expect(getUrl()).contains(url)
        .expect(CalculatorPage.headerText.exists).ok()
        .takeScreenshot();
});

test
    .meta({ action: "add", test: "1" })
    ('Perform Addition', async t => {
        CalculatorPage.setFirstNumber('5');
        CalculatorPage.setSecondNumber('3');
        CalculatorPage.clickOnGoButton();
        await t
            .expect(CalculatorPage.resultText.innerText).eql('8')
            .takeScreenshot();
    });

test
    .meta({ action: "subtraction", test: "2" })
    ('Perform Subtraction', async t => {
        CalculatorPage.setFirstNumber('5');
        CalculatorPage.setSecondNumber('3');
        CalculatorPage.setOperator('SUBTRACTION');
        CalculatorPage.clickOnGoButton();
        await t
            .expect(CalculatorPage.resultText.innerText).eql('2')
            .takeScreenshot();
    });

test
    .meta({ action: "multiplication", test: "2" })
    ('Perform Multiplication', async t => {
        CalculatorPage.setFirstNumber('5');
        CalculatorPage.setSecondNumber('3');
        CalculatorPage.setOperator('MULTIPLICATION');
        CalculatorPage.clickOnGoButton();
        await t
            .expect(CalculatorPage.resultText.innerText).eql('15')
            .takeScreenshot();
    });

test
    .meta({ action: "division", test: "2" })
    ('Perform Division', async t => {
        CalculatorPage.setFirstNumber('15');
        CalculatorPage.setSecondNumber('3');
        CalculatorPage.setOperator('DIVISION');
        CalculatorPage.clickOnGoButton();
        await t
            .expect(CalculatorPage.resultText.innerText).eql('5')
            .takeScreenshot();
    });