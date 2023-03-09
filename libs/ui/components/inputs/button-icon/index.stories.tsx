import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IButtonIconProps, { ButtonSize } from './props';
import Icon from '../../contents/icon';
import ButtonIcon from '.';
import { Box } from '@chakra-ui/react';

export default {
    title: 'Components/Inputs/ButtonIcon',
    component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;
const Template: ComponentStory<typeof ButtonIcon> = (
    props: IButtonIconProps,
) => <ButtonIcon {...props} />;

const props: IButtonIconProps = {
    size: ButtonSize.XS,
    backgroundColor: '#5F43E2',
    hoverBackgroundColor: '#4C36B5',
    border: 'none',
    borderRadius: '0.5rem',
    displayIcon: (isHovered) => (
        <Icon name='add' stroke='white' width='16' height='16' />
    ),
    handleOnClick: () => {},
    'aria-label': '',
};

export const Xs = Template.bind({});
Xs.args = { ...props, size: ButtonSize.XS };
export const Small = Template.bind({});
Small.args = { ...props, size: ButtonSize.SMALL };
export const Regular = Template.bind({});
Regular.args = { ...props, size: ButtonSize.REGULAR };
export const Large = Template.bind({});
Large.args = {
    ...props,
    size: ButtonSize.LARGE,
    displayIcon: () => (
        <Icon name='add' stroke='white' width='20' height='20' />
    ),
};
export const Xl = Template.bind({});
Xl.args = {
    ...props,
    size: ButtonSize.XL,
    displayIcon: () => (
        <Icon name='add' stroke='white' width='20' height='20' />
    ),
};
export const NoBorderNoColor = Template.bind({});
NoBorderNoColor.args = {
    ...props,
    backgroundColor: 'transparent',
    hoverBackgroundColor: '#EDEEFC',
    displayIcon: () => (
        <Icon name='add' stroke='#5F43E2' width='16' height='16' />
    ),
};
export const BorderNoColor = Template.bind({});
BorderNoColor.args = {
    ...props,
    hoverBackgroundColor: '#F2F4F9',
    backgroundColor: 'transparent',
    displayIcon: () => (
        <Icon name='add' stroke='#8F95B2' width='16' height='16' />
    ),
};
export const SimpleBorderNoColor = Template.bind({});
SimpleBorderNoColor.args = {
    ...props,
    backgroundColor: '#F8F9FC',
    border: '0.125rem solid #5F43E2',
    hoverBackgroundColor: '#EDEEFC',
    displayIcon: () => (
        <Icon name='add' stroke='#5F43E2' width='16' height='16' />
    ),
};

export const Trash = Template.bind({});
Trash.args = {
    ...props,
    backgroundColor: '#F46363',
    displayIcon: () => (
        <Icon name='trashSmall' stroke='none' fill='#FFFFFF' />
    ),
    size: ButtonSize.SMALL,
    hoverBackgroundColor: '#E55252',
    padding: '0.25rem',
    gap: '0.625rem',
};
export const TrashNoBackground = Template.bind({});
TrashNoBackground.args = {
    ...props,
    size: ButtonSize.XL,
    backgroundColor: 'transparent',
    hoverBackgroundColor: '#F2F4F9',
    gap: '0.625rem',
    padding: '0.25rem',
    displayIcon: () => (
        <Icon name='trashLarge' stroke='none' fill='#F46363' />
    ),
};

export const RemoveMemberSmall = Template.bind({});
RemoveMemberSmall.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.SMALL,
    padding: '0.25rem',
    gap: '0.625rem',
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#F2F4F9',
    displayIcon: (isHovered) => (
        <Icon
            pointerEvents='none'
            name={'removeSmall'}
            stroke={isHovered ? '#F46363' : '#8F95B2'}
        />
    ),
};
export const RemoveMemberXL = Template.bind({});
RemoveMemberXL.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.XL,
    padding: '0.25rem',
    gap: '0.625rem',
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#F2F4F9',
    displayIcon: (isHovered) => (
        <Icon
            pointerEvents='none'
            name={'removeLarge'}
            stroke={isHovered ? '#F46363' : '#8F95B2'}
        />
    ),
};
export const RemoveMenu = Template.bind({});
RemoveMenu.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.SMALL,
    padding: '0.25rem',
    gap: '0.625rem',
    backgroundColor: '#5F43E2',
    hoverBackgroundColor: '#4C36B5',
    displayIcon: () => <Icon name='removeLarge' stroke='#FFFFFF' />,
};

export const ArrowDown = Template.bind({});

ArrowDown.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.SMALL,
    padding: '0.25rem',
    gap: '0.625rem',
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#F2F4F9',
    displayIcon: () => (
        <Icon name='arrowDown' stroke='#8F95B2' fill='#8F95B2' />
    ),
};
export const ArrowUp = Template.bind({});
ArrowUp.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.SMALL,
    padding: '0.25rem',
    gap: '0.625rem',
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#F2F4F9',
    displayIcon: () => (
        <Icon name='arrowUp' fill='#8F95B2' stroke='#8F95B2' />
    ),
};

export const Send = Template.bind({});
Send.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.SMALL,
    padding: '0.25rem 0.625rem',
    gap: '0.25rem',
    backgroundColor: '#5F43E2',
    hoverBackgroundColor: '#4C36B5',
    displayIcon: () => (
        <Icon name='send' fill='#FFFFFF' stroke='#FFFFFF' />
    ),
};

export const Expand = Template.bind({});
Expand.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.SMALL,
    padding: '0.25rem 0.625rem',
    gap: '0.25rem',
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#F2F4F9',
    displayIcon: () => (
        <Icon name='expand' fill='#8F95B2' stroke='#8F95B2' />
    ),
};

export const More = Template.bind({});
More.args = {
    borderRadius: '0.25rem',
    size: ButtonSize.XS,
    padding: '0.25rem',
    gap: '0.625rem',
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#F2F4F9',
    displayIcon: () => (
        <Icon name='more' fill='#8F95B2' stroke='#8F95B2' />
    ),
};
export const Copy = Template.bind({});
Copy.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.XS,
    padding: '0.25rem',
    gap: '0.625rem',
    backgroundColor: '#F8F9FC',
    hoverBackgroundColor: '#E7E9F4',
    displayIcon: () => <Icon name='copy' fill='#8F95B2' />,
};
export const CircleAdd = Template.bind({});
CircleAdd.args = {
    borderRadius: '6.25rem',
    size: ButtonSize.XXL,
    backgroundColor: '#5F43E2',
    hoverBackgroundColor: '#4C36B5',
    boxShadow:
        '0rem 0.125rem 0.25rem rgba(40, 41, 61, 0.04), 0rem 0.5rem 1rem rgba(96, 97, 112, 0.16)',
    displayIcon: () => (
        <Icon name='addCircle' stroke='#FFFFFF' width={28} height={28} />
    ),
};
