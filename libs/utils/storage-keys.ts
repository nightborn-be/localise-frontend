export type StorageKey = typeof StorageKey[keyof typeof StorageKey];

export const StorageKey = {
    ID_TOKEN: 'id_token',
    ACCESS_TOKEN: 'access_token',
    REFRESH_TOKEN: 'refresh_token',
    EMAIL: 'Email'
}