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

    describe('Testing organisation setting flow', () => {
        it('update organisation ', () => {
            cy.get('[data-cy=organisationSetting]').should('be.visible');
            cy.get('[data-cy=organisationSetting]').click();

            cy.get('[data-cy=organisationNameInput]').should('be.visible');
            cy.get('[data-cy=organisationNameInput]').clear();
            cy.get('[data-cy=organisationNameInput]').type('Test Name');

            cy.get('[data-cy=saveOrganisationSetting]').should('be.visible');
            cy.get('[data-cy=saveOrganisationSetting]').click();
        });

        it('delete organisation ', () => {
            cy.get('[data-cy=organisationSetting]').should('be.visible');
            cy.get('[data-cy=organisationSetting]').click();

            cy.get('[data-cy=deleteOrganisation]').should('be.visible');
            cy.get('[data-cy=deleteOrganisation]').click();

            cy.get('[data-cy=modalButtonCancel]').should('be.visible');

            cy.get('[data-cy=modalButtonCreate]').should('be.visible');
            cy.get('[data-cy=modalButtonCreate]').click();
        });
    });
});
