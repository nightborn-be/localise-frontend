export type PictureLogicType = {
    handleOnContinue: (picturePath: string) => void;
    handleOnLater: () => void;
    picturePath: string | ArrayBuffer | null;
    setPicturePath: (value: string | ArrayBuffer | null) => void;
    onDeletePicture: () => void;
};
