import React from 'react';
import { VStack } from '@chakra-ui/react';
import Select, { MultiValue, SingleValue } from 'react-select';
import COLORS from '../../../constants/colors';
import { IInputSelectProps, Options } from './props';
import InputLabel from '../input-label';
import { getSelectStyle } from './style';
import Option from './input-select-option';
import DropdownIndicator from './input-select-dropdown-indicator';

const InputSelect = ({
    color = COLORS.Text.T500.value,
    placeholderColor = COLORS.InputText.value,
    label,
    description,
    border = `0.0625rem solid ${COLORS.Stroke.value}`,
    placeholder = 'Select value',
    h,
    w,
    errorBorder = `0.0625rem solid ${COLORS.Error.T500.value}`,
    alignItems = 'left',
    fontSize = '0.75rem',
    fontWeight = '400',
    fontFamily = 'Inter',
    isValid = true,
    options,
    dropdownArrowColor = COLORS.InputText.value,
    backgroundOptionColor = COLORS.Localize.Purple.T500.value,
    focusBackgroundOptionColor = COLORS.Tag.value,
    selectedOptionColor = COLORS.White.T500.value,
    textOptionColor = COLORS.Text.T400.value,
    borderRadiusOption = '0.25rem',
    borderRadius = '0.5rem',
    dropdownIndicator,
    paddingRight,
    paddingLeft,
    menuOptionWidth,
    isSearchable = false,
    menuRightOption,
    menuLeftOption,
    selectMarginLeft,
    isMultiple,
    font,
    paddingContainer,
    onChange,
}: IInputSelectProps) => {
    // Render
    return (
        <VStack spacing='0.25rem' w={w} h={h} alignItems={alignItems}>
            {/* Input label section */}
            <InputLabel label={label} description={description} />

            {/* Input select section */}
            {options && (
                <Select
                    isMulti={isMultiple}
                    isSearchable={isSearchable}
                    controlShouldRenderValue={isMultiple ? false : true}
                    hideSelectedOptions={false}
                    closeMenuOnSelect={isMultiple ? false : true}
                    isClearable={false}
                    options={options}
                    placeholder={placeholder}
                    onChange={(v, a) => onChange?.(v as any, a)}
                    styles={{
                        ...getSelectStyle(
                            isValid,
                            border,
                            errorBorder,
                            borderRadius,
                            fontSize,
                            fontWeight,
                            fontFamily,
                            color,
                            selectMarginLeft,
                            placeholderColor,
                            menuOptionWidth,
                            menuRightOption,
                            menuLeftOption,
                            borderRadiusOption,
                            isMultiple,
                            selectedOptionColor,
                            textOptionColor,
                            dropdownArrowColor,
                            paddingLeft,
                            paddingRight,
                            backgroundOptionColor,
                            focusBackgroundOptionColor,
                            font,
                            paddingContainer,
                        ),
                    }}
                    components={{
                        IndicatorSeparator: () => null,
                        DropdownIndicator: (props) => {
                            if (!dropdownIndicator) return null;
                            return (
                                <DropdownIndicator
                                    props={props}
                                    dropdownIndicator={dropdownIndicator}
                                />
                            );
                        },
                        Option: (props) => (
                            <Option props={props} isMultiple={!!isMultiple} />
                        ),
                    }}
                />
            )}
        </VStack>
    );
};

export default InputSelect;
