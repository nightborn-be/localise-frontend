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
    onClick,
}: IOrganisationMenuProps<T>) {
    // Render
    return (
        <VStack
            width={'16.5rem'}
            maxH={'17.5rem'}
            spacing='0.25rem'
            alignItems={'left'}
            backgroundColor={COLORS.White.T500.value}
            border={`0.0625rem solid ${COLORS.Line.value}`}
            borderRadius={'0.5rem'}
            padding={'0.5rem 0.375rem'}
            boxShadow={SHADOWS.Shadow.Input.value}
            overflowY='scroll'
        >
            {options.map((option, index) => (
                <OrganisationMenuItem
                    title={option.name}
                    key={index}
                    // description={option.description}
                    isActive={value?.id === option.id}
                    imageUrl={option.pictureUrl ?? undefined}
                    onSelect={() => onChange?.(option)}
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
                h='2.5rem'
                minH={'2.5rem'}
                justifyContent='left'
                font={FONTS.T1.T12px.Medium500.value}
                color={COLORS.Text.T400.value}
                spacing='0.5rem'
                backgroundColor={'transparent'}
                hoverBackgroundColor={COLORS.Tag.value}
                onClick={onClick}
            >
                Create new organisation
            </Button>
        </VStack>
    );
}
