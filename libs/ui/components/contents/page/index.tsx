import React, { HStack, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import { PageProps } from './props';

const Page = ({ children }: PageProps) => {
    // Render

    return (
        <HStack justify='start' w='full' h='full' minH='100vh'>
            {/* Side bar*/}
            {/* <HStack direction={'row'} position={'sticky'} top={0}>
                <SideBar active={selectedItem} onClick={setSelectItem} />
            </HStack> */}
            <VStack bg={COLORS.BG.value} w='full' spacing={0}>
                {children}
            </VStack>
        </HStack>
    );
};
export default Page;
