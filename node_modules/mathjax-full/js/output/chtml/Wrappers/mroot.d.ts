import { CHTMLWrapper } from '../Wrapper.js';
import { BBox } from '../../../util/BBox.js';
declare const CHTMLmroot_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/mroot.js").CommonMroot>;
export declare class CHTMLmroot<N, T, D> extends CHTMLmroot_base {
    static kind: string;
    protected addRoot(ROOT: N, root: CHTMLWrapper<N, T, D>, sbox: BBox, H: number): void;
}
export {};
