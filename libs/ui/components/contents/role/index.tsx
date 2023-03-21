import React from 'react';
import { IRoleProps } from './props';
import FONTS from '../../../constants/fonts';
import { HStack } from '@chakra-ui/react';
import InputSelect from '../../inputs/input-select';
import COLORS from '../../../constants/colors';

const Role = ({ selectedValue, setSelectedValue }: IRoleProps) => {
    // Functions
    function getColor() {
        switch (selectedValue) {
            case 'Admin':
                return COLORS.Localize.Purple.T500.value;
            case 'Developer':
                return COLORS.Warning.T500.value;
            case 'Translator':
                return COLORS.Text.T400.value;
        }
    }
    function getBackground() {
        switch (selectedValue) {
            case 'Admin':
                return COLORS.Localize.Purple.T100.value;
            case 'Developer':
                return COLORS.Warning.T100.value;
            case 'Translator':
                return COLORS.Line.value;
            default:
                return COLORS.Localize.Purple.T100.value;
        }
    }

    // Render
    return (
        <>
            <HStack
                backgroundColor={getBackground()}
                py='4px'
                px='8px'
                width='fit-content'
                borderRadius={'4px'}
            >
                <InputSelect
                    font={FONTS.T1.T12px.Medium500.value}
                    color={getColor()}
                    placeholderColor={COLORS.Localize.Purple.T500.value}
                    dropdownArrowColor={COLORS.Localize.Purple.T500.value}
                    background={COLORS.White.T500.value}
                    border='transparent'
                    options={[
                        { value: 'Admin', label: 'Admin' },
                        { value: 'Developer', label: 'Developer' },
                        { value: 'Translator', label: 'Translator' },
                    ]}
                    dropdownIndicator={undefined}
                    placeholder='Admin'
                    menuOptionWidth='200px'
                    onChange={(event) => setSelectedValue(event.value)}
                />
            </HStack>
        </>
    );
};
export default Role;
