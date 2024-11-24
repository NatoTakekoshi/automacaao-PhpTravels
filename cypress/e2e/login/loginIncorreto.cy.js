import { usuariosInvalidos } from '../../fixtures/usuariosInvalidos.json'

describe('Realizar login com credenciais incorretas', () => {

    beforeEach(() => {
        cy.accessarLogin();

      })

usuariosInvalidos.forEach(invalido => {
    it.only('Informando email invalido', () => {
      cy.preencherDadosLogin(Cypress.env('user_default'),Cypress.env('password_default'));
      cy.get('#email').clear();
      cy.get('#email').type(invalido.email)
      cy.get('#submit').click();
      cy.contains('p', 'Please check your emal and password').should('be.visible');

    })

    it.only('Informando senha invalida', () => {
      cy.preencherDadosLogin(Cypress.env('user_default'),Cypress.env('password_default'));
      cy.get('#password').clear();
      cy.get('#password').type(invalido.senha)
      cy.get('#submit').click();
      cy.contains('p', 'Please check your emal and password').should('be.visible');

    })

})

})


