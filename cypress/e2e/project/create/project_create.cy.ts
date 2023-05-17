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
    describe('Testing create project with sucessfull flow', () => {
        it('create project sucessfull', () => {
            cy.get('[data-cy=addProjectButton').should('be.visible');
            cy.get('[data-cy=addProjectButton]').click();

            cy.get('[data-cy=modalCreateProject]').should('be.visible');
            cy.contains('Create a new project').should('be.visible');

            cy.get('[data-cy=modalInputProjectName]').should('be.visible');
            cy.get('[data-cy=modalInputProjectName]').type('Test Project Name');

            cy.get('[data-cy=searchBarSelect]').click();
            cy.get('[data-cy=searchBarInput]').should('be.visible');
            cy.get('[data-cy=searchBarInput]').type('test');
            cy.contains(
                'We could’nt find the language you were looking for.',
            ).should('be.visible');
            cy.get('[data-cy=searchBarInput]').clear();
            cy.get('[data-cy=searchBarOption_0]').click().wait(500);

            cy.get('[data-cy="searchBox_searchBar"] > .chakra-input').should(
                'be.visible',
            );
            cy.get('[data-cy="searchBox_searchBar"] > .chakra-input').type(
                'fef',
            );
            cy.contains(
                'We could’nt find the language you were looking for.',
            ).should('be.visible');
            cy.get('[data-cy="searchBox_searchBar"] > .chakra-input').clear();
            cy.get('[data-cy=checkBox]').should('be.visible');
            cy.get('[data-cy=checkBoxOption_0]').click();
            cy.get('[data-cy=checkBoxOption_1]').click();

            //click in the middle to stop displaying the select choices
            cy.get('body').click();

            cy.get('[data-cy=modalButtonCreate]').should('be.visible');
            cy.get('[data-cy=modalButtonCreate]').click();

            cy.contains('Test Project Name').should('be.visible');
        });
    });

    describe('Testing create project with error flow', () => {
        it('Testing without Name project and cancel modal flow', () => {
            cy.get('[data-cy=addProjectButton').should('be.visible');
            cy.get('[data-cy=addProjectButton]').click();

            cy.get('[data-cy=modalCreateProject]').should('be.visible');
            cy.contains('Create a new project').should('be.visible');

            cy.get('[data-cy=modalInputProjectName]').should('be.visible');
            cy.get('[data-cy=modalInputProjectName]').type('Test Project Name');

            cy.get('[data-cy=modalButtonCreate]').should('be.disabled');

            cy.get('[data-cy=modalButtonCancel]').should('be.visible');
            cy.get('[data-cy=modalButtonCancel]').click();

            cy.get('[data-cy=modalCreateProject]').should('not.exist');
        });

        it('Testing without Source langage and close modal flow', () => {
            cy.get('[data-cy=addProjectButton').should('be.visible');
            cy.get('[data-cy=addProjectButton]').click();

            cy.get('[data-cy=modalCreateProject]').should('be.visible');
            cy.contains('Create a new project').should('be.visible');

            cy.get('[data-cy=searchBarSelect]').click();
            cy.get('[data-cy=searchBarInput]').should('be.visible');
            cy.get('[data-cy=searchBarInput]').type('test');
            cy.contains(
                'We could’nt find the language you were looking for.',
            ).should('be.visible');
            cy.get('[data-cy=searchBarInput]').clear();
            cy.get('[data-cy=searchBarOption_0]').click();

            cy.get('[data-cy=modalButtonCreate]').should('be.disabled');

            cy.get('[data-cy=modalCloseButton]').click();
            cy.get('[data-cy=modalCreateProject]').should('not.exist');
        });
    });
});
