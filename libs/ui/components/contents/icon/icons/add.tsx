import React from 'react';

export const Add = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M8 3.33325V12.6666'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M3.3335 8H12.6668'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
export const AddCircle = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width ?? '28'}
        height={props.height ?? '28'}
        viewBox={props.viewBox ?? '0 0 28 28'}
        fill={props.fill ?? 'none'}
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M14 5.83337V22.1667'
            stroke={props.stroke ?? 'white'}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M5.83337 14H22.1667'
            stroke={props.stroke ?? 'white'}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);


