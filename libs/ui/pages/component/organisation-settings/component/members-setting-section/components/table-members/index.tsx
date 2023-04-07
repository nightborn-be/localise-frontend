import React from 'react';
import { VStack } from '@chakra-ui/react';
import TableHeader from '../../../../../../../components/table/table-header';
import TableRow from '../../../../../../../components/table/table-row';

const TableMembers = () => {
    // Render
    return (
        <VStack
            alignItems={'left'}
            w='full'
            padding='0rem 2rem 2rem 1.25rem'
            spacing={0}
        >
            <TableHeader />
            <VStack spacing='0.5rem'>
                <TableRow
                    avatarPicture='/assets/images/avatar.png'
                    firstName='Pierre'
                    lastName='De Moor'
                />
                <TableRow
                    avatarPicture='/assets/images/avatar.png'
                    firstName='Pierre'
                    lastName='De Moor'
                />
            </VStack>
        </VStack>
    );
};

export default TableMembers;
