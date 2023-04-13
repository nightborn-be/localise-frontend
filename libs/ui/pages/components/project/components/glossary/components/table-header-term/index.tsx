import React, { useState } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import { ITableRowTermProps } from './props';
import Button from '../../../../../../../components/inputs/button';
import { ButtonSize } from '../../../../../../../components/inputs/button-icon/types';
import COLORS from '../../../../../../../constants/colors';
import FONTS from '../../../../../../../constants/fonts';
import Text from '../../../../../../../components/contents/text';
import Input from '../../../../../../../components/inputs/input';
import Icon from '../../../../../../../components/contents/icon';
import SearchInput from '../../../../../../../components/inputs/search-icon/index';
import ButtonIcon from 'ui/components/inputs/button-icon';
import InputSelectSort from '../../../../../../../components/inputs/input-select-sort/index';
import ToggleText from '../../../../../../../components/contents/toggle-text/index';
import SHADOWS from '../../../../../../../constants/shadows';
import { useTableHeaderTermLogic } from './logic';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../../../i18n/keys';

export default function TableHeaderTerm({
    setSearchFilterValue,
    searchFilterValue,
    setSortValue,
    sortValue,
    setIsDetectDuplicate,
    isDetectDuplicate,
}: ITableRowTermProps) {
    //Attributes
    const { isMoreMenuOpen, toggleIsMoreMenuOpen } = useTableHeaderTermLogic();
    const { t } = useTranslation();
    //Render
    return (
        <HStack
            w='full'
            h={'2.75rem'}
            alignItems='flex-start'
            border={'transparent'}
            spacing={0}
        >
            <HStack
                padding='0.5rem 0rem 0.5rem 1.25rem'
                spacing='0.625rem'
                w='full'
                h='44px'
                alignItems={'center'}
                justifyContent={'left'}
            >
                <Text
                    font={FONTS.T1.T12px.SemiBold600.value}
                    color={COLORS.InputText.value}
                >
                    {t<string>(
                        tKeys.home.project.tab.glossary.content.table.header
                            .column.key_name,
                    )}
                </Text>
            </HStack>
            <HStack
                padding='0.5rem 1.25rem'
                spacing='0.625rem'
                w='full'
                h='2.75rem'
                alignItems={'center'}
            >
                <Text
                    font={FONTS.T1.T12px.SemiBold600.value}
                    color={COLORS.InputText.value}
                >
                    {t<string>(
                        tKeys.home.project.tab.glossary.content.table.header
                            .column.source_language,
                    )}
                </Text>
            </HStack>
            <HStack
                padding='0.5rem 1.25rem'
                spacing='0.625rem'
                w='full'
                h='2.75rem'
                alignItems={'center'}
            >
                <Text
                    font={FONTS.T1.T12px.SemiBold600.value}
                    color={COLORS.InputText.value}
                >
                    {t<string>(
                        tKeys.home.project.tab.glossary.content.table.header
                            .column.target_language,
                    )}
                </Text>
            </HStack>

            <HStack
                padding='0.5rem 0.5rem 0.5rem 1.25rem'
                spacing='0.25rem'
                w='full'
                h='2.75rem'
                alignItems={'center'}
                justifyContent={'right'}
            >
                <SearchInput
                    color={COLORS.Text.T400.value}
                    padding='0.25rem 0.625rem'
                    gap='0.5rem'
                    placeholderColor={COLORS.InputText.value}
                    borderRadius='0.375rem'
                    placeholder={t<string>(
                        tKeys.home.project.tab.glossary.content.table.header
                            .column.param.search.placeholder,
                    )}
                    value={searchFilterValue}
                    onChange={(event) =>
                        setSearchFilterValue(event.target.value)
                    }
                />
                <InputSelectSort
                    options={[
                        {
                            value: 'None',
                            label: t<string>(
                                tKeys.home.project.tab.glossary.content.table
                                    .header.column.param.sort.none,
                            ),
                        },
                        {
                            value: 'Name',
                            label: t<string>(
                                tKeys.home.project.tab.glossary.content.table
                                    .header.column.param.sort.name,
                            ),
                            icon: <Icon name='sortName' />,
                        },
                        {
                            value: 'Author',
                            label: t<string>(
                                tKeys.home.project.tab.glossary.content.table
                                    .header.column.param.sort.author,
                            ),
                            icon: <Icon name='sort' />,
                        },
                        {
                            value: 'Date',
                            label: t<string>(
                                tKeys.home.project.tab.glossary.content.table
                                    .header.column.param.sort.date,
                            ),
                            icon: <Icon name='date' />,
                        },
                    ]}
                    onClick={setSortValue}
                    valueSelected={sortValue}
                />
                <VStack position={'relative'}>
                    <ButtonIcon
                        aria-label=''
                        borderRadius='0.375rem'
                        size={ButtonSize.SMALL}
                        padding='0.25rem'
                        gap='0.625rem'
                        backgroundColor={
                            isMoreMenuOpen
                                ? COLORS.Stroke.value
                                : COLORS.White.T500.value
                        }
                        hoverBackgroundColor={COLORS.Stroke.value}
                        handleOnClick={toggleIsMoreMenuOpen}
                    >
                        <Icon
                            pointerEvents='none'
                            name={'more'}
                            fill={COLORS.InputText.value}
                        />
                    </ButtonIcon>
                    <Box
                        display={isMoreMenuOpen ? 'visibile' : 'none'}
                        position={'absolute'}
                        right='0px'
                        top='28px'
                        zIndex='10'
                    >
                        <ToggleText
                            isChecked={isDetectDuplicate}
                            toggleChecked={() =>
                                setIsDetectDuplicate(!isDetectDuplicate)
                            }
                            text={t<string>(
                                tKeys.home.project.tab.glossary.content.table
                                    .header.column.param.more.text,
                            )}
                            textPaddingRight='2.5rem'
                            border={`0.0625rem solid ${COLORS.Line.value}`}
                            w='12.5rem'
                            h='3rem'
                            padding='0.5rem 0.75rem'
                            gap='0.25rem'
                            borderRadius='0.5rem'
                            boxShadow={SHADOWS.Menu.value}
                        />
                    </Box>
                </VStack>
            </HStack>
        </HStack>
    );
}
