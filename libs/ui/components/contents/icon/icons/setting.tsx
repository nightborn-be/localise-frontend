import React from 'react';

const Setting = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '14'}
        height={props?.height ?? '14'}
        viewBox={'0 0 14 14'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g clip-path='url(#clip0_4648_2534)'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.3529 6.00001L13.3389 5.46801C13.4126 5.42919 13.4778 5.37605 13.5307 5.31171C13.5836 5.24737 13.6231 5.17312 13.647 5.0933C13.6708 5.01349 13.6785 4.92972 13.6695 4.8469C13.6606 4.76409 13.6352 4.68389 13.5949 4.61101L12.5199 2.66901C12.4374 2.52099 12.2999 2.41148 12.1372 2.3643C11.9745 2.31711 11.7997 2.33605 11.6509 2.41701L10.6619 2.95201C10.4908 3.02813 10.3035 3.06093 10.1167 3.0475C9.92995 3.03407 9.74934 2.97483 9.59088 2.87501C9.45588 2.78801 9.31788 2.70801 9.17988 2.63401C9.015 2.54669 8.87485 2.41915 8.7724 2.26321C8.66996 2.10728 8.60856 1.928 8.59388 1.74201V0.633007C8.59362 0.549533 8.5769 0.46693 8.54469 0.389923C8.51247 0.312916 8.46539 0.243017 8.40613 0.184224C8.34687 0.125432 8.2766 0.0788993 8.19934 0.0472894C8.12209 0.0156795 8.03936 -0.000387676 7.95588 7.10205e-06H5.71388C5.54555 -0.000259443 5.38398 0.0662186 5.26457 0.184872C5.14517 0.303526 5.07768 0.464676 5.07688 0.633007V1.74601C5.062 1.93143 5.00059 2.1101 4.89834 2.26549C4.79608 2.42089 4.65628 2.54798 4.49188 2.63501C4.38188 2.69401 4.27188 2.75701 4.16488 2.82401C4.00402 2.92053 3.82179 2.97578 3.63441 2.98485C3.44703 2.99393 3.26032 2.95653 3.09088 2.87601L2.33388 2.44901C2.18721 2.36506 2.01338 2.34223 1.85001 2.38546C1.68663 2.42869 1.54684 2.53451 1.46088 2.68001L0.342882 4.60001C0.301039 4.67188 0.273963 4.75139 0.26324 4.83387C0.252517 4.91634 0.258363 5.00013 0.280436 5.08031C0.302508 5.1605 0.340363 5.23548 0.391782 5.30085C0.443201 5.36622 0.50715 5.42067 0.579882 5.46101L1.33588 5.89201C1.49118 5.99404 1.61787 6.13401 1.70396 6.29868C1.79006 6.46334 1.83271 6.64726 1.82788 6.83301C1.82788 6.91401 1.82788 6.99101 1.82788 7.07101C1.82756 7.25665 1.78026 7.43919 1.69038 7.60163C1.60051 7.76406 1.47099 7.90111 1.31388 8.00001L0.333882 8.53401C0.260167 8.57281 0.194953 8.62595 0.142073 8.69032C0.0891927 8.75469 0.0497136 8.82898 0.0259561 8.90882C0.00219868 8.98866 -0.00535767 9.07245 0.00373124 9.15526C0.0128202 9.23806 0.0383709 9.31822 0.0788816 9.39101L1.14788 11.33C1.23031 11.478 1.36784 11.5875 1.53056 11.6347C1.69328 11.6819 1.86805 11.663 2.01688 11.582L3.00988 11.047C3.18013 10.9702 3.36684 10.937 3.55313 10.9504C3.73942 10.9639 3.91943 11.0235 4.07688 11.124C4.21188 11.211 4.34988 11.292 4.49188 11.365C4.65628 11.4528 4.79599 11.5805 4.89821 11.7364C5.00042 11.8922 5.06186 12.0712 5.07688 12.257V13.367C5.07794 13.5354 5.14566 13.6966 5.26522 13.8152C5.38478 13.9338 5.54646 14.0003 5.71488 14H7.95588C8.12448 14.0005 8.28641 13.9342 8.40619 13.8156C8.52597 13.6969 8.59382 13.5356 8.59488 13.367V12.253C8.60864 12.0674 8.66961 11.8884 8.77199 11.733C8.87437 11.5776 9.01478 11.4509 9.17988 11.365C9.28988 11.305 9.39888 11.242 9.50588 11.176C9.66693 11.0795 9.84932 11.0242 10.0369 11.0152C10.2244 11.0061 10.4113 11.0435 10.5809 11.124L11.3359 11.55C11.4824 11.6339 11.6561 11.6567 11.8193 11.6135C11.9825 11.5702 12.1221 11.4644 12.2079 11.319L13.3249 9.40001C13.3665 9.32803 13.3935 9.24848 13.404 9.16599C13.4146 9.08351 13.4086 8.99974 13.3865 8.91958C13.3643 8.83943 13.3264 8.76449 13.275 8.69914C13.2235 8.6338 13.1596 8.57936 13.0869 8.53901L12.3289 8.10901C12.1751 8.0053 12.0498 7.8648 11.9642 7.70027C11.8786 7.53575 11.8355 7.35243 11.8389 7.16701C11.8389 7.08701 11.8389 7.00701 11.8389 6.92601C11.8397 6.74087 11.8873 6.55895 11.9771 6.39708C12.067 6.23521 12.1962 6.09863 12.3529 6.00001ZM6.83388 9.46401C6.34786 9.4571 5.87472 9.30667 5.47397 9.0316C5.07321 8.75654 4.76272 8.36913 4.58153 7.91809C4.40035 7.46705 4.35656 6.97251 4.45567 6.49665C4.55478 6.02078 4.79236 5.58485 5.13855 5.24364C5.48474 4.90244 5.92408 4.6712 6.40133 4.579C6.87857 4.48681 7.37243 4.53777 7.8208 4.72547C8.26916 4.91318 8.65202 5.22926 8.92125 5.63396C9.19047 6.03867 9.33403 6.51393 9.33388 7.00001C9.33205 7.3261 9.26588 7.64863 9.13915 7.9491C9.01242 8.24957 8.82763 8.52207 8.59538 8.75098C8.36312 8.97989 8.08797 9.1607 7.7857 9.28306C7.48342 9.40542 7.15997 9.46691 6.83388 9.46401Z'
                fill={props?.fill ?? '#8F95B2'}
            />
        </g>
        <defs>
            <clipPath id='clip0_4648_2534'>
                <rect width='14' height='14' fill='white' />
            </clipPath>
        </defs>
    </svg>
);
export default Setting;
