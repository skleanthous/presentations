import { SVGWrapper } from '../Wrapper.js';
declare const SVGscriptbase_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/scriptbase.js").CommonScriptbase<SVGWrapper<any, any, any>>> & import("../Wrapper.js").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGscriptbase<N, T, D> extends SVGscriptbase_base {
    static kind: string;
    static useIC: boolean;
    toSVG(parent: N): void;
}
export {};
