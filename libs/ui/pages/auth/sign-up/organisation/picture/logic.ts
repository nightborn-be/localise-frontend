import { useState } from 'react';
import { useRouter } from 'next/router';
import { PictureLogicType } from './types';
import { useCreateOrganisation } from 'gateways/resource-api/organisations/organisations';
import { toCreateOrganisationDTO } from '../../../../../components/sidebar/create-organisation-modal/mappers';
import useToast from '../../../../../components/progress-validation/toast';
import { ToastType } from '../../../../../components/progress-validation/toast/types';
import { AxiosError } from 'axios';
import useOnPressKeyEvent from 'utils/pressKeyEvent';

export const usePictureLogic = (): PictureLogicType => {
    // Attributes
    const router = useRouter();
    const toast = useToast();
    const [picturePath, setPicturePath] = useState<string>('');
    const [pictureBinary, setPictureBinary] = useState<
        string | ArrayBuffer | null
    >();
    useOnPressKeyEvent(['Enter', 'NumpadEnter'], handleOnContinue)

    // Mutations
    const { mutateAsync: createOrganisation, isLoading } =
        useCreateOrganisation();

    // Functions
    async function handleOnContinue() {
        const { organisationName } = router.query;
        try {
            await createOrganisation(
                {
                    data: toCreateOrganisationDTO(
                        organisationName as string,
                        pictureBinary as ArrayBuffer,
                    ),
                },
                {
                    onSuccess: async () => {
                        router.push('/auth/sign-up/organisation/add-members');
                    },
                    onError: async (error) => {
                        const err = error as AxiosError;
                        toast({
                            type: ToastType.ERROR,
                            title: err.response?.data as string,
                            delay: 5000,
                        });
                    },
                },
            );
        } catch (err) {}
    }
    async function handleOnLater() {
        const { organisationName } = router.query;
        try {
            await createOrganisation(
                {
                    data: toCreateOrganisationDTO(
                        organisationName as string,
                        new ArrayBuffer(0),
                    ),
                },
                {
                    onSuccess: async () => {
                        router.push('/auth/sign-up/organisation/add-members');
                    },
                    onError: async (error) => {
                        const err = error as AxiosError;
                        toast({
                            type: ToastType.ERROR,
                            title: err.response?.data as string,
                            delay: 5000,
                        });
                    },
                },
            );
        } catch (err) {}
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
        isLoading,
    };
};
