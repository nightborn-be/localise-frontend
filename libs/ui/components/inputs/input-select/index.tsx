import React from 'react';
import IInputProps from './props';
import { Select } from '@chakra-ui/react';
import Icon from '../../contents/icon';
export default function InputWithSelected({
    type = 'text',
    color = '#393360',
    border = '1px solid #E9EAF0',
    placeholderColor = '#8F95B2',
    placeholder,
    h,
    w,
    ...props
}: IInputProps) {
    return (
        <Select
            variant='unstyled'
            border='none'
            fontSize='12px'
            lineHeight='15px'
            fontWeight='400'
            height={h}
            color='#5F43E2'
            icon={<Icon name='arrowDown' fontSize='10px' fill='#5F43E2' />}
        >
            <option selected value='Admin'>
                Admin
            </option>
            <option value='Member'>Member</option>
        </Select>
    );
}
