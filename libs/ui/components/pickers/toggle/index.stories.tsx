import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Toggle from '.';
import ToggleProps from './props';

export default {
    title: 'Components/Sidebars/Toggle',
    component: Toggle,
} as ComponentMeta<typeof Toggle>;
const Template: ComponentStory<typeof Toggle> = (props: ToggleProps) => (
    <Toggle {...props} />
);

const props: ToggleProps = {
    text: 'Detect duplicates',
    textPaddingRight: '6px',
};

export const ToggleClassic = Template.bind({});
ToggleClassic.args = { ...props };

export const ToggleMarginLeft = Template.bind({});
ToggleMarginLeft.args = {
    ...props,
    textPaddingRight: '40px',
    border: `1px solid ${COLORS.Line.value}`,
    w: '200px',
    h: '48px',
    padding: '8px 12px',
    gap: '4px',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.04)',
};
