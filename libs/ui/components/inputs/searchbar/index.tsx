import React, { useState, useRef } from 'react';
import {
    Box,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    VStack,
} from '@chakra-ui/react';
import Select, { components } from 'react-select';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import SearchbarProps, { state } from './props';
import Icon from '../../contents/icon';
import Text from '../../contents/text';
import { Options } from './props';
export default function Searchbar({
    type = 'text',
    color = COLORS.Text.T500.value,
    placeholderColor = COLORS.InputText.value,
    border = `1px solid ${COLORS.Line.value}`,
    placeholder = 'Search for a project',
    h,
    w,
    alignItems = 'left',
    gap = '8px',
    paddingTop = '3px',
    options,
    borderRadius = '6px',
    padding,
    paddingRight,
    paddingLeft,
    isSearchable = false,
    marginLeftElement = '10px',
    backgroundColor = COLORS.BG.value,
    selectProps,
    ...props
}: SearchbarProps) {
    const ItemList = ({ value, color, label }: Options) => {
        const [bgColor, setBgColor] = useState(COLORS.White.T500.value);
        const [textColor, setTextColor] = useState(COLORS.Text.T400.value);
        const selectedItem = useRef();
        const toggleBgColor = () => {
            if (bgColor === COLORS.White.T500.value) {
                setBgColor(COLORS.Localize.Purple.value);
                setTextColor(COLORS.White.T500.value);
            }
            if (bgColor === COLORS.Localize.Purple.value) {
                setBgColor(COLORS.White.T500.value);
                setTextColor(COLORS.Text.T400.value);
            }
        };

        return (
            <HStack
                w='228px'
                h='40px'
                bg={bgColor}
                borderRadius={borderRadius}
                _hover={{
                    bg: COLORS.BG.value,
                }}
                onClick={toggleBgColor}
                padding='6px 8px'
            >
                <Box w='8px' h='8px' borderRadius='2px' bg={color} />
                <Text
                    font={FONTS.T1.T12px.Medium500.value}
                    color={textColor}
                    id={value}
                >
                    {label}
                </Text>
            </HStack>
        );
    };

    const ProjectList = ({ listElement }) => {
        console.log(listElement);
        return (
            <VStack alignItems={'left'}>
                {listElement.map((obj) => (
                    <ItemList {...obj} />
                ))}
            </VStack>
        );
    };
    //Attributes
    const [isHovered, setIsHovered] = useState(false);
    const [listElement, setListElement] = useState<Options>();
    const [searchValue, setSearchValue] = useState(undefined);
    return (
        <>
            <HStack w={w} h={h} minWidth={w} minHeight={h}>
                <InputGroup
                    w={w}
                    h={h}
                    minW={w}
                    padding={padding}
                    gap={gap}
                    _focus={{ border: border }}
                    _hover={{ border: border }}
                    border={border}
                    justifyContent='center'
                    alignItems={'center'}
                    borderRadius={borderRadius}
                    bg={backgroundColor}
                >
                    {/* Left input icon */}
                    <InputLeftElement
                        w={'16px'}
                        h={'16px'}
                        mt='6.5px'
                        ml={marginLeftElement}
                    >
                        <Icon name='search' />
                    </InputLeftElement>

                    {/* Searchbar */}
                    <Input
                        {...FONTS.T1.T12px.Regular400.value}
                        value={searchValue}
                        w={w}
                        minW={w}
                        maxW={w}
                        placeholder={placeholder}
                        backgroundColor={'transparent'}
                        _placeholder={{ color: placeholderColor }}
                        focusBorderColor='transparent'
                        _focus={{ border: '1px solid transprent' }}
                        _hover={{ border: '1px solid transprent' }}
                        border={'1px solid transprent'}
                        marginRight='10px'
                    />
                </InputGroup>
            </HStack>
            <ProjectList listElement={options} />
        </>
    );
}
