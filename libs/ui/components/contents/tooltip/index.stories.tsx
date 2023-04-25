import React from 'react';
import { ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import Role from '../role';
import Tooltip from '.';
import Icon from '../icon';
import { HStack } from '@chakra-ui/react';
import { TooltipType } from './props';
export default {
    title: 'Components/Contents/Tooltip',
} as ComponentMeta<typeof Tooltip>;

export const Tooltips = () => {
    return (
        <Tooltip label={'Source language: English'}>
            <Role selectedValue={'Admin'} setSelectedValue={() => {}} />
        </Tooltip>
    );
};

export const TooltipIcon = () => {
    return (
        <Tooltip
            type={TooltipType.COMMAND}
            command={<Icon name='shortKey' />}
            label={'Add a new key'}
            placement={'top'}
        >
            <HStack mt='3.125rem'>
                <Role selectedValue={'Admin'} setSelectedValue={() => {}} />
            </HStack>
        </Tooltip>
    );
};
