import React from 'react';
import COLORS from '../../../../constants/colors';

const CheckboxOn = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '16'}
        height={props?.height ?? '16'}
        viewBox={props?.viewBox ?? '0 0 16 16'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <rect
            width='16'
            height='16'
            rx='4'
            fill={props.fill ?? COLORS.Localize.Purple.T500.value}
        />
        <path
            d='M11.3337 5.5L6.75033 10.0833L4.66699 8'
            stroke='white'
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

export default CheckboxOn;
