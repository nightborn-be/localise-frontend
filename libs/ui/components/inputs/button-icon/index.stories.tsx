import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IButtonIconProps, { ButtonSize } from './props';
import Icon from '../../contents/icon';
import ButtonIcon from '.';

export default {
    title: 'Components/Inputs/ButtonIcon',
    component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;
const Template: ComponentStory<typeof ButtonIcon> = (
    props: IButtonIconProps,
) => <ButtonIcon {...props} />;

const props: IButtonIconProps = {
    hoverBackgroundColor: 'lightgray',
    size: ButtonSize.XL,
    backgroundColor: '#5F43E2',
    border: 'none',
    borderRadius: '8px',
    icon: <Icon name='add' stroke='white' width='16' height='16' />,
    handleOnClick: () => {},
};

export const Xs = Template.bind({});
Xs.args = { ...props, size: ButtonSize.XS };
export const Small = Template.bind({});
Small.args = { ...props, size: ButtonSize.SMALL };
export const Regular = Template.bind({});
Regular.args = { ...props, size: ButtonSize.REGULAR };
export const Large = Template.bind({});
Large.args = { ...props, size: ButtonSize.LARGE };
export const Xl = Template.bind({});
Xl.args = { ...props, size: ButtonSize.XL };
export const NoBorderNoColor = Template.bind({});
NoBorderNoColor.args = {
    ...props,
    backgroundColor: 'transparent',
    icon: <Icon name='add' stroke='#5F43E2' width='16' height='16' />,
};
export const BorderNoColor = Template.bind({});
BorderNoColor.args = {
    ...props,
    backgroundColor: 'none',
    icon: <Icon name='add' stroke='#8F95B2' width='16' height='16' />,
};
export const SimpleBorderNoColor = Template.bind({});
SimpleBorderNoColor.args = {
    ...props,
    backgroundColor: 'none',
    border: '2px solid #5F43E2',
    icon: <Icon name='add' stroke='#5F43E2' width='16' height='16' />,
};
export const DashedBorderNoColor = Template.bind({});
DashedBorderNoColor.args = {
    ...props,
    backgroundColor: 'none',
    border: '1px dashed #8F95B2',
    borderRadius: '8px',
    icon: <Icon name='add' stroke='#8F95B2' width='16' height='16' />,
};
export const Trash = Template.bind({});
Trash.args = {
    ...props,
    backgroundColor: '#F46363',
    icon: (
        <Icon
            name='trash'
            stroke='#FFFFFF'
            fill='#FFFFFF'
            width='12'
            height='12'
        />
    ),
};
export const TrashNoBackground = Template.bind({});
TrashNoBackground.args = {
    ...props,
    backgroundColor: 'transparent',
    icon: (
        <Icon
            name='trash'
            stroke='#F46363'
            fill='#F46363'
            width='14'
            height='14'
        />
    ),
};
