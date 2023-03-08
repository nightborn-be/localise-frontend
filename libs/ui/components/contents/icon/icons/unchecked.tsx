import React from 'react';

const UnChecked = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '16'}
        height={props?.height ?? '16'}
        viewBox={props?.viewBox ?? '0 0 16 16'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <rect
            x='0.5'
            y='0.5'
            width='15'
            height='15'
            rx='3.5'
            stroke={props.stroke ?? '#E7E9F4'}
        />
    </svg>
);

export default UnChecked;
