import React from 'react';
import { ITableTermProps } from './props';
import { VStack } from '@chakra-ui/react';
import TableHeaderTerm from '../table-header-term';

export const TableTerm = ({
    children,
    ref,
    setSearchFilterValue,
    searchFilterValue,
    setSortValue,
    sortValue,
    setIsDetectDuplicate,
    isDetectDuplicate,
}: ITableTermProps) => {
    // Render
    return (
        <VStack spacing='0.5rem' ref={ref} height={'full'}>
            <TableHeaderTerm
                setSearchFilterValue={setSearchFilterValue}
                searchFilterValue={searchFilterValue}
                setSortValue={setSortValue}
                sortValue={sortValue}
                setIsDetectDuplicate={setIsDetectDuplicate}
                isDetectDuplicate={isDetectDuplicate}
            />
            {children}
        </VStack>
    );
};
export default TableTerm;
