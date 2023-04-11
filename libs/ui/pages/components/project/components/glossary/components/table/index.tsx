import React from 'react';

import { ITableTermProps } from './props';
import { VStack } from '@chakra-ui/react';
import TableHeaderTerm from '../table-header-term';
export const TableTerm = ({ children }: ITableTermProps) => {
    return (
        <VStack>
            <TableHeaderTerm />
            {children}
        </VStack>
    );
};
export default TableTerm;
