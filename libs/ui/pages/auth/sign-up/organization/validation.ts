import * as Yup from 'yup';

const schema = Yup.object({
    organizationName: Yup.string().required('Name is required'),
});

export default schema;