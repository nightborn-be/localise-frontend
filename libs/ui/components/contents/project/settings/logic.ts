import { useEffect, useRef, useState } from 'react';
import { IUpdateProjectForm, SettingsLogicType } from './types';
import { MenuItemValue } from '../../../../components/navigation/sidebar-menu-setting/types';
import { useFormik } from 'formik';
import { createForm } from 'utils/formik';
import { useDisclosure } from '@chakra-ui/react';
import { SearchBarOption } from '../../../../components/inputs/searchbar/props';
import languages from 'utils/languages';
import { ISettingsLogicProps } from './props';
import { LanguageDTO } from 'gateways/resource-api/types';
const useSettingsLogic = ({
    projectData,
    projectLanguages,
}: ISettingsLogicProps): SettingsLogicType => {
    // Attributes
    const [activeMenuSettingKey, setActiveMenuSettingKey] = useState(
        MenuItemValue.INFORMATIONS,
    );
    const deleteProjectDisclosure = useDisclosure();
    const [currentSelectedColor, setCurrentSelectedColor] = useState<string>(
        projectData?.iconColor as string,
    );
    const [sourceLanguageActiveKey, setSourceLanguageActiveKey] =
        useState<string>('');
    const [filterValue, setFilterValue] = useState<string>('');
    const [targetLanguageChoice, setTargetLanguageChoice] = useState<string[]>(
        [],
    );
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
            projectName: projectData?.name as string,
            sourceLanguage: '',
            targetLanguages: [],
            iconColor: '',
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
        setTargetLanguageChoice((prev) =>
            prev?.filter((option) => option != value),
        );
    }
    function onCheck(value: string) {
        if (!targetLanguageChoice?.some((option) => option === value))
            setTargetLanguageChoice((prev) => [...prev, value]);
        else
            setTargetLanguageChoice((prev) =>
                prev?.filter((option) => option != value),
            );
    }
    function getSourceLanguage(): LanguageDTO {
        let sourceLanguage: LanguageDTO = {
            id: '',
            isSource: false,
            name: '',
            abbreviation: '',
            projectId: '',
        };
        projectLanguages?.data?.forEach((element) => {
            if (element.isSource) {
                sourceLanguage = element;
            }
        });
        return sourceLanguage;
    }

    function getTargetLanguages(): string[] {
        let targetLanguages: string[] = [];
        projectLanguages?.data?.forEach((element) => {
            if (!element.isSource) {
                targetLanguages.push(element.name);
            }
        });
        return targetLanguages;
    }
    useEffect(() => {
        rest.setFieldValue('targetLanguages', targetLanguageChoice);
    }, [targetLanguageChoice]);

    useEffect(() => {
        rest.setFieldValue('sourceLanguage', sourceLanguageActiveKey);
    }, [sourceLanguageActiveKey]);

    useEffect(() => {
        rest.setFieldValue('iconColor', currentSelectedColor);
    }, [currentSelectedColor]);

    useEffect(() => {
        const source = getSourceLanguage();
        const target = getTargetLanguages();
        setSourceLanguageActiveKey(source?.name ?? '');
        setTargetLanguageChoice(target);
    }, [projectLanguages]);

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
        targetLanguageChoice,
        setTargetLanguageChoice,
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
