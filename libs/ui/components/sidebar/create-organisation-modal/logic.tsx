import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { CreateOrganisationLogicType, ICreateOrganisationForm } from './types';
import { toCreateOrganisationDTO } from './mappers';
import {
    useCreateOrganisation,
    useGetOrganisation,
    useGetOrganisationsForUser,
} from '../../../../gateways/resource-api/organisations/organisations';
import useToast from '../../progress-validation/toast';
import { ToastType } from '../../progress-validation/toast/types';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../i18n/keys';
import { useGetMe } from '../../../../gateways/resource-api/users/users';

export const useCreateOrganisationLogic = (): CreateOrganisationLogicType => {
    // Attributes
    const [picturePath, setPicturePath] = useState<string>('');
    const [pictureBinary, setPictureBinary] = useState<
        string | ArrayBuffer | null
    >();
    const toast = useToast();
    const { t } = useTranslation();

    // Hooks
    const { mutateAsync: createOrganisation } = useCreateOrganisation();
    const { data: userData, refetch: refetchUserData } = useGetMe();
    const { refetch: refetchActualUserOrganisation } = useGetOrganisation(
        userData?.organisationId as string,
    );
    const { refetch: refecthOrganisationUserData } = useGetOrganisationsForUser(
        userData?.userId as string,
    );
    // Formik
    const { values, ...rest } = useFormik<ICreateOrganisationForm>({
        initialValues: {
            organisationName: '',
        },
        onSubmit: handleOnSubmit,
        validateOnChange: false,
    });
    const form = createForm(values, rest);
    useEffect(() => {
        rest.setFieldValue('picturePath', picturePath);
    }, [picturePath]);

    //Function
    async function handleOnSubmit() {
        try {
            await createOrganisation(
                {
                    data: toCreateOrganisationDTO(
                        form.organisationName.value,
                        pictureBinary as ArrayBuffer,
                    ),
                },
                {
                    onSuccess: async () => {
                        refetchUserData();
                        refetchActualUserOrganisation();
                        refecthOrganisationUserData();
                        resetForm();
                    },
                    onError: async () => {
                        toast({
                            type: ToastType.ERROR,
                            title: t<string>(
                                tKeys.home.modal.create_organisation.form.error,
                            ),
                        });
                    },
                },
            );
        } catch (err) {}
    }

    function resetForm() {
        rest.setFieldValue('organisationName', '');
        setPicturePath('');
        setPictureBinary('');
    }

    function onDeletePicture() {
        setPicturePath('');
    }
    function onDrag(pictureUrl: string, binary?: string | ArrayBuffer | null) {
        setPicturePath(pictureUrl);
        setPictureBinary(binary);
    }
    return {
        picturePath,
        onDrag,
        onDeletePicture,
        handleOnSubmit,
        resetForm,
        form,
    };
};
