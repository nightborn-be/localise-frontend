import React from 'react';

const HomeShape = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '574'}
        height={props?.height ?? '800'}
        viewBox='0 0 574 800'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M489.232 890.805C326.651 901.931 143.373 877.286 47.9661 745.194C-44.4736 617.21 19.3952 447.992 59.0253 295.178C96.4893 150.717 132.16 -4.89723 261.713 -79.0171C400.65 -158.505 574.878 -153.301 718.15 -81.9192C859.163 -11.6624 954.818 125.669 983.447 280.571C1010.66 427.828 954.991 573.191 860.738 689.571C767.489 804.71 637.064 880.687 489.232 890.805Z'
            fill={props.fill ?? '#5F43E2'}
        />
    </svg>
);
export default HomeShape;
