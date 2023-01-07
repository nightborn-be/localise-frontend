import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = ({ label }: { label: string }) => {
	return <ChakraButton>{label}</ChakraButton>;
};
