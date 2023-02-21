export default interface IButtonProps {
    text: string,
    size: ButtonSize,
    color: string,
    backgroundColor?: string,
    border?: string,
    borderRadius?: string,
    w: string,
    h: string,
    startEnhancer?: React.ReactElement,
    endEnhancer?: React.ReactElement,
    hoverTextColor: string,
    hoverBackgroundColor?: string,
    handleOnClick?: () => void,
}

export enum ButtonSize {
    XS = "28px", SMALL = "32px", REGULAR = "36px", LARGE = "40px", XL = "44px"
}