import React from 'react';
import { HStack } from '@chakra-ui/react';
import { ITableRowTermProps } from './props';
import COLORS from '../../../../../../../constants/colors';
import FONTS from '../../../../../../../constants/fonts';
import Text from '../../../../../../../components/contents/text';
import { useTableHeaderTermLogic } from './logic';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../../../i18n/keys';
import OptionColumn from './components/option-column';

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
            h={'1.75rem'}
            alignItems='flex-start'
            border={'transparent'}
            spacing={0}
        >
            <HStack
                padding='0.5rem 1.25rem'
                spacing='0.625rem'
                w='full'
                h={'1.75rem'}
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
                h={'1.75rem'}
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
                pr='3.75rem'
                spacing='0.625rem'
                w='full'
                h={'1.75rem'}
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
                spacing='0.25rem'
                w='full'
                h={'1.75rem'}
                alignItems={'center'}
                justifyContent={'right'}
            >
                <OptionColumn
                    setSearchFilterValue={setSearchFilterValue}
                    searchFilterValue={searchFilterValue}
                    setSortValue={setSortValue}
                    sortValue={sortValue}
                    setIsDetectDuplicate={setIsDetectDuplicate}
                    isDetectDuplicate={isDetectDuplicate}
                />
            </HStack>
        </HStack>
    );
}
