import React from 'react';

const CrossClose = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={props?.width ?? '10'}
        height={props?.height ?? '10'}
        viewBox={'0 0 10 10'}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M6.48708 2.23446L4.9381 3.78222L3.38912 2.23324C3.30752 2.14825 3.20976 2.08041 3.1016 2.03368C2.99343 1.98696 2.87702 1.9623 2.7592 1.96115C2.64138 1.96 2.52451 1.98237 2.41545 2.02697C2.30639 2.07157 2.20733 2.13749 2.12408 2.22086C2.04082 2.30424 1.97505 2.4034 1.93061 2.51253C1.88617 2.62165 1.86396 2.73855 1.86529 2.85637C1.86662 2.97419 1.89145 3.09056 1.93833 3.19866C1.98521 3.30676 2.0532 3.40441 2.13831 3.48589L3.68667 5.03487L2.13953 6.58202C1.97778 6.74914 1.88818 6.97313 1.89005 7.2057C1.89192 7.43827 1.98511 7.66079 2.14953 7.82529C2.31395 7.98979 2.53642 8.08308 2.76899 8.08507C3.00156 8.08705 3.2256 7.99756 3.3928 7.83589L4.9381 6.28569L6.48586 7.83406C6.56753 7.91888 6.66529 7.98658 6.77343 8.03318C6.88157 8.07978 6.99791 8.10436 7.11566 8.10547C7.23341 8.10659 7.35019 8.08422 7.4592 8.03967C7.5682 7.99513 7.66722 7.9293 7.75049 7.84603C7.83375 7.76277 7.89958 7.66374 7.94413 7.55474C7.98867 7.44574 8.01104 7.32895 8.00993 7.21121C8.00881 7.09346 7.98423 6.97711 7.93763 6.86898C7.89103 6.76084 7.82334 6.66308 7.73851 6.5814L6.1932 5.03549L7.74035 3.48834C7.9021 3.32122 7.9917 3.09723 7.98983 2.86466C7.98796 2.63209 7.89477 2.40957 7.73035 2.24507C7.56593 2.08057 7.34346 1.98727 7.11089 1.98529C6.87832 1.98331 6.65428 2.0728 6.48708 2.23446Z'
                fill={props?.fill ?? '#F46363'}
            />
    </svg>
);
export default CrossClose;