// theme/index.js
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// Global style overrides
import styles from './styles';

// Foundational style overrides
import borders from './foundations/borders';

// Component style overrides
import Button from './components/inputs/button';

// Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: false,
}

const overrides = {
    styles,
    borders,
    // Other foundational style overrides go here
    components: {
        Button,
        // Other components go here
    },
};

const theme = extendTheme(overrides);

export default theme