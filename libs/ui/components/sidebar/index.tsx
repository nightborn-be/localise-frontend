import { useState } from 'react';
import { Box, HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import COLORS from '../../constants/colors';
import FONTS from '../../constants/fonts';
import Icon from '../contents/icon';
import Text from '../contents/text';
import SidebarProject from '../pickers/sidebar-project';
import ButtonIcon from '../inputs/button-icon';
import Button from '../inputs/button';
import { ButtonSize } from '../inputs/button-icon/types';
import Searchbar from '../inputs/searchbar';
import { SearchBarOption } from '../inputs/searchbar/props';
import SidebarOrganisation from '../pickers/sidebar-organisation';
import {
    ProjectDTO,
    ProjectPagingDTO,
} from '../../../gateways/resource-api/types/index';
import { useGetProjects } from '../../../gateways/resource-api/projects/projects';

import OrganizationMenu from '../contents/organisation-menu';
export const SideBar = () => {
    // Attributes
    const options: ProjectDTO[] = [];
    const [filterValue, setFilterValue] = useState<ProjectDTO>();
    const [activeKey, setActiveKey] = useState<string>();
    const [isOrganisationClicked, setIsOrganisationClicked] =
        useState<boolean>();
    function handleToggleIsOrganisationClicked() {
        setIsOrganisationClicked((prev) => !prev);
    }
    const [organizationValue, setOrganizationValue] = useState<string>('');
    const [activeOrganizationKey, setActiveOrganizationKey] = useState(0);
    // Functions
    function filter(value: string) {
        return options?.filter(
            (option) =>
                option.id &&
                option.id.toLowerCase().includes(value.toLowerCase()),
        );
    }
    return (
        <VStack w={'244px'} h={'100vh'} spacing='0px'>
            <HStack
                w={'244px'}
                h={'52px'}
                padding='20px'
                spacing='8px'
                borderRight={`1px solid ${COLORS.Line.value}`}
            >
                <Image
                    width={'24px'}
                    height={'24px'}
                    src='/assets/images/nightborn.png'
                    alt='nightborn'
                />
                <Text
                    font={FONTS.T1.T14px.SemiBold600.value}
                    color={COLORS.Text.T500.value}
                >
                    Localize
                </Text>
            </HStack>
            <VStack
                w={'244px'}
                spacing='8px'
                padding='20px 8px'
                borderBottom={`1px solid ${COLORS.Line.value}`}
                borderRight={`1px solid ${COLORS.Line.value}`}
            >
                <SidebarProject
                    text={'Activity'}
                    textFont={FONTS.T1.T12px.Medium500.value}
                    textColor={COLORS.Text.T400.value}
                    projectIconColor='#F74A3E'
                    notificationNumber={1}
                    startEnhancer={<Icon name='section' />}
                />
                <SidebarProject
                    text={'Profile'}
                    textFont={FONTS.T1.T12px.Medium500.value}
                    textColor={COLORS.Text.T400.value}
                    projectIconColor='#F74A3E'
                    startEnhancer={
                        <Icon name='myProfile' fill={COLORS.Text.T500.value} />
                    }
                />
            </VStack>
            <HStack
                spacing={'124px'}
                padding={'16px 8px 6px 20px'}
                borderRight={`1px solid ${COLORS.Line.value}`}
                height={'50px'} // try to remove it after
                w={'244px'}
            >
                <Text
                    color={COLORS.InputText.value}
                    font={FONTS.T1.T12px.SemiBold600.value}
                >
                    PROJECTS
                </Text>
                <ButtonIcon size={ButtonSize.XS} bgColor='white'>
                    <Icon
                        name='add'
                        stroke={COLORS.InputText.value}
                        width={'16px'}
                        height={'16px'}
                    />
                </ButtonIcon>
            </HStack>
            <HStack
                w={'244px'}
                padding='6px 8px'
                spacing='12px'
                borderRight={`1px solid ${COLORS.Line.value}`}
            >
                <Searchbar
                    color={COLORS.Text.T400.value}
                    w={'228px'}
                    h={'32px'}
                    padding={'4px 10px'}
                    spacing={'8px'}
                    background={COLORS.White.T500.value}
                    placeholder={'Search for a project...'}
                    placeholderColor={COLORS.InputText.value}
                    borderRadius={'6px'}
                    // value={filterValue}
                    // onChange={(event) => setFilterValue(event.target.value)}
                    // activeKeys={activeKey}
                    // options={filter(filterValue)}
                    displayModal={false}
                />
            </HStack>
            <VStack
                w={'244px'}
                padding='6px 8px 20px'
                spacing='6px'
                height={'full'}
                overflowY={'scroll'}
                borderRight={`1px solid ${COLORS.Line.value}`}
            >
                {options?.map((option, index) => {
                    return (
                        <SidebarProject
                            text={option.name}
                            key={index}
                            textFont={FONTS.T1.T12px.Medium500.value}
                            textColor={COLORS.Text.T400.value}
                            projectIconColor='#F74A3E'
                        />
                    );
                })}
            </VStack>
            <HStack
                w={'244px'}
                padding={'12px 8px'}
                borderRight={`1px solid ${COLORS.Line.value}`}
                borderBottom={`1px solid ${COLORS.Line.value}`}
                borderTop={`1px solid ${COLORS.Line.value}`}
            >
                <Button
                    justifyContent={'left'}
                    color={COLORS.InputText.value}
                    font={FONTS.T1.T12px.Medium500.value}
                    backgroundColor='transparent'
                    borderRadius={'0.5rem'}
                    w={'228px'}
                    h={'40px'}
                    startEnhancer={(enhancer) => (
                        <Icon
                            name='setting'
                            stroke={
                                enhancer.isHovered
                                    ? COLORS.White.T500.value
                                    : COLORS.White.T500.value
                            }
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                        />
                    )}
                    spacing={'12px'}
                    padding={'12px'}
                    onClick={() => {}}
                >
                    Organisation settings
                </Button>
            </HStack>
            <VStack
                w={'244px'}
                padding='12px 8px 20px'
                spacing={'0px'}
                borderRight={`1px solid ${COLORS.Line.value}`}
            >
                <Box
                    display={isOrganisationClicked ? 'visible' : 'none'}
                    position={'absolute'}
                    bottom='76px'
                    left='8px'
                >
                    <OrganizationMenu
                        options={[
                            {
                                title: 'Nightborn',
                                description: '15 members',
                                imageUrl: '/assets/images/nightborn.png',
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
                        value={activeOrganizationKey}
                        onChange={(organizationValue) => {
                            setActiveOrganizationKey(organizationValue);
                        }}
                    />
                </Box>
                <SidebarOrganisation
                    w={'228px'}
                    h={'52px'}
                    padding='10px 12px'
                    topText={'Organisation'}
                    topTextFont={FONTS.T1.T10px.Regular400.value}
                    topTextColor={COLORS.InputText.value}
                    bottomText={'NightBorn'}
                    bottomTextFont={FONTS.T1.T12px.Medium500.value}
                    bottomTextColor={COLORS.Text.T400.value}
                    marginLeftText={'0.5rem'}
                    onClick={handleToggleIsOrganisationClicked}
                    startEnhancer={
                        <Image
                            w={'32px'}
                            h={'32px'}
                            src='/assets/images/nightborn.png'
                            alt='nightborn'
                        />
                    }
                    endEnhancer={<Icon name='editorialArrow' />}
                />
            </VStack>
        </VStack>
    );
};

export default SideBar;
