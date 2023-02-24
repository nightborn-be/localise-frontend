import React from 'react';

const Enter = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '10'}
        height={props?.height ?? '10'}
        viewBox={props?.viewBox ?? '0 0 10 10'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M3.75 4.16659L1.66667 6.24992L3.75 8.33325'
            stroke={props.stroke ?? '#8F95B2'}
            strokeWidth='1.3'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M8.3335 1.66667V4.58333C8.3335 5.02536 8.1579 5.44928 7.84534 5.76184C7.53278 6.07441 7.10886 6.25 6.66683 6.25H1.66683'
            stroke={props.stroke ?? '#8F95B2'}
            strokeWidth='1.3'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
export default Enter;
