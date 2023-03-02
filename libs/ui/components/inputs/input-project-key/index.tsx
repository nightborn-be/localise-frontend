import React from 'react';
import {
    Box,
    HStack,
    Input as ChakraInput,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
} from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Text from '../../contents/text';
import InputProjectKeyProps from './props';
import Icon from '../../contents/icon';
export default function InputProjectKey({
    color,
    border,
    borderRadius,
    padding,
    w,
    h,
    font = FONTS.T1.T14px.SemiBold600.value,
    placeholder,
    value,
    rightElement,
}: InputProjectKeyProps) {
    // Render
    return (
        <>
            <HStack>
                {/* ICON SECTION */}
                <Box mb='20px' ml='20px'>
                    <Icon name='projectLine' />
                </Box>

                {/* INPUT FIELD SECTION */}
                <InputGroup w={w} h={h}>
                    <InputLeftAddon
                        gap='8px'
                        padding='12px 8px 12px 12px'
                        borderRight={`1px solid ${COLORS.Tag.value}`}
                        borderTopLeftRadius={borderRadius}
                        borderBottomLeftRadius={borderRadius}
                    >
                        <Text
                            {...FONTS.T1.T12px.SemiBold600}
                            color={COLORS.InputText.value}
                        >
                            Projet key
                        </Text>
                    </InputLeftAddon>
                    <ChakraInput
                        pointerEvents={'none'}
                        value={value}
                        borderRadius={borderRadius}
                        backgroundColor={COLORS.BG.value}
                        padding={padding}
                        paddingLeft='12px'
                        placeholder={placeholder}
                        _placeholder={{
                            fontSize: font?.fontSize,
                            fontWeight: font?.fontWeight,
                            lineHeight: font?.lineHeight,
                        }}
                        focusBorderColor={'transparent'}
                        border={border}
                        borderRight={'none'}
                        color={color}
                        fontFamily={font?.fontFamily}
                        fontSize={font?.fontSize}
                        fontWeight={font?.fontWeight}
                        lineHeight={font?.lineHeight}
                        letterSpacing={font?.letterSpacing}
                        paddingInlineStart={'0px'}
                        paddingInlineEnd={'0px'}
                    />
                    <InputRightAddon
                        bg={COLORS.BG.value}
                        borderLeft='transparent'
                        paddingRight='8px'
                    >
                        <Box paddingLeft={'40px'}>{rightElement}</Box>
                    </InputRightAddon>
                </InputGroup>
            </HStack>
        </>
    );
}
