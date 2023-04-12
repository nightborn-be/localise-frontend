import React, { useState } from 'react';
import Breadcrumb from '../../../components/navigation/breadcrumb';
import { useTranslation } from 'react-i18next';
import { IProjectContentProps } from './props';
import { useProjectLogic } from './logic';
import Tab from '../../../components/navigation/tabs/tab/index';
import Tabs from '../../../components/navigation/tabs/index';
import { Box, VStack } from '@chakra-ui/react';
import { Glossary } from './components/glossary/index';

const ProjectContent = ({
    projectTerms,
    activeProject,
    handleOnSaveTranslations,
    handleOnCreateTerm,
}: IProjectContentProps) => {
    const [activeKey, setActiveKey] = useState<React.Key>(0);
    // Attributes
    const { t } = useTranslation();

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
                        label: 'Projects',
                    },
                    {
                        label: activeProject?.name as string,
                    },
                ]}
            />

            <Tabs activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
                <Tab title='Glossary'>
                    <Glossary
                        projectTerms={projectTerms}
                        handleOnSaveTranslations={handleOnSaveTranslations}
                        handleOnCreateTerm={handleOnCreateTerm}
                    />
                </Tab>
                <Tab title='Settings'>
                    <Box bg='blue.100' h='31.25rem' />
                </Tab>
                <Tab title='Statistics'>
                    <Box bg='green.400' h='31.25rem' />
                </Tab>
                <Tab title='History'>
                    <Box bg='yellow.400' h='31.25rem' />
                </Tab>
            </Tabs>
        </VStack>
    );
};
export default ProjectContent;
