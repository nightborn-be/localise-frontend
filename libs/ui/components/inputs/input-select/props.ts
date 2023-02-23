import { InputProps } from '@chakra-ui/react';
import React from 'react'
export default interface IInputSelectProps extends InputProps {
    label?: string,
    description?: string,
    labelColor?: string,
    descriptionColor?: string,
    icon: React.ReactElement,
    isInvalid?: boolean
}