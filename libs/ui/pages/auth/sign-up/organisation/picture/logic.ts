import { useState } from 'react';
import { useRouter } from 'next/router';
import { PictureLogicType } from './types';

export const usePictureLogic = (): PictureLogicType => {
    // Attributes
    const { push } = useRouter();
    const [picturePath, setPicturePath] = useState<string | ArrayBuffer | null>('');

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

    return {
        handleOnContinue,
        handleOnLater,
        picturePath,
        setPicturePath,
        onDeletePicture,
    };
};
