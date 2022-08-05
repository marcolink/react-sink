import {renderHook} from "@testing-library/react";
import {usePeriodicCallback} from "./usePeriodicCallback";

describe('A usePeriodicCallback', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })
    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('calls the callback periodically', () => {
        const callback = vi.fn()
        renderHook(() => usePeriodicCallback(callback, 100))
        vi.advanceTimersByTime(250)
        expect(callback).toHaveBeenCalledTimes(2)
    })

    it('stops the execution on unmount', () => {
        const callback = vi.fn()
        const {unmount} = renderHook(() => usePeriodicCallback(callback, 100))
        vi.advanceTimersByTime(150)
        expect(callback).toHaveBeenCalledTimes(1)
        unmount()
        vi.advanceTimersByTime(100)
        expect(callback).toHaveBeenCalledTimes(1)
    })

    it('change callback during timeout', () => {
        const callback1 = vi.fn()
        const callback2 = vi.fn()

        const initialProps = {
            initialProps: {
                callback: callback1,
                delay: 100
            }
        }

        const {rerender} = renderHook(({callback, delay}) => {
            return usePeriodicCallback(callback, delay)
        }, initialProps)
        vi.advanceTimersByTime(101)
        rerender({callback: callback2, delay: 100})
        vi.advanceTimersByTime(101)
        expect(callback1).toHaveBeenCalledTimes(1)
        expect(callback2).toHaveBeenCalledTimes(1)
    })
})
