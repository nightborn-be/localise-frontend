import { Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';

interface BreadcrumbElement {
    label: string;
}

interface BreadcrumbProps {
    elements: BreadcrumbElement[];
}

export const Breadcrumb = ({ elements }: BreadcrumbProps) => {
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
            spacing={'6px'}
            px={'32px'}
            py='16px'
            borderBottom='1px solid #E7E9F4'
        >
            {crumbs.map((element, index) => {
                return (
                    <Text
                        key={index}
                        fontWeight={500}
                        fontSize={16}
                        color={
                            index < crumbs.length - 1 ? '#8F95B2' : '#393360'
                        }
                    >
                        {element.label}
                    </Text>
                );
            })}
        </Stack>
    );
};
