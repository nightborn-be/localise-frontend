import React from 'react';
import COLORS from '../../../../constants/colors';

const Cross = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props?.width ?? '16'}
        height={props?.height ?? '16'}
        viewBox={'0 0 16 16'}
        fill={props?.fill ?? 'none'}
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path
            d='M12 4L4 12'
            stroke={props.stroke ?? COLORS.InputText.value}
            strokeWidth='1.6'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <path
            d='M4 4L12 12'
            stroke={props.stroke ?? COLORS.InputText.value}
            strokeWidth='1.6'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
export default Cross;
