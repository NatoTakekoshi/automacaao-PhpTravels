describe('Acessar menu de Features', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('.navbar-toggler').click();
        cy.get('.navbar-nav > :nth-child(2) > .nav-link').click();
    })


    

    it('Visualizar Flights', () => {
        cy.get(':nth-child(2) > .dropdown-menu > :nth-child(1) > .dropdown-item').click();
        cy.contains('h1', 'Flights Reservation Module').should('be.visible');

    })

    it('Visualizar Hotels', () => {
        cy.get(':nth-child(2) > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.contains('h1', 'Hotels Module Features').should('be.visible');

    })

    it('Visualizar Tuors', () => {
        cy.get(':nth-child(2) > .dropdown-menu > :nth-child(3) > .dropdown-item').click();
        cy.contains('h1', 'Tours Module Features').should('be.visible');

    })

    it('Visualizar Cars', () => {
        cy.get(':nth-child(2) > .dropdown-menu > :nth-child(4) > .dropdown-item').click();
        cy.contains('h1', 'Cars Module Features').should('be.visible');

    })

    it('Visualizar Blogs', () => {
        cy.get(':nth-child(2) > .dropdown-menu > :nth-child(5) > .dropdown-item').click();
        cy.contains('h1', 'Blogs And Articles Module Features').should('be.visible');

    })

    it('Visualizar CMS', () => {
        cy.get(':nth-child(2) > .dropdown-menu > :nth-child(6) > .dropdown-item').click();
        cy.contains('h1', 'CMS Module Features').should('be.visible');

    })

    it('Visualizar Offers', () => {
        cy.get(':nth-child(2) > .dropdown-menu > :nth-child(7) > .dropdown-item').click();
        cy.contains('h1', 'Offers Module Features').should('be.visible');

    })

    it('Visualizar Newsletter', () => {
        cy.get(':nth-child(2) > .dropdown-menu > :nth-child(8) > .dropdown-item').click();
        cy.contains('h1', 'Newsletter Module Features').should('be.visible');

    })


    

})