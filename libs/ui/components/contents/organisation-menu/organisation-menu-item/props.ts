export interface IOrganisationMenuItemProps {
    title?: string;
    description?: string;
    imageUrl?: string;
    isActive?: boolean;
    onSelect?: () => void;
    color?: string;
}
