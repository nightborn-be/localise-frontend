import React from 'react';
import IButtonChildrenProps from './props';
import Text from '../../contents/text';

export default function ButtonChildren({
    textAlign,
    lineHeight,
    fontSize,
    isHovered,
    hoverColor,
    color,
    direction,
    whiteSpace,
    fontStyle,
    fontWeight,
    children,
}: IButtonChildrenProps) {
    //Render
    if (!children) {
        return <></>;
    }

    if (typeof children === 'string') {
        return (
            <Text
                textAlign={textAlign}
                lineHeight={lineHeight}
                fontWeight={fontWeight}
                fontSize={fontSize}
                color={isHovered ? hoverColor : color}
                fontStyle={fontStyle}
                whiteSpace={direction === 'column' ? whiteSpace : 'unset'}
            >
                {children}
            </Text>
        );
    }
    return children;
}
