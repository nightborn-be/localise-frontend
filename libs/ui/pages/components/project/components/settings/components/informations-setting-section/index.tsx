import React from 'react';
import { VStack } from '@chakra-ui/react';
import { IInformationSettingSectionProps } from './props';
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
import useToast from 'ui/components/progress-validation/toast';
import { ToastType } from 'ui/components/progress-validation/toast/types';

export const InformationSettingSection = ({
    informationsRef,
    form,
    deleteProjectDisclosure,
    projectId,
}: IInformationSettingSectionProps) => {
    // Attributes
    const { t } = useTranslation();
    const toast = useToast();
    // Render
    return (
        <VStack
            alignItems={'left'}
            spacing='1.25rem'
            w='full'
            padding={'2rem 2rem 0rem 1.25rem'}
            ref={informationsRef}
        >
            <InputLabel
                label={t<string>(
                    tKeys.home.project.tab.settings.content.informations.title,
                )}
                description={t<string>(
                    tKeys.home.project.tab.settings.content.informations
                        .description,
                )}
                labelColor={COLORS.Text.T400.value}
                labelFont={FONTS.T1.T16px.SemiBold600.value}
                descriptionColor={COLORS.InputText.value}
                descriptionFont={FONTS.T1.T12px.Regular400.value}
                spacing='0.5rem'
            />
            <VStack w='full'>
                <Input
                    padding='0.625rem'
                    w='full'
                    placeholder=''
                    font={FONTS.T1.T12px.Regular400.value}
                    labelColor={COLORS.Text.T500.value}
                    labelFont={FONTS.T1.T14px.Medium500.value}
                    {...form.projectName}
                />
                <InputProjectKey
                    color={COLORS.Text.T500.value}
                    text={t<string>(
                        tKeys.home.project.tab.settings.content.informations
                            .project_key.title,
                    )}
                    border={`0.0625rem solid ${COLORS.Stroke.value}`}
                    borderRadius='0.5rem'
                    padding='0rem'
                    w='full'
                    h='2.5rem'
                    font={FONTS.T1.T12px.Regular400.value}
                    value={projectId}
                    rightElement={
                        <ButtonIcon
                            size={ButtonSize.XS}
                            backgroundColor={COLORS.BG.value}
                            hoverBackgroundColor={COLORS.Line.value}
                            aria-label=''
                            handleOnClick={() => {
                                navigator.clipboard.writeText(projectId);
                                toast({
                                    type: ToastType.INFOMRATION,
                                    title: t<string>(
                                        tKeys.home.project.tab.settings.content
                                            .informations.toast.copy_message,
                                    ),
                                    delay: 2000,
                                });
                            }}
                        >
                            <Icon name='copyClipBoardLarge' />
                        </ButtonIcon>
                    }
                />
            </VStack>
            <Button
                onClick={deleteProjectDisclosure.onOpen}
                color={COLORS.InputText.value}
                font={FONTS.T1.T12px.Medium500.value}
                w={'fit-content'}
                h={'fit-content'}
                _active={{ bg: 'transparent' }}
                alignItems='left'
                justifyContent={'left'}
                borderRadius='0rem'
                padding='0rem'
                gap='0.5rem'
                backgroundColor='transparent'
                hoverColor={COLORS.Error.T500.value}
                startEnhancer={(
                    enhancer: EnhancerProps,
                ): React.ReactElement => (
                    <Icon
                        name='trashXs'
                        fill={
                            enhancer.isHovered
                                ? COLORS.Error.T500.value
                                : COLORS.InputText.value
                        }
                    />
                )}
            >
                {t<string>(
                    tKeys.home.project.tab.settings.content.informations.cta
                        .delete_project,
                )}
            </Button>
        </VStack>
    );
};

export default InformationSettingSection;
