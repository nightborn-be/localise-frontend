import React from 'react';

const ArrowUp = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props?.width ?? '10'}
        height={props?.height ?? '6'}
        viewBox={props?.viewBox ?? '0 0 10 6'}
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M4.01062 0.472054L0.296337 4.04348C0.147182 4.20829 0.0490533 4.41284 0.0138541 4.63231C-0.021346 4.85179 0.0078965 5.07676 0.098033 5.27995C0.18817 5.48314 0.335328 5.6558 0.521658 5.777C0.707989 5.8982 0.925485 5.96274 1.14777 5.96277L8.84919 5.96277C9.07079 5.96212 9.28747 5.89737 9.4731 5.77635C9.65873 5.65532 9.80539 5.48318 9.89539 5.28068C9.98539 5.07818 10.0149 4.85397 9.98033 4.63508C9.94577 4.41619 9.84863 4.21198 9.70062 4.04705L5.98634 0.472054C5.86115 0.334503 5.70862 0.224611 5.53851 0.149415C5.36841 0.0742198 5.18447 0.0353785 4.99848 0.0353785C4.81249 0.0353785 4.62856 0.0742197 4.45845 0.149415C4.28834 0.224611 4.13581 0.334503 4.01062 0.472054Z'
            fill={props.fill}
        />
    </svg>
);
export default ArrowUp;
