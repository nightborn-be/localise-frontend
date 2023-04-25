import React from 'react';
import COLORS from '../../../../constants/colors';

const Checked = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '20'}
        height={props?.height ?? '20'}
        viewBox={props?.viewBox ?? '0 0 20 20'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M16.6663 5L7.49967 14.1667L3.33301 10'
            stroke={props.fill ?? COLORS.Localize.Purple.T500.value}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

export default Checked;
