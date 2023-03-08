import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, extendTheme } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
    container: {
        w: '32px',
        h: '20px',
    },
    thumb: {
        w: '12px',
        h: '12px',
        bg: 'white',
        mt: '2px',
        ml: '2px',
        borderRadius: '100%',
    },
    track: {
        bg: COLORS.Line.value,
        _checked: {
            bg: COLORS.Success.T500.value,
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
