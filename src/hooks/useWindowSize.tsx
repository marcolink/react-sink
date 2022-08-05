import {useCallback, useEffect, useState} from "react";
import {Size} from "../types";

const getWindowSize = (): Size => {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

export const useWindowSize = (): Size => {
    const [windowSize, setWindowSize] = useState<Size>(() => getWindowSize());

    const handleResize = useCallback(() => {
        setWindowSize(getWindowSize());
    }, [setWindowSize]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize
}
