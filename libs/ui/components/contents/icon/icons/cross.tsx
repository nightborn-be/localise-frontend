import React from 'react';

const Cross = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path
            d='M12 4L4 12'
            stroke='#8F95B2'
            stroke-width={Number(props.width) / 10}
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M4 4L12 12'
            stroke='#8F95B2'
            stroke-width={Number(props.width) / 10}
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
);
export default Cross;
