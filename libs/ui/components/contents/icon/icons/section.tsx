import React from 'react';

const Section = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '14'}
        height={props?.height ?? '14'}
        viewBox={props?.viewBox ?? '0 0 14 14'}
        xmlns='http://www.w3.org/2000/svg'
    >
        <g clip-path='url(#clip0_4648_2061)'>
            <path
                d='M0.535367 3.851V3.863L6.43537 6.554H6.44137C6.61677 6.63565 6.8079 6.67795 7.00137 6.67795C7.19484 6.67795 7.38597 6.63565 7.56137 6.554H7.56737L13.4674 3.863V3.851C13.5762 3.81505 13.6713 3.74659 13.74 3.65485C13.8087 3.56312 13.8475 3.45253 13.8514 3.338C13.8477 3.22261 13.8083 3.11121 13.7386 3.01915C13.6689 2.92709 13.5724 2.85891 13.4624 2.824L7.57037 0.124H7.55937C7.38433 0.0423261 7.19352 0 7.00037 0C6.80721 0 6.6164 0.0423261 6.44137 0.124H6.43037L0.540367 2.824C0.43032 2.85891 0.33381 2.92709 0.264139 3.01915C0.194468 3.11121 0.155067 3.22261 0.151367 3.338C0.155199 3.45253 0.194072 3.56312 0.26274 3.65485C0.331407 3.74659 0.426564 3.81505 0.535367 3.851Z'
                fill={props.fill ?? '#393360'}
            />
            <path
                d='M13.4604 6.48499L12.3074 5.95599C10.5004 6.78299 8.03037 7.90899 8.00037 7.91899C7.35815 8.1743 6.6426 8.1743 6.00037 7.91899C5.97237 7.90999 3.50637 6.78499 1.70037 5.95699L0.540374 6.48499C0.428599 6.5163 0.330068 6.58317 0.259701 6.67549C0.189333 6.7678 0.150962 6.88053 0.150397 6.99661C0.149832 7.11268 0.187104 7.22578 0.256569 7.31878C0.326034 7.41177 0.423909 7.4796 0.535374 7.51199V7.52299L6.43537 10.215H6.44137C6.61677 10.2966 6.8079 10.3389 7.00137 10.3389C7.19484 10.3389 7.38597 10.2966 7.56137 10.215H7.56737L13.4674 7.52299V7.51199C13.579 7.48014 13.6772 7.41279 13.7471 7.32013C13.817 7.22748 13.8548 7.11457 13.8548 6.99849C13.8548 6.88242 13.817 6.76951 13.7471 6.67685C13.6772 6.5842 13.579 6.51685 13.4674 6.48499H13.4604Z'
                fill={props.fill ?? '#393360'}
            />
            <path
                d='M13.4605 10.148L12.3075 9.61902C10.5005 10.447 8.03047 11.573 8.00047 11.582C7.3585 11.8386 6.64244 11.8386 6.00047 11.582C5.97247 11.573 3.50647 10.448 1.70047 9.62002L0.540468 10.148C0.428858 10.1797 0.330555 10.2467 0.260374 10.3391C0.190193 10.4315 0.151938 10.5441 0.151374 10.6601C0.150809 10.7761 0.187967 10.8892 0.257246 10.9822C0.326525 11.0753 0.424171 11.1433 0.535468 11.176V11.187L6.43547 13.878H6.44147C6.61687 13.9597 6.808 14.002 7.00147 14.002C7.19494 14.002 7.38607 13.9597 7.56147 13.878H7.56747L13.4675 11.187V11.176C13.5789 11.1438 13.6769 11.0763 13.7466 10.9836C13.8163 10.8909 13.854 10.778 13.854 10.662C13.854 10.546 13.8163 10.4332 13.7466 10.3404C13.6769 10.2477 13.5789 10.1802 13.4675 10.148H13.4605Z'
                fill={props.fill ?? '#393360'}
            />
        </g>
        <defs>
            <clipPath id='clip0_4648_2061'>
                <rect width='14' height='14' fill='white' />
            </clipPath>
        </defs>
    </svg>
);
export default Section;