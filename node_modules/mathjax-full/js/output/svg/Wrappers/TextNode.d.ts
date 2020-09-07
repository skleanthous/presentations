import { SVGWrapper } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const SVGTextNode_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/TextNode.js").CommonTextNode> & import("../Wrapper.js").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGTextNode<N, T, D> extends SVGTextNode_base {
    static kind: string;
    static styles: StyleList;
    toSVG(parent: N): void;
}
export {};
