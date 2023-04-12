import { Box } from '@chakra-ui/react';
import Page from '../../../libs/ui/components/contents/page';
import HomePage from '../../../libs/ui/pages/index';
import { useHomeLogic } from '../../../libs/ui/pages/logic';

export default function Web() {
    const {
        handleOnCreateProject,
        handleOnCreateOrganisation,
        handleOnDeleteOrganisation,
        handleUpdateOrganisation,
        actualOrganisationUser,
        isLoadingUpdateOrganisation,
        handleSwitchOrgansiation,
        organisationProjectData,
        organisationUserData,
        filterProjectValue,
        setFilterProjectValue,
        projectTerms,
        activeProject,
        setActiveProject,
        handleOnSaveTranslations,
        handleOnCreateTerm,
    } = useHomeLogic();
    return (
        <Page
            handleOnCreateProject={handleOnCreateProject}
            handleOnCreateOrganisation={handleOnCreateOrganisation}
            handleSwitchOrgansiation={handleSwitchOrgansiation}
            organisationProjectData={organisationProjectData}
            actualOrganisationUser={actualOrganisationUser}
            organisationUserData={organisationUserData}
            filterProjectValue={filterProjectValue}
            setFilterProjectValue={setFilterProjectValue}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
        >
            <HomePage
                handleOnCreateTerm={handleOnCreateTerm}
                handleOnDeleteOrganisation={handleOnDeleteOrganisation}
                handleUpdateOrganisation={handleUpdateOrganisation}
                handleOnSaveTranslations={handleOnSaveTranslations}
                actualOrganisationUser={actualOrganisationUser}
                isLoadingUpdateOrganisation={isLoadingUpdateOrganisation}
                projectTerms={projectTerms}
                activeProject={activeProject}
            />
        </Page>
    );
}
