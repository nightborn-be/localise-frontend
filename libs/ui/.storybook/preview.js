import { Image } from '@chakra-ui/react';
import theme from '../components/contents/toggle/theme'
Object.defineProperty(Image, 'default', {
  configurable: true, value: props => <Image {...props} />
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