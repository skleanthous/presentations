import { CHTMLWrapper } from '../Wrapper.js';
declare const CHTMLmspace_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/mspace.js").CommonMspace> & import("../Wrapper.js").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmspace<N, T, D> extends CHTMLmspace_base {
    static kind: string;
    toCHTML(parent: N): void;
}
export {};
