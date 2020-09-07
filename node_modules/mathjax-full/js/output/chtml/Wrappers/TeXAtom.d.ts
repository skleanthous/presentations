import { CHTMLWrapper } from '../Wrapper.js';
declare const CHTMLTeXAtom_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/TeXAtom.js").CommonTeXAtom> & import("../Wrapper.js").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLTeXAtom<N, T, D> extends CHTMLTeXAtom_base {
    static kind: string;
    toCHTML(parent: N): void;
}
export {};
