import { CreateUserDTO } from '../../../../gateways/resource-api/types/index';

export const toCreateUserDTO = (
    email: string,
    password: string,
): CreateUserDTO => {
    return {
        email: email,
        password: password,
    };
};
