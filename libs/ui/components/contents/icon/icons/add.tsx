import React from 'react';

export const Add = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props?.width ?? '16'}
        height={props?.height ?? '16'}
        viewBox={'0 0 16 16'}
        xmlns='http://www.w3.org/2000/svg'
    >
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

export const AddLarge = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props?.width ?? '20'}
        height={props?.height ?? '20'}
        viewBox={'0 0 20 20'}
        fill={props?.fill ?? 'none'}
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M10 4.1665V15.8332'
            stroke={props?.stroke}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M4.16675 10H15.8334'
            stroke={props?.stroke}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

export const AddSmallBackground = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '16'}
        height={props?.height ?? '16'}
        viewBox={'0 0 16 16'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M0.5 4C0.5 2.067 2.067 0.5 4 0.5H12C13.933 0.5 15.5 2.067 15.5 4V12C15.5 13.933 13.933 15.5 12 15.5H4C2.067 15.5 0.5 13.933 0.5 12V4Z'
            fill={props?.color ?? '#393360'}
        />
        <path
            d='M8 4.5V11.5'
            stroke={props?.stroke ?? 'white'}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M4.5 8H11.5'
            stroke={props?.stroke ?? 'white'}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M0.5 4C0.5 2.067 2.067 0.5 4 0.5H12C13.933 0.5 15.5 2.067 15.5 4V12C15.5 13.933 13.933 15.5 12 15.5H4C2.067 15.5 0.5 13.933 0.5 12V4Z'
            stroke={props?.color ?? '#393360'}
        />
    </svg>
);
export const AddCircle = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props?.width ?? '28'}
        height={props?.height ?? '28'}
        viewBox={'0 0 28 28'}
        fill={props?.fill ?? 'none'}
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M14 5.83337V22.1667'
            stroke={props?.stroke ?? 'white'}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M5.83337 14H22.1667'
            stroke={props?.stroke ?? 'white'}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
