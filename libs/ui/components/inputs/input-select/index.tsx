import React from 'react';
import { Select } from '@chakra-ui/react';
import Icon from '../../contents/icon';
import IInputSelectProps from './props';
export default function InputSelect({
    type = 'text',
    color = '#393360',
    border = '1px solid #E9EAF0',
    placeholderColor = '#8F95B2',
    placeholder,
    h,
    w,
    ...props
}: IInputSelectProps) {
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
