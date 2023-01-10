import { Button as ChakraButton, useStyleConfig } from '@chakra-ui/react';
import ButtonProps from './props';

export const Button = ({label, variant, ...rest}: ButtonProps) => {
	// Attributes
	const styles = useStyleConfig('Card', { variant })
	
    // Render
    return <ChakraButton __css={styles} {...rest}>{label}</ChakraButton>;
};
