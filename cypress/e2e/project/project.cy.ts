describe('Test project dashoboard page  ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('[data-cy=loginChoose]').should('be.visible');
        cy.get('[data-cy=loginChoose]').click();

        cy.get('[data-cy=email]').should('be.visible');
        cy.get('[data-cy=email]').type('chahed.akeche@nightborn.com');

        cy.get('[data-cy=password]').should('be.visible');
        cy.get('[data-cy=password]').type('Test123?');

        cy.get('[data-cy=login]').should('be.visible');
        cy.get('[data-cy=login]').click();
        cy.wait(5000);
        cy.get('[data-cy=dashboard]').should('be.visible');
        cy.contains('Localize').should('be.visible');
    });

    it('Testing side bar flow ', () => {
        //test search bar
        cy.get('[data-cy="searchBarSide"] > .chakra-input').should(
            'be.visible',
        );
        cy.get('[data-cy="searchBarSide"] > .chakra-input').type('search');
        cy.contains(
            'We could’nt find the project you were looking for.',
        ).should('be.visible');
        cy.get('[data-cy="searchBarSide"] > .chakra-input').clear();

        //test button
        cy.get('[data-cy=buttonSideBar_0]').should('be.visible');
        cy.get('[data-cy=buttonSideBar_0]').click();

        cy.get('[data-cy=buttonSideBar_1]').should('be.visible');
        cy.get('[data-cy=buttonSideBar_1]').click();

        cy.get('[data-cy=buttonSideBar_2').should('be.visible');
        cy.get('[data-cy=buttonSideBar_2]').click();

        cy.get('[data-cy=buttonSideBar_3]').should('be.visible');
        cy.get('[data-cy=buttonSideBar_3]').click();

        //test color button
        cy.get('[data-cy=buttonSideBar_0_buttonColor]').click();
        cy.get('[data-cy=buttonSideBar_0_buttonColor_1]').click();
    });
});
