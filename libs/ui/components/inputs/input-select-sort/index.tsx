import React, { useState } from 'react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Button from '../button';
import { VStack } from '@chakra-ui/react';
import { IInputSelectSortProps } from './props';
import InputSelectSortOption from './input-select-sort-option';
import SHADOWS from '../../../constants/shadows';

export const InputSelectSort = ({
    options,
    onClick,
    valueSelected,
}: IInputSelectSortProps) => {
    // Attributes
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // Functions
    function toggleIsMenuOpen() {
        setIsMenuOpen((prev) => !prev);
    }
    function isSortActive() {
        if (
            valueSelected === '' ||
            valueSelected === undefined ||
            valueSelected === 'None'
        ) {
            return false;
        }
        return true;
    }
    // Renders
    return (
        <VStack position='relative' spacing='0.25rem'>
            <Button
                font={FONTS.T1.T12px.Regular400.value}
                backgroundColor={
                    isMenuOpen ? COLORS.Disabled.value : 'transparent'
                }
                hoverBackgroundColor={COLORS.Disabled.value}
                height='1.75rem'
                padding='0.375rem 0.5rem'
                gap='0.25rem'
                borderRadius='0.25rem'
                color={
                    isSortActive()
                        ? COLORS.Localize.Purple.T500.value
                        : COLORS.InputText.value
                }
                hoverColor={COLORS.Localize.Purple.T500.value}
                onClick={() => {
                    toggleIsMenuOpen();
                }}
            >
                Sort
            </Button>

            <VStack
                display={isMenuOpen ? 'visible' : 'none'}
                position={'absolute'}
                top='1.75rem'
                right='0rem'
                bg={COLORS.White.T500.value}
                border={`0.0625rem solid ${COLORS.Line.value}`}
                borderRadius={'0.5rem'}
                w={'12.5rem'}
                h={'fit-content'}
                padding={'0.5rem 0.375rem'}
                spacing='0.25rem'
                // change the shadow Menu
                shadow={SHADOWS.Menu.value}
                zIndex={'10'}
            >
                {options.map((option) => (
                    <InputSelectSortOption
                        option={option}
                        onClick={onClick}
                        setIsMenuOpen={setIsMenuOpen}
                        isSelected={option.value === valueSelected}
                    />
                ))}
            </VStack>
        </VStack>
    );
};
export default InputSelectSort;
