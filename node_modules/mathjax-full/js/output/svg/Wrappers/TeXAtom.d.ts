import { SVGWrapper } from '../Wrapper.js';
declare const SVGTeXAtom_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/TeXAtom.js").CommonTeXAtom> & import("../Wrapper.js").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGTeXAtom<N, T, D> extends SVGTeXAtom_base {
    static kind: string;
    toSVG(parent: N): void;
}
export {};
