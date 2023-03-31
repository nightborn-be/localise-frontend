import React from 'react';
import { HStack, useToast as useChakraToast, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import Icon from '../../contents/icon';
import ButtonIcon from '../../inputs/button-icon';
import { ButtonSize } from '../../inputs/button-icon/types';
import { IToastProps } from './props';
import { IToastParams, ToastType } from './types';

const useToast = () => {
    // Attributes
    const toast = useChakraToast();

    // Functions
    function showToast(params: IToastParams) {
        toast({
            isClosable: true,
            position: 'bottom',
            duration: 100000,
            render: ({ onClose }) => <Toast {...params} onClose={onClose} />,
        });
    }

    return showToast;
};

const Toast = ({ type, title, description, onClose }: IToastProps) => {
    // Attributes
    const [primaryColor, secondaryColor] = getColors();

    // Functions
    function getColors() {
        let primaryColor: string;
        let secondaryColor: string;

        switch (type) {
            case ToastType.SUCCESS: {
                primaryColor = COLORS.Success.T500.value;
                secondaryColor = COLORS.Toast.GreenBG.value;
            }
            case ToastType.ERROR: {
                primaryColor = COLORS.Error.T500.value;
                secondaryColor = COLORS.Toast.RedBG.value;
            }
        }

        return [primaryColor, secondaryColor];
    }

    // Render
    function renderIcon() {
        switch (type) {
            case ToastType.SUCCESS:
                return (
                    <Icon
                        name='checkCircle'
                        width={20}
                        height={20}
                        stroke={primaryColor}
                    />
                );
            case ToastType.ERROR:
                return (
                    <Icon
                        name='alertTriangle'
                        width={20}
                        height={20}
                        stroke={primaryColor}
                    />
                );
        }
    }

    return (
        <VStack
            spacing='1rem'
            alignItems='flex-start'
            bgColor={secondaryColor}
            borderRadius='.375rem'
            border='1px solid'
            borderColor={primaryColor}
            px='1rem'
            py='1.25rem'
            boxShadow={'0px 4px 12px rgba(0, 0, 0, 0.1)'} // TODO: ADD SHADOW
            w='28rem'
        >
            {/* Header */}
            <HStack justifyContent='space-between' w='full'>
                {/* Left */}
                <HStack spacing='0.5rem'>
                    {/* Icon */}
                    {renderIcon()}

                    {/* Title */}
                    <Text
                        font={FONTS.T1.T12px.SemiBold600.value}
                        color={primaryColor}
                    >
                        {title}
                    </Text>
                </HStack>

                {/* Right */}
                <ButtonIcon
                    size={ButtonSize.XXS}
                    handleOnClick={onClose}
                    backgroundColor='transparent'
                    right='0'
                >
                    <Icon
                        name='cross'
                        width={18}
                        height={18}
                        stroke={primaryColor}
                    />
                </ButtonIcon>
            </HStack>

            {/* Content */}
            {description && (
                <Text
                    font={FONTS.T1.T12px.Regular400.value}
                    color={primaryColor}
                >
                    {description}
                </Text>
            )}
        </VStack>
    );
};

export default useToast;
