import { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { IProjectContentProps } from './props';
import { IProjectForm, ProjectLogicType } from './types';

export const useProjectLogic = ({}: IProjectContentProps): ProjectLogicType => {
    // Attributes

    // Formik
    const { values, ...rest } = useFormik<IProjectForm>({
        initialValues: {
            organisationName: '',
            organisationPicture: '',
        },
        onSubmit: () => {},
        validateOnChange: false,
    });

    const form = createForm(values, rest);

    // Functions
    return {};
};
