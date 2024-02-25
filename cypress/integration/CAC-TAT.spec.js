/// <reference types="Cypress" />

before(() => {
    cy.visit('./src/index.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

describe('Central de Atendimento ao Cliente TAT', function() {

    it('preenche os campos obrigatórios e envia o formulário', () => {
        cy.get('input[type="text"]')
        .first()
        .should('be.visible')
        .type('Maíra')
        .should('have.value', 'Maíra');

        cy.get('#lastName')
        .should('be.visible')
        .type('Brito')
        .should('have.value', 'Brito');

        cy.get('#email')
        .should('be.visible')
        .type('mmaira@email.com')
        .should('have.value', 'mmaira@email.com');

        cy.get('#open-text-area')
        .should('be.visible')
        .type('Olá, Cypress!')
        .should('have.value', 'Olá, Cypress!');

        cy.get('.button').click();
        cy.get('.success').should('be.visible')
    });

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.get('input[type="text"]')
        .first()
        .should('be.visible')
        .type('Maíra')
        .should('have.value', 'Maíra');

        cy.get('#lastName')
        .should('be.visible')
        .type('Brito')
        .should('have.value', 'Brito');

        cy.get('#email')
        .should('be.visible')
        .type('mmaira.email.com');

        cy.get('#open-text-area')
        .should('be.visible')
        .type('Olá, Cypress!')
        .should('have.value', 'Olá, Cypress!');

        cy.get('.button').click();
        cy.get('.error').should('be.visible'); 
    });

    it('se um valor não-numérico for digitado, seu valor continuará vazio.', () => {
        cy.get('#phone')
        .type('teste')
        .should('have.value','')
    });

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('input[type="text"]')
        .first()
        .should('be.visible')
        .clear()
        .type('Maíra')
        .should('have.value', 'Maíra');

        cy.get('#lastName')
        .should('be.visible')
        .clear()
        .type('Brito')
        .should('have.value', 'Brito');

        cy.get('#email')
        .should('be.visible')
        .clear()
        .type('mmaira@email.com')
        .should('have.value', 'mmaira@email.com');

        cy.get('#open-text-area')
        .should('be.visible')
        .clear()
        .type('Olá, Cypress!')
        .should('have.value', 'Olá, Cypress!');

        cy.get('.button').click();
        cy.get('.error').should('be.visible');
    });

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
        cy.get('input[type="text"]')
        .first()
        .should('be.visible')
        .type('Maíra')
        .should('have.value', 'Maíra');

        cy.get('#lastName')
        .should('be.visible')
        .type('Brito')
        .should('have.value', 'Brito');

        cy.get('#email')
        .should('be.visible')
        .type('mmaira@email.com');

        cy.get('#open-text-area')
        .should('be.visible')
        .type('Olá, Cypress!')
        .should('have.value', 'Olá, Cypress!');

        cy.get('#phone-checkbox').click()

        cy.get('.button').click();
        cy.get('.error').should('be.visible'); 

    });

    it.only('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
        
        cy.get('.button').click();
        cy.get('.error').should('be.visible'); 

    });

  })
  
