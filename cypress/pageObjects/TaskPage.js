import BasePage from "../pageObjects/BasePage.js";
 
class TaskPage extends BasePage {
    static get url() {
        return "https://lv.sportsdirect.com";
    }

    static get brands() {
        return cy.get("#lnkTopLevelMenu_2579840");
    }

    static get adidas() {
        return cy.get('li[class="Adidas"]');
    }

    static get trainers() {
        return cy.get('span').contains("Trainers");
    }

    static get selectMens() {
        return cy.get('span[data-item="AFLOR^Mens"]');
    }

    static get selectTrainers() {
        return cy.get('span[data-item="278_323057^Trainers"]');
    }

    static get selectCourtTrainers() {
        return cy.get('span[data-item="WEBSTYLE^Court Trainers"]');
    }

    static get selectLeather() {
        return cy.get('span[data-item="341_258177^Leather"]');
    }

    static get selectBlack() {
        return cy.get('span[data-item="ACOL^Black"]');
    }

    static get boxVali() {
        return cy.get('#navlist');
    }

    static get boxOpen() {
        return cy.get('li[li-name="Grand Court SE Trainers Mens"]');
    }

    static get productName() {
        return cy.get('#lblProductName');
    }

}

export default TaskPage;