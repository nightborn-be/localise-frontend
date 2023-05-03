import React from 'react';
import Breadcrumb from '../../../../components/navigation/breadcrumb';
import { useTranslation } from 'react-i18next';
import { useProjectLogic } from './logic';
import Tab from '../../../../components/navigation/tabs/tab/index';
import Tabs from '../../../../components/navigation/tabs/index';
import { Box, VStack } from '@chakra-ui/react';
import { tKeys } from '../../../../../i18n/keys';
import Page from '../../../../components/contents/page/index';
import { Glossary } from '../../../../components/contents/project/glossary';
import Settings from '../../../../components/contents/project/settings/index';
import SideBar from '../../../../components/sidebar';
import { useSidebarLogic } from '../../../../components/sidebar/logic';
import { useRouter } from 'next/router';

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
        createProjectModalDisclosure,
        isDisableOnCloseProjectModal,
        handleToggleIsOrganisationClicked,
        handleOnOptionClick,
        isOrganisationClicked,
        options,
        activeOptionKey,
        setIsOrganisationClicked,
        isLoadingSearchProject,
        handleOnClickProject,
        handleOnUpdateColorProject,
    } = useSidebarLogic();

    const {
        activeKey,
        setActiveKey,
        projectTerms,
        handleOnSaveTranslations,
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
        isLoadingUpdateProject,
        isLoadingDeleteProject,
        isLoadingSearchTerms,
        projectData,
        handleOnDeleteNewTerm,
        projectLanguages,
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
    const { query } = useRouter();
    const { id } = query;

    // Render
    return (
        <Page>
            <SideBar
                handleToggleIsOrganisationClicked={
                    handleToggleIsOrganisationClicked
                }
                handleOnOptionClick={handleOnOptionClick}
                isOrganisationClicked={isOrganisationClicked}
                options={options}
                activeOptionKey={activeOptionKey}
                setIsOrganisationClicked={setIsOrganisationClicked}
                createProjectModalDisclosure={createProjectModalDisclosure}
                handleOnCreateProject={handleOnCreateProject}
                handleOnCreateOrganisation={handleOnCreateOrganisation}
                handleSwitchOrgansiation={handleSwitchOrgansiation}
                actualOrganisationUser={actualOrganisationUser}
                organisationUserData={organisationUserData}
                filterProjectValue={filterProjectValue}
                setFilterProjectValue={setFilterProjectValue}
                projectData={projectData}
                setActiveProject={setActiveProject}
                isDisableOnCloseProjectModal={isDisableOnCloseProjectModal}
                isLoadingSearchProject={isLoadingSearchProject}
                clearNewRowTerm={clearNewRowTerm}
                setSearchFilterValue={setSearchFilterValue}
                handleOnClickProject={handleOnClickProject}
                handleOnUpdateColorProject={handleOnUpdateColorProject}
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
                            label: projectData?.name as string,
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
                            projectData={projectData}
                            projectTerms={projectTerms}
                            activeProject={id as string}
                            handleOnSaveTranslations={handleOnSaveTranslations}
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
                            isLoadingSearchTerms={isLoadingSearchTerms}
                            handleOnDeleteNewTerm={handleOnDeleteNewTerm}
                            projectLanguages={projectLanguages}
                        />
                    </Tab>
                    <Tab
                        title={t<string>(tKeys.home.project.tab.settings.title)}
                    >
                        <Settings
                            projectLanguages={projectLanguages}
                            projectData={projectData}
                            handleOnUpdateProject={handleOnUpdateProject}
                            handleOnDeleteProject={handleOnDeleteProject}
                            isLoadingUpdateProject={isLoadingUpdateProject}
                            isLoadingDeleteProject={isLoadingDeleteProject}
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
