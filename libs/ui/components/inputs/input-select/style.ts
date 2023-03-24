function backgroundStyleSwitch(
    isFocused: boolean,
    isSelected: boolean,
    isMultiple: boolean,
    backgroundOptionColor,
    focusBackgroundOptionColor,
) {
    if (isSelected && !isMultiple) return backgroundOptionColor;
    if (isFocused) return focusBackgroundOptionColor;
    return 'none';
}
export function getSelectStyle(
    isValid,
    border,
    errorBorder,
    borderRadius,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    selectMarginLeft,
    placeholderColor,
    menuOptionWidth,
    menuRightOption,
    menuLeftOption,
    borderRadiusOption,
    isMultiple,
    selectedOptionColor,
    textOptionColor,
    dropdownArrowColor,
    paddingLeft,
    paddingRight,
    backgroundOptionColor,
    focusBackgroundOptionColor,
    font,
    paddingContainer,
) {
    return {
        valueContainer: (styles) => {
            return {
                ...styles,
                padding: paddingContainer,
                width: 'fit-content',
                height: 'fit-content',
            };
        },
        control: (styles) => {
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
        placeholder: (styles) => {
            return {
                ...styles,
                color: placeholderColor,
            };
        },

        menu: (styles) => {
            return {
                ...styles,
                width: menuOptionWidth ?? '100%',
                padding: '0rem 0.375rem 0.25rem 0.375rem',
                right: menuRightOption,
                left: menuLeftOption,
            };
        },
        option: (styles, { isFocused, isSelected }) => {
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
        input: (styles) => ({
            ...styles,
        }),
        singleValue: (styles) => ({
            ...styles,
            overflow: 'visible',
            color: color,
        }),
        dropdownIndicator: (base) => ({
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
