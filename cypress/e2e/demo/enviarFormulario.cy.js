describe('Solicitar demontração com campos em branco', () => {

    beforeEach(() => {            
        cy.visit('/demo/');
        cy.get('.first_name').type('Renato')
        cy.get('.last_name').type('Miranda')
        cy.get('.whatsapp_number').type('11942887323')
        cy.get('.company_name').type('RenatoSolutis')
        cy.get('.email').type('Renato@teste.com')  
        cy.get('#numb1').invoke('text').then(($value_1) => {
            cy.get('#numb2').invoke('text').then(($value_2) => {
                cy.log($value_1)
                cy.log($value_2)
                //const numer1 = $value_1
                cy.get('#number').type(parseInt($value_1) + parseInt($value_2))
              })
          })
    })


    it('Solicitar demonstração sem prencher o first name', () => {
        cy.get('.first_name').clear();
        cy.get('#demo').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please type your first name');
          });


    })

    it('Solicitar demonstração sem prencher o last name', () => {
        cy.get('.last_name').clear();
        cy.get('#demo').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please type your last name');
          });

      
    })

    it('Solicitar demonstração sem prencher o whatsapp number', () => {
        cy.get('.whatsapp_number').clear();
        cy.get('#demo').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please type your whatsapp number');
          });
    })

    it('Solicitar demonstração sem prencher o business name', () => {
        cy.get('.company_name').clear();
        cy.get('#demo').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please type your business name');
          });
      
    })

    it('Solicitar demonstração sem prencher o email', () => {
        cy.get('.email').clear();
        cy.get('#demo').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please type your email name');
          });
      
    })

    it('Solicitar demonstração sem prencher o number result', () => {
        cy.get('#number').clear();
        cy.get('#demo').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please input result number');
          }); 
      
    })

    it('Preenchendo a soma dos numero com o valor incorreto', () => {
        cy.get('#number').type('99')
        cy.get('#demo').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Result number is invalid');
        })
    })

    it('Preenchendo email de forma incorreta', () => {
        cy.get('.email').clear();
        cy.get('.email').type('AAAAAA')
        cy.get('#demo').click();
        cy.contains('Email address is not valid. please use real email address').should('be.visible');

    })

    it('Preenchendo numero do whatsapp de forma incorreta', () => {
        cy.get('.whatsapp_number').clear();
        cy.get('.whatsapp_number').type('AAAAAA')
        cy.get('#demo').click();
        cy.contains('The whatsapp number is not valid. avoid adding country number, Zero or + signs before the number').should('be.visible');

    })




    
})

