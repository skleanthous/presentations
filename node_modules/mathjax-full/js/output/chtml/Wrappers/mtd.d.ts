import { CHTMLWrapper } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmtd_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/mtd.js").CommonMtd> & import("../Wrapper.js").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmtd<N, T, D> extends CHTMLmtd_base {
    static kind: string;
    static styles: StyleList;
    toCHTML(parent: N): void;
}
export {};
