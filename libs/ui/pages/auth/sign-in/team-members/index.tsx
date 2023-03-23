import React from 'react';
import COLORS from '../../../../constants/colors';
import FONTS from '../../../../constants/fonts';
import Page from '../../../../components/contents/page';
import ContentSignIn from '../component/content-signup';
import InputSelectAndInput from '../../../../components/inputs/input-text-select';
import Icon from '../../../../components/contents/icon';
import Button from '../../../../components/inputs/button';
import { EnhancerProps } from '../../../../components/inputs/button/props';
import { useTeamMembersLogic } from './logic';

export default function TeamMembersPage() {
  // Attributes
  const { handleOnSubmit, form, values, removeMember, addMember } =
    useTeamMembersLogic();

  return (
    <Page bgImage='/assets/images/LoginBackground.jpg'>
      <ContentSignIn
        title='Invite your teammates'
        handleOnContinue={handleOnSubmit}
      >
        {/* Need to fix that, when I write the app throw a error and the other problem if I write in a input all of this when be udpated not only the concerned */}
        {values.teamMembers.map((member) => (
          <InputSelectAndInput
            selectProps={{
              color: COLORS.Localize.Purple.T500.value,
              placeholderColor: COLORS.Localize.Purple.T500.value,
              dropdownArrowColor: COLORS.Localize.Purple.T500.value,
              w: '100px',
              background: COLORS.White.T500.value,
              border: 'transparent',
              options: [
                { value: 'Admin', label: 'Admin' },
                {
                  value: 'Member',
                  label: 'Member',
                },
                {
                  value: 'Utilisateur',
                  label: 'Utilisateur',
                },
                {
                  value: 'Administrateur',
                  label: 'Administrateur',
                },
              ],
              fontWeight: '400',
              dropdownIndicator: <Icon name='dropdownIndicator' />,
              fontSize: '12px',
              lineHeight: '15px',
              padding: '0px',
              gap: '4px',
              placeholder: 'Admin',
              paddingRight: '0',
              paddingLeft: '0',
            }}
            inputProps={{
              ...form.teamMembers,
              name: `teamMembers[${values.teamMembers.length}]`,
              value: undefined,
              placeholder: 'Insert email',
              w: '100%',
              border: 'transparent',
              font: FONTS.T1.T12px.Regular400.value,
              zIndex: '10',
            }}
            w='327px'
            h='40px'
            border={`1px solid ${COLORS.Line.value}`}
            borderRadius='8px'
            backgroundColor={COLORS.White.T500.value}
            rightIcon={
              <Icon
                pointerEvents={'none'}
                name='removeSmall'
                stroke={COLORS.InputText.value}
              />
            }
            rightHoverIcon={
              <Icon
                pointerEvents={'none'}
                name='removeSmall'
                stroke={COLORS.Error.T500.value}
              />
            }
            onDelete={() => removeMember(member)}
            key={values.teamMembers.length}
          />
        ))}
        {values.teamMembers.length < 5 && (
          <Button
            border={`1px dashed ${COLORS.Line.value}`}
            borderRadius='8px'
            w='327px'
            h='40px'
            padding='4px 12px 4px 8px'
            gap='4px'
            font={FONTS.T1.T14px.Regular400.value}
            justifyContent='flex-start'
            backgroundColor='transparent'
            color={COLORS.InputText.value}
            hoverColor={COLORS.Localize.Purple.T500.value}
            startEnhancer={(enhancer: EnhancerProps): React.ReactElement => (
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
            onClick={addMember}
          >
            Add Member
          </Button>
        )}
      </ContentSignIn>
    </Page>
  );
}
