import React from 'react';
const UploadCloud = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props?.width ?? '25'}
        height={props?.height ?? '24'}
        viewBox={props?.viewBox ?? '0 0 25 24'}
        fill={props?.fill ?? 'none'}
        xmlns='http://www.w3.org/2000/svg'
    >
        <g clipPath='url(#clip0_5187_40843)'>
            <path
                d='M16.5 16L12.5 12L8.5 16'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12.5 12V21'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M20.89 18.39C21.8653 17.8583 22.6358 17.0169 23.0798 15.9986C23.5239 14.9804 23.6162 13.8432 23.3422 12.7667C23.0682 11.6901 22.4434 10.7355 21.5666 10.0534C20.6898 9.37137 19.6108 9.00072 18.5 8.99998H17.24C16.9373 7.82923 16.3731 6.74232 15.5899 5.82098C14.8067 4.89964 13.8248 4.16783 12.7181 3.68059C11.6113 3.19335 10.4085 2.96334 9.20008 3.00787C7.99164 3.05239 6.80903 3.37028 5.74114 3.93765C4.67325 4.50501 3.74787 5.30709 3.03458 6.28357C2.32129 7.26004 1.83865 8.38552 1.62294 9.57538C1.40723 10.7652 1.46407 11.9885 1.78917 13.1532C2.11428 14.318 2.6992 15.3938 3.49996 16.3'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M16.5 16L12.5 12L8.5 16'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </g>
        <defs>
            <clipPath id='clip0_5187_40843'>
                <rect
                    width='24'
                    height='24'
                    fill='white'
                    transform='translate(0.5)'
                />
            </clipPath>
        </defs>
    </svg>
);

export default UploadCloud;
