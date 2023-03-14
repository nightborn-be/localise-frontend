import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import OrganizationMenu from '.';

export default {
    title: 'Components/Contents/OrganizationMenu',
    component: OrganizationMenu<number>,
} as ComponentMeta<typeof OrganizationMenu<number>>;
const Template: ComponentStory<typeof OrganizationMenu> = () => {
    const [activeKey, setActiveKey] = useState(0);
    return (
        <OrganizationMenu
            options={[
                {
                    title: 'Nightborn',
                    description: '15 members',
                    imageUrl: '/assets/images/nightbornOrganisation.png',
                    value: 0,
                },
                {
                    title: 'Bloomings Riders',
                    description: '3 members',
                    value: 1,
                },
                {
                    title: 'Happy Lifetime',
                    description: '12 members',
                    value: 2,
                },
            ]}
            value={activeKey}
            onChange={(value) => {
                setActiveKey(value);
            }}
        />
    );
};

export const ActualOrganisation = Template.bind({});
