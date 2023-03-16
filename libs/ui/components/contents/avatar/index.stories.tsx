import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import IAvatarProps from './props';
import Avatar from '.';
export default {
    title: 'Components/Contents/Avatar',
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (props: IAvatarProps) => (
    <Avatar {...props} />
);

export const AvatarText = Template.bind({});
AvatarText.args = {
    name: 'PD',
};

export const AvatarPicture = Template.bind({});
AvatarPicture.args = {
    imageSrc: '/assets/images/avatar.png',
};
