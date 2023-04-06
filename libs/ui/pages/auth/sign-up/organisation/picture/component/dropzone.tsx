import React, { useCallback } from 'react';
import { HStack } from '@chakra-ui/react';
import { IDropzoneProps } from './props';
import { useDropzone } from 'react-dropzone';
import COLORS from '../../../../../../constants/colors';
import Button from '../../../../../../components/inputs/button';
import FONTS from '../../../../../../constants/fonts';
import Icon from '../../../../../../components/contents/icon';

const Dropzone = ({ onDrag, children }: IDropzoneProps) => {
    // Attributes
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            const reader = new FileReader();
            reader.onload = () => {
                onDrag && onDrag(reader.result);
            };
            reader.readAsArrayBuffer(acceptedFiles[0]);
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
            {children}
        </HStack>
    );
};

export default Dropzone;
