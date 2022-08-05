import {useCallback} from "react";
import {useAllPropsMatch} from "./useAllPropsMatch";

export const useAllBoolean = (record: Record<string, boolean>, matchBool = true) => {
    const boolMatcher = useCallback((value: boolean) => value === matchBool, [matchBool]);
    return useAllPropsMatch(record, boolMatcher)
};
