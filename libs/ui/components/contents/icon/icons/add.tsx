import React from 'react';

const Add = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M8 3.33325V12.6666'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M3.3335 8H12.6668'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
);
export default Add;
