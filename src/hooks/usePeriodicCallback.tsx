import {useEffect, useRef} from "react";

export function usePeriodicCallback<T>(
    callback: () => Promise<T> | (() => void),
    delay: number | null
) {
    const savedCallback = useRef(callback);

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the timeout loop.
    useEffect(() => {
        let id: ReturnType<typeof setTimeout> | undefined;

        function tick() {
            const currentCallback = savedCallback.current();
            if (currentCallback instanceof Promise) {
                currentCallback.then(() => {
                    if (delay !== null) {
                        id = setTimeout(tick, delay);
                    }
                });
            } else {
                if (delay !== null) {
                    id = setTimeout(tick, delay);
                }
            }
        }

        if (delay !== null) {
            id = setTimeout(tick, delay);
            return () => {
                if (id !== undefined) {
                    clearTimeout(id);
                }
            };
        }
    }, [delay]);
}
