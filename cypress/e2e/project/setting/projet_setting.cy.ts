describe('Test project dashboard page ', () => {
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
    });

    describe('Testing setting project flow', () => {
        it('testing setting flow ', () => {
            cy.get('[data-cy=tab_1]').should('be.visible');
            cy.get('[data-cy=tab_1]').click();

            //update project name
            cy.get('[data-cy=projectNameSetting]').should('be.visible');
            cy.get('[data-cy=projectNameSetting]').clear();
            cy.get('[data-cy=projectNameSetting]').type('New name');

            cy.get('[data-cy=sideBarMenuSettingItem_1]').should('be.visible');
            cy.get('[data-cy=sideBarMenuSettingItem_1]').click();

            //test color button
            cy.get('[data-cy=colorPickerSetting_1]').click();
            cy.get('[data-cy=colorPickerSetting_1]').click();

            cy.get('[data-cy=sideBarMenuSettingItem_2]').should('be.visible');
            cy.get('[data-cy=sideBarMenuSettingItem_2]').click();

            cy.get('[data-cy=searchBarSelect]').click();
            cy.get('[data-cy=searchBarInput]').should('be.visible');
            cy.get('[data-cy=searchBarOption_0]').click().wait(500);

            cy.get('[data-cy=sideBarMenuSettingItem_3]').should('be.visible');
            cy.get('[data-cy=sideBarMenuSettingItem_3]').click();

            cy.get(
                '[data-cy="searchBoxSetting_searchBar"] > .chakra-input',
            ).should('be.visible');
            cy.get(
                '[data-cy="searchBoxSetting_searchBar"] > .chakra-input',
            ).type('fr');
            cy.get('[data-cy=checkBox]').should('be.visible');
            cy.get('[data-cy=checkBoxOption_0]').click();
            cy.get('[data-cy=checkBoxOption_1]').click();

            //click in the middle to stop displaying the select choices
            cy.get('body').click();

            cy.get('[data-cy=saveSettingButton]').should('be.visible');
            cy.get('[data-cy=saveSettingButton]').click();
            cy.contains('New name').should('be.visible');
        });
    });

    describe('Testing setting error flow', () => {
        it('testing error flow because the project name is empty', () => {
            cy.get('[data-cy=tab_1]').should('be.visible');
            cy.get('[data-cy=tab_1]').click();
            //update project name
            cy.get('[data-cy=projectNameSetting]').should('be.visible');
            cy.get('[data-cy=projectNameSetting]').clear();

            //test color button
            cy.get('[data-cy=colorPickerSetting_1]').click();
            cy.get('[data-cy=colorPickerSetting_1]').click();

            cy.get('[data-cy=saveSettingButton]')
                .scrollIntoView()
                .should('be.visible');
            cy.get('[data-cy=saveSettingButton]').click().wait(500);
            cy.contains('Error we cannot create your project').should(
                'be.visible',
            );
        });
    });

    describe('Testing setting error flow', () => {
        it('testing delete project ', () => {
            cy.get('[data-cy=tab_1]').should('be.visible');
            cy.get('[data-cy=tab_1]').click();

            cy.get('[data-cy=deleteProjectButton]').should('be.visible');
            cy.get('[data-cy=deleteProjectButton]').click();

            cy.get('[data-cy=modalButtonCancel]').should('be.visible');

            cy.get('[data-cy=modalButtonCreate]').should('be.visible');
            cy.get('[data-cy=modalButtonCreate]').click();
        });
    });
});
