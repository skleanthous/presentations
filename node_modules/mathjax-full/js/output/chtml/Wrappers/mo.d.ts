import { CHTMLWrapper } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmo_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/mo.js").CommonMo> & import("../Wrapper.js").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmo<N, T, D> extends CHTMLmo_base {
    static kind: string;
    static styles: StyleList;
    toCHTML(parent: N): void;
    protected stretchHTML(chtml: N): void;
}
export {};
