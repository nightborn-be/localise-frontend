import React from 'react';
import COLORS from '../../../../constants/colors';

const EyesShow = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path
            d='M0.833008 9.99998C0.833008 9.99998 4.16634 3.33331 9.99967 3.33331C15.833 3.33331 19.1663 9.99998 19.1663 9.99998C19.1663 9.99998 15.833 16.6666 9.99967 16.6666C4.16634 16.6666 0.833008 9.99998 0.833008 9.99998Z'
            stroke={props.stroke ?? COLORS.InputText.value}
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z'
            stroke={props.stroke ?? COLORS.InputText.value}
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
export default EyesShow;
