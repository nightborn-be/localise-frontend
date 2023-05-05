import { useEffect } from 'react';
export default function useOnPressKeyEvent(keyCode: string[], execute: () => Promise<void> | void) {
    const handleOnKeyPress = (event: KeyboardEvent) => {
        if (
            keyCode.includes(event.code)
        ) {
            event.preventDefault();
            execute();
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', handleOnKeyPress);

        return () => {
            document.removeEventListener('keydown', handleOnKeyPress);
        };
    }, [handleOnKeyPress]);
} 