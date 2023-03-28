import { saveToStorage, getFromStorage, removeFromStorage } from "./storage";

interface IJWTToken {
    exp: number;
    nbf: number;
}

export enum Token {
    ID_TOKEN = 'id_token',
    ACCESS_TOKEN = 'access_token',
    REFRESH_TOKEN = 'refresh_token'
}

export const saveTokenInStorage = async (tokens: {
    [key in Token]: string
}) => {
    try {
        const items = Object.entries(tokens)
        await Promise.all(items?.map(async ([key, value]) => { await saveToStorage(key, value) }))
    } catch (err) {
        console.error('Error when storing tokens :', err)
    }
}

export const getTokenFromStorage = async (token: Token) => {
    try {
        return await getFromStorage(token);
    } catch (err) {
        console.log('Error when retrieving token :', err)
    }
    return null;
}

export const deleteTokenFromStorage = async (token: Token) => {
    try {
        return await removeFromStorage(token)
    } catch (err) {
        console.log('Error when deleting token :', err)
    }
    return null;
}

