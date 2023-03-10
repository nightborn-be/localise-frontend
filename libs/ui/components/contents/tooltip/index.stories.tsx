import React from 'react';
import { ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import Role from '../role';
import Tooltip from '.';
import Icon from '../icon';
import { HStack } from '@chakra-ui/react';
export default {
    title: 'Components/Constents/Tooltip',
} as ComponentMeta<typeof Tooltip>;

export const Tooltips = () => {
    return (
        <Tooltip label={['Source language: English']}>
            <Role
                text='Admin'
                color={COLORS.Localize.Purple.T500.value}
                backgroundColor={COLORS.Localize.Purple.T100.value}
            />
        </Tooltip>
    );
};

export const TooltipIcon = () => {
    return (
        <Tooltip
            label={['Add a new key', <Icon name='shortKey' />]}
            placement={'top'}
        >
            <HStack mt='50px'>
                <Role
                    text='Admin'
                    color={COLORS.Localize.Purple.T500.value}
                    backgroundColor={COLORS.Localize.Purple.T100.value}
                />
            </HStack>
        </Tooltip>
    );
};
