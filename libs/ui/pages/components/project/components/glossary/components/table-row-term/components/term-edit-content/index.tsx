import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../../../../../../../constants/colors';
import FONTS from '../../../../../../../../../constants/fonts';
import Text from '../../../../../../../../../components/contents/text';
import ButtonIcon from '../../../../../../../../../components/inputs/button-icon';
import Icon from '../../../../../../../../../components/contents/icon';
import { ButtonSize } from '../../../../../../../../../components/inputs/button-icon/types';
import Input from 'ui/components/inputs/input';

export const TermEditContent = () => {
    return (
        <VStack
            alignItems={'left'}
            justifyContent={'left'}
            w='full'
            h='full'
            padding='20px 20px 4px'
            bg={COLORS.BG.value}
        >
            <HStack>
                <Input
                    name=''
                    value='page.functionality.component.text-type'
                    onChange={() => {}}
                    color={COLORS.Text.T400.value}
                    border='0.0625rem solid transparent'
                    padding='0.5rem'
                    gap='0.75rem'
                    w='full'
                    font={FONTS.T1.T14px.SemiBold600.value}
                    placeholder='test'
                    paddingRight='3.125rem'
                    focusBorderColor={`${COLORS.Stroke.value}`}
                    hoverBorder={`0.0625rem solid ${COLORS.Stroke.value}`}
                    rightElementMarginRight='0.5rem'
                    rightElement={
                        <>
                            <Icon name='enter' />
                            <Text
                                ml={'0.125rem'}
                                color={COLORS.InputText.value}
                                lineHeight={'0.75rem'}
                                font={FONTS.T1.T10px.SemiBold600.value}
                            >
                                Enter
                            </Text>
                        </>
                    }
                />
                <ButtonIcon
                    backgroundColor='#F46363'
                    size={ButtonSize.SMALL}
                    hoverBackgroundColor='#E55252'
                    padding='0.25rem'
                    gap='0.625rem'
                >
                    <Icon name='trashSmall' stroke='none' fill='#FFFFFF' />
                </ButtonIcon>
            </HStack>
        </VStack>
    );
};

export default TermEditContent;
