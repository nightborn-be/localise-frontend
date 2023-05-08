import React from 'react';
import { IRoleProps } from './props';
import FONTS from '../../../constants/fonts';
import { HStack } from '@chakra-ui/react';
import InputSelect from '../../inputs/input-select';
import COLORS from '../../../constants/colors';
import { Options } from '../../inputs/input-select/props';
import { SingleValue } from 'react-select';
const Role = ({ selectedValue, setSelectedValue }: IRoleProps) => {
    // Attributes
    const roleOptions: Options[] = [
        { value: 'Admin', label: 'Admin' },
        { value: 'Developer', label: 'Developer' },
        { value: 'Translator', label: 'Translator' },
    ];
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
    function getDefaultValue() {
        return roleOptions.filter((role) => role.value === selectedValue).at(0);
    }
    // Render
    return (
        <>
            <HStack
                backgroundColor={getBackground()}
                py='0.25rem'
                px='0.5rem'
                width='fit-content'
                borderRadius={'0.25rem'}
            >
                <InputSelect
                    font={FONTS.T1.T12px.Medium500.value}
                    color={getColor()}
                    placeholderColor={COLORS.Localize.Purple.T500.value}
                    dropdownArrowColor={COLORS.Localize.Purple.T500.value}
                    background={COLORS.White.T500.value}
                    border='transparent'
                    options={roleOptions}
                    defaultValue={getDefaultValue()}
                    dropdownIndicator={undefined}
                    placeholder='Admin'
                    menuOptionWidth='12.5rem'
                    onChange={(event: SingleValue<Options>) => {
                        setSelectedValue(event?.value ?? '');
                    }}
                />
            </HStack>
        </>
    );
};
export default Role;
