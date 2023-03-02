import React from 'react';

export const CopyClipBoard = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props?.width ?? '14'}
        height={props?.height ?? '14'}
        viewBox={props?.viewBox ?? '0 0 14 14'}
        xmlns='http://www.w3.org/2000/svg'
    >
        <g clipPath='url(#clip0_4897_20101)'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.2161 10.5H10.4651V12.25C10.4652 12.4798 10.4201 12.7073 10.3322 12.9196C10.2444 13.1319 10.1156 13.3249 9.95315 13.4874C9.79072 13.6499 9.59787 13.7788 9.38561 13.8668C9.17335 13.9547 8.94583 14 8.71606 14H1.71606C1.25194 14 0.806817 13.8156 0.478628 13.4874C0.150439 13.1592 -0.0339353 12.7141 -0.0339353 12.25V5.25C-0.0340667 5.02015 0.0111087 4.79253 0.0990078 4.58015C0.186907 4.36777 0.315806 4.1748 0.478335 4.01227C0.640863 3.84974 0.833834 3.72084 1.04621 3.63294C1.25859 3.54504 1.48621 3.49987 1.71606 3.5H3.46506V1.75C3.46506 1.5201 3.51036 1.29246 3.59837 1.08007C3.68638 0.867688 3.81537 0.674725 3.97798 0.51221C4.14059 0.349694 4.33363 0.220811 4.54606 0.132924C4.7585 0.0450371 4.98617 -0.000131084 5.21606 2.8574e-07H12.2161C12.6802 2.8574e-07 13.1253 0.184375 13.4535 0.512563C13.7817 0.840752 13.9661 1.28587 13.9661 1.75V8.75C13.9661 8.97981 13.9208 9.20738 13.8329 9.4197C13.7449 9.63202 13.616 9.82493 13.4535 9.98744C13.291 10.1499 13.0981 10.2788 12.8858 10.3668C12.6734 10.4547 12.4459 10.5 12.2161 10.5ZM12.2161 1.75H5.21606V3.5H8.71606C8.94583 3.5 9.17335 3.54527 9.38561 3.63323C9.59787 3.72119 9.79072 3.85011 9.95315 4.01262C10.1156 4.17514 10.2444 4.36807 10.3322 4.58038C10.4201 4.79269 10.4652 5.02023 10.4651 5.25V8.75H12.2161V1.75Z'
                fill={props?.fill}
            />
        </g>
        <defs>
            <clipPath id='clip0_4897_20101'>
                <rect width='14' height='14' fill={props?.fill} />
            </clipPath>
        </defs>
    </svg>
);

export const CopyClipBoardLarge = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props?.width ?? '28'}
        height={props?.height ?? '28'}
        viewBox={props?.viewBox ?? '0 0 28 28'}
        xmlns='http://www.w3.org/2000/svg'
    >
        <g clipPath='url(#clip0_5301_49259)'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19.2158 17.5H17.4648V19.25C17.465 19.4798 17.4198 19.7073 17.332 19.9196C17.2441 20.1319 17.1153 20.3249 16.9529 20.4874C16.7905 20.6499 16.5976 20.7788 16.3854 20.8668C16.1731 20.9547 15.9456 21 15.7158 21H8.71582C8.25169 21 7.80657 20.8156 7.47838 20.4874C7.1502 20.1592 6.96582 19.7141 6.96582 19.25V12.25C6.96569 12.0202 7.01086 11.7925 7.09876 11.5801C7.18666 11.3678 7.31556 11.1748 7.47809 11.0123C7.64062 10.8497 7.83359 10.7208 8.04597 10.6329C8.25835 10.545 8.48597 10.4999 8.71582 10.5H10.4648V8.75C10.4648 8.5201 10.5101 8.29246 10.5981 8.08007C10.6861 7.86769 10.8151 7.67473 10.9777 7.51221C11.1403 7.34969 11.3334 7.22081 11.5458 7.13292C11.7583 7.04504 11.9859 6.99987 12.2158 7H19.2158C19.6799 7 20.1251 7.18437 20.4533 7.51256C20.7814 7.84075 20.9658 8.28587 20.9658 8.75V15.75C20.9658 15.9798 20.9206 16.2074 20.8326 16.4197C20.7447 16.632 20.6158 16.8249 20.4533 16.9874C20.2908 17.1499 20.0978 17.2788 19.8855 17.3668C19.6732 17.4547 19.4456 17.5 19.2158 17.5ZM19.2158 8.75H12.2158V10.5H15.7158C15.9456 10.5 16.1731 10.5453 16.3854 10.6332C16.5976 10.7212 16.7905 10.8501 16.9529 11.0126C17.1153 11.1751 17.2441 11.3681 17.332 11.5804C17.4198 11.7927 17.465 12.0202 17.4648 12.25V15.75H19.2158V8.75Z'
                fill={'#8F95B2'}
            />
        </g>
    </svg>
);
