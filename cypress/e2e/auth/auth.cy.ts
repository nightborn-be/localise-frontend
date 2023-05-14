describe('Exemple', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    it('Testing normal flow sign in ', () => {
        cy.get('[data-cy=loginChoose]').should('be.visible');
        cy.get('[data-cy=loginChoose]').click();

        cy.get('[data-cy=email]').should('be.visible');
        cy.get('[data-cy=email]').type('chahed.akeche@nightborn.com');

        cy.get('[data-cy=password]').should('be.visible');
        cy.get('[data-cy=password]').type('test1234');

        cy.get('[data-cy=login]').should('be.visible');
        cy.get('[data-cy=login]').click();
    });

    it('Testing error email flow sign in ', () => {
        cy.get('[data-cy=loginChoose]').should('be.visible');
        cy.get('[data-cy=loginChoose]').click();

        cy.get('[data-cy=email]').should('be.visible');
        cy.get('[data-cy=email]').type('f');

        cy.get('[data-cy=password]').should('be.visible');
        cy.get('[data-cy=password]').type('test1234');

        cy.get('[data-cy=login]').should('be.visible');
        cy.get('[data-cy=login]').click();

        cy.get('[data-cy=errorMsg]').should('be.visible');
    });
});
