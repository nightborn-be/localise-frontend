import { InputProps } from '@chakra-ui/react';
import SearchbarProps from '../searchbar/props';
export default interface SearchbarTagProps extends InputProps {
    searchbar: SearchbarProps,
    tags?: Array<JSX.Element>
}
