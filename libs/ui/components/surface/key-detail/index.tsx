import { HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import COLORS from '../../../constants/colors';
import SHADOWS from '../../../constants/shadows';
import Icon from '../../contents/icon';
import IKeyDetailProps from './props';
import ButtonIcon from '../../inputs/button-icon';
import { ButtonSize } from '../../inputs/button-icon/props';

export default function KeyDetail({ imageSrc }: IKeyDetailProps) {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const handleToggleIsSelected = () => setIsSelected((prev) => !prev);
    // Render
    return (
        <HStack
            w='4rem'
            h='4rem'
            borderRadius='0.5rem'
            justifyContent={'center'}
            alignItems={'center'}
            filter={SHADOWS.Elevation.Light.Bottom.T05.value}
            border={
                isSelected
                    ? `0.0625rem solid ${COLORS.Localize.Purple.T500.value}`
                    : `0.0625rem solid ${COLORS.Line.value}`
            }
            bg={
                isHovered
                    ? `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imageSrc})`
                    : `url(${imageSrc})`
            }
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleToggleIsSelected}
        >
            {isHovered && (
                <>
                    <Icon name='eye' />
                    <ButtonIcon
                        position={'absolute'}
                        top='0.625rem'
                        left='3.625rem'
                        aria-label=''
                        borderRadius='100%'
                        border={`0.0625rem solid ${COLORS.Line.value}`}
                        size={ButtonSize.XXS}
                        backgroundColor={COLORS.White.T500.value}
                        hoverBackgroundColor={COLORS.Tag.value}
                        iconComponent={() => <Icon name='crossClose' />}
                    />
                </>
            )}
        </HStack>
    );
}
