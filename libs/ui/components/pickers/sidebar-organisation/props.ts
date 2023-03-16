import { ChakraProps } from '@chakra-ui/react';
import React from 'react'
import { Font } from '../../../constants/fonts';
export interface ISidebarOrganisationProps extends ChakraProps {
    topText?: string,
    topTextFont?: Font,
    topTextColor?: string,
    bottomText?: string,
    bottomTextFont?: Font,
    bottomTextColor?: string,
    startEnhancer?: React.ReactElement,
    endEnhancer?: React.ReactElement,
    marginLeftText?: string,
    canBeSelected?: boolean,
    w?: string,
    h?: string,
    onClick?: () => void,
}

