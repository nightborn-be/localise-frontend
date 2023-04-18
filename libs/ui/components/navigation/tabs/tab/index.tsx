import React from 'react';
import { ITabProps } from './props';
import { Flex } from '@chakra-ui/react';

const Tab = ({ children }: ITabProps): JSX.Element => {
    // Render
    return (
        <Flex flex={1} flexGrow={1} w='full' h='full' overflowY='hidden'>
            {children}
        </Flex>
    );
};

export default Tab;
