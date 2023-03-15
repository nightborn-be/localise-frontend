import { InputProps } from '@chakra-ui/react';
import { LanguageDTO } from './types';
export default interface ISearchTargetLanguagesProps extends InputProps {
    title?: string,
    description?: string,
    tags?: Array<LanguageDTO>
}
