import { CHTMLWrapper } from '../Wrapper.js';
import { BBox } from '../../../util/BBox.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmsqrt_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/msqrt.js").CommonMsqrt> & import("../Wrapper.js").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmsqrt<N, T, D> extends CHTMLmsqrt_base {
    static kind: string;
    static styles: StyleList;
    toCHTML(parent: N): void;
    protected addRoot(_ROOT: N, _root: CHTMLWrapper<N, T, D>, _sbox: BBox, _H: number): void;
}
export {};
