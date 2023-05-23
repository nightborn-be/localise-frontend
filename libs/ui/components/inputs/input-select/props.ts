import { InputProps } from '@chakra-ui/react';
import React from 'react';
import { ActionMeta, MultiValue, SingleValue } from 'react-select';
import { Font } from '../../../constants/fonts';

type SelectProps =
    | {
          options?: Array<Options>;
          isMultiple?: never;
          onChange?: (
              event: SingleValue<Options>,
              actionMeta: ActionMeta<Options>,
          ) => void;
      }
    | {
          options?: Array<Options>;
          isMultiple?: boolean;
          onChange?: (
              event: MultiValue<Options>,
              actionMeta: ActionMeta<Options>,
          ) => void;
      };

export type IInputSelectProps = Omit<InputProps, 'onChange' | 'defaultValue'> &
    SelectProps & {
        label?: string;
        description?: string;
        isValid?: boolean;
        errorBorder?: string;
        placeholderColor?: string;
        options?: Array<Options>;
        dropdownArrowColor?: string;
        backgroundOptionColor?: string;
        dropdownIndicator?: React.ReactElement;
        isSearchable?: boolean;
        menuOptionWidth?: string;
        focusBackgroundOptionColor?: string;
        borderRadiusOption?: string;
        selectedOptionColor?: string;
        textOptionColor?: string;
        menuRightOption?: string;
        menuLeftOption?: string;
        selectMarginLeft?: string;
        isMultiple?: boolean;
        font?: Font;
        paddingContainer?: string;
    defaultValue?: Options
    };

export type Options = {
    value: string;
    label: string;
    icon?: React.ReactElement;
};
