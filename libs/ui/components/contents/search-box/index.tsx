import React, { useState } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Text from '../text';
import { ISearchBoxProps } from './props';
import Tag from '../tag';
import Searchbar from '../../inputs/searchbar';

const SearchBox = <T,>({
    title,
    description,
    value,
    onChange,
    placeholder,
    onCheck,
    activeKeys,
    options,
    noValueMsg,
    onTagDelete,
}: ISearchBoxProps<T>) => {
    // Render
    return (
        <>
            <VStack
                w={'36.875rem'}
                h='fit-content'
                bg={COLORS.Disabled.value}
                padding={'1.25rem'}
                spacing={'0.75rem'}
                border={`0.0625rem solid ${COLORS.Line.value}`}
                borderRadius={'0.5rem'}
                alignItems={'left'}
            >
                <VStack align={'left'} spacing='0.25rem'>
                    <Text
                        font={FONTS.T1.T14px.Medium500.value}
                        color={COLORS.Text.T400.value}
                    >
                        {title}
                    </Text>
                    <Text
                        font={FONTS.T1.T10px.Medium500.value}
                        color={COLORS.InputText.value}
                    >
                        {description}
                    </Text>
                </VStack>
                <Searchbar
                    color={COLORS.Text.T400.value}
                    w='34.375rem'
                    h='40px'
                    padding='0.25rem 0.625rem'
                    spacing='0.5rem'
                    backgroundColor={COLORS.White.T500.value}
                    placeholder={placeholder}
                    placeholderColor={COLORS.InputText.value}
                    borderRadius='0.375rem'
                    value={value}
                    onChange={onChange}
                    onCheck={onCheck}
                    activeKeys={activeKeys}
                    options={options}
                    noValueMsg={noValueMsg}
                />
                {!!activeKeys?.length && (
                    <HStack spacing={'0.25rem'}>
                        {activeKeys.map((tag, index) => (
                            <Tag
                                key={`tag-${index}`}
                                value={tag}
                                font={FONTS.T1.T12px.Medium500.value}
                                onDelete={() => onTagDelete(tag)}
                            />
                        ))}
                    </HStack>
                )}
            </VStack>
        </>
    );
};

export default SearchBox;
