import React from 'react';
import InputLabel from '../../../inputs/input-label/index';
import COLORS from '../../../../constants/colors';
import FONTS from '../../../../constants/fonts';
import { Box, HStack, VStack } from '@chakra-ui/react';
import Button from '../../../inputs/button/index';
import Icon from '../../icon';
import TableRowTerm from './components/table-row-term';
import TableTerm from './components/table/index';
import { IGlossaryProps } from './props';
import ButtonIcon from '../../../inputs/button-icon';
import { ButtonSize } from '../../../inputs/button-icon/types';
import SHADOWS from '../../../../constants/shadows';
import { useGlossaryLogic } from './logic';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../i18n/keys';
import Tooltip from '../../tooltip';
import { TooltipType } from '../../tooltip/props';
import Text from '../../text';

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
    newRowTerm,
    setNewRowTerm,
    clearNewRowTerm,
    addNewRowTerm,
}: IGlossaryProps) => {
    // Attributes
    const { tableRef } = useGlossaryLogic({ addNewRowTerm });
    const { t } = useTranslation();
    // Renders
    return (
        <VStack
            h='full'
            w='full'
            alignItems={'left'}
            padding='2rem'
            spacing='2rem'
            overflowY='scroll'
            paddingBottom={'7px'}
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
                    maxWidth='39.25rem'
                />
                <Box w='full' />
                <Button
                    w={'fit-content'}
                    minW={'fit-content'}
                    h={'2rem'}
                    minH={'2rem'}
                    padding={'0.25rem 0.75rem 0.25rem 0.5rem'}
                    borderRadius={'0.5rem'}
                    spacing='0.25rem'
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
                            key={term.id}
                            isDisabled={true}
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
            <HStack
                alignItems={'center'}
                justifyContent={'right'}
                position={'absolute'}
                bottom='0.625rem'
                right='2rem'
            >
                <Tooltip
                    type={TooltipType.COMMAND}
                    command={
                        <Text
                            font={FONTS.T1.T10px.Regular400.value}
                            color={COLORS.InputText.value}
                        >
                            {t<string>(
                                tKeys.home.project.tab.glossary.content.cta.add
                                    .tooltip.shortcut,
                            )}
                        </Text>
                    }
                    label={t<string>(
                        tKeys.home.project.tab.glossary.content.cta.add.tooltip
                            .value,
                    )}
                    placement={'top'}
                    marginRight={'4.25rem'}
                    left='2.125rem'
                >
                    <ButtonIcon
                        borderRadius='6.25rem'
                        size={ButtonSize.XXL}
                        backgroundColor={COLORS.Localize.Purple.T500.value}
                        hoverBackgroundColor={COLORS.Localize.Purple.T600.value}
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
                            stroke={COLORS.White.T500.value}
                            width={28}
                            height={28}
                        />
                    </ButtonIcon>
                </Tooltip>
            </HStack>
        </VStack>
    );
};
