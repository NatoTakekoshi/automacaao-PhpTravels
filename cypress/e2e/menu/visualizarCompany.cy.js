describe('Acessar menu Company', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('.navbar-toggler').click();
        cy.get('.navbar-nav > :nth-child(3) > .nav-link').click();
    })

    it('Visualizar Clients', () => {
        cy.get(':nth-child(3) > .dropdown-menu > :nth-child(1) > .dropdown-item').invoke('removeAttr', 'target').click();
        cy.url().should('be.equal', 'https://phptravels.com/clients')
        //cy.contains('h1', '').should('be.visible');

    })

    it('Visualizar Blogs', () => {
        cy.get(':nth-child(3) > .dropdown-menu > :nth-child(2) > .dropdown-item').invoke('removeAttr', 'target').click();
        cy.url().should('be.equal', 'https://phptravels.com/blog/')
        //cy.contains('h1', '').should('be.visible');

    })

    //Site apresenta erro de react apos rodar esse cenario
    /*
    it('Visualizar Docs', () => {
        cy.get(':nth-child(3) > .dropdown-menu > :nth-child(3) > .dropdown-item').invoke('removeAttr', 'target').click();
        cy.url().should('be.equal', 'https://docs.phptravels.com/')
        //cy.contains('h1', '').should('be.visible');

    })*/

    it('Visualizar Contact US', () => {
        cy.get(':nth-child(3) > .dropdown-menu > :nth-child(4) > .dropdown-item').click();
        cy.contains('h1', 'Contact Us').should('be.visible');

    })

    it('Visualizar About US', () => {
        cy.get(':nth-child(3) > .dropdown-menu > :nth-child(5) > .dropdown-item').click();
        cy.contains('h1', 'About Us').should('be.visible');

    })

    it('Visualizar The Team', () => {
        cy.get(':nth-child(3) > .dropdown-menu > :nth-child(6) > .dropdown-item').click();
        cy.contains('h1', 'The Core Team').should('be.visible');

    })

    it('Visualizar Jobs', () => {
        cy.get(':nth-child(3) > .dropdown-menu > :nth-child(7) > .dropdown-item').click();
        cy.contains('h1', 'We'+"'"+'re Growing, Join Us!').should('be.visible');

    })

    it('Visualizar Partners', () => {
        cy.get(':nth-child(3) > .dropdown-menu > :nth-child(8) > .dropdown-item').click();
        cy.contains('h1', 'We Love To Partner And Promote Our Affiliates').should('be.visible');

    })

    it('Visualizar Media Kit', () => {
        cy.get(':nth-child(3) > .dropdown-menu > :nth-child(9) > .dropdown-item').click();
        cy.contains('h1', 'Media Kit').should('be.visible');

    })

    
})