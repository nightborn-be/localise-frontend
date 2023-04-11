import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { CreateOrganisationLogicType, ICreateOrganisationForm } from './types';

export const useCreateOrganisationLogic = (): CreateOrganisationLogicType => {
    // Attributes
    const [picturePath, setPicturePath] = useState<string>('');
    const [pictureBinary, setPictureBinary] = useState<
        string | ArrayBuffer | null
    >();
    // Formik
    const { values, ...rest } = useFormik<ICreateOrganisationForm>({
        initialValues: {
            organisationName: '',
            pictureBinary: '',
        },
        onSubmit: () => {},
        validateOnChange: false,
    });
    const form = createForm(values, rest);
    useEffect(() => {
        rest.setFieldValue('pictureBinary', pictureBinary);
    }, [pictureBinary]);

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
        pictureBinary,
        onDrag,
        onDeletePicture,
        resetForm,
        form,
    };
};
