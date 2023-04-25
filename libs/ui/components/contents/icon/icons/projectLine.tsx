import React from 'react';
import COLORS from '../../../../constants/colors';

export const ProjectLine = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '22'}
        height={props?.height ?? '22'}
        viewBox={'0 0 22 22'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M1 1V9C1 15.6274 6.37258 21 13 21H21'
            stroke={props.stroke ?? COLORS.Line.value}
            strokeWidth='2'
            strokeLinecap='round'
        />
    </svg>
);
