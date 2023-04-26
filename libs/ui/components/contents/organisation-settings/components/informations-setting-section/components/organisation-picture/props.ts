export interface IOrganisationPictureProps {
    pictureUrl: string;
    organisationName: string;
    onDrag: (pictureUrl: string, binary: string | ArrayBuffer | null) => void;
}
