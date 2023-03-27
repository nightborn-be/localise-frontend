import { useRouter } from 'next/router';
import { PictureLogicType } from './types';

export const usePictureLogic = (): PictureLogicType => {
    // Attributes
    const { push, query } = useRouter();

    // Functions
    async function handleOnContinue(picturePath: string) {
        push('/auth/sign-up/teammates/');
        return;
    }
    async function handleOnLater() {
        push('/auth/sign-up/teammates/');
        return;
    }

    return {
        handleOnContinue,
        handleOnLater,
    };
};
