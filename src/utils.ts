import {useAppContext} from "lms-core";
import {lazy, useMemo} from "react";

export function asset(path: string) {
    return new URL(path, import.meta.url).href;
}

export function useAppLoader(name: string) {
    const context = useAppContext();
    const loader = context?.appLoader(name);

    return useMemo(
        () => (loader ? lazy(loader) : null),
        [loader]
    );
}