import React from 'react';

const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M5 7.5L10 12.5L15 7.5'
            stroke={props.stroke ?? '#8F95B2'}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
export default ChevronDown;
