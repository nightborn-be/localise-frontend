import React from 'react';
import { HStack, Image } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../text';
import FONTS from '../../../constants/fonts';
import { IAvatarProps } from './props';

const Avatar = ({ name, imageSrc }: IAvatarProps) => {
    // Render
    return (
        <>
            {imageSrc ? (
                <Image
                    w='1.75rem'
                    h='1.75rem'
                    borderRadius='100%'
                    src={imageSrc}
                    alt=''
                />
            ) : (
                <HStack
                    w='1.75rem'
                    h='1.75rem'
                    spacing='0'
                    padding='0.5rem 0.3125rem'
                    gap='0.625rem'
                    justifyContent={'center'}
                    alignItems={'center'}
                    backgroundColor={COLORS.Line.value}
                    borderRadius='100%'
                >
                    <Text
                        font={FONTS.T1.T10px.SemiBold600.value}
                        color={COLORS.InputText.value}
                    >
                        {name}
                    </Text>
                </HStack>
            )}
        </>
    );
};

export default Avatar;
