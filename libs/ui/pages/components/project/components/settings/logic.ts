import { useEffect, useRef, useState } from 'react';
import { IUpdateProjectForm, SettingsLogicType } from './types';
import { MenuItemValue } from '../../../../../components/navigation/sidebar-menu-setting/types';
import { useFormik } from 'formik';
import { createForm } from 'utils/formik';
import { useDisclosure } from '@chakra-ui/react';
import { SearchBarOption } from '../../../../../components/inputs/searchbar/props';
import languages from 'utils/languages';
import { ISettingsLogicProps } from './props';
const useSettingsLogic = ({
    activeProject,
}: ISettingsLogicProps): SettingsLogicType => {
    // Attributes
    const [activeMenuSettingKey, setActiveMenuSettingKey] = useState(
        MenuItemValue.INFORMATIONS,
    );
    const deleteProjectDisclosure = useDisclosure();
    const [currentSelectedColor, setCurrentSelectedColor] =
        useState<string>('');
    const [sourceLanguageActiveKey, setSourceLanguageActiveKey] =
        useState<string>('');
    const [filterValue, setFilterValue] = useState<string>('');
    const [activeKeys, setActiveKeys] = useState<string[]>([]);
    const [value, setValue] = useState<string>('');
    const optionsSourceLanguage: SearchBarOption<string>[] = languages.map(
        (language) => ({
            value: language.name,
            label: language.name,
        }),
    );
    const optionsSearchBox: SearchBarOption<string>[] = languages.map(
        (language) => ({
            value: language.name,
            label: language.name,
        }),
    );

    const informationsRef = useRef<HTMLDivElement>(null);
    const projectColorRef = useRef<HTMLDivElement>(null);
    const sourceLanguageRef = useRef<HTMLDivElement>(null);
    const targetLanguagesRef = useRef<HTMLDivElement>(null);

    // Formik
    const { values, ...rest } = useFormik<IUpdateProjectForm>({
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
    function filter(value: string): SearchBarOption<string>[] {
        return optionsSearchBox?.filter((option) =>
            option.value.toLowerCase().includes(value.toLowerCase()),
        );
    }

    function onTagDelete(value: string) {
        setActiveKeys((prev) => prev?.filter((option) => option != value));
    }
    function onCheck(value: string) {
        if (!activeKeys?.some((option) => option === value))
            setActiveKeys((prev) => [...prev, value]);
        else setActiveKeys((prev) => prev?.filter((option) => option != value));
    }
    useEffect(() => {
        rest.setFieldValue('targetLanguages', activeKeys);
    }, [activeKeys]);

    useEffect(() => {
        rest.setFieldValue('projectName', activeProject?.name);
    }, [activeProject]);

    return {
        form,
        activeMenuSettingKey,
        setActiveMenuSettingKey,
        deleteProjectDisclosure,
        currentSelectedColor,
        setCurrentSelectedColor,
        sourceLanguageActiveKey,
        setSourceLanguageActiveKey,
        filterValue,
        setFilterValue,
        activeKeys,
        setActiveKeys,
        value,
        setValue,
        filter,
        onTagDelete,
        onCheck,
        informationsRef,
        projectColorRef,
        sourceLanguageRef,
        targetLanguagesRef,
        optionsSourceLanguage,
    };
};

export default useSettingsLogic;
