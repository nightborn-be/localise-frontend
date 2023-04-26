import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IButtonIconProps } from './props';
import Icon from '../../contents/icon';
import ButtonIcon from '.';
import COLORS from '../../../constants/colors';
import { ButtonSize } from './types';

export default {
    title: 'Components/Inputs/ButtonIcon',
    component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;
const Template: ComponentStory<typeof ButtonIcon> = (
    props: IButtonIconProps,
) => <ButtonIcon {...props} />;

const props: IButtonIconProps = {
    size: ButtonSize.XS,
    backgroundColor: COLORS.Localize.Purple.T500.value,
    hoverBackgroundColor: COLORS.Localize.Purple.T600.value,
    border: 'none',
    borderRadius: '0.5rem',
    children: <Icon name='add' stroke='white' width='16' height='16' />,
    handleOnClick: () => {},
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
    children: <Icon name='add' stroke='white' width='20' height='20' />,
};
export const Xl = Template.bind({});
Xl.args = {
    ...props,
    size: ButtonSize.XL,
    children: <Icon name='add' stroke='white' width='20' height='20' />,
};
export const NoBorderNoColor = Template.bind({});
NoBorderNoColor.args = {
    ...props,
    backgroundColor: 'transparent',
    hoverBackgroundColor: COLORS.Communication.BG.value,
    children: (
        <Icon
            name='add'
            stroke={COLORS.Localize.Purple.T500.value}
            width='16'
            height='16'
        />
    ),
};
export const BorderNoColor = Template.bind({});
BorderNoColor.args = {
    ...props,
    hoverBackgroundColor: COLORS.Tag.value,
    backgroundColor: 'transparent',
    children: (
        <Icon
            name='add'
            stroke={COLORS.InputText.value}
            width='16'
            height='16'
        />
    ),
};
export const SimpleBorderNoColor = Template.bind({});
SimpleBorderNoColor.args = {
    ...props,
    backgroundColor: COLORS.BG.value,
    border: `0.125rem solid ${COLORS.Localize.Purple.T500.value}`,
    hoverBackgroundColor: COLORS.Communication.BG.value,
    children: (
        <Icon
            name='add'
            stroke={COLORS.Localize.Purple.T500.value}
            width='16'
            height='16'
        />
    ),
};

export const Trash = Template.bind({});
Trash.args = {
    ...props,
    backgroundColor: COLORS.Error.T500.value,
    children: (
        <Icon name='trashSmall' stroke='none' fill={COLORS.White.T500.value} />
    ),
    size: ButtonSize.SMALL,
    hoverBackgroundColor: COLORS.HoverRed.value,
    padding: '0.25rem',
    gap: '0.625rem',
};
export const TrashNoBackground = Template.bind({});
TrashNoBackground.args = {
    ...props,
    size: ButtonSize.XL,
    backgroundColor: 'transparent',
    hoverBackgroundColor: COLORS.Tag.value,
    gap: '0.625rem',
    padding: '0.25rem',
    children: (
        <Icon name='trashLarge' stroke='none' fill={COLORS.Error.T500.value} />
    ),
};

export const RemoveMemberSmall = Template.bind({});
RemoveMemberSmall.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.SMALL,
    padding: '0.25rem',
    gap: '0.625rem',
    backgroundColor: COLORS.White.T500.value,
    hoverBackgroundColor: COLORS.Tag.value,
    children: (isHovered) => (
        <Icon
            pointerEvents='none'
            name={'removeSmall'}
            stroke={
                isHovered ? COLORS.Error.T500.value : COLORS.InputText.value
            }
        />
    ),
};
export const RemoveMemberXL = Template.bind({});
RemoveMemberXL.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.XL,
    padding: '0.25rem',
    gap: '0.625rem',
    backgroundColor: COLORS.White.T500.value,
    hoverBackgroundColor: COLORS.Tag.value,
    children: (isHovered) => (
        <Icon
            pointerEvents='none'
            name={'removeLarge'}
            stroke={
                isHovered ? COLORS.Error.T500.value : COLORS.InputText.value
            }
        />
    ),
};
export const RemoveMenu = Template.bind({});
RemoveMenu.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.SMALL,
    padding: '0.25rem',
    gap: '0.625rem',
    backgroundColor: COLORS.Localize.Purple.T500.value,
    hoverBackgroundColor: COLORS.Localize.Purple.T600.value,
    children: <Icon name='removeLarge' stroke={COLORS.White.T500.value} />,
};

export const ArrowDown = Template.bind({});

