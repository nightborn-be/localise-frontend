import { useState, useEffect } from 'react';
import { AddMembersLogicType, IAddMembersForm } from './types';
import { useFormik } from 'formik';
import { createForm } from '../../../../../../utils/formik';

export const useAddMembersLogic = (): AddMembersLogicType => {
    // Formik
    const { values, ...rest } = useFormik<IAddMembersForm>({
        initialValues: {
            email: [''],
            role: [''],
        },
        onSubmit: handleOnSubmit,
        validateOnChange: false,
    });
    const form = createForm(values, rest);

    function handleOnSubmit() {}
    return {
        form,
        handleOnSubmit,
    };
};
