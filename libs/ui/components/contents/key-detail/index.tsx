import { HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import COLORS from '../../../constants/colors';
import SHADOWS from '../../../constants/shadows';
import Icon from '../icon';
import IKeyDetailProps from './props';
import ButtonIcon from '../../inputs/button-icon';
import { ButtonSize } from '../../inputs/button-icon/props';

const KeyDetailImage = ({
    imageSrc,
    isSelected,
    onSelect,
    onRemove,
}: IKeyDetailProps) => {
    //Attributes
    const [isHovered, setIsHovered] = useState<boolean>(false);
    // Render
    return (
        <HStack
            position={'relative'}
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
            onClick={onSelect}
        >
            {isHovered && (
                <>
                    <Icon name='eye' />
                    <ButtonIcon
                        position={'absolute'}
                        top='-0.4375rem'
                        right='-0.3125rem'
                        aria-label=''
                        borderRadius='100%'
                        border={`0.0625rem solid ${COLORS.Line.value}`}
                        size={ButtonSize.XXS}
                        backgroundColor={COLORS.White.T500.value}
                        hoverBackgroundColor={COLORS.Tag.value}
                        handleOnClick={onRemove}
                    >
                        <Icon name='crossClose' />
                    </ButtonIcon>
                </>
            )}
        </HStack>
    );
};

export default KeyDetailImage;
