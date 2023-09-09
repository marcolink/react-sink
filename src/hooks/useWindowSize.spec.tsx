import {renderHook} from "@testing-library/react";
import {useWindowSize} from "./useWindowSize";

describe('A useWindowSize hook', () => {
    it.skip('returns a matching size', () => {
        jest.spyOn(window, "innerWidth", "get").mockReturnValue(1001);
        const {result: {current}} = renderHook(() => useWindowSize())
        expect(current.width).toBe(1001)
    })
})
