import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { CreateOrganisationLogicType, ICreateOrganisationForm } from './types';
import { toCreateOrganisationDTO } from './mappers';
import { useCreateOrganisation } from '../../../../gateways/resource-api/organisations/organisations';
import useToast from '../../progress-validation/toast';
import { ToastType } from '../../progress-validation/toast/types';

export const useCreateOrganisationLogic = (): CreateOrganisationLogicType => {
    // Attributes
    const [picturePath, setPicturePath] = useState<string>('');
    const [pictureBinary, setPictureBinary] = useState<
        string | ArrayBuffer | null
    >();
    const toast = useToast();

    // Hooks
    const { mutateAsync: createOrganisation } = useCreateOrganisation();

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
            createOrganisation(
                {
                    data: toCreateOrganisationDTO(
                        form.organisationName.value,
                        pictureBinary?.toString(),
                    ),
                },
                {
                    onSuccess: () => {
                        resetForm();
                    },
                    onError: () => {
                        toast({
                            type: ToastType.ERROR,
                            title: 'Error organisation cannot be create',
                        });
                    },
                },
            );
        } catch (e) {}
    }

    function resetForm() {
        rest.setFieldValue('organisationName', '');
        setPicturePath('');
        setPictureBinary('');
    }

    function onDeletePicture() {
        setPicturePath('');
    }
    function onDrag(value: string, binary?: string | ArrayBuffer | null) {
        setPicturePath(value);
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
