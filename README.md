# react sink
A classy kitchen sink for all react pieces daily used - not the ordinary.

[![Version](https://img.shields.io/npm/v/react-sink.svg)](https://npmjs.org/package/react-sink)
[![Downloads/week](https://img.shields.io/npm/dw/react-sink.svg)](https://npmjs.org/package/react-sink)
[![Size](https://img.shields.io/bundlephobia/min/react-sink.svg)](https://npmjs.org/package/react-sink)
[![Semantic Release](https://github.com/marcolink/react-sink/actions/workflows/semantic-release.yml/badge.svg)](https://github.com/marcolink/react-sink/actions/workflows/semantic-release.yml)

### Install
**pnpm**
```
pnpm add react-sink
```
**npm**
```
npm i react-sink
```

## Components

### `<AsyncContent/>`
```typescript jsx
import { Conditional } from 'react-sink'

function MyComponent({ isLoading, isError }) {
    return (
        <AsyncContent isLoading={ isLoading } isError={ isLoading }>
            rendered when complete
        </AsyncContent>
    )
}
```

### `<Conditional/>`
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
```typescript jsx
import {ConditionalWrapper} from 'react-sink'

function MyComponent({flag}) {
    return (
        <ConditionalWrapper condition={true} wrapper={(children: ReactNode) => <h1>{children}</h1>}>
            rendered for truthy condition
        </ConditionalWrapper>
    )
}
```

## Hooks
### `useAllBoolean`
```typescript jsx
import { useAllBoolean } from 'react-sink'

function MyComponent() {
    const expectAllTrueWillBeFalse = useAllBoolean({ hello: true, world: false })
    const expectAllTrueWillBeTrue = useAllBoolean({ hello: true, world: true })
    const expectAllFalseWillBeFalse = useAllBoolean({ hello: false, world: false }, false)
}
```

### `usePeriodicCallback`

```typescript jsx
import {useCallback} from "react";
import {usePeriodicCallback} from 'react-sink'

function MyComponent() {
    const callback = useCallback(()=> console.log("called!"), [])
    const result = usePeriodicCallback(callback, 100)
}
```

### `useWindowSize`

```typescript jsx
import {useWindowSize} from 'react-sink'

function MyComponent() {
    const { width, height } = useWindowSize()
}
```

### `useAbortOnUnmount`

```typescript jsx
import {useAbortOnUnmount} from 'react-sink'

function MyComponent() {
    const abortSignal = useAbortOnUnmount()
}
```
