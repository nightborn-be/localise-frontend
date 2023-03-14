export interface IOrganizationMenuItemProps {
    title?: string,
    description?: string,
    imageUrl?: string,
    isActive?: boolean,
    onSelect?: () => void
}