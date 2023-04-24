import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IModalProps } from './props';
import Modal from '.';
import { HStack, useDisclosure, VStack } from '@chakra-ui/react';
import Input from '../../inputs/input/index';
import { IModalFormik } from './types';
import FONTS from '../../../constants/fonts';
import { SearchBarOption } from '../../inputs/searchbar/props';
import ISearchbarSelectProps from '../../inputs/searchbar-select/props';
import COLORS from '../../../constants/colors';
import SearchbarSelect from '../../inputs/searchbar-select';
import SearchBox from '../../contents/search-box';
import { ISearchBoxProps } from '../../contents/search-box/props';

export default {
    title: 'Components/Surface/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;
const Template: ComponentStory<typeof Modal> = (props: IModalProps) => {
    const [activeKey, setActiveKey] = useState<string>('');
    const [filterValue, setFilterValue] = useState<string>('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [activeKeys, setActiveKeys] = useState<string[]>([]);
    // Formik
    const { values, ...rest } = useFormik<IModalFormik>({
        initialValues: {
            projectName: '',
            sourceLanguage: '',
            targetLanguages: [],
        },
        onSubmit: handleOnSubmit,
        validateOnChange: false,
    });
    const form = createForm(values, rest);

    function handleOnSubmit() {}

    // Attributes
    const options: SearchBarOption<string>[] = [
        { value: 'French', label: 'French' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'Dutch', label: 'Dutch' },
        { value: 'German', label: 'German' },
    ];
    const searchbarProps: ISearchbarSelectProps<string> = {
        color: COLORS.Text.T400.value,
        w: '36.875rem',
        h: '2.5rem',
        padding: '0.25rem 0.625rem',
        spacing: '0.5rem',
        background: COLORS.White.T500.value,
        placeholder: 'Search for a project...',
        placeholderColor: COLORS.InputText.value,
        borderRadius: '0.375rem',
        defaultSelectValue: 'Choose a source language',
        noValueMsg: 'We could’nt find the language you were looking for.',
    };
    const [value, setValue] = useState<string>('');
    const optionsSearchBox: SearchBarOption<string>[] = [
        { value: 'French', label: 'French' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'Dutch', label: 'Dutch' },
        { value: 'Italian', label: 'Italian' },
        { value: 'German', label: 'German' },
    ];

    // Functions
    function onCheck(value: string) {
        if (!activeKeys?.some((option) => option === value))
            setActiveKeys((prev) => [...prev, value]);
        else setActiveKeys((prev) => prev?.filter((option) => option != value));
    }
    useEffect(() => {
        rest.setFieldValue('targetLanguages', activeKeys);
    }, [activeKeys]);

    function filter(value: string) {
        return optionsSearchBox?.filter((option) =>
            option.value.toLowerCase().includes(value.toLowerCase()),
        );
    }

    function onTagDelete(value: string) {
        setActiveKeys((prev) => prev?.filter((option) => option != value));
    }
    const searchBoxProps: ISearchBoxProps<string> = {
        w: '36.875rem',
        title: 'Target languages',
        description:
            'Target languages are secondary languages you want to add to your project.',
        placeholder: 'Search and select your target languages',
        noValueMsg: 'We could’nt find the language you were looking for.',
        onTagDelete: onTagDelete,
    };
    onOpen();
    return (
        <HStack>
            <Modal
                title={'Create a new project'}
                isOpen={isOpen}
                onClose={onClose}
                handleOnSubmit={handleOnSubmit}
            >
                <VStack spacing='0'>
                    <HStack
                        padding={'1.25rem 1.25rem 0.75rem'}
                        spacing='0.625rem'
                    >
                        <Input
                            w={'36.875rem'}
                            padding='0.625rem'
                            placeholder='Write your project name...'
                            label={'Project name'}
                            font={FONTS.T1.T12px.Regular400.value}
                            labelColor={COLORS.Text.T500.value}
                            labelFont={FONTS.T1.T14px.Medium500.value}
                            {...form.projectName}
                        />
                    </HStack>
                    <VStack padding={'0.75rem 1.25rem'} spacing='1rem'>
                        <SearchbarSelect
                            {...searchbarProps}
                            filterValue={filterValue}
                            activeKey={activeKey}
                            onSelect={(value) => {
                                setActiveKey(value);
                                form.sourceLanguage.onChange(value);
                            }}
                            onChange={(event) =>
                                setFilterValue(event.target.value)
                            }
                            options={options.filter((option) =>
                                option.value
                                    .toLowerCase()
                                    .includes(filterValue.toLowerCase()),
                            )}
                            label={'Source language'}
                            description={
                                'The source language is the main language of the project.'
                            }
                        />

                        <SearchBox
                            {...searchBoxProps}
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                            onCheck={onCheck}
                            activeKeys={activeKeys}
                            options={filter(value)}
                        />
                    </VStack>
                </VStack>
            </Modal>
        </HStack>
    );
};

export const ModalCreateProject = Template.bind({});
