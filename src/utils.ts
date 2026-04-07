export function asset(path: string) {
    return new URL(path, import.meta.url).href;
}