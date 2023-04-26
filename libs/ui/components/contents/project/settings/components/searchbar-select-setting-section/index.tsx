import React from 'react';
import { Box } from '@chakra-ui/react';
import { ISearchBarSelectSettingSectionProps } from './props';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../../i18n/keys';
import COLORS from '../../../../../../constants/colors';
import SearchbarSelect from '../../../../../../components/inputs/searchbar-select/index';

export const SearchBarSelectSettingSection = ({
    sourceLanguageRef,
    sourceLanguageActiveKey,
    setSourceLanguageActiveKey,
    filterValue,
    setFilterValue,
    optionsSourceLanguage,
    form,
}: ISearchBarSelectSettingSectionProps) => {
    // Attributes
    const { t } = useTranslation();
    // Render
    return (
        <Box w='full' padding='0rem 2rem 0rem 1.25rem' ref={sourceLanguageRef}>
            <SearchbarSelect
                color={COLORS.Text.T400.value}
                h='2.5rem'
                padding='0rem 2rem 0rem 1.25rem'
                spacing='0.5rem'
                background={COLORS.White.T500.value}
                placeholder={t<string>(
                    tKeys.home.project.tab.settings.content.source_language
                        .search.placeholder,
                )}
                placeholderColor={COLORS.InputText.value}
                borderRadius='0.375rem'
                defaultSelectValue={t<string>(
                    tKeys.home.project.tab.settings.content.source_language
                        .placeholder,
                )}
                noValueMsg={t<string>(
                    tKeys.home.project.tab.settings.content.source_language
                        .search.not_found,
                )}
                filterValue={filterValue}
                activeKey={sourceLanguageActiveKey}
                onSelect={(value) => {
                    setSourceLanguageActiveKey(value);
                    form.sourceLanguage.onChange(value);
                }}
                onChange={(event) => setFilterValue(event.target.value)}
                options={optionsSourceLanguage.filter((option) =>
                    option.value
                        .toLowerCase()
                        .includes(filterValue.toLowerCase()),
                )}
                label={t<string>(
                    tKeys.home.project.tab.settings.content.source_language
                        .title,
                )}
                description={t<string>(
                    tKeys.home.project.tab.settings.content.source_language
                        .description,
                )}
            />
        </Box>
    );
};

export default SearchBarSelectSettingSection;
