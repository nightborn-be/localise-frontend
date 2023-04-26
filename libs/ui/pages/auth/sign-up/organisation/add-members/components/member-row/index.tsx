import { IMemberRowProps } from './props';
import InputSelectAndInput from '../../../../../../../components/inputs/input-text-select/index';
import COLORS from '../../../../../../../constants/colors';
import { useTranslation } from 'react-i18next';
import { tKeys } from '../../../../../../../../i18n/keys';
import Icon from '../../../../../../../components/contents/icon';
import FONTS from '../../../../../../../constants/fonts';
import React, { useState } from 'react';
import { useMemberRowLogic } from './logic';

const MemberRow = ({ onChange, onDelete, index }: IMemberRowProps) => {
    const { t } = useTranslation();

    const {} = useMemberRowLogic();
    const [email, setEmail] = useState<string>();
    const [role, setRole] = useState<string>();
    // Renders
    return (
        <InputSelectAndInput
            selectProps={{
                color: COLORS.Localize.Purple.T500.value,
                placeholderColor: COLORS.Localize.Purple.T500.value,
                dropdownArrowColor: COLORS.Localize.Purple.T500.value,
                w: '6.25rem',
                background: COLORS.White.T500.value,
                border: 'transparent',
                options: [
                    {
                        value: t<string>(
                            tKeys.auth.sign_up.add_members.form.role.admin,
                        ),
                        label: t<string>(
                            tKeys.auth.sign_up.add_members.form.role.admin,
                        ),
                    },
                    {
                        value: t<string>(
                            tKeys.auth.sign_up.add_members.form.role.developer,
                        ),
                        label: t<string>(
                            tKeys.auth.sign_up.add_members.form.role.developer,
                        ),
                    },
                    {
                        value: t<string>(
                            tKeys.auth.sign_up.add_members.form.role.translator,
                        ),
                        label: t<string>(
                            tKeys.auth.sign_up.add_members.form.role.translator,
                        ),
                    },
                ],
                fontWeight: '400',
                dropdownIndicator: <Icon name='dropdownIndicator' />,
                fontSize: '0.75rem',
                lineHeight: '0.9375rem',
                padding: '0rem',
                gap: '0.25rem',
                placeholder: 'Admin',
                paddingRight: '0',
                paddingLeft: '0',
                paddingContainer: '0.625rem',
                font: FONTS.T1.T12px.Regular400.value,
                onChange: (v: any) => {
                    setRole(v.value);
                    onChange(email, role);
                },
            }}
            inputProps={{
                name: '',
                value: undefined,
                onChange: (v) => {
                    setEmail(v);
                    onChange(email, role);
                },
                placeholder: t<string>(
                    tKeys.auth.sign_up.add_members.form.email.placeholder,
                ),
                w: '100%',
                border: 'transparent',
                font: FONTS.T1.T12px.Regular400.value,
                zIndex: '10',
            }}
            w='20.4375rem'
            h='2.5rem'
            border={`0.0625rem solid ${COLORS.Line.value}`}
            borderRadius='0.5rem'
            backgroundColor={COLORS.White.T500.value}
            onDelete={onDelete}
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
            index={index}
        />
    );
};
export default MemberRow;
