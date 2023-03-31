import * as Yup from 'yup';
import { TFunction } from 'i18next';
import { tKeys } from '../../../../i18n/keys';
const validationSchema = (t: TFunction) => {
    return Yup.object({
        email: Yup.string()
            .email(t<string>(tKeys.auth.sign_in.form.email.error.invalid))
            .required(t<string>(tKeys.auth.sign_in.form.email.error.required)),
        password: Yup.string().required(
            t<string>(tKeys.auth.sign_in.form.password.error.required),
        ),
    });
};
export default validationSchema;
