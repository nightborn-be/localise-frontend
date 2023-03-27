import { StorageKey } from "./storage-keys";

export async function saveToStorage(key: StorageKey, value: string): Promise<void> {
    await localStorage.setItem(key, value)
}
export async function getFromStorage(key: StorageKey): Promise<void> {
    await localStorage.getItem(key)
}
export async function removeFromStorage(key: StorageKey): Promise<void> {
    await localStorage.removeItem(key)
}


