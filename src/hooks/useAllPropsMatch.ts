import {useCallback, useMemo} from "react";
import {Matcher} from "../types";
import {allPropsMatch} from "../utils";

export const useAllPropsMatch = <ValueType, DataType extends Record<string, ValueType>>(record: DataType, valueMatcher: Matcher<ValueType>) => {
    const matchFn = useCallback((data: DataType) => {
        return allPropsMatch(data, valueMatcher)
    }, [valueMatcher])

    return useMemo(() => matchFn(record), [record, matchFn]);
}
