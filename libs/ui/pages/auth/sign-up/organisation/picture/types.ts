export type PictureLogicType = {
    handleOnContinue: (picturePath: string) => void;
    handleOnLater: () => void;
    picturePath: string;
    onDrag: (
        pictureUrl: string,
        binary?: string | ArrayBuffer | null | undefined,
    ) => void;
    onDeletePicture: () => void;
};
