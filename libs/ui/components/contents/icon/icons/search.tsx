import React from 'react';

const Search = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '16'}
        height={props?.height ?? '16'}
        viewBox={props?.viewBox ?? '0 0 16 16'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z'
            stroke={props?.stroke ?? '#8F95B2'}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M13.9996 14L11.0996 11.1'
            stroke={props?.stroke ?? '#8F95B2'}
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
export default Search;
