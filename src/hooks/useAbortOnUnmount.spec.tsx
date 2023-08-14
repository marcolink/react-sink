import { renderHook } from '@testing-library/react';
import { useAbortOnUnmount } from './useAbortOnUnmount';

describe('AbortControllerOnUnmount', () => {
    it('sends an abort signal on component unmount', () => {
        const hook = renderHook(() => useAbortOnUnmount());
        expect(hook.result.current.aborted).toBe(false);
        hook.unmount();
        expect(hook.result.current.aborted).toBe(true);
    });
});