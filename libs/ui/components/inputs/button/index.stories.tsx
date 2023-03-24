import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';
import { IButtonProps, EnhancerProps } from './props';
import Icon from '../../contents/icon';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';

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
    color: COLORS.White.T500.value,
    font: FONTS.T1.T12px.SemiBold600.value,
    backgroundColor: COLORS.Localize.Purple.T500.value,
    borderRadius: '0.5rem',
    w: '4.125rem',
    h: '2rem',

    startEnhancer: (enhancer) => (
        <Icon
            name='add'
            stroke={
                enhancer.isHovered
                    ? COLORS.White.T500.value
                    : COLORS.White.T500.value
            }
            width='16'
            height='16'
            viewBox='0 0 16 16'
        />
    ),
    spacing: '0.25rem',
    hoverBackgroundColor: COLORS.Localize.Purple.T600.value,
    onClick: () => {},
};

export const SmallTextLeftIcon = Template.bind({});
SmallTextLeftIcon.args = {
    ...props,
    height: '1.75rem',
    padding: '0.25rem 0.75rem 0.25rem 0.5rem',
    gap: '0.25rem',
};
export const RegularTextLeftIcon = Template.bind({});
RegularTextLeftIcon.args = {
    ...props,
};

export const XLTextLeftIcon = Template.bind({});
XLTextLeftIcon.args = {
    ...props,
    width: '4.625rem',
    height: '2.75rem',
    font: FONTS.T1.T14px.SemiBold600.value,
    padding: '0.25rem 0.75rem 0.25rem 0.5rem',
    gap: '0.25rem',
    startEnhancer: (enhancer: EnhancerProps): React.ReactElement => (
        <Icon name='addLarge' stroke={COLORS.White.T500.value} />
    ),
};

