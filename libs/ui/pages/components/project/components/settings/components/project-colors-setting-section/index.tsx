import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import InputLabel from '../../../../../../../components/inputs/input-label';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../../../i18n/keys';
import COLORS from '../../../../../../../constants/colors';
import FONTS from '../../../../../../../constants/fonts';
import Input from '../../../../../../../components/inputs/input';
import Button from '../../../../../../../components/inputs/button';
import { EnhancerProps } from '../../../../../../../components/inputs/button/props';
import Icon from '../../../../../../../components/contents/icon';
import InputProjectKey from '../../../../../../../components/inputs/input-project-key';
import ButtonIcon from '../../../../../../../components/inputs/button-icon';
import { ButtonSize } from '../../../../../../../components/inputs/button-icon/types';
import { IProjectColorsSettingSectionProps } from './props';
import ProjectColorPicker from '../../../../../../../components/pickers/project-color-picker';

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
            padding={'0px 32px 0px 20px'}
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
                borderRadius='8px'
                border={`1px solid ${COLORS.Stroke.value}`}
                padding='12px'
                w='full'
                widthIcon='20'
                heightIcon='20'
                colorPickerSize='40px'
                selected={currentSelectedColor}
                onSelect={setCurrentSelectedColor}
            />
        </VStack>
    );
};

export default ProjectColorsSettingSection;
