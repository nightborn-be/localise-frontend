import React from 'react';
import { HStack, VStack, Box, Image } from '@chakra-ui/react';
import COLORS from '../../../../constants/colors';
import Text from '../../text';
import FONTS from '../../../../constants/fonts';
import Icon from '../../icon';
import { IOrganisationMenuItemProps } from './props';

export const OrganisationMenuItem = ({
    title,
    description,
    isActive,
    imageUrl,
    onSelect,
}: IOrganisationMenuItemProps) => {
    // Render
    return (
        <HStack
            w='15.75rem'
            h='3.25rem'
            padding='10px'
            borderRadius='0.375rem'
            spacing='0.5rem'
            _hover={{ bg: COLORS.Tag.value }}
            onClick={onSelect}
            position='relative'
        >
            <Box
                borderRadius='0.5rem'
                bg={!imageUrl ? `#0EAE` : 'transparent'}
                w={'2rem'}
                h={'2rem'}
            >
                {imageUrl && <Image src={imageUrl} alt='' />}
            </Box>
            <VStack alignItems='left' spacing='0' w='9.25rem' pr='0.5rem'>
                <Text
                    font={FONTS.T1.T12px.Medium500.value}
                    color={COLORS.Text.T400.value}
                >
                    {title}
                </Text>
                <Text
                    font={FONTS.T1.T10px.Regular400.value}
                    color={COLORS.InputText.value}
                >
                    {description}
                </Text>
            </VStack>
            <Box w='1.25rem' h='1.25rem' position={'absolute'} right='10px'>
                {isActive && (
                    <Icon name='checked' width={'1.25rem'} height={'1.25rem'} />
                )}
            </Box>
        </HStack>
    );
};
