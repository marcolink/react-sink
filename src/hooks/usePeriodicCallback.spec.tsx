import {renderHook} from "@testing-library/react";
import {usePeriodicCallback} from "./usePeriodicCallback";

describe('A usePeriodicCallback', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })
    afterEach(() => {
        jest.restoreAllMocks()
    })

    it('calls the callback periodically', () => {
        const callback = jest.fn()
        renderHook(() => usePeriodicCallback(callback, 100))
        jest.advanceTimersByTime(250)
        expect(callback).toHaveBeenCalledTimes(2)
    })

    it('stops the execution on unmount', () => {
        const callback = jest.fn()
        const {unmount} = renderHook(() => usePeriodicCallback(callback, 100))
        jest.advanceTimersByTime(150)
        expect(callback).toHaveBeenCalledTimes(1)
        unmount()
        jest.advanceTimersByTime(100)
        expect(callback).toHaveBeenCalledTimes(1)
    })

    it('change callback during timeout', () => {
        const callback1 = jest.fn()
        const callback2 = jest.fn()

        const initialProps = {
            initialProps: {
                callback: callback1,
                delay: 100
            }
        }

        const {rerender} = renderHook(({callback, delay}) => {
            return usePeriodicCallback(callback, delay)
        }, initialProps)
        jest.advanceTimersByTime(101)
        rerender({callback: callback2, delay: 100})
        jest.advanceTimersByTime(101)
        expect(callback1).toHaveBeenCalledTimes(1)
        expect(callback2).toHaveBeenCalledTimes(1)
    })
})
