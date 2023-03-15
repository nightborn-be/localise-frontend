import React from 'react';
import { components } from 'react-select';
const DropdownIndicator = ({ props, dropDownIndicator }) => {
    return (
        <components.DropdownIndicator {...props}>
            {dropDownIndicator}
        </components.DropdownIndicator>
    );
};
export default DropdownIndicator;
