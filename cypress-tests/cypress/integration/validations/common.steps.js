import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import HomePage from './HomePage'


const homePage = new HomePage();

Given('app is loaded', () => {
    cy.fixture('properties').as('props').then((props) => {
        cy.visit(props.baseUrl);
    });
});

When('user has clicked the box for {int} time', userClickCount => {
    for (let i = 0; i <= userClickCount; i++) {
        homePage.locateAndClickBox();
    }
})

And('user is idle for {int} seconds', timeOutSeconds => {
    cy.wait(timeOutSeconds * 1000);
})

And('click at fixed location outside the box', () => {
    homePage.clickOnFixedLocationOustSideBox();
})

