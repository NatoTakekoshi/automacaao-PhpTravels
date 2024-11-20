describe('Realizar tentativas de login', () => {

    beforeEach(() => {
      cy.accessarLogin();
      cy.preencherDadosLogin(Cypress.env('user_default'),Cypress.env('password_default'));

    })

    it('Tentativa de login informando as credenciais corretas', () => {
      cy.realizarLogin(Cypress.env('user_default'), Cypress.env('password_default'));
  
    })

    it('Tentativa de login sem informar o email', () => {
      cy.get('#email').clear();
      cy.get('#submit').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Email is required to login');
      });
    })

    it('Tentativa de login sem informar a senha', () => {
      cy.get('#password').clear();
      cy.get('#submit').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Password is required to login');
      });
    })

  })
  