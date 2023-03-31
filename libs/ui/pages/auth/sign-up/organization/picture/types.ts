export type PictureLogicType = {
    handleOnContinue: (picturePath: string) => void;
    handleOnLater: () => void;
    picturePath: string;
    setPicturePath: (value: string) => void;
    onDeletePicture: () => void;
};
