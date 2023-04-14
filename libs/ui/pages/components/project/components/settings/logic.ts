import { useState } from 'react';
import { IUpdateProjectForm, SettingsLogicType } from './types';
import { MenuItemValue } from '../../../../../components/navigation/sidebar-menu-setting/types';
import { useFormik } from 'formik';
import { createForm } from 'utils/formik';
import { useDisclosure } from '@chakra-ui/react';
const useSettingsLogic = (): SettingsLogicType => {
    // Attribute
    const [activeMenuSettingKey, setActiveMenuSettingKey] = useState(
        MenuItemValue.INFORMATIONS,
    );
    const deleteProjectDisclosure = useDisclosure();
    const [currentSelectedColor, setCurrentSelectedColor] = useState<string>('');
    // Formik
    const { values, ...rest } = useFormik<IUpdateProjectForm>({
        initialValues: {
            projectName: '',
            sourceLanguage: '',
            targetLanguages: [],
        },
        onSubmit: () => { },
        validateOnChange: false,
    });
    const form = createForm(values, rest);

    return { form, activeMenuSettingKey, setActiveMenuSettingKey, deleteProjectDisclosure, currentSelectedColor, setCurrentSelectedColor }
}

export default useSettingsLogic;