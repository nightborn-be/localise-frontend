
// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import borders from './foundations/borders'

// Component style overrides
import ButtonStyle from './components/inputs/button'

const overrides = {
  styles,
  borders,
  // Other foundational style overrides go here
  components: {
    ButtonStyle,
    // Other components go here
  },
}

export default extendTheme(overrides)