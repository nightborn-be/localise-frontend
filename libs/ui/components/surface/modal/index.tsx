import {
    HStack,
    Modal as ChakraModal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import COLORS from '../../../constants/colors';
import FONTS from '../../../constants/fonts';
import Text from '../../contents/text';
import Button from '../../inputs/button';
import { ButtonSize } from '../../inputs/button-icon/types';
import Icon from '../../contents/icon';
import { IModalProps } from './props';

const Modal = ({
    children,
    title,
    isOpen,
    handleOnSubmit,
    onClose,
    header = {
        bg: COLORS.Localize.Purple.T500.value,
        color: COLORS.White.T500.value,
        font: FONTS.T1.T16px.SemiBold600.value,
        closeButtonBgColor: COLORS.Localize.Purple.T500.value,
        closeButtonHoverBgColor: COLORS.Localize.Purple.T600.value,
        closeButtonColor: COLORS.White.T500.value,
    },
    footer = {
        bg: COLORS.Localize.Purple.T500.value,
        color: COLORS.White.T500.value,
        font: FONTS.T1.T16px.SemiBold600.value,
        firstCtaLabel: 'Cancel',
        firstCtaBgColor: 'transparent',
        firstCtaBgHoverColor: COLORS.Localize.Purple.T500.value,
        firstCtaColor: COLORS.InputText.value,
        firstCtaFont: FONTS.T1.T12px.SemiBold600.value,
        secondCtaLabel: 'Create',
        secondCtaBgColor: COLORS.Localize.Purple.value,
        secondCtaColor: COLORS.White.T500.value,
        secondCtaFont: FONTS.T1.T12px.SemiBold600.value,
        secondCtaWidth: '5rem',
        secondCtaHeight: '2rem',
    },
    body = {
        padding: '0rem',
    },
}: IModalProps) => {
    // Render
    return (
        <ChakraModal
            autoFocus={false}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay opacity={'0.6'} />
            <ModalContent
                w={'39.375rem'}
                minW={'39.375rem'}
                borderRadius={'0.75rem'}
            >
                <ModalHeader
                    padding='1.25rem'
                    h={'3.5rem'}
                    borderTopRadius={'0.75rem'}
                    bg={header.bg}
                >
                    <Text font={header.font} color={header.color}>
                        {title}
                    </Text>
                    <ModalCloseButton
                        backgroundColor={header.closeButtonBgColor}
                        borderRadius='0.375rem'
                        size={ButtonSize.SMALL}
                        padding='0.25rem'
                        gap='0.625rem'
                        _hover={{
                            bg: header.closeButtonHoverBgColor,
                        }}
                        top='0.8125rem'
                    >
                        <Icon
                            name='removeLarge'
                            stroke={header.closeButtonColor}
                        />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody padding={body.padding}>{children}</ModalBody>
                <ModalFooter
                    padding={footer.padding}
                    justifyContent={footer.justifyContent}
                >
                    <HStack alignItems={'center'} zIndex='0'>
                        <Button
                            w={'4.5rem'}
                            h={'2rem'}
                            borderRadius='0.5rem'
                            backgroundColor={footer.firstCtaBgColor}
                            hoverColor={footer.firstCtaBgHoverColor}
                            font={footer.firstCtaFont}
                            color={footer.firstCtaColor}
                            padding={'0.25rem 0.75rem'}
                            onClick={onClose}
                            _active={{
                                bg: 'none',
                            }}
                        >
                            {footer.firstCtaLabel}
                        </Button>
                        <Button
                            minW={footer.secondCtaWidth}
                            h={footer.secondCtaHeight}
                            borderRadius='0.5rem'
                            backgroundColor={footer.secondCtaBgColor}
                            spacing='0.5rem'
                            gap='0.5rem'
                            hoverBackgroundColor={footer.secondCtaBgHoverColor}
                            font={footer.secondCtaFont}
                            color={footer.secondCtaColor}
                            padding={'0.25rem 0.75rem'}
                            onClick={() => {
                                handleOnSubmit();
                                onClose();
                            }}
                            startEnhancer={
                                footer.secondCtaStartEnhancer
                                    ? (): React.ReactElement => {
                                          return footer.secondCtaStartEnhancer as ReactElement;
                                      }
                                    : undefined
                            }
                        >
                            {footer.secondCtaLabel}
                        </Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </ChakraModal>
    );
};

export default Modal;
