import { useCallback } from 'react';
import { useSomePropsMatch } from './useSomePropsMatch';

export const useSomeBoolean = (record: Record<string, boolean>, matchBool = true) => {
    const boolMatcher = useCallback((value: boolean) => value === matchBool, [matchBool]);
    return useSomePropsMatch(record, boolMatcher);
};
