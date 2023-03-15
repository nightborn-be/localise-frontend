import React from 'react';

const ArrowToBottom = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '24'}
        height={props?.height ?? '24'}
        viewBox={'0 0 24 24'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
            <path
                d='M3 12H17M17 12L13 8M17 12L13 16M21 5V19'
                stroke={props?.stroke ?? 'black'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
    </svg>
);
export default ArrowToBottom;
