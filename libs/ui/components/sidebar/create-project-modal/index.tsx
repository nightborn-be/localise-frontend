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
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../i18n/keys';
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
    const { t } = useTranslation();
    return (
        <HStack>
            <Modal
                title={t<string>(tKeys.home.modal.create_project.title)}
                isOpen={isOpen}
                onClose={onClose}
                handleOnSubmit={handleOnSubmit}
            >
                <VStack spacing='0'>
                    <HStack padding={'20px 20px 12px'} spacing='10px'>
                        <Input
                            w={'590px'}
                            padding='10px'
                            placeholder={t<string>(
                                tKeys.home.modal.create_project.from
                                    .project_name.placeholder,
                            )}
                            label={t<string>(
                                tKeys.home.modal.create_project.from
                                    .project_name.title,
                            )}
                            font={FONTS.T1.T12px.Regular400.value}
                            labelColor={COLORS.Text.T500.value}
                            labelFont={FONTS.T1.T14px.Medium500.value}
                            {...form.projectName}
                        />
                    </HStack>
                    <VStack padding={'0.75rem 1.25rem'} spacing='1rem'>
                        <SearchbarSelect
                            color={COLORS.Text.T400.value}
                            w='36.875rem'
                            h='2.5rem'
                            padding='0.25rem 0.625rem'
                            spacing='0.5rem'
                            background={COLORS.White.T500.value}
                            placeholder={t<string>(
                                tKeys.home.modal.create_project.from
                                    .source_language.search.placeholder,
                            )}
                            placeholderColor={COLORS.InputText.value}
                            borderRadius='0.375rem'
                            defaultSelectValue={t<string>(
                                tKeys.home.modal.create_project.from
                                    .source_language.placeholder,
                            )}
                            noValueMsg={t<string>(
                                tKeys.home.modal.create_project.from
                                    .source_language.search.not_found,
                            )}
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
                            label={t<string>(
                                tKeys.home.modal.create_project.from
                                    .source_language.title,
                            )}
                            description={t<string>(
                                tKeys.home.modal.create_project.from
                                    .source_language.description,
                            )}
                        />

                        <SearchBox<string>
                            w='590px'
                            title={t<string>(
                                tKeys.home.modal.create_project.from
                                    .target_languages.title,
                            )}
                            description={t<string>(
                                tKeys.home.modal.create_project.from
                                    .target_languages.description,
                            )}
                            placeholder={t<string>(
                                tKeys.home.modal.create_project.from
                                    .target_languages.placeholder,
                            )}
                            noValueMsg={t<string>(
                                tKeys.home.modal.create_project.from
                                    .target_languages.not_found,
                            )}
                            onTagDelete={onTagDelete}
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
