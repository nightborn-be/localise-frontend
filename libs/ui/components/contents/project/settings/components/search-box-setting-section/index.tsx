import React from 'react';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../../i18n/keys';
import COLORS from '../../../../../../constants/colors';
import SearchbarSelect from '../../../../../../components/inputs/searchbar-select/index';
import { ISearchBoxSettingSectionProps } from './props';
import SearchBox from '../../../../../../components/contents/search-box/index';

export const SearchBoxSettingSection = ({
    targetLanguagesRef,
    filter,
    onTagDelete,
    onCheck,
    activeKeys,
    value,
    setValue,
}: ISearchBoxSettingSectionProps) => {
    // Attributes
    const { t } = useTranslation();
    // Render
    return (
        <Box w='full' padding='0rem 2rem 2rem 1.25rem' ref={targetLanguagesRef}>
            <SearchBox<string>
                w='full'
                bgColor={COLORS.White.T500.value}
                border='none'
                padding='0rem'
                title={t<string>(
                    tKeys.home.project.tab.settings.content.target_languages
                        .title,
                )}
                description={t<string>(
                    tKeys.home.project.tab.settings.content.target_languages
                        .description,
                )}
                placeholder={t<string>(
                    tKeys.home.project.tab.settings.content.target_languages
                        .placeholder,
                )}
                noValueMsg={t<string>(
                    tKeys.home.project.tab.settings.content.target_languages
                        .not_found,
                )}
                onTagDelete={onTagDelete}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onCheck={onCheck}
                activeKeys={activeKeys}
                options={filter(value)}
            />
        </Box>
    );
};

export default SearchBoxSettingSection;
