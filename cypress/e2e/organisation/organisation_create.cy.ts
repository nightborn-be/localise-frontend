describe('Test project dashoboard page ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('[data-cy=loginChoose]').should('be.visible');
        cy.get('[data-cy=loginChoose]').click();

        cy.get('[data-cy=email]').should('be.visible');
        cy.get('[data-cy=email]').type('chahed.akeche@nightborn.com');

        cy.get('[data-cy=password]').should('be.visible');
        cy.get('[data-cy=password]').type('Test123?');

        cy.get('[data-cy=login]').should('be.visible');
        cy.get('[data-cy=login]').click().wait(500);

        cy.get('[data-cy=dashboard]').should('be.visible');
        cy.contains('Localize').should('be.visible');
    });

    describe('Testing  create organisation  flow', () => {
        it('create organisation ', () => {
            cy.get('[data-cy=organisationSideBar]').should('be.visible');
            cy.get('[data-cy=organisationSideBar]').click();

            cy.get('[data-cy=createNewOrganisation]').should('be.visible');
            cy.get('[data-cy=createNewOrganisation]').click();

            cy.get('[data-cy=organisationNameInput]').should('be.visible');
            cy.get('[data-cy=organisationNameInput]').type('new orga');

            cy.get('[data-cy=modalButtonCreate]').should('be.visible');
            cy.get('[data-cy=modalButtonCreate]').click();
        });
    });
});
