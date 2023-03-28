import React from 'react';
import { VStack } from '@chakra-ui/react';
import { IOrganisationMenuProps } from './props';
import { OrganisationMenuItem } from './organisation-menu-item';
import COLORS from '../../../constants/colors';
import SHADOWS from '../../../constants/shadows';
import Icon from '../icon';
import Button from '../../inputs/button';
import FONTS from '../../../constants/fonts';
export default function OrganisationMenu<T>({
    options,
    value,
    onChange,
}: IOrganisationMenuProps<T>) {
    // Render
    return (
        <VStack
            width={'264px'}
            spacing='4px'
            alignItems={'left'}
            backgroundColor={COLORS.White.T500.value}
            border={`1px solid ${COLORS.Line.value}`}
            borderRadius={'8px'}
            padding={'8px 6px'}
            boxShadow={SHADOWS.Shadow.Input.value}
            overflowY='scroll'
        >
            {options.map((option, index) => (
                <OrganisationMenuItem
                    title={option.title}
                    key={index}
                    description={option.description}
                    isActive={value === option.value}
                    imageUrl={option.imageUrl}
                    onSelect={() => onChange?.(option.value)}
                />
            ))}
            <Button
                startEnhancer={(): React.ReactElement => (
                    <Icon
                        name='addSmallBackground'
                        color={COLORS.Text.T400.value}
                        fill={COLORS.White.T500.value}
                        stroke={COLORS.White.T500.value}
                    />
                )}
                h='40px'
                justifyContent='left'
                font={FONTS.T1.T12px.Medium500.value}
                color={COLORS.Text.T400.value}
                spacing='8px'
                backgroundColor={'transparent'}
                hoverBackgroundColor={COLORS.Tag.value}
            >
                Create new organisation
            </Button>
        </VStack>
    );
}
