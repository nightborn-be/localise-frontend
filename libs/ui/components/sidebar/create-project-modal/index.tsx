import { HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Input from '../../inputs/input/index';
import { SearchBarOption } from '../../inputs/searchbar/props';
import SearchbarSelect from '../../inputs/searchbar-select';
import SearchBox from '../../contents/search-box';
import { useCreateProjectLogic } from './logic';
import Modal from '../../surface/modal';
import { ICreateProjectProps } from './props';
import languages from '../../../../utils/languages';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../i18n/keys';
import { useRouter } from 'next/router';

export const AddProjectModals = ({
    isOpen,
    onClose,
    handleOnSubmit,
    isDisableOnCloseProjectModal,
}: ICreateProjectProps) => {
    // Attributes
    const {
        sourceLanguageActiveKey,
        setSourceLanguageActiveKey,
        filterValue,
        setFilterValue,
        activeKeys,
        value,
        setValue,
        onCheck,
        filter,
        onTagDelete,
        resetForm,
        form,
    } = useCreateProjectLogic();

    const options: SearchBarOption<string>[] = languages.map((language) => ({
        value: language.name,
        label: language.name,
    }));
    const { t } = useTranslation();
    // Render
    return (
        <HStack>
            <Modal
                title={t<string>(tKeys.home.modal.create_project.title)}
                isOpen={isOpen}
                onClose={() => {
                    onClose();
                    resetForm();
                }}
                isDisableOnClose={isDisableOnCloseProjectModal}
                handleOnSubmit={() => {
                    handleOnSubmit(form, resetForm);
                }}
                isDisabled={
                    form.projectName.value == '' ||
                    form.sourceLanguage.value == ''
                }
            >
                <VStack spacing='0'>
                    <HStack
                        padding={'1.25rem 1.25rem 0.75rem'}
                        spacing='0.625rem'
                    >
                        <Input
                            w={'36.875rem'}
                            padding='0.625rem'
                            placeholder={t<string>(
                                tKeys.home.modal.create_project.form
                                    .project_name.placeholder,
                            )}
                            label={t<string>(
                                tKeys.home.modal.create_project.form
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
                                tKeys.home.modal.create_project.form
                                    .source_language.search.placeholder,
                            )}
                            placeholderColor={COLORS.InputText.value}
                            borderRadius='0.375rem'
                            defaultSelectValue={t<string>(
                                tKeys.home.modal.create_project.form
                                    .source_language.placeholder,
                            )}
                            noValueMsg={t<string>(
                                tKeys.home.modal.create_project.form
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
                                tKeys.home.modal.create_project.form
                                    .source_language.title,
                            )}
                            description={t<string>(
                                tKeys.home.modal.create_project.form
                                    .source_language.description,
                            )}
                        />

                        <SearchBox<string>
                            w='36.875rem'
                            title={t<string>(
                                tKeys.home.modal.create_project.form
                                    .target_languages.title,
                            )}
                            description={t<string>(
                                tKeys.home.modal.create_project.form
                                    .target_languages.description,
                            )}
                            placeholder={t<string>(
                                tKeys.home.modal.create_project.form
                                    .target_languages.placeholder,
                            )}
                            noValueMsg={t<string>(
                                tKeys.home.modal.create_project.form
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

export default AddProjectModals;
