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
    borderRadius: '8px',
    icon: <Icon name='add' stroke='white' width='16' height='16' />,
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
    icon: <Icon name='add' stroke='white' width='20' height='20' />,
};
export const Xl = Template.bind({});
Xl.args = {
    ...props,
    size: ButtonSize.XL,
    icon: <Icon name='add' stroke='white' width='20' height='20' />,
};
export const NoBorderNoColor = Template.bind({});
NoBorderNoColor.args = {
    ...props,
    backgroundColor: 'transparent',
    hoverBackgroundColor: '#EDEEFC',
    icon: <Icon name='add' stroke='#5F43E2' width='16' height='16' />,
};
export const BorderNoColor = Template.bind({});
BorderNoColor.args = {
    ...props,
    hoverBackgroundColor: '#F2F4F9',
    backgroundColor: 'transparent',
    icon: <Icon name='add' stroke='#8F95B2' width='16' height='16' />,
};
export const SimpleBorderNoColor = Template.bind({});
SimpleBorderNoColor.args = {
    ...props,
    backgroundColor: '#F8F9FC',
    border: '2px solid #5F43E2',
    hoverBackgroundColor: '#EDEEFC',
    icon: <Icon name='add' stroke='#5F43E2' width='16' height='16' />,
};
const DashedBorderComponent = (): JSX.Element => {
    const [isHovered, setIsHovered] = useState<boolean>();
    const handleMouseOver = () => setIsHovered((prev) => !prev);
    const handleMouseLeave = () => setIsHovered((prev) => !prev);
    return (
        <Box
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            p='10px'
        >
            <Icon
                name='add'
                stroke={isHovered ? '#393360' : '#8F95B2'}
                width='16'
                height='16'
            />
        </Box>
    );
};
export const DashedBorderNoColor = Template.bind({});
DashedBorderNoColor.args = {
    ...props,
    hoverBackgroundColor: 'none',
    backgroundColor: 'transparent',
    border: '1px dashed #8F95B2',
    borderRadius: '8px',
    icon: <DashedBorderComponent />,
};
export const Trash = Template.bind({});
Trash.args = {
    ...props,
    backgroundColor: '#F46363',
    icon: <Icon name='trashSmall' stroke='none' fill='#FFFFFF' />,
    size: ButtonSize.SMALL,
    hoverBackgroundColor: '#E55252',
    padding: '4px',
    gap: '10px',
};
export const TrashNoBackground = Template.bind({});
TrashNoBackground.args = {
    ...props,
    size: ButtonSize.XL,
    backgroundColor: 'transparent',
    hoverBackgroundColor: '#F2F4F9',
    gap: '10px',
    padding: '4px',
    icon: <Icon name='trashLarge' stroke='none' fill='#F46363' />,
};

const RemoveMemberComponent = ({
    small,
    color,
}: {
    small: boolean;
    color: string;
}): JSX.Element => {
    const [isHovered, setIsHovered] = useState<boolean>();
    const handleMouseOver = () => setIsHovered((prev) => !prev);
    const handleMouseLeave = () => setIsHovered((prev) => !prev);
    return (
        <Box
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            p='10px'
        >
            <Icon
                name={small ? 'removeSmall' : 'removeLarge'}
                stroke={isHovered ? '#F46363' : color}
            />
        </Box>
    );
};
export const RemoveMemberSmall = Template.bind({});
RemoveMemberSmall.args = {
    borderRadius: '6px',
    size: ButtonSize.SMALL,
    padding: '4px',
    gap: '10px',
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#F2F4F9',
    icon: <RemoveMemberComponent small={true} color='#8F95B2' />,
};
export const RemoveMemberXL = Template.bind({});
RemoveMemberXL.args = {
    borderRadius: '6px',
    size: ButtonSize.XL,
    padding: '4px',
    gap: '10px',
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#F2F4F9',
    icon: <RemoveMemberComponent small={false} color='#8F95B2' />,
};
export const RemoveMenu = Template.bind({});
RemoveMenu.args = {
    borderRadius: '6px',
    size: ButtonSize.SMALL,
    padding: '4px',
    gap: '10px',
    backgroundColor: '#5F43E2',
    hoverBackgroundColor: '#4C36B5',
    icon: <Icon name='removeLarge' stroke='#FFFFFF' />,
};

export const ArrowDown = Template.bind({});

ArrowDown.args = {
    borderRadius: '6px',
    size: ButtonSize.SMALL,
    padding: '4px',
    gap: '10px',
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#F2F4F9',
    icon: <Icon name='arrowDown' stroke='#8F95B2' fill='#8F95B2' />,
};
export const ArrowUp = Template.bind({});
ArrowUp.args = {
    borderRadius: '6px',
    size: ButtonSize.SMALL,
    padding: '4px',
    gap: '10px',
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#F2F4F9',
    icon: <Icon name='arrowUp' fill='#8F95B2' stroke='#8F95B2' />,
};

export const Send = Template.bind({});
Send.args = {
    borderRadius: '6px',
    size: ButtonSize.SMALL,
    padding: '4px 10px',
    gap: '4px',
    backgroundColor: '#5F43E2',
    hoverBackgroundColor: '#4C36B5',
    icon: <Icon name='send' fill='#FFFFFF' stroke='#FFFFFF' />,
};

export const Expand = Template.bind({});
Expand.args = {
    borderRadius: '6px',
    size: ButtonSize.SMALL,
    padding: '4px 10px',
    gap: '4px',
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#F2F4F9',
    icon: <Icon name='expand' fill='#8F95B2' stroke='#8F95B2' />,
};

export const More = Template.bind({});
More.args = {
    borderRadius: '6px',
    size: ButtonSize.SMALL,
    padding: '4px 10px',
    gap: '4px',
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#F2F4F9',
    icon: <Icon name='more' fill='#8F95B2' stroke='#8F95B2' />,
};
export const Copy = Template.bind({});
Copy.args = {
    borderRadius: '6px',
    size: ButtonSize.XS,
    padding: '4px',
    gap: '10px',
    backgroundColor: '#F8F9FC',
    hoverBackgroundColor: '#E7E9F4',
    icon: <Icon name='copy' fill='#8F95B2' />,
};
export const CircleAdd = Template.bind({});
CircleAdd.args = {
    borderRadius: '100px',
    size: ButtonSize.XXL,
    backgroundColor: '#5F43E2',
    hoverBackgroundColor: '#4C36B5',
    boxShadow:
        '0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)',
    icon: <Icon name='addCircle' stroke='#FFFFFF' width={28} height={28} />,
};


