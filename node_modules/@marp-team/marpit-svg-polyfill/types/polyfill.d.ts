export declare const observerSymbol: unique symbol;
export declare function observe(): void;
export declare const polyfills: () => (typeof webkit)[];
export declare function webkit(zoom?: number): void;
