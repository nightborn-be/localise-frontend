import React from 'react';

const RemoveSmall = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props?.width ?? '16'}
        height={props?.height ?? '16'}
        viewBox={'0 0 16 16'}
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M12 4L4 12'
            stroke={props?.stroke}
            strokeWidth='1.6'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M4 4L12 12'
            stroke={props?.stroke}
            strokeWidth='1.6'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

export const RemoveLarge = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props?.width ?? '20'}
        height={props?.height ?? '20'}
        viewBox={'0 0 20 20'}
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M16 16L4 4'
            stroke={props?.stroke}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M16 4L4 16'
            stroke={props?.stroke}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

export default RemoveSmall;
