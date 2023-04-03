import { StorageKey } from './storage-keys';

function saveToStorage(key: StorageKey, value: string) {
    localStorage.setItem(key, value);
}
function getFromStorage(key: StorageKey) {
    if (typeof window !== 'undefined')
        return localStorage.getItem(key);
}
function removeFromStorage(key: StorageKey) {
    localStorage.removeItem(key);
}

export const storage = {
    save: saveToStorage,
    get: getFromStorage,
    remove: removeFromStorage,
};
