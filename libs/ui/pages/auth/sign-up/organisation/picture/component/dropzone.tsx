import React, { useCallback } from 'react';
import { HStack } from '@chakra-ui/react';
import { IDropzoneProps } from './props';
import { useDropzone } from 'react-dropzone';
import COLORS from '../../../../../../constants/colors';
import Button from '../../../../../../components/inputs/button';
import FONTS from '../../../../../../constants/fonts';
import Icon from '../../../../../../components/contents/icon';

const Dropzone = ({ onDrag, label }: IDropzoneProps) => {
    // Attributes
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            onDrag && onDrag(URL.createObjectURL(acceptedFiles[0]));
        },
        [onDrag],
    );

    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: { 'image/*': ['.jpeg', '.png', '.jpg'] },
    });

    // Render
    return (
        <HStack {...getRootProps()}>
            <input {...getInputProps()} />
            <Button
                border={`0.125rem dashed ${COLORS.InputText.value}`}
                font={FONTS.T1.T12px.Medium500.value}
                borderRadius='1rem'
                w='6.25rem'
                h='6.25rem'
                maxH='6.25rem'
                maxW='6.25rem'
                direction='column'
                backgroundColor='transparent'
                color={COLORS.InputText.value}
                whiteSpace='pre-line'
                spacing='0.4375rem'
                startEnhancer={(): React.ReactElement => (
                    <Icon
                        name='uploadCloud'
                        stroke={COLORS.InputText.value}
                        width='24'
                        height='24'
                    />
                )}
            >
                {label}
            </Button>
        </HStack>
    );
};

export default Dropzone;
