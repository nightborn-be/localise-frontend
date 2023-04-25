import React from 'react';
import COLORS from '../../../../../constants/colors';
import { HStack, VStack } from '@chakra-ui/react';
import Page from '../../../../../components/contents/page';
import Icon from '../../../../../components/contents/icon';
import ContentSignIn from '../../component/content-signup';

import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../i18n/keys';
import { useAddMembersLogic } from './logic';
import FONTS from 'ui/constants/fonts';
import Button from 'ui/components/inputs/button';
import { EnhancerProps } from 'ui/components/inputs/button/props';
import MemberRow from './components/member-row/index';
import { IMembersType } from './types';

const AddMembersPage = () => {
    // Attributes
    const {
        handleOnSubmit,
        addEmptyMember,
        updateMemberData,
        removeMember,
        form,
    } = useAddMembersLogic();
    const { t } = useTranslation();

    // Render
    return (
        <Page bgImage='/assets/images/SignUpAddMembersBackground.png'>
            <HStack h='full' justifyContent='center' ml='8.5rem'>
                <ContentSignIn
                    title={t<string>(tKeys.auth.sign_up.add_members.form.title)}
                    handleOnContinue={() => handleOnSubmit()}
                    w='27.375rem'
                >
                    <VStack
                        spacing='0.75rem'
                        alignItems='left'
                        justifyContent={'left'}
                    >
                        {form.members.value.map(
                            (obj: IMembersType, i: number) => {
                                return (
                                    <MemberRow
                                        key={`members_id_${obj.customId}`}
                                        onChange={(email, role) => {
                                            updateMemberData(
                                                obj.customId,
                                                email,
                                                role,
                                            );
                                        }}
                                        onDelete={() => {
                                            removeMember(obj.customId);
                                        }}
                                    />
                                );
                            },
                        )}
                        <Button
                            font={FONTS.T1.T14px.Regular400.value}
                            border={`0.0625rem dashed ${COLORS.Line.value}`}
                            borderRadius='0.5rem'
                            w='20.4375rem'
                            h='2.5rem'
                            padding='0.25rem 0.75rem 0.25rem 0.5rem'
                            gap='0.25rem'
                            justifyContent='flex-start'
                            backgroundColor='transparent'
                            color={COLORS.InputText.value}
                            startEnhancer={(
                                enhancer: EnhancerProps,
                            ): React.ReactElement => (
                                <Icon
                                    name='add'
                                    stroke={
                                        enhancer.isHovered
                                            ? COLORS.Localize.Purple.T500.value
                                            : COLORS.InputText.value
                                    }
                                    width='20'
                                    height='20'
                                />
                            )}
                            hoverColor={COLORS.Localize.Purple.T500.value}
                            onClick={addEmptyMember}
                        >
                            {t<string>(
                                tKeys.auth.sign_up.add_members.form.cta
                                    .add_member,
                            )}
                        </Button>
                    </VStack>
                </ContentSignIn>
            </HStack>
        </Page>
    );
};

export default AddMembersPage;
