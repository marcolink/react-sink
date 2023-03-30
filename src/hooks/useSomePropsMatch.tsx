import {useCallback, useEffect, useState} from 'react';
import {Matcher} from '../types';
import {somePropsMatch} from "../utils";

export const useSomePropsMatch = <ValueType, DataType extends Record<string, ValueType>>(
    record: DataType,
    valueMatcher: Matcher<ValueType>
) => {
    const matchFn = useCallback(
        (data: DataType) => {
            return somePropsMatch(data, valueMatcher);
        },
        [valueMatcher]
    );

    const [state, setState] = useState<boolean>(() => matchFn(record));

    useEffect(() => {
        setState(matchFn(record));
    }, [record, valueMatcher, matchFn]);

    return state;
};
