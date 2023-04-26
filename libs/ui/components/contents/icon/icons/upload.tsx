import React from 'react';
import COLORS from '../../../../constants/colors';

const Upload = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path
            d='M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10'
            stroke={props.stroke ?? COLORS.Text.T500.value}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M11.3332 5.33333L7.99984 2L4.6665 5.33333'
            stroke={props.stroke ?? COLORS.Text.T500.value}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M8 2V10'
            stroke={props.stroke ?? COLORS.Text.T500.value}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

export default Upload;
