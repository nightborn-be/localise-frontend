import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IButtonIconProps, { ButtonSize } from './props';
import Icon from '../../contents/icon';
import ButtonIcon from '.';
import { Box, Stack } from '@chakra-ui/react';

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
    hoverBackgroundColor: 'none',
    backgroundColor: 'none',
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
export const DashedBorderNoColor = Template.bind({});
DashedBorderNoColor.args = {
    ...props,
    hoverBackgroundColor: 'none',
    backgroundColor: 'none',
    border: '1px dashed #8F95B2',
    borderRadius: '8px',
    icon: <Icon name='add' stroke='#8F95B2' width='16' height='16' />,
};
export const Trash = Template.bind({});
Trash.args = {
    ...props,
    backgroundColor: '#F46363',
    icon: <Icon name='trashSmall' stroke='#FFFFFF' fill='#FFFFFF' />,
    size: ButtonSize.LARGE,
    hoverBackgroundColor: '#E55252',
    padding: '4px',
    gap: '10px',
};
export const TrashNoBackground = Template.bind({});
TrashNoBackground.args = {
    ...props,
    size: ButtonSize.XL,
    backgroundColor: 'none',
    icon: <Icon name='trashLarge' stroke='#F46363' fill='#F46363' />,
};

export const RemoveMemberSmall = Template.bind({});
RemoveMemberSmall.args = {
    borderRadius: '6px',
    size: ButtonSize.SMALL,
    padding: '4px',
    gap: '10px',
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#F2F4F9',
    icon: <Icon name='removeSmall' stroke='#8F95B2' />,
};
export const RemoveMemberXL = Template.bind({});
RemoveMemberXL.args = {
    borderRadius: '6px',
    size: ButtonSize.XL,
    padding: '4px',
    gap: '10px',
    backgroundColor: '#FFFFFF',
    hoverBackgroundColor: '#F2F4F9',
    icon: <Icon name='removeLarge' width='20' height='20' stroke='#8F95B2' />,
};
export const ArrowDown = Template.bind({});
// const ArrowDownComponent = (): JSX.Element => {
//     // Attributes
//     const [isHovered, setIsHovered] = useState<boolean>();

//     const handleMouseOver = () => setIsHovered((prev) => !prev);
//     const handleMouseLeave = () => setIsHovered((prev) => !prev);

//     /**
//      * Normally you should do like this in order to change the Icon fill when you hover, but
//      * I can't make it works with Storyboook :'D
//      *
//      * So for now you can leave it like this or try your idea but changing the Props type may not work
//      * as expected when you'll implement the component in your app.
//      *
//      * <Button handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave}>
//      *     <Icon
//      *          name='arrowDown'
//      *          stroke='#8F95B2'
//      *          fill={isHovered ? '#8F95B2' : '#FFFFFF'}
//      *      />
//      *  </Button>
//      */

//     // Render
//     return (
//         <Icon
//             name='arrowDown'
//             stroke='#8F95B2'
//             fill={isHovered ? '#8F95B2' : '#FFFFFF'}
//         />
//     );
// };

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
