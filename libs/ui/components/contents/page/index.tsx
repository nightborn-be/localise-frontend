import React, { HStack, VStack } from '@chakra-ui/react';
import SideBar from '../../sidebar';
import { PageProps } from './props';
const Page = ({
    children,
    bg,
    bgImage,
    displaySidebar = true,
    handleOnCreateProject,
    handleOnCreateOrganisation,
    handleSwitchOrgansiation,
    organisationProjectData,
    actualOrganisationUser,
    organisationUserData,
    filterProjectValue,
    setFilterProjectValue,
}: PageProps) => {
    // Render
    return (
        <HStack justify={'center'} w='100%' h='100vh' spacing={'0'}>
            {displaySidebar &&
                handleOnCreateProject &&
                handleOnCreateOrganisation &&
                handleSwitchOrgansiation &&
                filterProjectValue != undefined &&
                setFilterProjectValue && (
                    <SideBar
                        handleOnCreateProject={handleOnCreateProject}
                        handleOnCreateOrganisation={handleOnCreateOrganisation}
                        handleSwitchOrgansiation={handleSwitchOrgansiation}
                        actualOrganisationUser={actualOrganisationUser}
                        organisationUserData={organisationUserData}
                        organisationProjectData={organisationProjectData}
                        filterProjectValue={filterProjectValue}
                        setFilterProjectValue={setFilterProjectValue}
                    />
                )}
            <VStack
                bg={bg}
                w='100%'
                h='100%'
                spacing={0}
                alignItems='start'
                bgImage={bgImage}
                bgSize='cover'
                justifyContent='center'
            >
                {children}
            </VStack>
        </HStack>
    );
};
export default Page;