export const LargeTextRightIconNoBackground = Template.bind({});
LargeTextRightIconNoBackground.args = {
    ...props,
    font: FONTS.T1.T14px.SemiBold600.value,
    w: '4.125rem',
    h: '2.25rem',
    color: COLORS.Localize.Purple.T500.value,
    startEnhancer: undefined,
    endEnhancer: (enhancer: EnhancerProps): React.ReactElement => (
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
    width: '4.625rem',
    height: '2.75rem',
    font: FONTS.T1.T14px.SemiBold600.value,
    padding: '0.25rem 0.75rem 0.25rem 0.5rem',
    gap: '0.25rem',
    children: 'Text',
    border: '0.0625rem solid ' + COLORS.Localize.Purple.T500.value,
    borderRadius: '0.5rem',
    backgroundColor: COLORS.BG.value,
    startEnhancer: (enhancer: EnhancerProps): React.ReactElement => (
        <Icon name='addLarge' stroke={COLORS.Localize.Purple.T500.value} />
    ),
    color: COLORS.Localize.Purple.T500.value,
    hoverBackgroundColor: COLORS.Communication.BG.value,
    icon: undefined,
};

export const TextRightIconWithBorderDashed = Template.bind({});
TextRightIconWithBorderDashed.args = {
    ...props,
    border: '0.0625rem dashed ' + COLORS.InputText.value,
    borderRadius: '0.5rem',
    backgroundColor: 'transparent',
    color: COLORS.InputText.value,
    startEnhancer: undefined,
    hoverBackgroundColor: undefined,
    hoverColor: COLORS.Text.T400.value,
    endEnhancer: (enhancer: EnhancerProps): React.ReactElement => {
        return (
            <Icon
                name='add'
                stroke={
                    enhancer.isHovered
                        ? COLORS.Text.T400.value
                        : COLORS.InputText.value
                }
                width='16'
                height='16'
                viewBox='0 0 16 16'
            />
        );
    },
};
const trashProps: IButtonProps = {
    children: 'Text',
    font: FONTS.T1.T12px.SemiBold600.value,
    color: COLORS.White.T500.value,
    backgroundColor: COLORS.Error.T500.value,
    borderRadius: '0.5rem',
    w: '3.125rem',
    h: '1.75rem',
    padding: '0.25rem 0.75rem',
    gap: '0.25rem',
    startEnhancer: (enhancer: EnhancerProps): React.ReactElement => {
        return (
            <Icon
                name='trashSmall'
                stroke={COLORS.White.T500.value}
                fill={COLORS.White.T500.value}
                width='12'
                height='12'
                viewBox='0 0 12 12'
            />
        );
    },
    spacing: '0.25rem',
    onClick: () => {},
    hoverBackgroundColor: COLORS.HoverRed.value,
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
    font: FONTS.T1.T14px.SemiBold600.value,
    w: '4.75rem',
    h: '2.75rem',
    startEnhancer: (enhancer: EnhancerProps): React.ReactElement => (
        <Icon
            name='trashLarge'
            fill={COLORS.White.T500.value}
            width='14'
            height='14'
            viewBox='0 0 14 14'
        />
    ),
    gap: '0.5rem',
    spacing: '0.5rem',
};
export const TrashLeftWithTextNoBackground = Template.bind({});
TrashLeftWithTextNoBackground.args = {
    ...trashProps,
    color: COLORS.Error.T500.value,
    font: FONTS.T1.T14px.SemiBold600.value,
    startEnhancer: undefined,
    endEnhancer: (enhancer: EnhancerProps): React.ReactElement => (
        <Icon
            name='trashLarge'
            fill={COLORS.Error.T500.value}
            width='14'
            height='14'
            viewBox='0 0 14 14'
        />
    ),
    w: '4.75rem',
    h: '2.5rem',
    padding: '0.25rem 0.75rem',
    gap: '0.5rem',
    spacing: '0.5206rem',
    backgroundColor: 'transparent',
    hoverBackgroundColor: COLORS.Tag.value,
};

export const AddMember = Template.bind({});

AddMember.args = {
    font: FONTS.T1.T14px.Regular400.value,
    border: '0.0625rem dashed ' + COLORS.Line.value,
    borderRadius: '0.5rem',
    children: 'Add a member',
    w: '20.4375rem',
    h: '2.75rem',
    padding: '0.25rem 0.75rem 0.25rem 0.5rem',
    gap: '0.25rem',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    color: COLORS.InputText.value,
    startEnhancer: (enhancer: EnhancerProps): React.ReactElement => (
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
    border: '0.125rem dashed ' + COLORS.Line.value,
    font: FONTS.T1.T12px.Medium500.value,
    borderRadius: '1rem',
    children: 'Add a picture',
    w: '6.25rem',
    h: '6.25rem',
    direction: 'column',
    backgroundColor: 'transparent',
    color: COLORS.InputText.value,
    whiteSpace: 'pre-line',
    spacing: '0.4375rem',
    startEnhancer: (enhancer: EnhancerProps): React.ReactElement => (
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
    font: FONTS.T1.T12px.Medium500.value,
    width: '11.8125rem',
    height: '1rem',
    padding: '0rem',
    gap: '0.5rem',
    backgroundColor: 'transparent',
    hoverColor: COLORS.Localize.Purple.T500.value,
    startEnhancer: (enhancer: EnhancerProps): React.ReactElement => (
        <Icon
            name='addSmallBackground'
            color={
                enhancer.isHovered
                    ? COLORS.Localize.Purple.T500.value
                    : COLORS.Text.T400.value
            }
            fill={COLORS.White.T500.value}
            stroke={COLORS.White.T500.value}
        />
    ),
};

export const DeleteProject = Template.bind({});
DeleteProject.args = {
    children: 'Delete project',
    color: COLORS.InputText.value,
    font: FONTS.T1.T12px.Medium500.value,
    width: '6.3125rem',
    height: '0.9375rem',
    borderRadius: '0px',
    padding: '0rem',
    gap: '0.5rem',
    backgroundColor: 'transparent',
    hoverColor: COLORS.Error.T500.value,
    startEnhancer: (enhancer: EnhancerProps): React.ReactElement => (
        <Icon
            name='trashXs'
            fill={
                enhancer.isHovered
                    ? COLORS.Error.T500.value
                    : COLORS.InputText.value
            }
        />
    ),
};

export const Remove = Template.bind({});
Remove.args = {
    children: 'Remove',
    color: COLORS.InputText.value,
    font: FONTS.T1.T12px.SemiBold600.value,
    width: '6.875rem',
    height: '2rem',
    padding: '0.25rem 0.625rem',
    gap: '0.375rem',
    backgroundColor: 'transparent',
    hoverColor: COLORS.Error.T500.value,
    startEnhancer: (enhancer: EnhancerProps): React.ReactElement => (
        <Icon
            name='trashXs'
            fill={
                enhancer.isHovered
                    ? COLORS.Error.T500.value
                    : COLORS.InputText.value
            }
        />
    ),
};

export const Sort = Template.bind({});
Sort.args = {
    children: 'Sort',
    font: FONTS.T1.T12px.Regular400.value,
    backgroundColor: 'transparent',
    hoverBackgroundColor: COLORS.Disabled.value,
    width: '2.5625rem',
    height: '1.75rem',
    padding: '0.375rem 0.5rem',
    gap: '0.25rem',
    borderRadius: '0.25rem',
    color: COLORS.InputText.value,
    hoverColor: COLORS.Localize.Purple.T500.value,
};

export const CreateOrganisation = Template.bind({});
CreateOrganisation.args = {
    startEnhancer: (): React.ReactElement => (
        <Icon
            name='addSmallBackground'
            color={COLORS.Text.T400.value}
            fill={COLORS.White.T500.value}
            stroke={COLORS.White.T500.value}
        />
    ),
    w: '252px',
    h: '40px',
    justifyContent: 'left',
    children: 'Create new organisation',
    font: FONTS.T1.T12px.Medium500.value,
    color: COLORS.Text.T400.value,
    spacing: '8px',
};
