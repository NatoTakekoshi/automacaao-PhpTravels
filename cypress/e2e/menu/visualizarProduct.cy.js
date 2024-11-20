describe('Acessar menu de produtos', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('.navbar-toggler').click();
        cy.get('.navbar-nav > :nth-child(1) > .nav-link').click();
    })

    it.only('Visualizar Themes', () => {
        cy.get(':nth-child(1) > .dropdown-menu > :nth-child(1) > .dropdown-item').click();
        cy.contains('h1', 'Themes').should('be.visible');

    })

    it('Visualizar Integrations', () => {
        cy.get(':nth-child(1) > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.contains('h1', 'Integrated Suppliers API'+"'"+'s XML Json').should('be.visible');
        

    })

    it('Customization', () => {
        cy.get(':nth-child(1) > .dropdown-menu > :nth-child(3) > .dropdown-item').click();
        cy.contains('h1', 'We Love Customization'+"'"+'s').should('be.visible');
        

    })

    it('Technology', () => {
        cy.get(':nth-child(1) > .dropdown-menu > :nth-child(4) > .dropdown-item').click();
        cy.contains('h1', 'Technology').should('be.visible');
        

    })

    it('Requirements', () => {
        cy.get(':nth-child(1) > .dropdown-menu > :nth-child(5) > .dropdown-item').click();
        cy.contains('h1', 'Requirements').should('be.visible');
        

    })
})