import React from 'react';
import { VStack } from '@chakra-ui/react';
import TableHeader from '../../../../../../../components/table/table-header';
import TableRow from '../../../../../../../components/table/table-row';
import { ITableMembersProps } from './props';

const TableMembers = ({ members }: ITableMembersProps) => {
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
                {members?.data?.map((member) => {
                    return (
                        <TableRow
                            avatarPicture='/assets/images/avatar.png'
                            firstName={member.email as string}
                            lastName={''}
                            role={member.role as string}
                        />
                    );
                })}
            </VStack>
        </VStack>
    );
};

export default TableMembers;
