import React, { useState } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Text from '../../contents/text';
import SearchbarTagProps from './props';
import Searchbar from '../searchbar';
export default function SearchbarTag({
    border = `1px solid ${COLORS.Line.value}`,
    placeholder = 'Search for a project',
    h,
    w,
    alignItems = 'left',
    gap = '8px',
    borderRadius = '6px',
    padding,
    backgroundColor = COLORS.Disabled.value,
    searchbar,
    tags = [],
}: SearchbarTagProps) {
    //Attributes
    const [tagList, setTagList] = useState<Array<JSX.Element>>(tags);

    //Render
    return (
        <>
            <VStack
                w={w}
                h='fit-content'
                bg={backgroundColor}
                padding={padding}
                gap={gap}
                border={border}
                borderRadius={borderRadius}
                alignItems={alignItems}
            >
                <Box>
                    <Text
                        font={FONTS.T1.T14px.Medium500.value}
                        color={COLORS.Text.T400.value}
                        pb={'4px'}
                    >
                        Target languages
                    </Text>
                    <Text
                        font={FONTS.T1.T10px.Medium500.value}
                        color={COLORS.InputText.value}
                        mb='12px'
                    >
                        Target languages are secondary languages you want to add
                        to your project.
                    </Text>
                    <Searchbar {...searchbar} />
                    {tagList.length !== 0 && (
                        <HStack mt='12px'> {tagList.map((obj) => obj)}</HStack>
                    )}
                </Box>
            </VStack>
        </>
    );
}
