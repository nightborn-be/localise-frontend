import React, { useState } from 'react';
import { VStack, Wrap, WrapItem } from '@chakra-ui/react';
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
    bgColor = COLORS.Disabled.value,
    border = `0.0625rem solid ${COLORS.Line.value}`,
    padding = '1.25rem',
    w = '36.875rem',
}: ISearchBoxProps<T>) => {
    // Render
    return (
        <>
            <VStack
                w={w}
                h='fit-content'
                bg={bgColor}
                padding={padding}
                spacing={'0.75rem'}
                border={border}
                borderRadius={'0.5rem'}
                alignItems={'left'}
            >
                <VStack align={'left'} w={w} spacing='0.25rem'>
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
                    w='full'
                    h='2.5rem'
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
                    <Wrap spacing={'0.25rem'} pr={'1.125rem'}>
                        {activeKeys.map((tag, index) => (
                            <WrapItem>
                                <Tag
                                    key={`tag-${index}`}
                                    value={tag}
                                    font={FONTS.T1.T12px.Medium500.value}
                                    onDelete={() => onTagDelete(tag)}
                                />
                            </WrapItem>
                        ))}
                    </Wrap>
                )}
            </VStack>
        </>
    );
};

export default SearchBox;
