import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IKeyDetailProps from './props';
import KeyDetail from '.';

export default {
    title: 'Components/Surface/KeyDetail',
    component: KeyDetail,
} as ComponentMeta<typeof KeyDetail>;
const Template: ComponentStory<typeof KeyDetail> = (props: IKeyDetailProps) => (
    <KeyDetail {...props} />
);

const props: IKeyDetailProps = {};

export const ScreenShot = Template.bind({});
ScreenShot.args = { imageSrc: '/assets/images/screenshot.png' };
