import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IKeyDetailProps } from './props';
import KeyDetail from '.';

export default {
    title: 'Components/Contents/KeyDetail',
    component: KeyDetail,
} as ComponentMeta<typeof KeyDetail>;
const Template: ComponentStory<typeof KeyDetail> = (props: IKeyDetailProps) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleToggleSelect = () => setIsSelected((prev) => !prev);
    return (
        <KeyDetail
            {...props}
            isSelected={isSelected}
            onSelect={handleToggleSelect}
        />
    );
};

const props: IKeyDetailProps = {};

export const ScreenShot = Template.bind({});
ScreenShot.args = { imageSrc: '/assets/images/screenshot.png' };
