import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';
import IButtonProps from './props';
import Icon from '../../contents/icon';

export default {
    title: 'Components/Inputs/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const props: IButtonProps = {
    text: 'Text',
    fontSize: '12px',
    color: '#FFFFFF',
    backgroundColor: '#5F43E2',
    borderRadius: '8px',
    w: '66px',
    h: '32px',
    startEnHancer: <Icon name='add' stroke='#FFFFFF' width='16' height='16' />,
    fontWeight: 600,
    lineHeight: '17px',
    textAlign: 'center',
    spacing: '4px',
    onClick: () => {},
};

export const SmallTextLeftIcon = Template.bind({});
SmallTextLeftIcon.args = {
    ...props,
    fontSize: '10px',
};
export const RegularTextLeftIcon = Template.bind({});
RegularTextLeftIcon.args = {
    ...props,
};
export const LargeTextRightIconNoBackground = Template.bind({});
LargeTextRightIconNoBackground.args = {
    ...props,
    fontSize: '14px',
    w: '74px',
    h: '40px',
    color: '#5F43E2',
    startEnHancer: undefined,
    endEnHancer: <Icon name='add' stroke='#5F43E2' width='16' height='16' />,
    backgroundColor: 'transparent',
    hoverBackgroundColor: 'lightgray',
};
export const TextWithBorder = Template.bind({});
TextWithBorder.args = {
    ...props,
    border: '1px solid #5F43E2',
    borderRadius: '8px',
    backgroundColor: '#F8F9FC',
    startEnHancer: <Icon name='add' stroke='#5F43E2' width='16' height='16' />,
    color: '#5F43E2',
    icon: undefined,
};
export const TextIconWithBorderDashed = Template.bind({});
TextIconWithBorderDashed.args = {
    ...props,
    border: '1px dashed #8F95B2',
    borderRadius: '8px',
    backgroundColor: '#F8F9FC',
    color: '#8F95B2',
    lineHeight: '17px',
    startEnHancer: undefined,
    endEnHancer: <Icon name='add' stroke='#8F95B2' width='16' height='16' />,
};
const trashProps: IButtonProps = {
    text: 'Text',
    fontSize: '12px',
    color: '#FFFFFF',
    backgroundColor: '#F46363',
    borderRadius: '8px',
    w: '66px',
    h: '32px',
    startEnHancer: (
        <Icon
            name='trash'
            stroke='#FFFFFF'
            fill='#FFFFFF'
            width='12'
            height='12'
        />
    ),
    fontWeight: 600,
    lineHeight: '17px',
    textAlign: 'center',
    spacing: '4px',
    onClick: () => {},
};

export const TrashText = Template.bind({});
TrashText.args = {
    ...trashProps,
    startEnHancer: undefined,
    endEnHancer: undefined,
};

export const TrashRightWithText = Template.bind({});
TrashRightWithText.args = {
    ...trashProps,
    w: '76px',
    h: '44px',
    spacing: '8.33px',
};
export const TrashLeftWithTextNoBackground = Template.bind({});
TrashLeftWithTextNoBackground.args = {
    ...trashProps,
    color: '#F46363',
    startEnHancer: undefined,
    endEnHancer: (
        <Icon
            name='trash'
            stroke='##F46363'
            fill='#F46363'
            width='16'
            height='16'
        />
    ),
    w: '76px',
    h: '44px',
    lineHeight: '15px',
    spacing: '8.33px',
    backgroundColor: 'transparent',
};

export const AddMember = Template.bind({});

AddMember.args = {
    border: '1px dashed #E7E9F4',
    borderRadius: '8px',
    text: 'Add a member',
    w: '327px',
    h: '44px',
    padding: '4px 12px 4px 8px',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '17px',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    color: '#8F95B2',
    startEnHancer: <Icon name='add' stroke='#8F95B2' width='12' height='12' />,
};

export const AddPicture = Template.bind({});

AddPicture.args = {
    border: '1px dashed #8F95B2',
    borderRadius: '16px',
    text: 'Add a picture',
    w: '100px',
    h: '100px',
    fontSize: '12px',
    fontWeight: 500,
    direction: 'column',
    backgroundColor: 'transparent',
    color: '#8F95B2',
    startEnHancer: (
        <Icon name='uploadCloud' stroke='#8F95B2' width='24' height='24' />
    ),
};


