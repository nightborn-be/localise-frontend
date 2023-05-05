import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { tKeys } from '../../../../../i18n/keys';

const validationSchema = (t: TFunction) => {
    return Yup.object({
        organisationName: Yup.string().required(
            t<string>(tKeys.auth.sign_up.organisation.form.name.error.required),
        ),
    });
};

export default validationSchema;
