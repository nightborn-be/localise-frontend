import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import COLORS from '../../../constants/colors';
import ToggleText from '.';
import { IToggleTextProps } from './props';

export default {
    title: 'Components/Contents/ToggleText',
    component: ToggleText,
} as ComponentMeta<typeof ToggleText>;
const Template: ComponentStory<typeof ToggleText> = (
    props: IToggleTextProps,
) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
        <ToggleText
            {...props}
            isChecked={isChecked}
            toggleChecked={() => setIsChecked((prev) => !prev)}
        />
    );
};
const props: IToggleTextProps = {
    text: 'Detect duplicates',
    textPaddingRight: '0.375rem',
};

export const ToggleClassic = Template.bind({});
ToggleClassic.args = { ...props };

export const ToggleMarginLeft = Template.bind({});
ToggleMarginLeft.args = {
    ...props,
    textPaddingRight: '2.5rem',
    border: `0.0625rem solid ${COLORS.Line.value}`,
    w: '12.5rem',
    h: '3rem',
    padding: '0.5rem 0.75rem',
    gap: '0.25rem',
    borderRadius: '0.5rem',
    boxShadow: '0rem 0.25rem 0.625rem rgba(0, 0, 0, 0.04)',
};
