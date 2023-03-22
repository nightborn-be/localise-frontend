import React, { cloneElement } from 'react';
import { HStack, Image, VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../text';
import FONTS from '../../../constants/fonts';
import { ITeammatesProps } from './props';
import { EnhancerProps } from '../../inputs/button/props';
import Icon from '../icon';
import Button from '../../inputs/button';

const Teammates = ({ values, onClick, buttonChildren }: ITeammatesProps) => {
    // Render
    return (
        <VStack w='327px' spacing={'12px'}>
            <>
                {values.map((obj, index) =>
                    cloneElement(obj.content, { key: index }),
                )}
                {values.length < 5 && (
                    <Button
                        border={`1px dashed ${COLORS.Line.value}`}
                        borderRadius='8px'
                        w='327px'
                        h='40px'
                        padding='4px 12px 4px 8px'
                        gap='4px'
                        font={FONTS.T1.T14px.Regular400.value}
                        justifyContent='flex-start'
                        backgroundColor='transparent'
                        color={COLORS.InputText.value}
                        hoverColor={COLORS.Localize.Purple.T500.value}
                        startEnhancer={(
                            enhancer: EnhancerProps,
                        ): React.ReactElement => (
                            <Icon
                                name='add'
                                stroke={
                                    enhancer.isHovered
                                        ? COLORS.Localize.Purple.T500.value
                                        : COLORS.InputText.value
                                }
                                width='20'
                                height='20'
                            />
                        )}
                        onClick={onClick}
                    >
                        {buttonChildren}
                    </Button>
                )}
            </>
        </VStack>
    );
};

export default Teammates;
