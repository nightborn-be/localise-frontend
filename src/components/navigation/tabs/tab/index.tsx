import React from 'react';
import { ITabProps } from './props';
import { Flex, Text } from '@chakra-ui/react';

const Tab = ({ children, onSelect, active }: ITabProps): JSX.Element => {
    // Render
    return (
        <Text
            cursor='pointer'
            onClick={onSelect}
            fontWeight={500}
            fontSize={15}
            color={active ? '#393360' : '#8F95B2'}
        >
            {children}
        </Text>
    );
};

export default Tab;
