import { storage } from '../storage/storage';
import { TokenKey } from './token-keys';
import { toStorageKey } from './mappers';
interface IJWTToken {
    exp: number;
    nbf: number;
}

const saveTokenInStorage = async (tokens: {
    [key in TokenKey]: TokenKey;
}) => {
        const items = Object.entries(tokens);
        await Promise.all(
            items?.map(([key, value]) => {
                storage.save(toStorageKey(key), value);
            }),
        );
};

const getTokenFromStorage = async (token: TokenKey) => {
    await storage.get(toStorageKey(token));
};

const removeTokenFromStorage = async (token: TokenKey) => {
    await storage.remove(toStorageKey(token));
};
export const tokenStorage = {
    save: saveTokenInStorage,
    get: getTokenFromStorage,
    remove: removeTokenFromStorage,
};
