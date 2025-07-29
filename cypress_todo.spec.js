describe('Todo App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Login with valid credentials', () => {
        cy.get('input[name=username]').type('admin');
        cy.get('input[name=password]').type('admin');
        cy.get('button').contains('Login').click();
        cy.contains('Todo List');
    });

    it('Login with invalid credentials', () => {
        cy.get('input[name=username]').type('fail');
        cy.get('input[name=password]').type('fail');
        cy.get('button').contains('Login').click();
        cy.contains('Invalid');
    });

    it('Create, edit, delete todo', () => {
        // Login first
        cy.get('input[name=username]').type('admin');
        cy.get('input[name=password]').type('admin');
        cy.get('button').contains('Login').click();

        // Add todo
        cy.get('input[name=todoText]').type('New Task');
        cy.get('button').contains('Add').click();
        cy.contains('New Task');

        // Edit
        cy.get('button').contains('Edit').click();
        cy.get('input[name=todoText]').clear().type('Updated Task');
        cy.get('button').contains('Add').click();
        cy.contains('Updated Task');

        // Delete
        cy.get('button').contains('Delete').click();
        cy.contains('Updated Task').should('not.exist');
    });
});
