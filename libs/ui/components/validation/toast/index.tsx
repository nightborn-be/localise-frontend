import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import { IToastProps } from './props';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import Icon from '../../contents/icon';
import SHADOWS from '../../../constants/shadows';
import ButtonIcon from '../../inputs/button-icon';
import { ButtonSize } from '../../inputs/button-icon/types';
import { ToastStatus } from './types';
const MakeToast = ({
    title,
    w = '448px',
    description,
    status,
    duration = 7000,
    toast,
}: IToastProps) => {
    return toast({
        isClosable: true,
        duration: duration,
        render: () => (
            <VStack
                alignItems={'left'}
                w={w}
                bg={
                    status === ToastStatus.ERROR
                        ? COLORS.Toast.RedBG.value
                        : COLORS.Toast.GreenBG.value
                }
                border={`1px solid ${
                    status === ToastStatus.ERROR
                        ? COLORS.Error.T500.value
                        : COLORS.Success.T500.value
                }`}
                boxShadow={SHADOWS.Sidebar.value}
                padding={'20px 16px'}
                spacing='16px'
                borderRadius='6px'
            >
                <HStack position='relative'>
                    <HStack spacing='8px' justifyContent={'left'}>
                        {status === ToastStatus.ERROR ? (
                            <Icon name='error' />
                        ) : (
                            <Icon name='success' />
                        )}
                        <Text
                            font={FONTS.T1.T12px.SemiBold600.value}
                            color={
                                status === ToastStatus.ERROR
                                    ? COLORS.Error.T500.value
                                    : COLORS.Success.T500.value
                            }
                        >
                            {title}
                        </Text>
                    </HStack>
                    <ButtonIcon
                        size={ButtonSize.XXS}
                        handleOnClick={() => toast.closeAll()}
                        backgroundColor='transparent'
                        position={'absolute'}
                        right='0px'
                    >
                        <Icon
                            name='cross'
                            stroke={
                                status === ToastStatus.ERROR
                                    ? COLORS.Error.T500.value
                                    : COLORS.Success.T500.value
                            }
                        />
                    </ButtonIcon>
                </HStack>
                {description && (
                    <Text
                        font={FONTS.T1.T12px.Regular400.value}
                        color={
                            status === ToastStatus.ERROR
                                ? COLORS.Error.T500.value
                                : COLORS.Success.T100.value
                        }
                    >
                        {description}
                    </Text>
                )}
            </VStack>
        ),
    });
};

export default MakeToast;
