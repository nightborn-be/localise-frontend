import React from 'react';
import { VStack } from '@chakra-ui/react';
import TableHeaderMembers from '../table-header-members';
import { ITableMembersProps } from './props';
import TableRowMembers from '../table-row-members';

const TableMembers = ({ members }: ITableMembersProps) => {
    if (members) members.data.push({ role: 'Developer' });
    // Render
    return (
        <VStack
            alignItems={'left'}
            w='full'
            padding='0rem 2rem 2rem 1.25rem'
            spacing={0}
        >
            <TableHeaderMembers firstColTitle='Email' thirdColTitle='Role' />
            {members && (
                <VStack spacing='0.5rem'>
                    {members.data?.map((member) => {
                        return (
                            <TableRowMembers
                                avatarPicture=''
                                email={member.email as string}
                                role={member.role as string}
                            />
                        );
                    })}
                </VStack>
            )}
        </VStack>
    );
};

export default TableMembers;
