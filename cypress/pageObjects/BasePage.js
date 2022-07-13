class BasePage {
    static get url() {
        return "https://lv.sportsdirect.com";
    }
    static visit() {
        cy.visit(this.url);
    }
}
export default BasePage;