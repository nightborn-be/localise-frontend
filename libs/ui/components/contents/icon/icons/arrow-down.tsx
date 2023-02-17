import { Box } from '@chakra-ui/react';
import React from 'react';
const ArrowDown = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props?.width ?? '10'}
        height={props?.height ?? '10'}
        viewBox={props?.viewBox ?? '0 0 10 10'}
        xmlns='http://www.w3.org/2000/svg'
    >
        <g clipPath='url(#clip0_4683_2003)'>
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M5.98938 7.52795L9.70366 3.95652C9.85282 3.79171 9.95095 3.58716 9.98615 3.36769C10.0213 3.14821 9.9921 2.92323 9.90197 2.72005C9.81183 2.51686 9.66467 2.3442 9.47834 2.223C9.29201 2.10179 9.07452 2.03726 8.85223 2.03723H1.15081C0.929208 2.03788 0.712529 2.10263 0.526898 2.22365C0.341267 2.34468 0.194609 2.51682 0.104609 2.71932C0.0146096 2.92182 -0.0148897 3.14603 0.0196688 3.36492C0.0542273 3.58381 0.151368 3.78802 0.299377 3.95295L4.01366 7.52795C4.13885 7.6655 4.29138 7.77539 4.46149 7.85058C4.63159 7.92578 4.81553 7.96462 5.00152 7.96462C5.18751 7.96462 5.37145 7.92578 5.54155 7.85058C5.71166 7.77539 5.86419 7.6655 5.98938 7.52795Z'
                fill={props.fill}
            />
        </g>
        <defs>
            <clipPath id='clip0_4683_2003'>
                <rect width='10' height='10' fill={props.fill} />
            </clipPath>
        </defs>
    </svg>
);
export default ArrowDown;