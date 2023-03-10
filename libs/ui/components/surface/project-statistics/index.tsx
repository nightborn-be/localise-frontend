import { HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Text from '../../contents/text';
import IProjectStatisticsProps from './props';

export default function ProjectStatistics({ nbKeys }: IProjectStatisticsProps) {
    // Render
    return (
        <VStack
            alignItems={'left'}
            w='14.75rem'
            spacing='1.25rem'
            padding='1.25rem'
            backgroundColor={COLORS.BG.value}
            border={`0.0625rem solid ${COLORS.Line.value}`}
            borderRadius='0.75rem'
        >
            <HStack spacing={'0.75rem'}>
                <HStack
                    w='1.75rem'
                    h='1.75rem'
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius='0.5rem'
                    backgroundColor={COLORS.Line.value}
                >
                    <Image src='/assets/images/key.png' alt='' />
                </HStack>
                <Text
                    font={FONTS.T1.T14px.Medium500.value}
                    color={COLORS.Text.T400.value}
                >
                    Total keys
                </Text>
            </HStack>
            <Text
                font={FONTS.T1.T28px.SemiBold600.value}
                color={COLORS.Text.T400.value}
            >
                {nbKeys}
            </Text>
        </VStack>
    );
}
