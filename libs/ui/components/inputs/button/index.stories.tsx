import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';
import IButtonProps from './props';
import Icon from '../../contents/icon';
import COLORS from '../../../constants/colors';

export default {
    title: 'Components/Inputs/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const props: IButtonProps = {
    children: 'Text',
    fontSize: '12px',
    color: COLORS.White.T500.value,
    backgroundColor: COLORS.Localize.Purple.T500.value,
    borderRadius: '8px',
    w: '66px',
    h: '32px',
    startEnhancer: (
        <Icon
            name='add'
            stroke={COLORS.White.T500.value}
            width='16'
            height='16'
            viewBox='0 0 16 16'
        />
    ),

    startEnhancerHover: undefined,
    fontWeight: 600,
    lineHeight: '17px',
    textAlign: 'center',
    spacing: '4px',
    hoverBackgroundColor: COLORS.Localize.Purple.T600.value,
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
    startEnhancer: <Icon name='addLarge' stroke={COLORS.White.T500.value} />,
};

export const LargeTextRightIconNoBackground = Template.bind({});
LargeTextRightIconNoBackground.args = {
    ...props,
    fontSize: '14px',
    w: '66px',
    h: '36px',
    lineHeight: '15px',
    color: COLORS.Localize.Purple.T500.value,
    startEnhancer: undefined,
    endEnhancer: (
        <Icon
            name='add'
            stroke={COLORS.Localize.Purple.T500.value}
            width='16'
            height='16'
            viewBox='0 0 16 16'
        />
    ),
    backgroundColor: 'transparent',
    hoverBackgroundColor: COLORS.Communication.BG.value,
};
export const TextWithBorder = Template.bind({});
TextWithBorder.args = {
    ...props,
    width: '74px',
    height: '44px',
    fontSize: '14px',
    padding: '4px 12px 4px 8px',
    gap: '4px',
    children: 'Text',
    border: '1px solid ' + COLORS.Localize.Purple.T500.value,
    borderRadius: '8px',
    backgroundColor: COLORS.BG.value,
    startEnhancer: (
        <Icon name='addLarge' stroke={COLORS.Localize.Purple.T500.value} />
    ),
    color: COLORS.Localize.Purple.T500.value,
    hoverBackgroundColor: COLORS.Communication.BG.value,
    icon: undefined,
};
export const TextRightIconWithBorderDashed = Template.bind({});
TextRightIconWithBorderDashed.args = {
    ...props,
    border: '1px dashed ' + COLORS.InputText.value,
    borderRadius: '8px',
    backgroundColor: 'transparent',
    color: COLORS.InputText.value,
    lineHeight: '15px',
    startEnhancer: undefined,
    hoverBackgroundColor: undefined,
    hoverColor: COLORS.Text.T400.value,
    endEnhancer: (
        <Icon
            name='add'
            stroke={COLORS.InputText.value}
            width='16'
            height='16'
            viewBox='0 0 16 16'
        />
    ),
    endEnhancerHover: (
        <Icon
            name='add'
            stroke={COLORS.Text.T400.value}
            width='16'
            height='16'
            viewBox='0 0 16 16'
        />
    ),
};
const trashProps: IButtonProps = {
    children: 'Text',
    fontSize: '12px',
    color: COLORS.White.T500.value,
    backgroundColor: COLORS.Error.T500.value,
    borderRadius: '8px',
    w: '50px',
    h: '28px',
    padding: '4px 12px',
    gap: '4px',
    startEnhancer: (
        <Icon
            name='trashSmall'
            stroke={COLORS.White.T500.value}
            fill={COLORS.White.T500.value}
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
    hoverBackgroundColor: COLORS.Error.T500.value,
};

export const TrashText = Template.bind({});
TrashText.args = {
    ...trashProps,
    icon: undefined,
    startEnhancer: undefined,
    endEnhancer: undefined,
};

export const TrashRightWithText = Template.bind({});
TrashRightWithText.args = {
    ...trashProps,
    fontSize: '14px',
    lineHeight: '17px',
    w: '76px',
    h: '44px',
    startEnhancer: (
        <Icon
            name='trashLarge'
            fill={COLORS.White.T500.value}
            width='14'
            height='14'
            viewBox='0 0 14 14'
        />
    ),
    gap: '8px',
    spacing: '8px',
};
export const TrashLeftWithTextNoBackground = Template.bind({});
TrashLeftWithTextNoBackground.args = {
    ...trashProps,
    color: COLORS.Error.T500.value,
    fontSize: '14px',
    lineHeight: '17px',
    fontWeight: 600,
    startEnhancer: undefined,
    endEnhancer: (
        <Icon
            name='trashLarge'
            fill={COLORS.Error.T500.value}
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
    hoverBackgroundColor: COLORS.Tag.value,
};

export const AddMember = Template.bind({});

AddMember.args = {
    border: '1px dashed ' + COLORS.Line.value,
    borderRadius: '8px',
    children: 'Add a member',
    w: '327px',
    h: '44px',
    padding: '4px 12px 4px 8px',
    gap: '4px',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '17px',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    color: COLORS.InputText.value,
    startEnhancer: (
        <Icon
            name='add'
            stroke={COLORS.InputText.value}
            width='20'
            height='20'
        />
    ),
};

export const AddPicture = Template.bind({});

AddPicture.args = {
    border: '2px dashed ' + COLORS.Line.value,
    borderRadius: '16px',
    children: 'Add a picture',
    w: '100px',
    h: '100px',
    fontSize: '12px',
    lineHeight: '12px',
    fontWeight: 500,
    direction: 'column',
    backgroundColor: 'transparent',
    color: COLORS.InputText.value,
    whiteSpace: 'pre-line',
    spacing: '7px',
    startEnhancer: (
        <Icon
            name='uploadCloud'
            stroke={COLORS.InputText.value}
            width='24'
            height='24'
        />
    ),
    startEnhancerHover: (
        <Icon
            name='uploadCloud'
            stroke={COLORS.InputText.value}
            width='24'
            height='24'
        />
    ),
};

export const AddLanguage = Template.bind({});
AddLanguage.args = {
    children: 'Add another target language',
    color: '#393360',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '15px',
    width: '189px',
    height: '16px',
    padding: '0px',
    gap: '8px',
    backgroundColor: 'transparent',
    hoverColor: COLORS.Localize.Purple.T500.value,
    startEnhancer: (
        <Icon
            name='addSmallBackground'
            color={COLORS.Text.T400.value}
            fill={COLORS.White.T500.value}
            stroke={COLORS.White.T500.value}
        />
    ),
    startEnhancerHover: (
        <Icon
            name='addSmallBackground'
            color={COLORS.Localize.Purple.T500.value}
            fill={COLORS.White.T500.value}
            stroke={COLORS.White.T500.value}
        />
    ),
};

export const DeleteProject = Template.bind({});
DeleteProject.args = {
    children: 'Delete project',
    color: COLORS.InputText.value,
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '15px',
    width: '101px',
    height: '15px',
    padding: '0px',
    gap: '8px',
    backgroundColor: 'transparent',
    hoverColor: COLORS.Error.T500.value,
    startEnhancer: <Icon name='trashXs' fill={COLORS.InputText.value} />,
    startEnhancerHover: <Icon name='trashXs' fill={COLORS.Error.T500.value} />,
};

export const Remove = Template.bind({});
Remove.args = {
    children: 'Remove',
    color: COLORS.InputText.value,
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '14.52px',
    width: '110px',
    height: '32px',
    padding: '4px 10px',
    gap: '6px',
    backgroundColor: 'transparent',
    hoverColor: COLORS.Error.T500.value,
    startEnhancer: <Icon name='trashXs' fill={COLORS.InputText.value} />,
    startEnhancerHover: <Icon name='trashXs' fill={COLORS.Error.T500.value} />,
};

export const Sort = Template.bind({});
Sort.args = {
    children: 'Sort',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    backgroundColor: 'transparent',
    hoverBackgroundColor: COLORS.Disabled.value,
    width: '41px',
    height: '28px',
    padding: '6px 8px',
    gap: '4px',
    borderRadius: '4px',
    color: COLORS.InputText.value,
    hoverColor: COLORS.Localize.Purple.T500.value,
};
