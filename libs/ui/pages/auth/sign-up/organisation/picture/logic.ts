import { useState } from 'react';
import { useRouter } from 'next/router';
import { PictureLogicType } from './types';

export const usePictureLogic = (): PictureLogicType => {
    // Attributes
    const { push } = useRouter();
    const [picturePath, setPicturePath] = useState<string>('')
    const [pictureBinary, setPictureBinary] = useState<string | ArrayBuffer | null>();

    // Functions
    function handleOnContinue(picturePath: string) {
        push('/auth/sign-up/teammates/');
    }
    function handleOnLater() {
        push('/auth/sign-up/teammates/');
    }

    function onDeletePicture() {
        setPicturePath('');
    }


    function onDrag(pictureUrl: string, binary?: string | ArrayBuffer | null) {
        setPicturePath(pictureUrl);
        setPictureBinary(binary);
    }
    return {
        handleOnContinue,
        handleOnLater,
        picturePath,
        onDrag,
        onDeletePicture,
    };
};
