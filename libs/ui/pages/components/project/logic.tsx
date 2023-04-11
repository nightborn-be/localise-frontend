import { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { IProjectContentProps } from './props';
import { IProjectForm } from './types';

export const useProjectLogic =
    ({}: IProjectContentProps): IProjectContentProps => {
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
