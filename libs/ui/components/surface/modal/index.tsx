import {
    HStack,
    Image,
    VStack,
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Text from '../../contents/text';
import Button from '../../inputs/button';
import ButtonIcon from '../../inputs/button-icon';
import { ButtonSize } from '../../inputs/button-icon/types';
import Icon from '../../contents/icon';
import { IModalProps } from './props';

const Modal = ({
    children,
    title,
    isOpen,
    setIsOpen,
    handleOnSubmit,
}: IModalProps) => {
    // Render
    return (
        <ChakraModal
            autoFocus={false}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        >
            <ModalOverlay opacity={'0.6'} />
            <ModalContent w={'630px'} minW={'630px'} borderRadius={'12px'}>
                <ModalHeader
                    padding='20px'
                    h={'56px'}
                    borderTopRadius={'12px'}
                    bg={COLORS.Localize.Purple.T500.value}
                >
                    <Text
                        font={FONTS.T1.T16px.SemiBold600.value}
                        color={COLORS.White.T500.value}
                    >
                        {title}
                    </Text>
                    <ModalCloseButton bgColor={'transparent'} top='13px'>
                        <ButtonIcon
                            borderRadius='0.375rem'
                            size={ButtonSize.SMALL}
                            padding='0.25rem'
                            gap='0.625rem'
                            backgroundColor={COLORS.Localize.Purple.T500.value}
                            hoverBackgroundColor={
                                COLORS.Localize.Purple.T600.value
                            }
                        >
                            <Icon name='removeLarge' stroke='#FFFFFF' />
                        </ButtonIcon>
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody padding={0}>{children}</ModalBody>
                <ModalFooter>
                    <HStack alignItems={'right'} zIndex='0'>
                        <Button
                            w={'72px'}
                            h={'32px'}
                            borderRadius='8px'
                            backgroundColor={'transparent'}
                            hoverColor={COLORS.Localize.Purple.T500.value}
                            font={FONTS.T1.T12px.SemiBold600.value}
                            color={COLORS.InputText.value}
                            padding={'4px 12px'}
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            w={'80px'}
                            h={'32px'}
                            borderRadius='8px'
                            backgroundColor={COLORS.Localize.Purple.value}
                            spacing='0.25rem'
                            hoverBackgroundColor={
                                COLORS.Localize.Purple.T600.value
                            }
                            font={FONTS.T1.T12px.SemiBold600.value}
                            color={COLORS.White.T500.value}
                            padding={'4px 12px'}
                            onClick={() => {
                                handleOnSubmit();
                                setIsOpen(false);
                            }}
                        >
                            Create
                        </Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </ChakraModal>
    );
};

export default Modal;
