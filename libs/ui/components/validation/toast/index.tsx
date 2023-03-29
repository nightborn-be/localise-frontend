import React, { useState } from 'react';
import { Box, HStack, useToast, VStack } from '@chakra-ui/react';
import { IToastProps } from './props';
import COLORS from '../../../constants/colors';
import Text from '../../contents/text';
import FONTS from '../../../constants/fonts';
import Icon from '../../contents/icon';
import SHADOWS from '../../../constants/shadows';
import ButtonIcon from '../../inputs/button-icon';
import { ButtonSize } from '../../inputs/button-icon/types';
const Toast = ({ title, w, h, description, status, duration }: IToastProps) => {
    const toast = useToast();
    return (
        <Box
            w={w}
            h={100}
            bg={'red'}
            onClick={() =>
                toast({
                    isClosable: true,
                    duration: duration,
                    render: () => (
                        <VStack
                            alignItems={'left'}
                            w={w}
                            h={h}
                            bg={
                                status === 'error'
                                    ? COLORS.Toast.GreenBG.value
                                    : COLORS.Success.T500.value
                            }
                            border={`1px solid ${
                                status === 'error'
                                    ? COLORS.Toast.RedBG.value
                                    : COLORS.Success.T500.value
                            }`}
                            boxShadow={SHADOWS.Sidebar.value}
                            padding={'20px 16px'}
                            spacing='16px'
                            borderRadius='6px'
                        >
                            <HStack>
                                <HStack>
                                    {status === 'error' ? (
                                        <Icon name='error' />
                                    ) : (
                                        <Icon name='success' />
                                    )}
                                    <Text
                                        font={FONTS.T1.T12px.SemiBold600.value}
                                        color={COLORS.Success.T500.value}
                                    >
                                        {title}
                                    </Text>
                                </HStack>
                                <ButtonIcon
                                    size={ButtonSize.XXS}
                                    handleOnClick={() => toast.closeAll()}
                                >
                                    <Icon
                                        name='cross'
                                        stroke={
                                            status === 'error'
                                                ? COLORS.Error.T500.value
                                                : COLORS.Success.T500.value
                                        }
                                    />
                                </ButtonIcon>
                            </HStack>
                            {description ?? (
                                <Text
                                    font={FONTS.T1.T12px.SemiBold600.value}
                                    color={COLORS.Success.T100.value}
                                >
                                    {description}
                                </Text>
                            )}
                        </VStack>
                    ),
                })
            }
        />
    );
};

export default Toast;
