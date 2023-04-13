import React, { cloneElement } from 'react';
import { HStack } from '@chakra-ui/react';
import { IInputSelectSortOption } from './props';
import Text from '../../../contents/text';
import COLORS from '../../../../constants/colors';
import FONTS from '../../../../constants/fonts';

export const InputSelectSortOption = ({
    option,
    onClick,
    isSelected,
    setIsMenuOpen,
}: IInputSelectSortOption) => {
    // Render
    return (
        <HStack
            spacing={'12px'}
            h='32px'
            w='full'
            onClick={() => {
                onClick(option.value);
                setIsMenuOpen(false);
            }}
            bg={isSelected ? COLORS.Localize.Purple.T500.value : undefined}
            padding={'12px'}
            borderRadius={'4px'}
            _hover={{
                bg: isSelected
                    ? COLORS.Localize.Purple.T500.value
                    : COLORS.Disabled.value,
            }}
        >
            {isSelected && option.icon
                ? cloneElement(option.icon, {
                      stroke: COLORS.White.T500.value,
                      fill: COLORS.White.T500.value,
                  })
                : option.icon}
            <Text
                color={
                    isSelected
                        ? COLORS.White.T500.value
                        : COLORS.Text.T400.value
                }
                font={FONTS.T1.T12px.Medium500.value}
            >
                {option.label}
            </Text>
        </HStack>
    );
};

export default InputSelectSortOption;
