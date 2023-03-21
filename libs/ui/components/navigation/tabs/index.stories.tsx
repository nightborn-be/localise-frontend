import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import Tabs from '.';
import Tab from './tab';
import { ITabsProps } from './props';
import { Box } from '@chakra-ui/react';

export default {
    title: 'Components/Navigations/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (props: ITabsProps) => {
    const [activeKey, setActiveKey] = useState<React.Key>();

    return (
        <Tabs activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
            <Tab title='Glossary'>
                <Box bg='red.100' h='31.25rem' />
            </Tab>
            <Tab title='Settings'>
                <Box bg='blue.100' h='31.25rem' />
            </Tab>
            <Tab title='Statistics'>
                <Box bg='green.400' h='31.25rem' />
            </Tab>
            <Tab title='History'>
                <Box bg='yellow.400' h='31.25rem' />
            </Tab>
        </Tabs>
    );
};

export const Default = Template.bind({});
