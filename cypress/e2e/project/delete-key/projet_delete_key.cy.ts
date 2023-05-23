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

    describe('Testing delete key flow', () => {
        it('create project sucessfull', () => {
            cy.get('[data-cy=addProjectButton').should('be.visible');
            cy.get('[data-cy=addProjectButton]').click();

            cy.get('[data-cy=modalCreateProject]').should('be.visible');
            cy.contains('Create a new project').should('be.visible');

            cy.get('[data-cy=modalInputProjectName]').should('be.visible');
            cy.get('[data-cy=modalInputProjectName]').type('Test Project Name');

            cy.get('[data-cy=searchBarSelect]').click();
            cy.get('[data-cy=searchBarInput]').should('be.visible');
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

        it('create new key sucessfull with Missing Term', () => {
            cy.get('[data-cy="addNewRowMissingTermButton"]').should(
                'be.visible',
            );
            cy.get('[data-cy="addNewRowMissingTermButton"]').click();

            cy.get('[data-cy="unSavedBadge"]').should('be.visible');

            cy.get('[data-cy="0_newRowTerm_addNewKeyInput"]').should(
                'be.visible',
            );
            cy.get('[data-cy="0_newRowTerm_addNewKeyInput"]').type('new key');

            cy.get('[data-cy="0_newRowTerm_expandButton"]').should(
                'be.visible',
            );
            cy.get('[data-cy="0_newRowTerm_expandButton"]').click();

            cy.get('[data-cy="addNewKeyDescriptionInput"]').should(
                'be.visible',
            );
            cy.get('[data-cy="addNewKeyDescriptionInput"]').type(
                'Add new key description',
            );
            cy.get('[data-cy="projectLanguagesInput_0"]').should('be.visible');
            cy.get('[data-cy="projectLanguagesInput_0"]').type(
                'new traduction',
            );
            cy.get('[data-cy="projectLanguagesInput_1"]').should('be.visible');
            cy.get('[data-cy="projectLanguagesInput_1"]').type(
                'new traduction',
            );
            cy.get('[data-cy="saveAddNewKey"]').should('be.visible');
            cy.get('[data-cy="saveAddNewKey"]').click({
                multiple: true,
                force: true,
            });

            cy.get('[data-cy="unSavedBadge"]').should('not.exist');
        });

        it('create project sucessfull', () => {
            cy.get('[data-cy="0_projectTerm_expandButton"]').should(
                'be.visible',
            );
            cy.get('[data-cy="0_projectTerm_expandButton"]').click();

            cy.get('[data-cy="deleteKey"]').should('be.visible');
            cy.get('[data-cy="deleteKey"]').click({
                multiple: true,
                force: true,
            });
        });
    });
});
