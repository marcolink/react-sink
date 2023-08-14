import { useEffect, useMemo } from 'react';

export const useAbortOnUnmount = () => {
    const abortController = useMemo(() => new AbortController(), []);
    const abortSignal = useMemo(() => abortController.signal, [abortController]);

    useEffect(() => {
        return () => abortController.abort();
    }, [abortController]);

    return abortSignal;
};