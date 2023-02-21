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
    startEnHancer: (
        <Icon
            name='add'
            stroke='#FFFFFF'
            width='16'
            height='16'
            viewBox='0 0 16 16'
        />
    ),
    fontWeight: 600,
    lineHeight: '17px',
    textAlign: 'center',
    spacing: '4px',
    hoverBackgroundColor: '#4C36B5',
    onClick: () => {},
};

export const SmallTextLeftIcon = Template.bind({});
SmallTextLeftIcon.args = {
    ...props,
    height: '28px',
    padding: '4px 12px 4px 8px',
    gap: '4px',
};
export const RegularTextLeftIcon = Template.bind({});
RegularTextLeftIcon.args = {
    ...props,
};

export const XLTextLeftIcon = Template.bind({});
XLTextLeftIcon.args = {
    ...props,
    width: '74px',
    height: '44px',
    fontSize: '14px',
    padding: '4px 12px 4px 8px',
    gap: '4px',
    startEnHancer: <Icon name='addLarge' stroke='#FFFFFF' />,
};
export const LargeTextRightIconNoBackground = Template.bind({});
LargeTextRightIconNoBackground.args = {
    ...props,
    fontSize: '14px',
    w: '66px',
    h: '36px',
    lineHeight: '15px',
    color: '#5F43E2',
    startEnHancer: undefined,
    endEnHancer: (
        <Icon
            name='add'
            stroke='#5F43E2'
            width='16'
            height='16'
            viewBox='0 0 16 16'
        />
    ),
    backgroundColor: 'transparent',
    hoverBackgroundColor: '#EDEEFC',
};
export const TextWithBorder = Template.bind({});
TextWithBorder.args = {
    ...props,
    width: '74px',
    height: '44px',
    fontSize: '14px',
    padding: '4px 12px 4px 8px',
    gap: '4px',
    text: 'Text',
    border: '1px solid #5F43E2',
    borderRadius: '8px',
    backgroundColor: '#F8F9FC',
    startEnHancer: <Icon name='addLarge' stroke='#5F43E2' />,
    color: '#5F43E2',
    hoverBackgroundColor: '#EDEEFC',
    icon: undefined,
};
export const TextRightIconWithBorderDashed = Template.bind({});
TextRightIconWithBorderDashed.args = {
    ...props,
    border: '1px dashed #8F95B2',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    color: '#8F95B2',
    lineHeight: '15px',
    startEnHancer: undefined,
    hoverBackgroundColor: undefined,
    hoverColor: '#393360',
    endEnHancer: (
        <Icon
            name='add'
            stroke='#8F95B2'
            width='16'
            height='16'
            viewBox='0 0 16 16'
        />
    ),
};
const trashProps: IButtonProps = {
    text: 'Text',
    fontSize: '12px',
    color: '#FFFFFF',
    backgroundColor: '#F46363',
    borderRadius: '8px',
    w: '50px',
    h: '28px',
    padding: '4px 12px',
    gap: '4px',
    startEnHancer: (
        <Icon
            name='trashSmall'
            stroke='#FFFFFF'
            fill='#FFFFFF'
            width='12'
            height='12'
            viewBox='0 0 12 12'
        />
    ),
    fontWeight: 600,
    lineHeight: '15px',
    textAlign: 'center',
    spacing: '4px',
    onClick: () => {},
    hoverBackgroundColor: '#E55252',
};

export const TrashText = Template.bind({});
TrashText.args = {
    ...trashProps,
    icon: undefined,
    startEnHancer: undefined,
    endEnHancer: undefined,
};

export const TrashRightWithText = Template.bind({});
TrashRightWithText.args = {
    ...trashProps,
    fontSize: '14px',
    lineHeight: '17px',
    w: '76px',
    h: '44px',
    startEnHancer: (
        <Icon
            name='trashLarge'
            fill='#FFFFFF'
            width='14'
            height='14'
            viewBox='0 0 14 14'
        />
    ),
    gap: '8px',
    spacing: '8.33px',
};
export const TrashLeftWithTextNoBackground = Template.bind({});
TrashLeftWithTextNoBackground.args = {
    ...trashProps,
    color: '#F46363',
    fontSize: '14px',
    lineHeight: '17px',
    fontWeight: 600,
    startEnHancer: undefined,
    endEnHancer: (
        <Icon
            name='trashLarge'
            fill='#F46363'
            width='14'
            height='14'
            viewBox='0 0 14 14'
        />
    ),
    w: '76px',
    h: '40px',
    padding: '4px 12px',
    gap: '8px',
    spacing: '8.33px',
    backgroundColor: 'transparent',
    hoverBackgroundColor: '#F2F4F9',
};

export const AddMember = Template.bind({});

AddMember.args = {
    border: '1px dashed #E7E9F4',
    borderRadius: '8px',
    text: 'Add a member',
    w: '327px',
    h: '44px',
    padding: '4px 12px 4px 8px',
    gap: '4px',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '17px',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    color: '#8F95B2',
    startEnHancer: <Icon name='add' stroke='#8F95B2' width='20' height='20' />,
};

export const AddPicture = Template.bind({});

AddPicture.args = {
    border: '2px dashed #8F95B2',
    borderRadius: '16px',
    text: 'Add a picture',
    w: '100px',
    h: '100px',
    fontSize: '12px',
    fontWeight: 500,
    direction: 'column',
    backgroundColor: 'transparent',
    color: '#8F95B2',
    whiteSpace: 'pre-line',
    startEnHancer: (
        <Icon name='uploadCloud' stroke='#8F95B2' width='24' height='24' />
    ),
};

export const AddLanguage = Template.bind({});
AddLanguage.args = {
    text: 'Add another target language',
    color: '#393360',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '15px',
    width: '189px',
    height: '16px',
    padding: '0px',
    gap: '8px',
    backgroundColor: 'transparent',
    hoverColor: '#5F43E2',
    changeIconBackground: true,
    startEnHancer: (
        <Icon
            name='addSmallBackground'
            color='#393360'
            fill='#FFFFFF'
            stroke='#FFFFFF'
        />
    ),
};

export const DeleteProject = Template.bind({});
DeleteProject.args = {
    text: 'Delete project',
    color: '#8F95B2',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '15px',
    width: '101px',
    height: '15px',
    padding: '0px',
    gap: '8px',
    backgroundColor: 'transparent',
    hoverColor: '#F46363',
    startEnHancer: <Icon name='trashXs' fill='#8F95B2' />,
};

export const Remove = Template.bind({});
Remove.args = {
    text: 'Remove',
    color: '#8F95B2',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '14.52px',
    width: '110px',
    height: '32px',
    padding: '4px 10px',
    gap: '6px',
    backgroundColor: 'transparent',
    hoverColor: '#F46363',
    startEnHancer: <Icon name='trashXs' fill='#8F95B2' />,
};

export const Sort = Template.bind({});
Sort.args = {
    text: 'Sort',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    backgroundColor: 'transparent',
    hoverBackgroundColor: '#F4F6FA',
    width: '41px',
    height: '28px',
    padding: '6px 8px',
    gap: '4px',
    borderRadius: '4px',
    color: '#8F95B2',
    hoverColor: '#5F43E2',
};
