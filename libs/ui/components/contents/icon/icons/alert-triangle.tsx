import React from 'react';
import COLORS from '../../../../constants/colors';

const AlertTriangle = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path
            d='M8.57483 3.21659L1.5165 14.9999C1.37097 15.2519 1.29397 15.5377 1.29316 15.8287C1.29234 16.1197 1.36774 16.4059 1.51186 16.6587C1.65597 16.9115 1.86377 17.1222 2.11459 17.2698C2.36541 17.4174 2.6505 17.4967 2.9415 17.4999H17.0582C17.3492 17.4967 17.6343 17.4174 17.8851 17.2698C18.1359 17.1222 18.3437 16.9115 18.4878 16.6587C18.6319 16.4059 18.7073 16.1197 18.7065 15.8287C18.7057 15.5377 18.6287 15.2519 18.4832 14.9999L11.4248 3.21659C11.2763 2.97168 11.0671 2.76919 10.8175 2.62866C10.5679 2.48813 10.2863 2.41431 9.99983 2.41431C9.71339 2.41431 9.43178 2.48813 9.18217 2.62866C8.93257 2.76919 8.72339 2.97168 8.57483 3.21659V3.21659Z'
            stroke={props.stroke ?? COLORS.Error.T500.value}
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M10 7.5V10.8333'
            stroke={props.stroke ?? COLORS.Error.T500.value}
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M10 14.1667H10.0083'
            stroke={props.stroke ?? COLORS.Error.T500.value}
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

export default AlertTriangle;
