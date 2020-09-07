import { CHTMLWrapper } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmglyph_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/mglyph.js").CommonMglyph> & import("../Wrapper.js").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmglyph<N, T, D> extends CHTMLmglyph_base {
    static kind: string;
    static styles: StyleList;
    toCHTML(parent: N): void;
}
export {};
