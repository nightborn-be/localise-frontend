import { Stack } from '@chakra-ui/react';
import React from 'react';
import { useMemo } from 'react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Text from '../../contents/text';
import IBreadcrumbProps, { BreadcrumbElement } from './props';

export const Breadcrumb = ({ elements }: IBreadcrumbProps) => {
    // Attributes
    const crumbs = useMemo(() => {
        const crumbs: BreadcrumbElement[] = [];
        elements.forEach((value, index) => {
            crumbs.push(value);
            if (index < elements.length - 1) {
                crumbs.push({ label: '/' });
            }
        });
        return crumbs;
    }, [elements]);

    // Render
    return (
        <Stack
            direction={'row'}
            spacing={'0.375rem'}
            px={'2rem'}
            py='1rem'
            borderBottom={`0.0625rem solid ${COLORS.Line.value}`}
        >
            {crumbs.map((element, index) => {
                return (
                    <Text
                        key={index}
                        font={FONTS.T1.T16px.Medium500.value}
                        color={
                            index < crumbs.length - 1
                                ? COLORS.InputText.value
                                : COLORS.Text.T400.value
                        }
                    >
                        {element.label}
                    </Text>
                );
            })}
        </Stack>
    );
};
