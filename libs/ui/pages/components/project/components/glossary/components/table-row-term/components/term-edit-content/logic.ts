import { useFormik } from "formik";
import { createForm } from "utils/formik";
import { ITermEditContentLogicProps, ITermEditContentProps } from "./props";
import { ITermEditContentForm, TermEditContentLogicType } from './types';
export const useTermEditContentLogic =
    ({ term }: ITermEditContentLogicProps): TermEditContentLogicType => {
        // Formik
        const { values, ...rest } = useFormik<ITermEditContentForm>({
            initialValues: {
                key: term.name as string,
                description: term.description as string,
            },
            onSubmit: () => { },
            validateOnChange: false,
        });

        const form = createForm(values, rest);
        return { form };
    };
