import { storage } from '../storage/storage';
import { TokenKey } from './token-keys';
import { toStorageKey } from './mappers';
interface IJWTToken {
    exp: number;
    nbf: number;
}

const saveTokenInStorage = (tokens: {
    [key in TokenKey]: TokenKey;
}) => {
    const items = Object.entries(tokens);
    items?.forEach(([key, value]) => {
        storage.save(toStorageKey(key), value);
    });
};

const getTokenFromStorage = (token: TokenKey) => {
    return storage.get(toStorageKey(token));
};

const removeTokenFromStorage = (token: TokenKey) => {
    storage.remove(toStorageKey(token));
};
export const tokenStorage = {
    save: saveTokenInStorage,
    get: getTokenFromStorage,
    remove: removeTokenFromStorage,
};
