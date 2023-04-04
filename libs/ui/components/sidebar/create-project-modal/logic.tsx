import { useState, useEffect } from 'react';
import { SearchBarOption } from '../../inputs/searchbar/props';
import { CreateProjectLogicType, ICreateProjectForm } from './types';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import languages from '../../../../utils/languages';
import { toCreateProjectDTO } from './mappers';
import { useCreateProject } from '../../../../gateways/resource-api/projects/projects';
import useToast from '../../progress-validation/toast';
import { ToastType } from '../../progress-validation/toast/types';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../i18n/keys';

export const useCreateProjectLogic = (): CreateProjectLogicType => {
    // Attributes
    const [sourceLanguageActiveKey, setSourceLanguageActiveKey] =
        useState<string>('');
    const [filterValue, setFilterValue] = useState<string>('');
    const [activeKeys, setActiveKeys] = useState<string[]>([]);
    const [value, setValue] = useState<string>('');
    const optionsSearchBox: SearchBarOption<string>[] = languages.map(
        (language) => ({
            value: language.name,
            label: language.name,
        }),
    );
    const toast = useToast();
    const { t } = useTranslation();
    // Hooks
    const { mutateAsync: createProject } = useCreateProject();

    // Formik
    const { values, ...rest } = useFormik<ICreateProjectForm>({
        initialValues: {
            projectName: '',
            sourceLanguage: '',
            targetLanguages: [],
        },
        onSubmit: handleOnSubmit,
        validateOnChange: false,
    });
    const form = createForm(values, rest);

    async function handleOnSubmit() {
        try {
            await createProject(
                {
                    data: toCreateProjectDTO(
                        form.projectName.value,
                        form.sourceLanguage.value,
                        form.targetLanguages.value,
                    ),
                    organisationId: '539419f3-1b1e-4926-895b-92a8879aec5e',
                },
                {
                    onSuccess: async () => {
                        resetForm();
                    },
                    onError: async () => {
                        toast({
                            type: ToastType.ERROR,
                            title: t(
                                tKeys.home.modal.create_project.form
                                    .project_name.form.error,
                            ),
                            delay: 5000,
                        });
                    },
                },
            );
        } catch (e) {}
    }
    // Functions
    function onCheck(value: string) {
        if (!activeKeys?.some((option) => option === value))
            setActiveKeys((prev) => [...prev, value]);
        else setActiveKeys((prev) => prev?.filter((option) => option != value));
    }
    useEffect(() => {
        rest.setFieldValue('targetLanguages', activeKeys);
    }, [activeKeys]);

    function filter(value: string): SearchBarOption<string>[] {
        return optionsSearchBox?.filter((option) =>
            option.value.toLowerCase().includes(value.toLowerCase()),
        );
    }

    function onTagDelete(value: string) {
        setActiveKeys((prev) => prev?.filter((option) => option != value));
    }

    function resetForm() {
        rest.setFieldValue('projectName', '');
        rest.setFieldValue('sourceLanguage', '');
        rest.setFieldValue('targetLanguages', []);
        setActiveKeys([]);
        setFilterValue('');
        setValue('');
        setSourceLanguageActiveKey('');
    }

    return {
        sourceLanguageActiveKey,
        setSourceLanguageActiveKey,
        filterValue,
        setFilterValue,
        activeKeys,
        setActiveKeys,
        value,
        setValue,
        onCheck,
        filter,
        onTagDelete,
        handleOnSubmit,
        resetForm,
        form,
    };
};
