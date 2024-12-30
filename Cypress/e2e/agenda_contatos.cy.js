describe('Teste de Agenda de Contatos', () => {
    const baseUrl = 'https://agenda-contatos-react.vercel.app/';
    
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('Deve adicionar um novo contato', () => {
      cy.get('[data-testid="add-contact"]').click();
      cy.get('[data-testid="contact-name"]').type('Teste Nome');
      cy.get('[data-testid="contact-phone"]').type('123456789');
      cy.get('[data-testid="save-contact"]').click();
      cy.contains('Teste Nome').should('exist');
    });
  
    it('Deve editar um contato existente', () => {
      cy.get('[data-testid="edit-contact"]').first().click();
      cy.get('[data-testid="contact-name"]').clear().type('Nome Alterado');
      cy.get('[data-testid="save-contact"]').click();
      cy.contains('Nome Alterado').should('exist');
    });
  
    it('Deve remover um contato', () => {
      cy.get('[data-testid="delete-contact"]').first().click();
      cy.contains('Contato removido com sucesso').should('exist');
    });
  });