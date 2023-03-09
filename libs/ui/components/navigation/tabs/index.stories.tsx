import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, {useState} from 'react';
import Tabs from '.';
import Tab from './tab'
import { ITabsProps } from './props';
import { Box } from '@chakra-ui/react';


export default {
    title: 'Components/Inputs/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (props: ITabsProps) => {
    const [activeKey, setActiveKey] = useState<React.Key>();

return <Tabs activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
        <Tab title='Glossary'>
            <Box bg='red.100' w='50' h='50' />
        </Tab>
        <Tab title='Settings'>
            <Box bg='blue.100' w='50' h='50' />
        </Tab>
        <Tab title='Statistics'>
            <Box bg='green.400' w='50' h='50' />
        </Tab>
        <Tab title='History'>
            <Box bg='yellow.400' w='50' h='50' />
        </Tab>
    </Tabs>
}

export const Default = Template.bind({});
