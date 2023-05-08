import { Box, HStack, Spinner } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { IInViewLoaderProps } from 'utils/infinite-paging/props';
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
        <HStack
            ref={ref}
            w='full'
            justifyContent={'center'}
            alignItems={'center'}
        >
            {isLoading ? (
                <Spinner
                    size='lg'
                    thickness='0.25rem'
                    speed='0.65s'
                    emptyColor={COLORS.Line.value}
                    color={COLORS.Localize.Purple.T500.value}
                />
            ) : (
                <Box h='2rem'></Box>
            )}
        </HStack>
    );
};
