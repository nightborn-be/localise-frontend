import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import COLORS from '../../../constants/colors';
import { IToggleProps } from './props';

const Toggle = ({ isChecked, toggleChecked }: IToggleProps) => {
    //Render
    return (
        <HStack
            w='2rem'
            h='1.25rem'
            backgroundColor={
                isChecked ? COLORS.Success.T500.value : COLORS.Line.value
            }
            borderRadius='6.25rem'
            padding={'0.25rem'}
            onClick={toggleChecked}
        >
            <motion.div
                initial={{ translateX: '0' }}
                animate={
                    isChecked ? { translateX: '0.75rem' } : { translateX: '0' }
                }
                transition={{ duration: 0.3, ease: 'easeOut' }}
            >
                <Box
                    w='0.75rem'
                    h='0.75rem'
                    backgroundColor={'white'}
                    borderRadius='100%'
                />
            </motion.div>
        </HStack>
    );
};

export default Toggle;
