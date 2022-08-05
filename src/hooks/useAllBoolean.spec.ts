import {renderHook} from "@testing-library/react";
import {useAllBoolean} from "./useAllBoolean";

describe('A useAllBoolean hook', () => {

    describe('testing for truthy', function () {
        it('returns false for a mixed values', () => {
            const {result: {current}} = renderHook(() => useAllBoolean({hello: false, world: true}))
            expect(current).toBeFalsy()
        })
        it('returns false for falsy values', () => {
            const {result: {current}} = renderHook(() => useAllBoolean({hello: false, world: false}))
            expect(current).toBeFalsy()
        })
        it('returns true for truthy values', () => {
            const {result: {current}} = renderHook(() => useAllBoolean({hello: true, world: true}))
            expect(current).toBeTruthy()
        })
    });

    describe('testing for falsy', () => {
        it('returns false for a mixed values', () => {
            const {result: {current}} = renderHook(() => useAllBoolean({hello: false, world: true}, false))
            expect(current).toBeFalsy()
        })
        it('returns false for truthy values', () => {
            const {result: {current}} = renderHook(() => useAllBoolean({hello: true, world: true}, false))
            expect(current).toBeFalsy()
        })
        it('returns true for a falsy values', () => {
            const {result: {current}} = renderHook(() => useAllBoolean({hello: false, world: false}, false))
            expect(current).toBeTruthy()
        })
    });
})
