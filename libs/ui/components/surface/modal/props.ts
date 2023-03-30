export interface IModalProps {
    children?: React.ReactElement | React.ReactElement[]
    title?: string
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    handleOnSubmit: () => void
}
