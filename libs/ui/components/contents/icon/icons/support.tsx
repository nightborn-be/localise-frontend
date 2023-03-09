import React from 'react';

const Support = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '14'}
        height={props?.height ?? '14'}
        viewBox={'0 0 14 14'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0 4C0 1.79086 1.79086 0 4 0H10C12.2091 0 14 1.79086 14 4V10C14 12.2091 12.2091 14 10 14H4C1.79086 14 0 12.2091 0 10V4ZM6.905 5.50057C7.59551 5.50057 8.15529 4.9408 8.15529 4.25029C8.15529 3.55977 7.59551 3 6.905 3C6.21449 3 5.65472 3.55977 5.65472 4.25029C5.65472 4.9408 6.21449 5.50057 6.905 5.50057ZM8.07727 9.89023C8.14766 9.96052 8.24306 9.99999 8.34253 9.99999C8.44185 10.0001 8.53705 10.0397 8.60723 10.11C8.6774 10.1803 8.71682 10.2755 8.71682 10.3749V10.6251C8.71682 10.6744 8.70712 10.7231 8.68828 10.7686C8.66945 10.8141 8.64183 10.8554 8.60703 10.8902C8.57222 10.925 8.53089 10.9526 8.48541 10.9715C8.43993 10.9903 8.39119 11 8.34196 11H5.65625C5.55732 11 5.46241 10.9609 5.39219 10.8912C5.32197 10.8215 5.28214 10.7269 5.28139 10.628V10.3777C5.28139 10.2783 5.32088 10.1829 5.39118 10.1126C5.46148 10.0423 5.55683 10.0028 5.65625 10.0028C5.75566 10.0028 5.85101 9.96336 5.92131 9.89306C5.99161 9.82276 6.0311 9.72741 6.0311 9.62799V7.76799C6.0311 7.66857 5.99161 7.57323 5.92131 7.50293C5.85101 7.43263 5.75566 7.39314 5.65625 7.39314C5.55683 7.39314 5.46148 7.35364 5.39118 7.28334C5.32088 7.21304 5.28139 7.1177 5.28139 7.01828V6.76799C5.28139 6.66857 5.32088 6.57323 5.39118 6.50293C5.46148 6.43263 5.55683 6.39314 5.65625 6.39314H7.59225C7.69166 6.39314 7.78701 6.43263 7.85731 6.50293C7.92761 6.57323 7.9671 6.66857 7.9671 6.76799V9.62514C7.96725 9.72461 8.00688 9.81995 8.07727 9.89023Z'
                fill={props?.fill ?? '#8F95B2'}
            />
    </svg>
);
export default Support;