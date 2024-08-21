export function stallComponent(ms: number = 1) {
    const startTime = performance.now();
    while (performance.now() - startTime < ms) {
        // Do nothing for 1 ms per item to emulate extremely slow code
    }
};