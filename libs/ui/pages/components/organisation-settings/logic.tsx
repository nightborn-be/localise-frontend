import { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import {
    IOrganisationSettingsForm,
    OrganisationSettingsLogicType,
} from './types';
import { useDisclosure } from '@chakra-ui/react';
import { MenuItemValue } from '../../../components/navigation/sidebar-menu-setting/types';
import { IOrganisationSettingsLogicProps } from './props';

export const useOrganisationSettingsLogic = ({
    actualOrganisationUser,
}: IOrganisationSettingsLogicProps): OrganisationSettingsLogicType => {
    // Attributes
    const [organisationPicture, setOrganisationPicture] = useState<
        string | ArrayBuffer | null
    >();
    const [picturePath, setPicturePath] = useState<string>('');
    const informationsRef = useRef<HTMLDivElement>(null);
    const membersRef = useRef<HTMLDivElement>(null);
    const deleteOrganisationDisclosure = useDisclosure();
    const addMembersDisclosure = useDisclosure();
    const [activeMenuSettingKey, setActiveMenuSettingKey] = useState(
        MenuItemValue.INFORMATIONS,
    );
    // Formik
    const { values, ...rest } = useFormik<IOrganisationSettingsForm>({
        initialValues: {
            organisationName: '',
            organisationPicture: '',
        },
        onSubmit: () => {},
        validateOnChange: false,
    });

    const form = createForm(values, rest);
    useEffect(() => {
        rest.setFieldValue('organisationName', actualOrganisationUser?.name);
        setPicturePath(actualOrganisationUser?.pictureUrl as string);
    }, [actualOrganisationUser]);

    useEffect(() => {
        rest.setFieldValue('organisationPicture', organisationPicture);
    }, [organisationPicture]);

    function onDrag(pictureUrl: string, binary?: string | ArrayBuffer | null) {
        setPicturePath(pictureUrl);
        setOrganisationPicture(binary);
    }
    // Functions
    return {
        form,
        onDrag,
        picturePath,
        informationsRef,
        membersRef,
        activeMenuSettingKey,
        setActiveMenuSettingKey,
        deleteOrganisationDisclosure,
        addMembersDisclosure,
    };
};
