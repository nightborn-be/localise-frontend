import React, { useState } from 'react';
import { VStack } from '@chakra-ui/react';
import COLORS from '../../../constants/colors';
import SidebarProject from '../sidebar-project';
import FONTS from '../../../constants/fonts';
import Icon from '../../contents/icon';

export default function TargetLanguage() {
    //Attributes
    const [languages, setLanguages] = useState<Array<string>>([
        'French',
        'Dutch',
        'Chinese',
        'German',
        'Italian',
    ]);

    //Render
    return (
        <>
            <VStack
                alignItems={'left'}
                padding={'0.25rem 0.375rem 0.5rem'}
                overflowY='scroll'
                gap='0.5rem'
                width='34.375rem'
                maxH={'11.75rem'}
                height='11.75rem'
                border={`0.0625rem solid ${COLORS.Line.value}`}
                borderRadius={'0.5rem'}
                alignContent={'space-between'}
                boxShadow='0rem 0.125rem 0.5rem rgba(40, 41, 61, 0.04), 0rem 1.625rem 2.125rem rgba(96, 97, 112, 0.06)'
            >
                {languages.map((lang, i) => (
                    <SidebarProject
                        key={i}
                        startEnhancer={<Icon name='checkboxOff' />}
                        marginLeftText='0.75rem'
                        w='33.625rem'
                        h='2rem'
                        text={lang}
                        textFont={FONTS.T1.T12px.Medium500.value}
                        textColor={COLORS.Text.T400.value}
                    />
                ))}
            </VStack>
        </>
    );
}
