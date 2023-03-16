import React from 'react';
import { VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../text';
import FONTS from '../../../constants/fonts';
import { IBadgeProps } from './props';

const Badge = ({isSelected, notificationNumber}: IBadgeProps) => {
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
            bg={
                isSelected
                    ? COLORS.Localize.Purple.T600.value
                    : COLORS.Error.T500.value
            }
            mr='0.3125rem'
            justifyContent={'center'}
            alignItems='center'
        >
            <Text
                font={FONTS.T1.T12px.Medium500.value}
                color={COLORS.White.T500.value}
            >
                {notificationNumber}
            </Text>
        </VStack>
    );
};

export default Badge;
