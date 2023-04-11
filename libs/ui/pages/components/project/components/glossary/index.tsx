import React from 'react';
import InputLabel from '../../../../../components/inputs/input-label/index';
import COLORS from '../../../../../constants/colors';
import FONTS from '../../../../../constants/fonts';
import { HStack, VStack } from '@chakra-ui/react';
import Button from '../../../../../components/inputs/button/index';
import Icon from '../../../../../components/contents/icon';
import TableHeader from '../../../../../components/table/table-header';
import TableRow from '../../../../../components/table/table-row/index';
import TableRowTerm from './components/table-row-term';
import TableTerm from './components/table/index';
import TermEditContent from './components/table-row-term/components/term-edit-content/index';
export const Glossary = () => {
    return (
        <VStack
            h='full'
            w='full'
            alignItems={'left'}
            padding='32px'
            spacing='32px'
        >
            <HStack>
                <InputLabel
                    label='Glossary'
                    labelColor={COLORS.Text.T400.value}
                    labelFont={FONTS.T1.T20px.SemiBold600.value}
                    description='Lorem ipsum dolor sit amet consectetur. Velit habitant eros nisl at risus mollis in sagittis et. Sed venenatis aenean scelerisque aliquet justo amet vestibulum.'
                    descriptionColor={COLORS.InputText.value}
                    descriptionFont={FONTS.T1.T12px.Regular400.value}
                    spacing='0.5rem'
                />
                <Button
                    w={'32px'}
                    h={'32px'}
                    minH={'32px'}
                    minW={'32px'}
                    padding={'4px 12px 4px 8px'}
                    borderRadius={'8px'}
                    font={FONTS.T1.T12px.SemiBold600.value}
                    color={COLORS.Text.T400.value}
                    hoverBackgroundColor={COLORS.Tag.value}
                    startEnhancer={() => (
                        <Icon name='add' stroke={COLORS.Text.T400.value} />
                    )}
                >
                    Export
                </Button>
            </HStack>
            <TableTerm>
                <TableRowTerm
                    keyName={'test test test test'}
                    sourceLanguage='EN'
                    targetLanguage='FR / NL'
                />
                <TermEditContent />
            </TableTerm>
        </VStack>
    );
};
