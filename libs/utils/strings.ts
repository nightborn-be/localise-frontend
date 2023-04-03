// Capitalize a string
export function capitalize(s?: string): string | undefined {
    if (!s?.length) return s;

    return s[0].toUpperCase() + s.slice(1);
}

export const strings = {
    capitalize,
};
