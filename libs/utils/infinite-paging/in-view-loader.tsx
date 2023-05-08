import { Box, Spinner } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { IInViewLoaderProps } from './props';
import { useEffect } from 'react';
import COLORS from 'ui/constants/colors';
import React from 'react';
export const InViewLoader = ({ isLoading, onLoad }: IInViewLoaderProps) => {
    // Attributes
    const { ref, inView } = useInView();

    // Effects
    useEffect(() => {
        if (!inView) {
            return;
        }

        onLoad();
    }, [inView]);

    // Render
    return (
        <Box ref={ref}>
            {isLoading && (
                <Spinner
                    size='lg'
                    thickness='0.25rem'
                    speed='0.65s'
                    emptyColor={COLORS.Line.value}
                    color={COLORS.Localize.Purple.T500.value}
                />
            )}
        </Box>
    );
};
