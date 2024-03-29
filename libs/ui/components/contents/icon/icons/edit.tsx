import React from 'react';
import COLORS from '../../../../constants/colors';

const Edit = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '12'}
        height={props?.height ?? '13'}
        viewBox={props?.viewBox ?? '0 0 12 13'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g clipPath='url(#clip0_4683_12681)'>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.11439 0.853096L0.920678 7.11795L0.0635355 11.0608C0.0210068 11.2554 0.0280743 11.4575 0.084088 11.6486C0.140102 11.8397 0.243264 12.0137 0.38409 12.1545C0.524916 12.2954 0.698886 12.3985 0.890005 12.4545C1.08112 12.5106 1.28326 12.5176 1.47782 12.4751L5.42068 11.618L11.623 5.34281C11.8439 5.11949 11.9675 4.81779 11.9667 4.50364C11.9659 4.18949 11.8408 3.88843 11.6187 3.66624L8.80125 0.847953C8.69036 0.737161 8.55866 0.649377 8.41374 0.589643C8.26881 0.52991 8.11351 0.499406 7.95675 0.499883C7.8 0.500361 7.64488 0.531812 7.50032 0.592428C7.35576 0.653044 7.22461 0.74163 7.11439 0.853096ZM2.40868 11.1842L1.35096 10.1274L1.89096 7.64767L4.89096 10.6477L2.40868 11.1842Z'
                fill={props.fill ?? COLORS.Text.T500.value}
            />
        </g>
        <defs>
            <clipPath id='clip0_4683_12681'>
                <rect
                    width='12'
                    height='12'
                    fill='white'
                    transform='translate(0 0.5)'
                />
            </clipPath>
        </defs>
    </svg>
);

export default Edit;
