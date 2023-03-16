import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IToggleProps } from './props';
import COLORS from '../../../constants/colors';
import Role from './index';
import Toggle from './index';
export default {
    title: 'Components/Contents/Toggle',
    component: Toggle,
} as ComponentMeta<typeof Toggle>;
const Template: ComponentStory<typeof Toggle> = (props: IToggleProps) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
        <Toggle
            isChecked={isChecked}
            toggleChecked={() => setIsChecked((prev) => !prev)}
        />
    );
};

export const Admin = Template.bind({});
