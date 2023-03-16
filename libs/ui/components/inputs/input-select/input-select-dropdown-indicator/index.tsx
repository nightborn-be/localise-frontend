import React from 'react';
import { components } from 'react-select';
import { IDropwdownIndicatorProps } from './props';
const DropdownIndicator = ({
    props,
    dropdownIndicator,
}: IDropwdownIndicatorProps) => {
    return (
        <components.DropdownIndicator {...props}>
            {dropdownIndicator}
        </components.DropdownIndicator>
    );
};
export default DropdownIndicator;
