import React from 'react';

import { ITableTermProps } from './props';
import { VStack } from '@chakra-ui/react';
import TableHeaderTerm from '../table-header-term';
export const TableTerm = ({ children, ref }: ITableTermProps) => {
    return (
        <VStack spacing='8px' ref={ref}>
            <TableHeaderTerm />
            {children}
        </VStack>
    );
};
export default TableTerm;
