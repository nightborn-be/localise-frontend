import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import KeyDetail from '.';
import ProjectStatistics from '.';
import IProjectStatisticsProps from './props';

export default {
    title: 'Components/Surface/Card/ProjectStatistics',
    component: ProjectStatistics,
} as ComponentMeta<typeof ProjectStatistics>;
const Template: ComponentStory<typeof KeyDetail> = (
    props: IProjectStatisticsProps,
) => <ProjectStatistics {...props} />;

const props: IProjectStatisticsProps = { value: 230, title: 'Total Key' };

export const ScreenShot = Template.bind({});
ScreenShot.args = { ...props };
