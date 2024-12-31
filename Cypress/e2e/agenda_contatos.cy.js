describe('Teste de Agenda de Contatos', () => {
  const baseUrl = 'https://agenda-contatos-react.vercel.app/';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Deve adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('Teste Nome');
    cy.get('input[placeholder="E-mail"]').type('teste@exemplo.com');
    cy.get('input[placeholder="Telefone"]').type('123456789');
    cy.get('button.adicionar').click();
    cy.contains('Teste Nome').should('exist');
  });

  it('Deve editar um contato existente', () => {
    cy.get('button.edit').first().click();
    cy.get('input[placeholder="Nome"]').clear().type('Nome Alterado');
    cy.get('input[placeholder="E-mail"]').clear().type('alterado@exemplo.com');
    cy.get('input[placeholder="Telefone"]').clear().type('987654321');
    cy.get('button.adicionar').click(); // O botão é reutilizado para salvar
    cy.contains('Nome Alterado').should('exist');
  });

  it('Deve remover um contato', () => {
    cy.get('button.delete').first().click();
    cy.contains('Felice Lacerda').should('not.exist');
  });
});