import React from 'react';
import { VStack } from '@chakra-ui/react';
import InputLabel from '../../../../../../components/inputs/input-label';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../../i18n/keys';
import COLORS from '../../../../../../constants/colors';
import FONTS from '../../../../../../constants/fonts';
import { IProjectColorsSettingSectionProps } from './props';
import ProjectColorPicker from '../../../../../../components/pickers/project-color-picker';

export const ProjectColorsSettingSection = ({
    projectColorsRef,
    currentSelectedColor,
    setCurrentSelectedColor,
}: IProjectColorsSettingSectionProps) => {
    // Attributes
    const { t } = useTranslation();
    // Render
    return (
        <VStack
            alignItems={'left'}
            spacing='1.25rem'
            w='full'
            padding={'0rem 2rem 0rem 1.25rem'}
            ref={projectColorsRef}
        >
            <InputLabel
                label={t<string>(
                    tKeys.home.project.tab.settings.content.project_colors
                        .title,
                )}
                description={t<string>(
                    tKeys.home.project.tab.settings.content.project_colors
                        .description,
                )}
                labelColor={COLORS.Text.T400.value}
                labelFont={FONTS.T1.T16px.SemiBold600.value}
                descriptionColor={COLORS.InputText.value}
                descriptionFont={FONTS.T1.T12px.Regular400.value}
                spacing='0.5rem'
            />
            <ProjectColorPicker
                bg={COLORS.BG.value}
                borderRadius='0.5rem'
                border={`0.0625rem solid ${COLORS.Stroke.value}`}
                padding='0.75rem'
                w='full'
                widthIcon='20'
                heightIcon='20'
                colorPickerSize='2.5rem'
                selected={currentSelectedColor}
                onSelect={setCurrentSelectedColor}
            />
        </VStack>
    );
};

export default ProjectColorsSettingSection;
