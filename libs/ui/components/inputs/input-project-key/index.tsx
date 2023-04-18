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
import { IInputProjectKeyProps } from './props';
import Icon from '../../contents/icon';
const InputProjectKey = ({
    color,
    border,
    borderRadius,
    padding,
    w,
    h,
    font = FONTS.T1.T14px.SemiBold600.value,
    placeholder,
    value,
    text = 'Projet key',
    rightElement,
}: IInputProjectKeyProps) => {
    // Render
    return (
        <>
            <HStack w={w}>
                {/* ICON SECTION */}
                <Box mb='1.25rem' ml='1.25rem'>
                    <Icon name='projectLine' />
                </Box>

                {/* INPUT FIELD SECTION */}
                <InputGroup w={w} h={h}>
                    <InputLeftAddon
                        gap='0.5rem'
                        padding='0.75rem 0.5rem 0.75rem 0.75rem'
                        borderRight={`0.0625rem solid ${COLORS.Tag.value}`}
                        borderTopLeftRadius={borderRadius}
                        borderBottomLeftRadius={borderRadius}
                    >
                        <Text
                            {...FONTS.T1.T12px.SemiBold600}
                            color={COLORS.InputText.value}
                        >
                            {text}
                        </Text>
                    </InputLeftAddon>
                    <ChakraInput
                        pointerEvents={'none'}
                        value={value}
                        borderRadius={borderRadius}
                        backgroundColor={COLORS.BG.value}
                        padding={padding}
                        paddingLeft='0.75rem'
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
                        paddingInlineStart={'0rem'}
                        paddingInlineEnd={'0rem'}
                    />
                    <InputRightAddon
                        bg={COLORS.BG.value}
                        borderLeft='transparent'
                        paddingRight='0.5rem'
                    >
                        <Box paddingLeft={'2.5rem'}>{rightElement}</Box>
                    </InputRightAddon>
                </InputGroup>
            </HStack>
        </>
    );
};
export default InputProjectKey;
