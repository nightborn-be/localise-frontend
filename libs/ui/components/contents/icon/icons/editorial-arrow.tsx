import React from 'react';
import COLORS from '../../../../constants/colors';

const EditorialArrow = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '14'}
        height={props?.height ?? '14'}
        viewBox={props?.viewBox ?? '0 0 14 14'}
        xmlns='http://www.w3.org/2000/svg'
    >
        <g clipPath='url(#clip0_4648_2412)'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.50073 13.786L11.1527 10.179C11.3223 10.0106 11.4181 9.7817 11.4189 9.54268C11.4198 9.30367 11.3256 9.0741 11.1572 8.9045C10.9888 8.73489 10.7599 8.63913 10.5209 8.63829C10.2819 8.63745 10.0523 8.73159 9.88273 8.9L8.23873 10.517C8.22573 10.531 7.50173 11.225 7.50173 11.225C7.44108 11.3067 7.36214 11.3731 7.27123 11.4188C7.18033 11.4645 7.07999 11.4883 6.97823 11.4883C6.87648 11.4883 6.77613 11.4645 6.68523 11.4188C6.59433 11.3731 6.51539 11.3067 6.45473 11.225L5.74873 10.511L5.18873 9.944L4.11973 8.85C3.95079 8.68066 3.7215 8.58536 3.48229 8.58508C3.24309 8.5848 3.01357 8.67956 2.84423 8.8485C2.67489 9.01744 2.5796 9.24673 2.57932 9.48594C2.57904 9.72514 2.67379 9.95466 2.84273 10.124L6.45473 13.781C6.59295 13.92 6.78065 13.9986 6.9767 13.9996C7.17275 14.0005 7.36119 13.9237 7.50073 13.786Z'
                fill={props.fill ?? COLORS.InputText.value}
            />
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.25246 3.50001L8.81346 4.06701L9.88146 5.15001C9.96511 5.23386 10.0645 5.30041 10.1738 5.34586C10.2832 5.39132 10.4005 5.41478 10.5189 5.41492C10.6373 5.41506 10.7546 5.39187 10.8641 5.34667C10.9736 5.30148 11.0731 5.23516 11.157 5.15151C11.2408 5.06786 11.3074 4.96851 11.3528 4.85914C11.3983 4.74976 11.4217 4.63251 11.4219 4.51407C11.4222 4.27487 11.3274 4.04535 11.1585 3.87601L7.54646 0.219009C7.40824 0.0799682 7.22055 0.0013727 7.02449 0.000435531C6.82844 -0.000501634 6.64001 0.0762959 6.50046 0.214009L2.84946 3.82101C2.76548 3.9044 2.69875 4.00351 2.65307 4.11269C2.60739 4.22187 2.58367 4.33898 2.58325 4.45733C2.58283 4.57567 2.60573 4.69295 2.65063 4.80245C2.69554 4.91194 2.76157 5.01153 2.84496 5.09551C2.92835 5.17949 3.02746 5.24622 3.13664 5.2919C3.24582 5.33757 3.36293 5.3613 3.48128 5.36172C3.59963 5.36213 3.7169 5.33924 3.8264 5.29433C3.9359 5.24943 4.03548 5.1834 4.11946 5.10001L5.76246 3.48601L6.50046 2.77801C6.56112 2.69631 6.64005 2.62994 6.73096 2.58421C6.82186 2.53848 6.9222 2.51466 7.02396 2.51466C7.12572 2.51466 7.22606 2.53848 7.31696 2.58421C7.40787 2.62994 7.4868 2.69631 7.54746 2.77801L8.25246 3.50001Z'
                fill={props.fill ?? COLORS.InputText.value}
            />
        </g>
        <defs>
            <clipPath id='clip0_4648_2412'>
                <rect
                    width='14'
                    height='14'
                    fill='white'
                    transform='translate(14) rotate(90)'
                />
            </clipPath>
        </defs>
    </svg>
);
export default EditorialArrow;
