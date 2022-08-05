import {useCallback, useEffect, useState} from "react";

type Matcher<T> = (value: T) => boolean

export const useAllPropsMatch = <ValueType, DataType extends Record<string, ValueType>>(record: DataType, valueMatcher: Matcher<ValueType>) => {

    const matchFn = useCallback((data: DataType) => {
        return Object.keys(data).every(key => valueMatcher(data[key]))
    }, [valueMatcher])

    const [state, setState] = useState<boolean>(() => matchFn(record));

    useEffect(() => {
        setState(matchFn(record));
    }, [record, valueMatcher]);

    return state;
}
