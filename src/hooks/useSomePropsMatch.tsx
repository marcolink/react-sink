import {useCallback, useMemo} from 'react';
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

    return useMemo(() => matchFn(record), [record, matchFn]);
};
