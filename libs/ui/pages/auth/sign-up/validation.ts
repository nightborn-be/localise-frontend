import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { tKeys } from '../../../../i18n/keys';

const validationSchema = (t: TFunction) => {
    return Yup.object({
        email: Yup.string()
            .email(t<string>(tKeys.auth.sign_up.form.email.error.invalid))
            .required(t<string>(tKeys.auth.sign_up.form.email.error.required)),
        password: Yup.string()
            .min(6, t<string>(tKeys.auth.sign_up.form.password.error.min))
            .required(
                t<string>(tKeys.auth.sign_up.form.password.error.required),
            ),
    });
};

export default validationSchema;
