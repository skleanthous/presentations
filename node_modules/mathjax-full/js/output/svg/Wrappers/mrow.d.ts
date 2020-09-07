import { SVGWrapper, Constructor } from '../Wrapper.js';
declare const SVGmrow_base: Constructor<import("../../common/Wrappers/mrow.js").CommonMrow> & Constructor<SVGWrapper<any, any, any>>;
export declare class SVGmrow<N, T, D> extends SVGmrow_base {
    static kind: string;
    toSVG(parent: N): void;
}
declare const SVGinferredMrow_base: Constructor<import("../../common/Wrappers/mrow.js").CommonInferredMrow> & Constructor<SVGmrow<any, any, any>>;
export declare class SVGinferredMrow<N, T, D> extends SVGinferredMrow_base {
    static kind: string;
}
export {};
