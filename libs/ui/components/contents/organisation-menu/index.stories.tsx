import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import OrganisationMenu from '.';

export default {
    title: 'Components/Contents/OrganisationMenu',
    component: OrganisationMenu<number>,
} as ComponentMeta<typeof OrganisationMenu<number>>;
const Template: ComponentStory<typeof OrganisationMenu> = () => {
    const [activeKey, setActiveKey] = useState(0);
    return (
        <OrganisationMenu
            options={[
                {
                    title: 'Nightborn',
                    description: '15 members',
                    imageUrl: '/assets/images/nightborn.jpg',
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
