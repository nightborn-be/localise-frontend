import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icon from '../../contents/icon';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import { ISidebarProps } from './props';
import SidebarProject from '.';

export default {
    title: 'Components/Sidebars/SidebarProject',
    component: SidebarProject,
} as ComponentMeta<typeof SidebarProject>;
const Template: ComponentStory<typeof SidebarProject> = (
    props: ISidebarProps,
) => {
    const [activeKey, setActiveKey] = useState<string>('');

    function handleOnClick(value) {
        setActiveKey(value);
    }
    return (
        <SidebarProject
            onClick={handleOnClick}
            activeKey={activeKey}
            text={'Mobile App'}
            textFont={FONTS.T1.T12px.Medium500.value}
            textColor={COLORS.Text.T400.value}
            projectIconColor={COLORS.Error.T500.value}
            notificationNumber={1}
        />
    );
};

export const Project = Template.bind({});
