import {Matcher} from "../types";

export function somePropsMatch<ValueType, DataType extends Record<string, ValueType>>(
    data: DataType,
    valueMatcher: Matcher<ValueType>
): boolean {
    return Object.keys(data).some((key) => valueMatcher(data[key]));
}
