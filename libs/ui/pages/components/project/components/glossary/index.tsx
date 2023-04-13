import React from 'react';
import InputLabel from '../../../../../components/inputs/input-label/index';
import COLORS from '../../../../../constants/colors';
import FONTS from '../../../../../constants/fonts';
import { Box, HStack, VStack } from '@chakra-ui/react';
import Button from '../../../../../components/inputs/button/index';
import Icon from '../../../../../components/contents/icon';
import TableRowTerm from './components/table-row-term';
import TableTerm from './components/table/index';
import { IGlossaryProps } from './props';
import ButtonIcon from '../../../../../components/inputs/button-icon';
import { ButtonSize } from '../../../../../components/inputs/button-icon/types';
import SHADOWS from '../../../../../constants/shadows';
import { useGlossaryLogic } from './logic';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../i18n/keys';

export const Glossary = ({
    projectTerms,
    activeProject,
    handleOnSaveTranslations,
    handleOnCreateTerm,
    handleOnDeleteTerm,
    setSearchFilterValue,
    searchFilterValue,
    setSortValue,
    sortValue,
    setIsDetectDuplicate,
    isDetectDuplicate,
}: IGlossaryProps) => {
    // Attributes
    const { tableRef, newRowTerm, clearNewRowTerm, addNewRowTerm } =
        useGlossaryLogic();
    const { t } = useTranslation();
    // Renders
    return (
        <VStack
            h='full'
            w='full'
            alignItems={'left'}
            padding='32px'
            spacing='32px'
        >
            <HStack>
                <InputLabel
                    label={t<string>(
                        tKeys.home.project.tab.glossary.content.title,
                    )}
                    labelColor={COLORS.Text.T400.value}
                    labelFont={FONTS.T1.T20px.SemiBold600.value}
                    description={t<string>(
                        tKeys.home.project.tab.glossary.content.description,
                    )}
                    descriptionColor={COLORS.InputText.value}
                    descriptionFont={FONTS.T1.T12px.Regular400.value}
                    spacing='0.5rem'
                    maxWidth='628px'
                />
                <Box w='full' />
                <Button
                    w={'fit-content'}
                    minW={'fit-content'}
                    h={'32px'}
                    minH={'32px'}
                    padding={'4px 12px 4px 8px'}
                    borderRadius={'8px'}
                    spacing='4px'
                    font={FONTS.T1.T12px.SemiBold600.value}
                    color={COLORS.Text.T400.value}
                    bg={COLORS.White.T500.value}
                    hoverBackgroundColor={COLORS.Tag.value}
                    startEnhancer={() => (
                        <Icon name='upload' stroke={COLORS.Text.T400.value} />
                    )}
                >
                    {t<string>(tKeys.home.project.tab.glossary.content.export)}
                </Button>
            </HStack>
            <TableTerm
                ref={tableRef}
                setSearchFilterValue={setSearchFilterValue}
                searchFilterValue={searchFilterValue}
                setSortValue={setSortValue}
                sortValue={sortValue}
                setIsDetectDuplicate={setIsDetectDuplicate}
                isDetectDuplicate={isDetectDuplicate}
            >
                {projectTerms?.data?.map((term, i) => {
                    return (
                        <TableRowTerm
                            key={i}
                            term={term}
                            activeProject={activeProject}
                            handleOnSaveTranslations={handleOnSaveTranslations}
                            handleOnDeleteTerm={handleOnDeleteTerm}
                            clearNewRowTerm={clearNewRowTerm}
                        />
                    );
                })}
                {newRowTerm.map((term, i) => {
                    return (
                        <TableRowTerm
                            key={i}
                            term={term}
                            activeProject={activeProject}
                            handleOnSaveTranslations={handleOnSaveTranslations}
                            handleOnDeleteTerm={handleOnDeleteTerm}
                            clearNewRowTerm={clearNewRowTerm}
                        />
                    );
                })}
            </TableTerm>
            <ButtonIcon
                position={'absolute'}
                right='32px'
                bottom='32px'
                borderRadius='6.25rem'
                size={ButtonSize.XXL}
                backgroundColor='#5F43E2'
                hoverBackgroundColor='#4C36B5'
                boxShadow={
                    SHADOWS.Elevation.Light.Bottom.T04 +
                    ',' +
                    SHADOWS.Elevation.Light.Bottom.T04
                }
                handleOnClick={() => {
                    // handleOnCreateTerm(
                    //     projectTerms?.data?.at(0)?.projectId as string,
                    // );
                    addNewRowTerm({});
                }}
            >
                <Icon
                    name='addCircle'
                    stroke='#FFFFFF'
                    width={28}
                    height={28}
                />
            </ButtonIcon>
        </VStack>
    );
};