ArrowDown.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.SMALL,
    padding: '0.25rem',
    gap: '0.625rem',
    backgroundColor: COLORS.White.T500.value,
    hoverBackgroundColor: COLORS.Tag.value,
    children: (
        <Icon
            name='arrowDown'
            stroke={COLORS.InputText.value}
            fill={COLORS.InputText.value}
        />
    ),
};
export const ArrowUp = Template.bind({});
ArrowUp.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.SMALL,
    padding: '0.25rem',
    gap: '0.625rem',
    backgroundColor: COLORS.White.T500.value,
    hoverBackgroundColor: COLORS.Tag.value,
    children: (
        <Icon
            name='arrowUp'
            stroke={COLORS.InputText.value}
            fill={COLORS.InputText.value}
        />
    ),
};

export const Send = Template.bind({});
Send.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.SMALL,
    padding: '0.25rem 0.625rem',
    gap: '0.25rem',
    backgroundColor: COLORS.Localize.Purple.T500.value,
    hoverBackgroundColor: COLORS.Localize.Purple.T600.value,
    children: (
        <Icon
            name='send'
            fill={COLORS.White.T500.value}
            stroke={COLORS.White.T500.value}
        />
    ),
};

export const Expand = Template.bind({});
Expand.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.SMALL,
    padding: '0.25rem 0.625rem',
    gap: '0.25rem',
    backgroundColor: COLORS.White.T500.value,
    hoverBackgroundColor: COLORS.Tag.value,
    children: (
        <Icon
            name='expand'
            fill={COLORS.InputText.value}
            stroke={COLORS.InputText.value}
        />
    ),
};

export const More = Template.bind({});
More.args = {
    borderRadius: '0.25rem',
    size: ButtonSize.XS,
    padding: '0.25rem',
    gap: '0.625rem',
    backgroundColor: COLORS.White.T500.value,
    hoverBackgroundColor: COLORS.Tag.value,
    children: (
        <Icon
            name='expand'
            fill={COLORS.InputText.value}
            stroke={COLORS.InputText.value}
        />
    ),
};
export const Copy = Template.bind({});
Copy.args = {
    borderRadius: '0.375rem',
    size: ButtonSize.XS,
    padding: '0.25rem',
    gap: '0.625rem',
    backgroundColor: COLORS.BG.value,
    hoverBackgroundColor: COLORS.Line.value,
    children: <Icon name='copyClipBoard' fill={COLORS.InputText.value} />,
};
export const CircleAdd = Template.bind({});
CircleAdd.args = {
    borderRadius: '6.25rem',
    size: ButtonSize.XXL,
    backgroundColor: COLORS.Localize.Purple.T500.value,
    hoverBackgroundColor: COLORS.Localize.Purple.T600.value,
    boxShadow:
        '0rem 0.125rem 0.25rem rgba(40, 41, 61, 0.04), 0rem 0.5rem 1rem rgba(96, 97, 112, 0.16)',
    children: (
        <Icon
            name='addCircle'
            stroke={COLORS.White.T500.value}
            width={28}
            height={28}
        />
    ),
};

export const CircleClose = Template.bind({});
CircleClose.args = {
    borderRadius: '100%',
    border: `0.0625rem solid ${COLORS.Line.value}`,
    size: ButtonSize.XS,
    backgroundColor: COLORS.White.T500.value,
    hoverBackgroundColor: COLORS.Tag.value,
    children: (
        <Icon
            name='removeSmall'
            stroke={COLORS.Error.T500.value}
            width={20}
            height={20}
        />
    ),
};

export const CircleCrossClose = Template.bind({});
CircleCrossClose.args = {
    borderRadius: '100%',
    border: `0.0625rem solid ${COLORS.Line.value}`,
    size: ButtonSize.XXS,
    backgroundColor: COLORS.White.T500.value,
    hoverBackgroundColor: COLORS.Tag.value,
    children: <Icon name='crossClose' />,
};

export const RemoveOrganisation = Template.bind({});
RemoveOrganisation.args = {
    borderRadius: '0rem',
    size: ButtonSize['1.125rem'],
    backgroundColor: COLORS.Black.T500.value,
    hoverBackgroundColor: COLORS.Black.T400.value,
    children: <Icon name='trashLarge' fill={COLORS.White.T500.value} />,
};

export const RemoveProject = Template.bind({});
RemoveProject.args = {
    borderRadius: '0rem',
    size: ButtonSize.XXS,
    backgroundColor: COLORS.Black.T500.value,
    hoverBackgroundColor: COLORS.Black.T400.value,
    children: <Icon name='removeLarge' stroke={COLORS.White.T500.value} />,
};
