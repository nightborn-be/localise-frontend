export interface IOrganisationPictureProps {
    pictureUrl: string
    organisationName: string
    setOrganisationPicture: (binary: string | ArrayBuffer | null) => void
}