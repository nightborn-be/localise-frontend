import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import InputSelect from '../input-select';
import IInputSelectAndInputProps from './props';
import Input from '../input/input-text';
import ButtonIcon from '../button-icon';
import { ButtonSize } from '../button-icon/props';
import Icon from '../../contents/icon';

export default function InputSelectAndInput({
    selectProps,
    inputProps,
    labelColor = COLORS.Text.T500.value,
    descriptionColor = COLORS.InputText.value,
    label,
    description,
    h,
    w,
    border = `1px solid ${COLORS.Line.value}`,
    borderRadius = '8px',
    alignItems,
    lineHeight,
    ...props
}: IInputSelectAndInputProps) {
    const textProps = { lineHeight: lineHeight, margin: 0 };
    return (
        <VStack
            direction='column'
            spacing='4px'
            w={w}
            h={h}
            alignItems={alignItems}
        >
            {label && (
                <Text
                    {...textProps}
                    font={FONTS.T1.T12px.Medium500.value}
                    color={labelColor}
                >
                    {label}
                </Text>
            )}
            {description && (
                <Text
                    {...textProps}
                    font={FONTS.T1.T12px.Regular400.value}
                    color={descriptionColor}
                >
                    {description}
                </Text>
            )}

            <HStack
                w={w}
                h={h}
                border={border}
                borderRadius={borderRadius}
                px='0.75rem'
                spacing={0}
                justifyContent='space-between'
            >
                <Input {...inputProps} borderRadius={0} flexGrow={1} />
                <InputSelect
                    {...selectProps}
                    borderRadius={0}
                    w='fit-content'
                    h='fit-content'
                    minW={'12.5rem'}
                />{' '}
                <ButtonIcon
                    borderRadius='6px'
                    padding='4px'
                    gap='10px'
                    backgroundColor='transparent'
                    icon={<Icon name={'removeSmall'} stroke={'#F46363'} />}
                    size={ButtonSize.SMALL}
                    aria-label=''
                ></ButtonIcon>
            </HStack>
        </VStack>
    );
}
