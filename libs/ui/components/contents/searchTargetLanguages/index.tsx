import React, { useState } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Text from '../../contents/text';
import { LanguageDTO } from './types';
import ISearchTargetLanguagesProps from './props';
import Tag from '../tag';
import SearchbarProps from '../../inputs/searchbar/props';
import Searchbar from '../../inputs/searchbar';
const SearchTargetLanguages = <T extends object>({
    title,
    description,
    value,
    onChange,
    placeholder,
    tags = [],
}: ISearchTargetLanguagesProps) => {
    //Attributes
    const [tagList, setTagList] = useState<Array<LanguageDTO>>(tags);
    const searchBarProps: SearchbarProps = {
        color: COLORS.Text.T400.value,
        w: '550px',
        h: '40px',
        padding: '4px 10px',
        gap: '8px',
        backgroundColor: COLORS.White.T500.value,
        placeholder,
        placeholderColor: COLORS.InputText.value,
        borderRadius: '6px',
    };
    //Render
    return (
        <>
            <VStack
                w={'590px'}
                h='fit-content'
                bg={COLORS.Disabled.value}
                padding={'20px'}
                gap={'12px'}
                border={`1px solid ${COLORS.Line.value}`}
                borderRadius={'8px'}
                alignItems={'left'}
            >
                <Box>
                    <Text
                        font={FONTS.T1.T14px.Medium500.value}
                        color={COLORS.Text.T400.value}
                        pb={'4px'}
                    >
                        {title}
                    </Text>
                    <Text
                        font={FONTS.T1.T10px.Medium500.value}
                        color={COLORS.InputText.value}
                        mb='12px'
                    >
                        {description}
                    </Text>
                    <Searchbar
                        {...searchBarProps}
                        value={value}
                        onChange={onChange}
                    />
                    {tagList.length !== 0 && (
                        <HStack mt='12px' spacing={'4px'}>
                            {tagList.map((obj, i) => (
                                <Tag
                                    value={obj.value}
                                    font={FONTS.T1.T12px.Medium500.value}
                                />
                            ))}
                        </HStack>
                    )}
                </Box>
            </VStack>
        </>
    );
};

export default SearchTargetLanguages;
