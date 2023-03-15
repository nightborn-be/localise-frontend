import React, { cloneElement } from 'react';
import { Box } from '@chakra-ui/react';
import { components } from 'react-select';
import COLORS from '../../../../constants/colors';
import Icon from '../../../contents/icon';
import { IOptionProps } from './props';
const Option = ({ props, isMultiple }: IOptionProps) => {
    // Render
    return (
        <components.Option {...props}>
            {isMultiple && (
                <Box w='1rem' h='1rem' mr={'0.75rem'}>
                    <Icon
                        name={props.isSelected ? 'checkboxOn' : 'checkboxOff'}
                    />
                </Box>
            )}
            {props.data.icon && !isMultiple && (
                <Box w='1rem' h='1rem' mr={'0.75rem'}>
                    {props.isSelected
                        ? cloneElement(props.data.icon, {
                              fill: COLORS.White.T500.value,
                          })
                        : props.data.icon}
                </Box>
            )}
            {props.data.value}
        </components.Option>
    );
};

export default Option;
