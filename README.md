# react sink
A classy kitchen sink for all react pieces daily used - not the ordinary.

[![Version](https://img.shields.io/npm/v/react-sink.svg)](https://npmjs.org/package/react-sink)
[![Downloads/week](https://img.shields.io/npm/dw/react-sink.svg)](https://npmjs.org/package/react-sink)
[![Size](https://img.shields.io/bundlephobia/min/react-sink.svg)](https://npmjs.org/package/react-sink)
[![Semantic Release](https://github.com/marcolink/react-sink/actions/workflows/semantic-release.yml/badge.svg)](https://github.com/marcolink/react-sink/actions/workflows/semantic-release.yml)

### Install
**npm**
```
npm i react-sink
```

## Components

### `<AsyncContent/>`
Render loading or error content until the async state resolves, then render children.
```typescript jsx
import { AsyncContent } from 'react-sink'
import type { ReactNode } from 'react'

type Props = {
  isLoading: boolean
  isError: boolean
  content: ReactNode
}

function MyComponent({ isLoading, isError, content }: Props) {
    return (
        <AsyncContent
            isLoading={isLoading}
            isError={isError}
            loadingContent="Loading..."
            errorContent="Something went wrong"
        >
            {content}
        </AsyncContent>
    )
}
```

### `<Conditional/>`
Render children only when `condition` is truthy.
```typescript jsx
import { Conditional } from 'react-sink'

function MyComponent({ flag }) {
    return (
        <Conditional condition={ flag }>
            rendered when true
        </Conditional>
    )
}
```

### `<ConditionalWrapper/>`
Wrap children with a custom component when `condition` is truthy; otherwise render children as-is.
```typescript jsx
import { ConditionalWrapper } from 'react-sink'
import type { ReactNode } from 'react'

function MyComponent({flag}) {
    return (
        <ConditionalWrapper condition={flag} wrapper={(children: ReactNode) => <h1>{children}</h1>}>
            rendered for truthy condition
        </ConditionalWrapper>
    )
}
```

## Hooks

### `useAllBoolean`
Return `true` only if all boolean values in the provided record match the target boolean (defaults to `true`).
```typescript jsx
import { useAllBoolean } from 'react-sink'

function MyComponent() {
    const expectAllTrueWillBeFalse = useAllBoolean({ hello: true, world: false })
    const expectAllTrueWillBeTrue = useAllBoolean({ hello: true, world: true })
    const expectAllFalseWillBeFalse = useAllBoolean({ hello: false, world: false }, false)
}
```

### `useSomeBoolean`
Return `true` if any boolean in the record matches the target boolean (defaults to `true`).
```typescript jsx
import { useSomeBoolean } from 'react-sink'

function MyComponent() {
    const anyTrue = useSomeBoolean({ featureA: true, featureB: false }) // true
    const anyFalse = useSomeBoolean({ featureA: true, featureB: true }, false) // false
}
```

### `useAllPropsMatch`
Return `true` when every value in the record satisfies the provided matcher.
```typescript jsx
import { useAllPropsMatch } from 'react-sink'

const data = { a: 1, b: 1, c: 2 }
const matcher = (value: number) => value === 1

function MyComponent() {
    const allOnes = useAllPropsMatch(data, matcher) // false
}
```

### `useSomePropsMatch`
Return `true` when at least one value in the record satisfies the matcher.
```typescript jsx
import { useSomePropsMatch } from 'react-sink'

const data = { a: 'active', b: 'idle' }
const matcher = (value: string) => value === 'active'

function MyComponent() {
    const hasActive = useSomePropsMatch(data, matcher) // true
}
```

### `usePeriodicCallback`
Call the provided callback on an interval until unmounted or `delay` becomes `null`.

```typescript jsx
import {useCallback} from "react";
import {usePeriodicCallback} from 'react-sink'

function MyComponent() {
    const callback = useCallback(()=> console.log("called!"), [])
    const result = usePeriodicCallback(callback, 100)
}
```

### `useWindowSize`
Track window `width` and `height`, updating on resize.

```typescript jsx
import {useWindowSize} from 'react-sink'

function MyComponent() {
    const { width, height } = useWindowSize()
}
```

### `useAbortOnUnmount`
Return an `AbortSignal` that will be aborted when the component unmounts.

```typescript jsx
import {useAbortOnUnmount} from 'react-sink'

function MyComponent() {
    const abortSignal = useAbortOnUnmount()
}
```
