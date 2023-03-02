import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import COLORS from '../../../constants/colors';
import Icon from '../../contents/icon';
import InputSelect from '.';
import InputSelectAndInput from '.';
import IInputSelectAndInputProps from './props';
import FONTS from '../../../constants/fonts';
import { EnhancerProps } from '../button/props';
import Button from '../button';

export default {
    title: 'Components/Inputs/InputSelectAndInput',
    component: InputSelectAndInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof InputSelect>;

const Template: ComponentStory<typeof InputSelectAndInput> = (args) => (
    <InputSelectAndInput {...args} />
);
interface test {
    name: string;
}
const props: IInputSelectAndInputProps<test> = {
    selectProps: {
        color: COLORS.Localize.Purple.T500.value,
        placeholderColor: COLORS.Localize.Purple.T500.value,
        dropdownArrowColor: COLORS.Localize.Purple.T500.value,
        w: '100px',
        h: '40px',
        background: COLORS.White.T500.value,
        border: 'transparent',
        options: [
            { value: 'Admin', label: 'Admin' },
            { value: 'Member', label: 'Member' },
            { value: 'Utilisateur', label: 'Utilisateur' },
            { value: 'Administrateur', label: 'Administrateur' },
        ],
        fontWeight: '400',
        dropDownIndicator: <Icon name='dropdownIndicator' />,
        fontSize: '12px',
        lineHeight: '15px',
        padding: '0px',
        gap: '4px',
        placeholder: 'Admin',
        paddingRight: '0',
        paddingLeft: '0',
    },
    inputProps: {
        name: 'name',
        value: null,
        onChange: () => {},
        placeholder: 'Text',
        w: '100%',
        h: '40px',
        border: 'transparent',
        font: FONTS.T1.T12px.Regular400.value,
        zIndex: '10',
    },
    w: '327px',
    h: '40px',
    border: `1px solid ${COLORS.Line.value}`,
    borderRadius: '8px',
};

export const SimpleTextSelectWithIcon = Template.bind({});
SimpleTextSelectWithIcon.args = {
    ...props,
    rightIcon: (
        <Icon
            pointerEvents={'none'}
            name='removeSmall'
            stroke={COLORS.InputText.value}
        />
    ),
    rightHoverIcon: (
        <Icon
            pointerEvents={'none'}
            name='removeSmall'
            stroke={COLORS.Error.T500.value}
        />
    ),
};

export const LabelTextSelectWithIcon = Template.bind({});
LabelTextSelectWithIcon.args = {
    ...props,
    label: 'Label',
    rightIcon: (
        <Icon
            pointerEvents={'none'}
            name='removeSmall'
            stroke={COLORS.InputText.value}
        />
    ),
    rightHoverIcon: (
        <Icon
            pointerEvents={'none'}
            name='removeSmall'
            stroke={COLORS.Error.T500.value}
        />
    ),
};

export const DescriptionTextSelectWithIcon = Template.bind({});
DescriptionTextSelectWithIcon.args = {
    ...props,
    description: 'Description',
    rightIcon: (
        <Icon
            pointerEvents={'none'}
            name='removeSmall'
            stroke={COLORS.InputText.value}
        />
    ),
    rightHoverIcon: (
        <Icon
            pointerEvents={'none'}
            name='removeSmall'
            stroke={COLORS.Error.T500.value}
        />
    ),
};

export const LabelsTextSelectWithIcon = Template.bind({});
LabelsTextSelectWithIcon.args = {
    ...props,
    label: 'Label',
    description: 'Description',
    rightIcon: (
        <Icon
            pointerEvents={'none'}
            name='removeSmall'
            stroke={COLORS.InputText.value}
        />
    ),
    rightHoverIcon: (
        <Icon
            pointerEvents={'none'}
            name='removeSmall'
            stroke={COLORS.Error.T500.value}
        />
    ),
};

export const IsInvalidTextSelectWithIcon = Template.bind({});
IsInvalidTextSelectWithIcon.args = {
    ...props,
    isValid: false,
    label: 'Label',
    description: 'Description',
    rightIcon: (
        <Icon
            pointerEvents={'none'}
            name='removeSmall'
            stroke={COLORS.InputText.value}
        />
    ),
    rightHoverIcon: (
        <Icon
            pointerEvents={'none'}
            name='removeSmall'
            stroke={COLORS.Error.T500.value}
        />
    ),
};

export const SimpleLargeTextSelectWithIcon = Template.bind({});
SimpleLargeTextSelectWithIcon.args = {
    ...props,
    w: '590px',
    rightIcon: (
        <Icon
            pointerEvents={'none'}
            name='removeSmall'
            stroke={COLORS.InputText.value}
        />
    ),
    rightHoverIcon: (
        <Icon
            pointerEvents={'none'}
            name='removeSmall'
            stroke={COLORS.Error.T500.value}
        />
    ),
};

const TemplateButton: ComponentStory<typeof Button> = (args) => (
    <Button {...args} />
);
export const AddMember = TemplateButton.bind({});

AddMember.args = {
    border: '1px dashed ' + COLORS.Line.value,
    borderRadius: '8px',
    children: 'Add a member',
    w: '590px',
    h: '40px',
    padding: '4px 12px 4px 8px',
    gap: '4px',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '15px',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    color: COLORS.InputText.value,
    hoverColor: COLORS.Localize.Purple.T500.value,
    startEnhancer: (enhancer: EnhancerProps): React.ReactElement => (
        <Icon
            name='add'
            stroke={
                enhancer.isHovered
                    ? COLORS.Localize.Purple.T500.value
                    : COLORS.InputText.value
            }
            width='20'
            height='20'
        />
    ),
};
