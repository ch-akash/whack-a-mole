/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from './HomePage'

const homePage = new HomePage();
const defaultBoxLocation = "left: 0px; top: 0px;";

Then('box should be at initial location', () => {
    homePage.locateBox().checkBoxLocation(defaultBoxLocation);
});


Then('box height should be {string} and width should be {string}', (height, width) => {
    homePage.locateBox()
        .should('have.css', 'height', height)
        .should('have.css', 'width', width);
});


Then('box location should not change after timeout', () => {

    homePage.locateBox().checkBoxLocation(defaultBoxLocation);

    cy.fixture('test_data').as('props').then((props) => {
        cy.wait(props.idleTimeOut);
    })

    homePage.locateBox().checkBoxLocation(defaultBoxLocation);
});

Then('box position should reset according to window configuration', () => {

    cy.fixture('test_data').as('props').then((props) => {
        const left = (Cypress.config('viewportWidth') - 100) / 2;
        const top = (Cypress.config('viewportHeight') - 100) / 2;
        const expectedLocation = `left: ${left}px; top: ${top}px;`;
        homePage.locateBox().checkBoxLocation(expectedLocation);
    })
})

Then('validate box UI data', async function (dataTable) {
    dataTable.hashes().forEach(element => {
        homePage.locateBox()
            .should('have.css', 'height', element.height)
            .should('have.css', 'width', element.width)
            .should('have.css', 'background-color', element.colour)
            .should('have.css', 'cursor', element.cursor);
    });

})

Then('box should be clickable', () => {
    homePage.locateAndClickBox();
})

Then('after mouse click current box location should not be same as previous location', () => {
    homePage.locateBox()
        .invoke('attr', 'style')
        .as('currentLocation');
    homePage.locateAndClickBox();
    homePage.locateBox()
        .invoke('attr', 'style')
        .should('not.eq', cy.get('@currentLocation'));

})
