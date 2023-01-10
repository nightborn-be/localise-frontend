import { Button as ChakraButton } from "@chakra-ui/react";
import ButtonProps from "./props";

export const Button = (props: ButtonProps) => {
	// Attributes
	const {label} = props
	
	// Render
	return <ChakraButton {...props} >{label}</ChakraButton>;
};
