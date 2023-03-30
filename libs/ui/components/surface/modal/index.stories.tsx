import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { createForm } from '../../../../utils/formik';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IModalProps } from './props';
import Modal from '.';
import { Box, HStack, VStack } from '@chakra-ui/react';
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
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [activeKeys, setActiveKeys] = useState<string[]>([]);
    // Formik
    const { values, dirty, setFieldError, ...rest } = useFormik<IModalFormik>({
        initialValues: {
            projectName: '',
            sourceLanguage: '',
            targetLanguages: [],
        },
        onSubmit: handleOnSubmit,
        validateOnChange: false,
    });
    const form = createForm(values, rest);

    function handleOnSubmit() {
        console.log(values);
        console.log(form.targetLanguages.value);
    }

    // Attributes
    const options: SearchBarOption<string>[] = [
        { value: 'French', label: 'French' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'Dutch', label: 'Dutch' },
        { value: 'German', label: 'German' },
    ];
    const searchbarProps: ISearchbarSelectProps<string> = {
        color: COLORS.Text.T400.value,
        w: '590px',
        h: '40px',
        padding: '4px 10px',
        spacing: '8px',
        background: COLORS.White.T500.value,
        placeholder: 'Search for a project...',
        placeholderColor: COLORS.InputText.value,
        borderRadius: '6px',
        defaultSelectValue: 'Choose a source language',
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
    function filter(value: string) {
        return optionsSearchBox?.filter((option) =>
            option.value.toLowerCase().includes(value.toLowerCase()),
        );
    }
    const searchBoxProps: ISearchBoxProps<string> = {
        w: '590px',
        title: 'Target languages',
        description:
            'Target languages are secondary languages you want to add to your project.',
        placeholder: 'Search and select your target languages',
    };
    return (
        <HStack>
            <Box bg={COLORS.Localize.Purple.T500.value}>Test</Box>
            <Modal
                title={'Create a new project'}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleOnSubmit={handleOnSubmit}
            >
                <VStack spacing='0'>
                    <HStack padding={'20px 20px 12px'} spacing='10px'>
                        <Input
                            w={'590px'}
                            padding='10px'
                            placeholder='Write your project name...'
                            label={'Project Name'}
                            font={FONTS.T1.T12px.Regular400.value}
                            labelColor={COLORS.Text.T500.value}
                            labelFont={FONTS.T1.T14px.Medium500.value}
                            {...form.projectName}
                        />
                    </HStack>
                    <VStack padding={'12px 20px'} spacing='16px'>
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
