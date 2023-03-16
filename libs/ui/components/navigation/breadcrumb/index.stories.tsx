import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Breadcrumb } from '.';
import IBreadcrumbProps from './props';

export default {
    title: 'Components/Navigations/Breadcrumb',
    component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;
const Template: ComponentStory<typeof Breadcrumb> = (
    props: IBreadcrumbProps,
) => <Breadcrumb {...props} />;

export const Default = Template.bind({});
Default.args = {
    elements: [
        {
            label: 'Project',
        },
        {
            label: 'Mobile App',
        },
    ],
};
