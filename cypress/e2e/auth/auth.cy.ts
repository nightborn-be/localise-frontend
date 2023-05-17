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
        cy.get('[data-cy=password]').type('Test123?');

        cy.get('[data-cy=login]').should('be.visible');
        cy.get('[data-cy=login]').click();
    });

    describe('Testing error cases', () => {
        it('Testing invalid email', () => {
            cy.get('[data-cy=loginChoose]').should('be.visible');
            cy.get('[data-cy=loginChoose]').click();

            cy.get('[data-cy=email]').should('be.visible');
            cy.get('[data-cy=email]').type('incorrect@email');

            cy.get('[data-cy=password]').should('be.visible');
            cy.get('[data-cy=password]').type('Test123?');

            cy.get('[data-cy=login]').should('be.visible');
            cy.get('[data-cy=login]').click();
            cy.get('[data-cy=errorMsg]').should('be.visible');
        });

        it('Testing invalid password', () => {
            cy.get('[data-cy=loginChoose]').should('be.visible');
            cy.get('[data-cy=loginChoose]').click();

            cy.get('[data-cy=email]').should('be.visible');
            cy.get('[data-cy=email]').type('chahed.akeche@nightborn.com');

            cy.get('[data-cy=password]').should('be.visible');
            cy.get('[data-cy=password]').type('incorrectpassword');

            cy.get('[data-cy=login]').should('be.visible');
            cy.get('[data-cy=login]').click();

            cy.get('[data-cy=errorMsg]').should('be.visible');
        });
    });
});
