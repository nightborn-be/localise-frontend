import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Icon from '../../contents/icon';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import { Image } from '@chakra-ui/react';
import SidebarOrganisation from '.';
import { ISidebarOrganisationProps } from './props';

export default {
    title: 'Components/Sidebars/SidebarOrganisation',
    component: SidebarOrganisation,
} as ComponentMeta<typeof SidebarOrganisation>;
const Template: ComponentStory<typeof SidebarOrganisation> = (
    props: ISidebarOrganisationProps,
) => <SidebarOrganisation {...props} />;

const props: ISidebarOrganisationProps = {
    w: '14.25rem',
    h: '3.25rem',
    topText: 'Organisation',
    topTextFont: FONTS.T1.T10px.Regular400.value,
    topTextColor: COLORS.InputText.value,
    bottomText: 'NightBorn',
    bottomTextFont: FONTS.T1.T12px.Medium500.value,
    bottomTextColor: COLORS.Text.T400.value,
    marginLeftText: '0.5rem',
};

export const ActualOrganisation = Template.bind({});
ActualOrganisation.args = {
    ...props,
    startEnhancer: (
        <Image src='/assets/images/nightbornOrganisation.png' alt='nightborn' />
    ),
    endEnhancer: <Icon name='editorialArrow' />,
};