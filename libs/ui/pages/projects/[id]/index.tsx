import React from 'react';
import Breadcrumb from '../../../components/navigation/breadcrumb';
import { useTranslation } from 'react-i18next';
import { useProjectLogic } from './logic';
import Tab from '../../../components/navigation/tabs/tab/index';
import Tabs from '../../../components/navigation/tabs/index';
import { Box, VStack } from '@chakra-ui/react';
import { tKeys } from '../../../../i18n/keys';
import Page from '../../../components/contents/page/index';
import SidebarPage from '../../../components/contents/sidebar-page/index';
import { Glossary } from '../../../components/contents/project/glossary';
import Settings from '../../../components/contents/project/settings/index';
import { useSidebarPageLogic } from '../../../components/contents/sidebar-page/logic';

const ProjectPage = () => {
    // Attributes
    const { t } = useTranslation();
    const {
        handleOnCreateProject,
        handleOnCreateOrganisation,
        handleSwitchOrgansiation,
        actualOrganisationUser,
        organisationUserData,
        organisationProjectData,
        filterProjectValue,
        setFilterProjectValue,
        activeProject,
        setActiveProject,
        refecthOrganisationUserData,
        refetchActualUserOrganisation,
        refetchOrganisationProjectData,
        refetchUserData,
    } = useSidebarPageLogic();

    const {
        activeKey,
        setActiveKey,
        projectTerms,
        handleOnSaveTranslations,
        handleOnCreateTerm,
        handleOnDeleteTerm,
        setSearchFilterValue,
        searchFilterValue,
        sortValue,
        setSortValue,
        setIsDetectDuplicate,
        isDetectDuplicate,
        newRowTerm,
        setNewRowTerm,
        clearNewRowTerm,
        addNewRowTerm,
        handleOnUpdateProject,
        handleOnDeleteProject,
    } = useProjectLogic({
        activeProject,
        setActiveProject,
        actualOrganisationUser,
        organisationProjectData,
        refecthOrganisationUserData,
        refetchActualUserOrganisation,
        refetchOrganisationProjectData,
        refetchUserData,
    });

    // Render
    return (
        <Page>
            <SidebarPage
                handleOnCreateProject={handleOnCreateProject}
                handleOnCreateOrganisation={handleOnCreateOrganisation}
                handleSwitchOrgansiation={handleSwitchOrgansiation}
                actualOrganisationUser={actualOrganisationUser}
                organisationUserData={organisationUserData}
                organisationProjectData={organisationProjectData}
                filterProjectValue={filterProjectValue}
                setFilterProjectValue={setFilterProjectValue}
                activeProject={activeProject}
                setActiveProject={setActiveProject}
            />
            <VStack
                h='full'
                w='full'
                maxH='full'
                alignItems={'left'}
                padding='0rem'
                spacing={0}
            >
                <Breadcrumb
                    elements={[
                        {
                            label: t<string>(
                                tKeys.home.project.breadcrumb.title,
                            ),
                        },
                        {
                            label: activeProject?.name as string,
                        },
                    ]}
                />

                <Tabs
                    activeKey={activeKey}
                    onChange={(key) => setActiveKey(key)}
                >
                    <Tab
                        title={t<string>(tKeys.home.project.tab.glossary.title)}
                    >
                        <Glossary
                            projectTerms={projectTerms}
                            activeProject={activeProject}
                            handleOnSaveTranslations={handleOnSaveTranslations}
                            handleOnCreateTerm={handleOnCreateTerm}
                            handleOnDeleteTerm={handleOnDeleteTerm}
                            setSearchFilterValue={setSearchFilterValue}
                            searchFilterValue={searchFilterValue}
                            setSortValue={setSortValue}
                            sortValue={sortValue}
                            setIsDetectDuplicate={setIsDetectDuplicate}
                            isDetectDuplicate={isDetectDuplicate}
                            newRowTerm={newRowTerm}
                            setNewRowTerm={setNewRowTerm}
                            clearNewRowTerm={clearNewRowTerm}
                            addNewRowTerm={addNewRowTerm}
                        />
                    </Tab>
                    <Tab
                        title={t<string>(tKeys.home.project.tab.settings.title)}
                    >
                        <Settings
                            activeProject={activeProject}
                            handleOnUpdateProject={handleOnUpdateProject}
                            handleOnDeleteProject={handleOnDeleteProject}
                        />
                    </Tab>
                    <Tab
                        title={t<string>(
                            tKeys.home.project.tab.statistics.title,
                        )}
                    >
                        <Box bg='green.400' h='31.25rem' />
                    </Tab>
                    <Tab
                        title={t<string>(tKeys.home.project.tab.history.title)}
                    >
                        <Box bg='yellow.400' h='31.25rem' />
                    </Tab>
                </Tabs>
            </VStack>
        </Page>
    );
};
export default ProjectPage;
