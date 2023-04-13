import React, { useEffect } from 'react';
import Breadcrumb from '../../../components/navigation/breadcrumb';
import { useTranslation } from 'react-i18next';
import { IProjectContentProps } from './props';
import { useProjectLogic } from './logic';
import Tab from '../../../components/navigation/tabs/tab/index';
import Tabs from '../../../components/navigation/tabs/index';
import { Box, VStack } from '@chakra-ui/react';
import { Glossary } from './components/glossary/index';
import { tKeys } from '../../../../i18n/keys';

const ProjectContent = ({
    projectTerms,
    activeProject,
    handleOnSaveTranslations,
    handleOnCreateTerm,
    handleOnDeleteTerm,
    setSearchFilterValue,
    searchFilterValue,
    sortValue,
    setSortValue,
    setIsDetectDuplicate,
    isDetectDuplicate,
}: IProjectContentProps) => {
    // Attributes
    const { activeKey, setActiveKey } = useProjectLogic();
    const { t } = useTranslation();
    useEffect(() => {
        setActiveKey(0);
    }, []);
    // Render
    return (
        <VStack
            h='full'
            w='full'
            alignItems={'left'}
            padding='0rem'
            spacing={0}
        >
            <Breadcrumb
                elements={[
                    {
                        label: t<string>(tKeys.home.project.breadcrumb.title),
                    },
                    {
                        label: activeProject?.name as string,
                    },
                ]}
            />

            <Tabs activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
                <Tab title={t<string>(tKeys.home.project.tab.glossary.title)}>
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
                    />
                </Tab>
                <Tab title={t<string>(tKeys.home.project.tab.settings.title)}>
                    <Box bg='blue.100' h='31.25rem' />
                </Tab>
                <Tab title={t<string>(tKeys.home.project.tab.statistics.title)}>
                    <Box bg='green.400' h='31.25rem' />
                </Tab>
                <Tab title={t<string>(tKeys.home.project.tab.history.title)}>
                    <Box bg='yellow.400' h='31.25rem' />
                </Tab>
            </Tabs>
        </VStack>
    );
};
export default ProjectContent;
