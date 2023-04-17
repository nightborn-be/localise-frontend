import { Box, HStack, Image, useDisclosure, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import COLORS from '../../constants/colors';
import FONTS from '../../constants/fonts';
import Icon from '../contents/icon';
import Text from '../contents/text';
import SidebarProject from '../pickers/sidebar-project';
import ButtonIcon from '../inputs/button-icon';
import Button from '../inputs/button';
import { ButtonSize } from '../inputs/button-icon/types';
import Searchbar from '../inputs/searchbar';
import SidebarOrganisation from '../pickers/sidebar-organisation';
import OrganizationMenu from '../contents/organisation-menu';
import { useSidebarLogic } from './logic';
import CreateProjectModal from './create-project-modal/index';
import CreateOrganisationModal from './create-organisation-modal';
import { ISideBarContentProps } from './props';
import { getInitialeName } from 'utils/functions';
import { HomeContentState } from 'ui/pages/types';

export const SideBar = ({
    handleOnCreateProject,
    handleOnCreateOrganisation,
    handleSwitchOrgansiation,
    organisationProjectData,
    organisationUserData,
    actualOrganisationUser,
    setFilterProjectValue,
    filterProjectValue,
    activeProject,
    setActiveProject,
    setCurrentStatePage,
}: ISideBarContentProps) => {
    const {
        handleToggleIsOrganisationClicked,
        handleOnOptionClick,
        isOrganisationClicked,
        options,
        activeOptionKey,
        setIsOrganisationClicked,
    } = useSidebarLogic({ organisationProjectData });

    const { isOpen, onOpen, onClose } = useDisclosure();
    const createOrganisationModal = useDisclosure();
    return (
        <>
            <VStack w={'15.25rem'} h={'100vh'} spacing='0px'>
                <HStack
                    w={'15.25rem'}
                    h={'3.25rem'}
                    padding='1.25rem'
                    spacing='0.5rem'
                    borderRight={`0.0625rem solid ${COLORS.Line.value}`}
                >
                    <Image
                        width={'1.5rem'}
                        height={'1.5rem'}
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

                {/* FIRST MENU */}
                <VStack
                    w={'15.25rem'}
                    spacing='0.5rem'
                    padding='1.25rem 0.5rem'
                    borderBottom={`0.0625rem solid ${COLORS.Line.value}`}
                    borderRight={`0.0625rem solid ${COLORS.Line.value}`}
                >
                    <SidebarProject
                        onClick={handleOnOptionClick}
                        activeKey={activeOptionKey}
                        text={'Activity'}
                        textFont={FONTS.T1.T12px.Medium500.value}
                        textColor={COLORS.Text.T400.value}
                        projectIconColor='#F74A3E'
                        notificationNumber={1}
                        startEnhancer={<Icon name='section' />}
                    />
                    <SidebarProject
                        onClick={handleOnOptionClick}
                        activeKey={activeOptionKey}
                        text={'Profile'}
                        textFont={FONTS.T1.T12px.Medium500.value}
                        textColor={COLORS.Text.T400.value}
                        projectIconColor='#F74A3E'
                        startEnhancer={<Icon name='myProfile' />}
                    />
                </VStack>

                {/* SECOND MENU PROJECT */}
                <HStack
                    w={'15.25rem'}
                    spacing={'7.75rem'}
                    padding={'1rem 0.5rem 0.375rem 1.25rem'}
                    borderRight={`0.0625rem solid ${COLORS.Line.value}`}
                >
                    <Text
                        color={COLORS.InputText.value}
                        font={FONTS.T1.T12px.SemiBold600.value}
                    >
                        PROJECTS
                    </Text>
                    <ButtonIcon
                        handleOnClick={onOpen}
                        size={ButtonSize.XS}
                        bgColor='white'
                    >
                        <Icon
                            name='add'
                            stroke={COLORS.InputText.value}
                            width={'1rem'}
                            height={'1rem'}
                        />
                    </ButtonIcon>
                </HStack>
                <HStack
                    w={'15.25rem'}
                    padding='0.375rem 0.5rem'
                    spacing='0.75rem'
                    borderRight={`0.0625rem solid ${COLORS.Line.value}`}
                >
                    <Searchbar
                        color={COLORS.Text.T400.value}
                        w={'14.25rem'}
                        h={'2rem'}
                        padding={'0.25rem 0.625rem'}
                        spacing={'0.5rem'}
                        background={COLORS.White.T500.value}
                        placeholder={'Search for a project...'}
                        placeholderColor={COLORS.InputText.value}
                        borderRadius={'0.375rem'}
                        value={filterProjectValue}
                        onChange={(event) =>
                            setFilterProjectValue(event.target.value)
                        }
                        displayModal={false}
                    />
                </HStack>
                <VStack
                    w={'15.25rem'}
                    padding='0.375rem 0.5rem 1.25rem'
                    spacing='0.375rem'
                    height={'full'}
                    overflowX={'scroll'}
                    borderRight={`0.0625rem solid ${COLORS.Line.value}`}
                >
                    {options?.map((option, index) => {
                        return (
                            <SidebarProject
                                onClick={() => {
                                    setActiveProject({
                                        id: option.value,
                                        name: option.label,
                                    });
                                    setCurrentStatePage(
                                        HomeContentState.PROJECTS,
                                    );
                                }}
                                activeKey={activeProject.name as string}
                                text={option.label}
                                key={option.value}
                                textFont={FONTS.T1.T12px.Medium500.value}
                                textColor={COLORS.Text.T400.value}
                                projectIconColor='#1ABC9C'
                            />
                        );
                    })}
                </VStack>

                {/* ORGANISATION MENU */}
                <HStack
                    w={'15.25rem'}
                    padding={'0.75rem 0.5rem'}
                    borderRight={`0.0625rem solid ${COLORS.Line.value}`}
                    borderBottom={`0.0625rem solid ${COLORS.Line.value}`}
                    borderTop={`0.0625rem solid ${COLORS.Line.value}`}
                >
                    <Button
                        justifyContent={'left'}
                        color={COLORS.InputText.value}
                        font={FONTS.T1.T12px.Medium500.value}
                        backgroundColor='transparent'
                        borderRadius={'0.5rem'}
                        w={'14.25rem'}
                        h={'2.5rem'}
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
                        spacing={'0.75rem'}
                        padding={'0.75rem'}
                        onClick={() => {
                            setCurrentStatePage(
                                HomeContentState.ORGANISATION_SETTINGS,
                            );
                        }}
                    >
                        Organisation settings
                    </Button>
                </HStack>
                <VStack
                    w={'15.25rem'}
                    padding='0.75rem 0.5rem 1.25rem'
                    spacing={'0rem'}
                    borderRight={`1px solid ${COLORS.Line.value}`}
                >
                    <Box
                        display={isOrganisationClicked ? 'visible' : 'none'}
                        position={'absolute'}
                        bottom='4.75rem'
                        left='0.5rem'
                    >
                        {organisationUserData?.data && (
                            <OrganizationMenu
                                options={organisationUserData.data}
                                value={actualOrganisationUser}
                                onChange={(organizationValue) => {
                                    handleSwitchOrgansiation(
                                        organizationValue,
                                        setIsOrganisationClicked,
                                    );
                                }}
                                onClick={createOrganisationModal.onOpen}
                            />
                        )}
                    </Box>

                    <SidebarOrganisation
                        w={'14.25rem'}
                        h={'3.25rem'}
                        padding='0.625rem 0.75rem'
                        topText={'Organisation'}
                        topTextFont={FONTS.T1.T10px.Regular400.value}
                        topTextColor={COLORS.InputText.value}
                        bottomText={actualOrganisationUser?.name ?? ''}
                        bottomTextFont={FONTS.T1.T12px.Medium500.value}
                        bottomTextColor={COLORS.Text.T400.value}
                        marginLeftText={'0.5rem'}
                        onClick={handleToggleIsOrganisationClicked}
                        color={COLORS.Line.value}
                        startEnhancer={
                            actualOrganisationUser?.pictureUrl ? (
                                <Image
                                    w={'2rem'}
                                    h={'2rem'}
                                    src={actualOrganisationUser.pictureUrl}
                                    alt='nightborn'
                                />
                            ) : (
                                <Text
                                    font={FONTS.T1.T12px.Medium500.value}
                                    color={COLORS.Text.T400.value}
                                >
                                    {getInitialeName(
                                        actualOrganisationUser?.name ?? '',
                                    )}
                                </Text>
                            )
                        }
                        endEnhancer={<Icon name='editorialArrow' />}
                    />
                </VStack>
            </VStack>
            <CreateProjectModal
                isOpen={isOpen}
                onClose={onClose}
                handleOnSubmit={handleOnCreateProject}
            />
            <CreateOrganisationModal
                isOpen={createOrganisationModal.isOpen}
                onClose={createOrganisationModal.onClose}
                handleOnSubmit={handleOnCreateOrganisation}
            />
        </>
    );
};

export default SideBar;
