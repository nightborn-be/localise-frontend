import React from 'react';
import { VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../text';
import FONTS from '../../../constants/fonts';
import { IBadgeProps } from './props';

const Badge = ({ color, children }: IBadgeProps) => {
    // Render
    return (
        <VStack
            w='1.75rem'
            h='1.125rem'
            minH='1.125rem'
            minW='1.75rem'
            padding='0.125rem'
            margin='0.6875rem 0.75rem'
            borderRadius='27.0562rem'
            bg={color}
            mr='0.3125rem'
            justifyContent={'center'}
            alignItems='center'
        >
            {typeof children === 'string' || 'number' ? (
                <Text
                    font={FONTS.T1.T12px.Medium500.value}
                    color={COLORS.White.T500.value}
                >
                    {children}
                </Text>
            ) : (
                children
            )}
        </VStack>
    );
};

export default Badge;
