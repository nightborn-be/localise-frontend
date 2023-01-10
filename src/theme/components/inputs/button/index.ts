import { ComponentStyleConfig } from '@chakra-ui/react'

const ButtonStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
        bg: 'primary',
        color: 'white',
        _hover: {
            bg: 'secondary'
        }
    },
    secondary: {
        bg: 'secondary',
        color: 'white',
        _hover: {
            bg: 'tertiary'
        }
    }
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {},
}

export default ButtonStyles
