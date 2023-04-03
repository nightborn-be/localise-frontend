import { useState } from 'react';
import { Box, HStack, Image, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Input from '../../inputs/input/index';
import { SearchBarOption } from '../../inputs/searchbar/props';
import ISearchbarSelectProps from '../../inputs/searchbar-select/props';
import SearchbarSelect from '../../inputs/searchbar-select';
import SearchBox from '../../contents/search-box';
import { ISearchBoxProps } from '../../contents/search-box/props';
import { useCreateProjectLogic } from './logic';
import Modal from '../../surface/modal';
import { ICreateProjectProps } from './props';
import languages from '../../../../utils/languages';
import { UpsertProjectLanguageDTO } from '../../../../gateways/resource-api/types';
export const CreateProjectModal = ({
    isOpen,
    onClose,
}: ICreateProjectProps) => {
    const {
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
        form,
    } = useCreateProjectLogic();

    const options: SearchBarOption<string>[] = languages.map((language) => ({
        value: language.name,
        label: language.name,
    }));

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
        noValueMsg: 'We could’nt find the language you were looking for.',
    };
    const searchBoxProps: ISearchBoxProps<string> = {
        w: '590px',
        title: 'Target languages',
        description:
            'Target languages are secondary languages you want to add to your project.',
        placeholder: 'Search and select your target languages',
        noValueMsg: 'We could’nt find the language you were looking for.',
        onTagDelete: onTagDelete,
    };
    return (
        <HStack>
            <Modal
                title={'Create a new project'}
                isOpen={isOpen}
                onClose={onClose}
                handleOnSubmit={handleOnSubmit}
            >
                <VStack spacing='0'>
                    <HStack padding={'20px 20px 12px'} spacing='10px'>
                        <Input
                            w={'590px'}
                            padding='10px'
                            placeholder='Write your project name...'
                            label={'Project name'}
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
                            activeKey={sourceLanguageActiveKey}
                            onSelect={(value) => {
                                setSourceLanguageActiveKey(value);
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

                        <SearchBox<string>
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

export default CreateProjectModal;
