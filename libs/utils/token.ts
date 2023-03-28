import { storage } from './storage';
import { StorageKey } from './storage-keys'
interface IJWTToken {
    exp: number;
    nbf: number;
}

export enum Token {
    ID_TOKEN = 'id_token'
}

const saveTokenInStorage = async (tokens: {
    [key in Token]: string;
}) => {
    try {
        const items = Object.entries(tokens);
        await Promise.all(
            items?.map(([key, value]) => {
                return storage.save(key, value);
            }),
        );
    } catch (err) {
        throw err
    }
};

const getTokenFromStorage = async (token: Token) => {
    try {
        return await storage.get(token);
    } catch (err) {
        throw err
    }
};

const removeTokenFromStorage = async (token: Token) => {
    try {
        return await storage.remove(token);
    } catch (err) {
        throw err
    }
};
export const tokenStorage = {
    save: saveTokenInStorage,
    get: getTokenFromStorage,
    remove: removeTokenFromStorage,
}