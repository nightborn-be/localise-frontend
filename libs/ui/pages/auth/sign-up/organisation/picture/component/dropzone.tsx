import React, { useCallback } from 'react';
import { HStack } from '@chakra-ui/react';
import { IDropzoneProps } from './props';
import { useDropzone } from 'react-dropzone';
import COLORS from '../../../../../../constants/colors';
import Button from '../../../../../../components/inputs/button';
import FONTS from '../../../../../../constants/fonts';
import Icon from '../../../../../../components/contents/icon';

const Dropzone = ({
    onDrag,
    label,
    h = '6.25rem',
    w = '6.25rem',
    font = FONTS.T1.T12px.Medium500.value,
    iconHeight = '24',
    iconWidth = '24',
    spacing = '0.4375rem',
}: IDropzoneProps) => {
    // Attributes
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            const reader = new FileReader();
            reader.onload = () => {
                onDrag &&
                    onDrag(
                        URL.createObjectURL(acceptedFiles[0]),
                        reader.result,
                    );
            };
            reader.readAsBinaryString(acceptedFiles[0]);
        },
        [onDrag],
    );

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: { 'image/*': ['.jpeg', '.png', '.jpg'] },
    });

    // Render
    return (
        <HStack {...getRootProps()} spacing='0'>
            <input {...getInputProps()} />
            <Button
                border={`0.125rem dashed ${COLORS.InputText.value}`}
                font={font}
                borderRadius='1rem'
                w={w}
                h={h}
                maxH={h}
                maxW={w}
                direction='column'
                backgroundColor='transparent'
                color={COLORS.InputText.value}
                whiteSpace='pre-line'
                spacing={spacing}
                startEnhancer={(): React.ReactElement => (
                    <Icon
                        name='uploadCloud'
                        stroke={COLORS.InputText.value}
                        width={iconWidth}
                        height={iconHeight}
                    />
                )}
            >
                {label}
            </Button>
        </HStack>
    );
};

export default Dropzone;
