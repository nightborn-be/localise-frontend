import Icons from './icons';
import React from "react"
interface IconProps extends React.SVGProps<SVGSVGElement> {
	name: keyof typeof Icons;
}

export default IconProps;
