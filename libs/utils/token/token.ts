import { storage } from '../storage/storage';
import { TokenKey } from './token-keys';
interface IJWTToken {
    exp: number;
    nbf: number;
}

const saveTokenInStorage = async (tokens: {
    [key in TokenKey]: string;
}) => {
    try {
        const items = Object.entries(tokens);
        await Promise.all(
            items?.map(([key, value]) => {
                return storage.save(key, value);
            }),
        );
    } catch (err) {
        throw err;
    }
};

const getTokenFromStorage = async (token: string) => {
    try {
        return await storage.get(token);
    } catch (err) {
        throw err;
    }
};

const removeTokenFromStorage = async (token: string) => {
    try {
        return await storage.remove(token);
    } catch (err) {
        throw err;
    }
};
export const tokenStorage = {
    save: saveTokenInStorage,
    get: getTokenFromStorage,
    remove: removeTokenFromStorage,
};
