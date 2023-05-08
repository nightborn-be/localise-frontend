import React from 'react';
import { VStack } from '@chakra-ui/react';
import TableHeader from '../../../../../../../components/table/table-header';
import TableRowMember from '../table-row-member';

const TableMembers = () => {
    // Render
    return (
        <VStack
            alignItems={'left'}
            w='full'
            padding='0rem 2rem 2rem 1.25rem'
            spacing={0}
        >
            <TableHeader
                firstColTitle='First name'
                secondColTitle='Name'
                thirdColTitle='Role'
            />
            <VStack spacing='0.5rem'>
                <TableRowMember
                    avatarPicture='/assets/images/avatar.png'
                    firstName='Pierre'
                    lastName='De Moor'
                />
                <TableRowMember
                    avatarPicture='/assets/images/avatar.png'
                    firstName='Pierre'
                    lastName='De Moor'
                />
            </VStack>
        </VStack>
    );
};

export default TableMembers;
