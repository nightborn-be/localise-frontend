import * as nextImage from 'next/image';
import theme from '../components/pickers/toggle/theme'
Object.defineProperty(nextImage, 'default', {
  configurable: true, value: props => <img {...props} />
});
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  chakra: {
    theme,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}