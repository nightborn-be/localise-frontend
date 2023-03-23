import React, { useState, useCallback } from 'react';
import { Box, HStack, Image } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import Text from '../text';
import FONTS from '../../../constants/fonts';
import { IDropzoneProps } from './props';
import Button from '../../inputs/button';
import { EnhancerProps } from '../../inputs/button/props';
import Icon from '../icon';
import { useDropzone } from 'react-dropzone';

const Dropzone = ({ onDrag }: IDropzoneProps) => {
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
          Add a picture
        </Button>
      </HStack>
    );
};

export default Dropzone;
