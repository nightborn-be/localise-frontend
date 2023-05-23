import { UserWithMembershipPagingDTO } from 'gateways/resource-api/types';

export interface IMembersSettingSectionProps {
    membersRef: React.RefObject<HTMLDivElement>;
    addMembersDisclosure: any;
    members: UserWithMembershipPagingDTO;
}
