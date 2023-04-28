export type PictureLogicType = {
    handleOnContinue: () => void;
    handleOnLater: () => void;
    picturePath: string;
    onDrag: (
        pictureUrl: string,
        binary?: string | ArrayBuffer | null | undefined,
    ) => void;
    onDeletePicture: () => void;
    isLoading: boolean;
};
