import { StorageKey } from "../storage/storage-keys"
import { TokenKey } from "./token-keys"

export const toStorageKey = (token: TokenKey): StorageKey => {
    switch (token) {
        case TokenKey.ID_TOKEN: return StorageKey.ID_TOKEN
        default:
            throw new Error("Invalid token key")
    }
}