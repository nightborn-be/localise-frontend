import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../../../../../i18n/keys';
import SearchInput from '../../../../../../../../../components/inputs/search-icon';
import COLORS from '../../../../../../../../../constants/colors';
import InputSelectSort from '../../../../../../../../../components/inputs/input-select-sort';
import Icon from '../../../../../../../../../components/contents/icon';
import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import ButtonIcon from '../../../../../../../../../components/inputs/button-icon';
import ToggleText from '../../../../../../../../../components/contents/toggle-text';
import SHADOWS from '../../../../../../../../../constants/shadows';
import { ButtonSize } from '../../../../../../../../../components/inputs/button-icon/types';
import { useOptionColumnLogic } from './logic';
import { IOptionColumnProps } from './props';

const OptionColumn = ({
    setSearchFilterValue,
    searchFilterValue,
    setSortValue,
    sortValue,
    setIsDetectDuplicate,
    isDetectDuplicate,
}: IOptionColumnProps) => {
    // Attributes
    const { isMoreMenuOpen, toggleIsMoreMenuOpen } = useOptionColumnLogic();
    const { t } = useTranslation();
    // Render
    return (
        <>
            <SearchInput
                color={COLORS.Text.T400.value}
                padding='0.25rem 0.625rem'
                gap='0.5rem'
                placeholderColor={COLORS.InputText.value}
                borderRadius='0.375rem'
                placeholder={t<string>(
                    tKeys.home.project.tab.glossary.content.table.header.column
                        .param.search.placeholder,
                )}
                value={searchFilterValue}
                onChange={(event) => setSearchFilterValue(event.target.value)}
            />
            <InputSelectSort
                options={[
                    {
                        value: 'None',
                        label: t<string>(
                            tKeys.home.project.tab.glossary.content.table.header
                                .column.param.sort.none,
                        ),
                    },
                    {
                        value: 'Name',
                        label: t<string>(
                            tKeys.home.project.tab.glossary.content.table.header
                                .column.param.sort.name,
                        ),
                        icon: <Icon name='sortName' />,
                    },
                    {
                        value: 'Author',
                        label: t<string>(
                            tKeys.home.project.tab.glossary.content.table.header
                                .column.param.sort.author,
                        ),
                        icon: <Icon name='sort' />,
                    },
                    {
                        value: 'Date',
                        label: t<string>(
                            tKeys.home.project.tab.glossary.content.table.header
                                .column.param.sort.date,
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
                    right='0rem'
                    top='1.75rem'
                    zIndex='10'
                >
                    <ToggleText
                        isChecked={isDetectDuplicate}
                        toggleChecked={() =>
                            setIsDetectDuplicate(!isDetectDuplicate)
                        }
                        text={t<string>(
                            tKeys.home.project.tab.glossary.content.table.header
                                .column.param.more.text,
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
        </>
    );
};
export default OptionColumn;
