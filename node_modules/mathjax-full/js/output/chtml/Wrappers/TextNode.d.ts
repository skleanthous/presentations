import { CHTMLWrapper } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLTextNode_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/TextNode.js").CommonTextNode> & import("../Wrapper.js").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLTextNode<N, T, D> extends CHTMLTextNode_base {
    static kind: string;
    static autoStyle: boolean;
    static styles: StyleList;
    toCHTML(parent: N): void;
}
export {};
