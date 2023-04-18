import { Box, HStack, Image } from '@chakra-ui/react';
import { IOrganisationPictureProps } from './props';
import COLORS from '../../../../../../../constants/colors';
import Text from '../../../../../../../components/contents/text';
import Dropzone from '../../../../../../auth/sign-up/organisation/picture/component/dropzone';
import ButtonIcon from '../../../../../../../components/inputs/button-icon';
import Icon from '../../../../../../../components/contents/icon';
import React from 'react';
import { ButtonSize } from '../../../../../../../components/inputs/button-icon/types';
import FONTS from '../../../../../../../constants/fonts';
import { getInitialeName } from '../../../../../../../../utils/functions';

const OrganisationPicture = ({
    pictureUrl,
    organisationName,
    onDrag,
}: IOrganisationPictureProps) => {
    // Render
    return (
        <HStack
            position={'relative'}
            minW={'7.5rem'}
            width='7.5rem'
            height={'7.5rem'}
            borderRadius='6.25rem'
            justifyContent={'center'}
            bg={COLORS.Line.value}
        >
            {pictureUrl ? (
                <Image
                    src={pictureUrl}
                    alt=''
                    width='7.5rem'
                    height={'7.5rem'}
                    borderRadius='6.25rem'
                />
            ) : (
                <Text
                    font={FONTS.T1.T44px.Medium500.value}
                    color={COLORS.Text.T400.value}
                >
                    {getInitialeName(organisationName)}
                </Text>
            )}
            <Box position={'absolute'} top='5.3125rem' bottom='0' right='0'>
                <Dropzone onDrag={onDrag}>
                    <ButtonIcon
                        size={ButtonSize.SMALL}
                        border={`0.25rem solid ${COLORS.White.T500.value}`}
                        borderRadius='3.75rem'
                        bg={COLORS.Line.value}
                    >
                        <Icon name='edit' width='12' height='12' />
                    </ButtonIcon>
                </Dropzone>
            </Box>
        </HStack>
    );
};

export default OrganisationPicture;
