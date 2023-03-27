import * as Yup from 'yup';
import { TFunction } from 'i18next';
import { tKeys } from '../../../../i18n/keys';
const validationSchema = (t: TFunction) => {
    return Yup.object({
        email: Yup.string()
            .email(t<string>(tKeys.auth.sign_in.form.email.invalid.error))
            .required(t<string>(tKeys.auth.sign_in.form.email.required.error)),
        password: Yup.string().required(
            t<string>(tKeys.auth.sign_in.form.password.required.error),
        ),
    });
};
export default validationSchema;
