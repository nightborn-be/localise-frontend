import { useState, useEffect } from 'react';
import { SearchBarOption } from '../../inputs/searchbar/props';
import { CreateProjectLogicType, ICreateProjectForm } from './types';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import languages from '../../../../utils/languages';

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

    // Formik
    const { values, ...rest } = useFormik<ICreateProjectForm>({
        initialValues: {
            projectName: '',
            sourceLanguage: '',
            targetLanguages: [],
        },
        onSubmit: () => {},
        validateOnChange: false,
    });
    const form = createForm(values, rest);

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
        resetForm,
        form,
    };
};
