// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Acessa a pagina de login
Cypress.Commands.add('accessarLogin',() => {
    cy.visit('/');
    cy.get('.navbar-toggler').click();
    //utilizando o comando cy.invoke para remover o target do elemento e assim o forcando a abrir na mesma aba.
    cy.contains('a','Login').invoke('removeAttr', 'target').click();
})

//Preenche os campos email e senha
Cypress.Commands.add('preencherDadosLogin', (email, password) => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
})

//Realiza o login
Cypress.Commands.add('realizarLogin',(email,password) =>{
    cy.accessarLogin()
    cy.preencherDadosLogin(email,password);
    cy.get('#submit').click();

} )










