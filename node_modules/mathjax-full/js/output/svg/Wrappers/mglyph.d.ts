import { SVGWrapper } from '../Wrapper.js';
declare const SVGmglyph_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/mglyph.js").CommonMglyph> & import("../Wrapper.js").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGmglyph<N, T, D> extends SVGmglyph_base {
    static kind: string;
    toSVG(parent: N): void;
}
export {};
