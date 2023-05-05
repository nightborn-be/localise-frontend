function backgroundStyleSwitch(
    isFocused: boolean,
    isSelected: boolean,
    isMultiple: boolean,
    backgroundOptionColor: string,
    focusBackgroundOptionColor: string,
) {
    if (isSelected && !isMultiple) return backgroundOptionColor;
    if (isFocused) return focusBackgroundOptionColor;
    return 'none';
}
export function getSelectStyle(
    isValid: any,
    border: any,
    errorBorder: any,
    borderRadius: any,
    fontSize: any,
    fontWeight: any,
    fontFamily: any,
    color: any,
    selectMarginLeft: any,
    placeholderColor: any,
    menuOptionWidth: any,
    menuRightOption: any,
    menuLeftOption: any,
    borderRadiusOption: any,
    isMultiple: any,
    selectedOptionColor: any,
    textOptionColor: any,
    dropdownArrowColor: any,
    paddingLeft: any,
    paddingRight: any,
    backgroundOptionColor: any,
    focusBackgroundOptionColor: any,
    font: any,
    paddingContainer: any,
) {
    return {
        valueContainer: (styles: any) => {
            return {
                ...styles,
                padding: paddingContainer,
                width: 'fit-content',
                height: 'fit-content',
            };
        },
        control: (styles: any) => {
            return {
                ...styles,
                border: isValid ? border : errorBorder,
                borderRadius: borderRadius,
                '&:hover': isValid ? border : errorBorder,
                ...font,
                color: color,
                backgroundColor: 'transparent',
                boxShadow: 'none',
                marginLeft: selectMarginLeft,
                minHeight: '0px',
            };
        },
        placeholder: (styles: any) => {
            return {
                ...styles,
                color: placeholderColor,
            };
        },

        menu: (styles: any) => {
            return {
                ...styles,
                width: menuOptionWidth ?? '100%',
                padding: '0rem 0.375rem 0.25rem 0.375rem',
                right: menuRightOption,
                left: menuLeftOption,
                zIndex: '2000',
            };
        },
        option: (styles: any, { isFocused, isSelected }: any) => {
            return {
                ...styles,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '0.25rem',
                ':active': { backgroundColor: 'none' },
                backgroundColor: backgroundStyleSwitch(
                    isFocused,
                    isSelected,
                    isMultiple,
                    backgroundOptionColor,
                    focusBackgroundOptionColor,
                ),
                fontSize: fontSize,
                fontWeight: fontWeight,
                fontFamily: fontFamily,
                borderRadius: borderRadiusOption,
                color:
                    isSelected && !isMultiple
                        ? selectedOptionColor
                        : textOptionColor,
            };
        },
        input: (styles: any) => ({
            ...styles,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            overflow: 'visible',
            color: color,
        }),
        dropdownIndicator: (base: any) => ({
            ...base,
            color: dropdownArrowColor,
            backgroundColor: 'transparent',
            '&:hover': { color: dropdownArrowColor },
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
            height: 'full',
            justifyContent: 'center',
            alignItem: 'center',
        }),
    };
}
