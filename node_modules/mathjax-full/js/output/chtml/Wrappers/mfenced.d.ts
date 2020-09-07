import { CHTMLWrapper } from '../Wrapper.js';
declare const CHTMLmfenced_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/mfenced.js").CommonMfenced> & import("../Wrapper.js").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmfenced<N, T, D> extends CHTMLmfenced_base {
    static kind: string;
    toCHTML(parent: N): void;
}
export {};
