import { useRouter } from 'next/router';
import { PictureLogicType } from './types';

export const usePictureLogic = (): PictureLogicType => {

    // Attributes
    const { push } = useRouter();

    // Functions
    async function handleOnContinue() { push('/auth'); return; };
    async function handleOnLater() { push('/auth'); return; };

    return {
        handleOnContinue,
        handleOnLater
    }

}