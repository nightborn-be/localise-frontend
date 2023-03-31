import { StorageKey } from './storage-keys';

async function saveToStorage(key: StorageKey, value: string): Promise<void> {
    await localStorage.setItem(key, value);
}
async function getFromStorage(key: StorageKey): Promise<void> {
    await localStorage.getItem(key);
}
async function removeFromStorage(key: StorageKey): Promise<void> {
    await localStorage.removeItem(key);
}

export const storage = {
    save: saveToStorage,
    get: getFromStorage,
    remove: removeFromStorage,
};
