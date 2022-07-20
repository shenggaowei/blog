# useCallback 和 useMemo

## 1 背景

在用 taro 写小程序，偶然间遇到了个问题。用 useCallback 生成了一个 memoized 函数，但是在重复渲染的时候，[memoized](https://en.wikipedia.org/wiki/Memoization) 函数执行后内部所依赖的变量仍旧是旧的。

原因已经找到，因为没有传递第二个依赖项数组。翻阅了 react 文档和一些 blog。对这两个 hook 做个学习记录。

## 2 解释

```typescript
function useCallback<T extends (...args: any[]) => any>(
  callback: T,
  deps: DependencyList
): T;
function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;
```

从 react 官方文档对两个函数的定义可以知道，useCallback 中 T 为一个函数，而在 useMemo 中，**由于传入 `useMemo` 的函数会在渲染期间执行** ，所以 T 为执行结果。

useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。

## 3 作用
    对函数进行缓存，以便于
    
## 4 使用场合
