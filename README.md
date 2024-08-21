# [An Overview of React 19](https://react.dev/blog/2024/04/25/react-19)

## Exercises

### A - Memoization

1. Optimize rendering of the \_\_\_\_ component using existing strategies:
   - Implement the `useMemo` hook to memoize the result of an expensive calculation.
   - Implement the `useCallback` hook and `React.memo` utility to memoize a child JSX.Element.
2. Implement the new React 19 Compiler to automatically optimize rendering of the \_\_\_\_ component.
   - `"@vitejs/plugin-react": "^4.3.1",`
   - ```
     {
         babel: {
             plugins: [
                 ['babel-plugin-react-compiler'],
             ],
         },
     }
     ```

### B - Form Actions

### C - React Server Components (RSC) & Server Actions
