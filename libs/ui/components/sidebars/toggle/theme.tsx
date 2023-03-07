import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, extendTheme } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
    container: {
        border: '2px solid',
        borderColor: 'gray.300',
        borderRadius: 'full',
        bg: 'gray.50',
        _checked: {
            bg: 'green.500',
            borderColor: 'green.500',
        },
    },
    thumb: {
        bg: 'white',
        boxShadow: '0px 0px 2px 2px rgba(0,0,0,0.1)',
    },
    track: {
        bg: 'gray.100',
        _checked: {
            bg: 'gray.100',
        },
    },
});
const customSwitchTheme = defineMultiStyleConfig({ baseStyle });

const theme = extendTheme({
    components: {
        Switch: customSwitchTheme,
    },
});

export default theme;
