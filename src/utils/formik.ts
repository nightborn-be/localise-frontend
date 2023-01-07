export interface IFieldForm<T> {
	name: keyof T;
	value: any;
	meta?: IMetaForm;
	onChange: (value: any) => void;
}

export interface IMetaForm {
	touched?: boolean;
	error?: string;
}

// Generates the generic form with the keys of the field used
export function createForm<T extends {}>(values: T, rest: { touched: any; errors: any; setFieldValue: any; submitForm: any }): IForm<T> & IDefaultForm {
	// All keys of values
	const keys = Object.keys(values);

	// Destruct
	const { touched, errors, setFieldValue, submitForm } = rest;

	// Generate Form
	const form: any = { submitForm };

	keys.forEach((key: string) => {
		form[key] = createFormField({ values, touched, errors, setFieldValue, name: key });
	});

	return form as IForm<T> & IDefaultForm;
}

// Generates inputFieldForms
function createFormField<T>({ values, touched, errors, setFieldValue, name }: { values: any; touched: { [x: string]: any }; errors: { [x: string]: any }; setFieldValue: (arg0: any, arg1: unknown) => any; name: keyof T }): IFieldForm<T> {
	// Generate field
	const field = {
		name,
		value: values[name],
		meta: {
			touched: touched[name as string],
			error: errors[name as string],
		},
		onChange: (value: unknown) => setFieldValue(name, value),
	};

	return field;
}

export interface IDefaultForm {
	submitForm: () => void;
}

export type IForm<T extends {}> = IDefaultForm & {
	[key in keyof T]: IFieldForm<T>;
};
