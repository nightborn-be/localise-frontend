import { SearchBarOption } from '../../../../../../components/inputs/searchbar/props';
import { Font } from '../../../../../../constants/fonts';

export interface ISearchBoxSettingSectionProps {
    targetLanguagesRef?: React.RefObject<HTMLDivElement>;
    activeKeys: string[];
    value: string;
    setValue: (value: string) => void;
    filter: (value: string) => SearchBarOption<string>[];
    onTagDelete: (value: string) => void;
    onCheck: (value: string) => void;
}
