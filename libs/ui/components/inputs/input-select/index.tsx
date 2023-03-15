import React, { cloneElement } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import Select, { components } from 'react-select';
import COLORS from '../../../constants/colors';
import IInputSelectProps from './props';
import InputLabel from '../input-label';
import Icon from '../../contents/icon';
import { getSelectStyle } from './style';
import Option from './input-select-option';
import DropdownIndicator from './input-select-dropdown-indicator';
export default function InputSelect({
    color = COLORS.Text.T500.value,
    placeholderColor = COLORS.InputText.value,
    label,
    description,
    border = `0.0625rem solid ${COLORS.Stroke.value}`,
    placeholder = 'Select value',
    h,
    w,
    errorBorder = `0.0625rem solid ${COLORS.Negative.value}`,
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
    dropDownIndicator,
    paddingRight,
    paddingLeft,
    menuOptionWidth,
    isSearchable = false,
    menuRightOption,
    menuLeftOption,
    selectMarginLeft,
    isMultiple = false,
}: IInputSelectProps) {
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
                        ),
                    }}
                    components={{
                        IndicatorSeparator: () => null,
                        DropdownIndicator: (props) => (
                            <DropdownIndicator
                                props={props}
                                dropDownIndicator={dropDownIndicator}
                            />
                        ),
                        Option: (props) => (
                            <Option props={props} isMultiple={isMultiple} />
                        ),
                    }}
                />
            )}
        </VStack>
    );
}
