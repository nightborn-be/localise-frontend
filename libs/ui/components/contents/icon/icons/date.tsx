import React from 'react';

const Date = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '16'}
        height={props?.height ?? '16'}
        viewBox={'0 0 16 16'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M5.05368 4.91257C5.1548 4.91257 5.25494 4.89264 5.34835 4.85391C5.44177 4.81519 5.52664 4.75843 5.5981 4.68688C5.66957 4.61533 5.72623 4.5304 5.76485 4.43694C5.80347 4.34348 5.82329 4.24332 5.82318 4.1422V2.75326C5.82318 2.65221 5.80327 2.55215 5.7646 2.45879C5.72593 2.36543 5.66925 2.2806 5.5978 2.20915C5.52634 2.13769 5.44151 2.08101 5.34815 2.04234C5.25479 2.00367 5.15473 1.98376 5.05368 1.98376C4.95263 1.98376 4.85256 2.00367 4.7592 2.04234C4.66584 2.08101 4.58102 2.13769 4.50956 2.20915C4.43811 2.2806 4.38143 2.36543 4.34275 2.45879C4.30408 2.55215 4.28418 2.65221 4.28418 2.75326V4.1422C4.28407 4.24332 4.30388 4.34348 4.3425 4.43694C4.38112 4.5304 4.43779 4.61533 4.50925 4.68688C4.58072 4.75843 4.66559 4.81519 4.759 4.85391C4.85242 4.89264 4.95255 4.91257 5.05368 4.91257Z'
            fill={props?.fill ?? '#393360'}
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M11.1611 4.91257C11.2622 4.91257 11.3624 4.89264 11.4558 4.85391C11.5492 4.81519 11.6341 4.75843 11.7055 4.68688C11.777 4.61533 11.8337 4.5304 11.8723 4.43694C11.9109 4.34348 11.9307 4.24332 11.9306 4.1422V2.75326C11.9306 2.54918 11.8495 2.35345 11.7052 2.20915C11.5609 2.06484 11.3652 1.98376 11.1611 1.98376C10.957 1.98376 10.7613 2.06484 10.617 2.20915C10.4727 2.35345 10.3916 2.54918 10.3916 2.75326V4.1422C10.3915 4.24332 10.4113 4.34348 10.4499 4.43694C10.4885 4.5304 10.5452 4.61533 10.6167 4.68688C10.6881 4.75843 10.773 4.81519 10.8664 4.85391C10.9598 4.89264 11.06 4.91257 11.1611 4.91257Z'
            fill={props?.fill ?? '#393360'}
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M13.0522 3.01319V4.2826C13.0625 4.76452 12.8955 5.23346 12.5828 5.60034C12.2701 5.96721 11.8336 6.20646 11.3561 6.27265C11.0927 6.29989 10.8265 6.27151 10.5747 6.18934C10.3229 6.10717 10.0912 5.97304 9.89459 5.79564C9.69795 5.61824 9.54075 5.40153 9.43317 5.15952C9.3256 4.91752 9.27004 4.65562 9.2701 4.39078V3.32029C9.26987 3.23714 9.23668 3.15748 9.1778 3.09876C9.11892 3.04005 9.03917 3.00708 8.95602 3.00708H7.25824C7.17517 3.00708 7.0955 3.04008 7.03677 3.09882C6.97803 3.15755 6.94503 3.23722 6.94503 3.32029V4.27998C6.95602 4.76235 6.78928 5.23193 6.47655 5.59936C6.16382 5.96678 5.72692 6.20642 5.24899 6.27265C4.98556 6.29989 4.71934 6.27151 4.46758 6.18934C4.21581 6.10717 3.9841 5.97304 3.78746 5.79564C3.59082 5.61824 3.43362 5.40153 3.32604 5.15952C3.21847 4.91752 3.16291 4.65562 3.16297 4.39078V3.01319C2.85032 3.02816 2.55535 3.1626 2.33894 3.38875C2.12253 3.6149 2.00121 3.9155 2 4.22851L2 12.7785C2 13.1024 2.12869 13.4131 2.35775 13.6422C2.58681 13.8712 2.89748 13.9999 3.22143 13.9999H12.9928C13.3168 13.9999 13.6274 13.8712 13.8565 13.6422C14.0856 13.4131 14.2143 13.1024 14.2143 12.7785V4.22851C14.2131 3.91564 14.0919 3.61516 13.8756 3.38904C13.6594 3.16291 13.3647 3.02838 13.0522 3.01319ZM12.0331 11.2866C12.0325 11.4835 11.9539 11.6722 11.8147 11.8115C11.6754 11.9507 11.4867 12.0292 11.2898 12.0299H4.74646C4.54953 12.0292 4.36087 11.9507 4.22162 11.8115C4.08236 11.6722 4.00383 11.4835 4.00314 11.2866V8.39008C4.00314 8.19224 4.08173 8.00251 4.22162 7.86262C4.36151 7.72273 4.55124 7.64414 4.74908 7.64414H11.2924C11.4894 7.64483 11.678 7.72336 11.8173 7.86261C11.9565 8.00186 12.0351 8.19053 12.0358 8.38746L12.0331 11.2866Z'
            fill={props?.fill ?? '#393360'}
        />
    </svg>
);

export default Date;
