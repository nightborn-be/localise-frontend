import { Image } from '@chakra-ui/react';
Object.defineProperty(Image, 'default', {
  configurable: true, value: props => <Image {...props} />
});
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}