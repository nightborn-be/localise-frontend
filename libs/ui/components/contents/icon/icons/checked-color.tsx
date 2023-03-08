import React from 'react';

const CheckedColor = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '10'}
        height={props?.height ?? '10'}
        viewBox={'0 0 10 10'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M8.33329 2.5L3.74996 7.08333L1.66663 5'
            stroke={props.stroke ?? 'white'}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

export default CheckedColor;
