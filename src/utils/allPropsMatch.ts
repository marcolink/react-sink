import {Matcher} from "../types";

export function allPropsMatch<ValueType, DataType extends Record<string, ValueType>>(data: DataType, valueMatcher: Matcher<ValueType>): boolean {
    return Object.keys(data).every(key => valueMatcher(data[key]))
}
