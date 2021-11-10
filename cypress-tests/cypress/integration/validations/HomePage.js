/// <reference types="cypress" />


class HomePage {

    visit(url) {
        cy.visit(url);
    }

    locateBox() {
        return cy.get("div[class='box__1tnWm']");
    }

    locateAndClickBox() {
        this.locateBox().click();
    }

    clickOnFixedLocationOustSideBox() {
        this.locateBox().then(($el) => {
            const x = cy.log(`Box left coordinate: ${$el[0].getBoundingClientRect().left}`);
            const y = cy.log(`Box top coordinate: ${$el[0].getBoundingClientRect().top}`);
                
            if (x != 105 && y != 105) {
                this.locateBox().parent().click(105, 105);
            } else {
                this.clickOnFixedLocationOustSideBox();
            }
        })
    }
}

export default HomePage