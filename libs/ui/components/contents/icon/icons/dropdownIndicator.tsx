import React from 'react';
import COLORS from '../../../../constants/colors';

const DropdownIndicator = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '8'}
        height={props?.height ?? '6'}
        viewBox={'0 0 8 6'}
        fill={'none'}
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.79189 5.02233L7.76332 2.16519C7.88265 2.03334 7.96115 1.86971 7.98931 1.69412C8.01747 1.51854 7.99407 1.33856 7.92196 1.17601C7.84985 1.01347 7.73213 0.875334 7.58306 0.778373C7.434 0.681411 7.26 0.629787 7.08218 0.629761H0.921035C0.743757 0.630283 0.570414 0.682077 0.421909 0.778897C0.273404 0.875718 0.156078 1.01343 0.0840782 1.17543C0.0120783 1.33743 -0.0115211 1.5168 0.0161257 1.69191C0.0437724 1.86702 0.121485 2.03039 0.239892 2.16233L3.21132 5.02233C3.31147 5.13237 3.43349 5.22029 3.56958 5.28044C3.70567 5.3406 3.85282 5.37167 4.00161 5.37167C4.1504 5.37167 4.29755 5.3406 4.43363 5.28044C4.56972 5.22029 4.69175 5.13237 4.79189 5.02233Z'
            fill={props?.fill ?? COLORS.Localize.Purple.T500.value}
        />
    </svg>
);
export default DropdownIndicator;
