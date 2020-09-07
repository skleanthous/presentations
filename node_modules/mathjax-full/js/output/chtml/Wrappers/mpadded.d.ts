import { CHTMLWrapper } from '../Wrapper.js';
import { StyleList } from '../../../util/StyleList.js';
declare const CHTMLmpadded_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/mpadded.js").CommonMpadded> & import("../Wrapper.js").Constructor<CHTMLWrapper<any, any, any>>;
export declare class CHTMLmpadded<N, T, D> extends CHTMLmpadded_base {
    static kind: string;
    static styles: StyleList;
    toCHTML(parent: N): void;
}
export {};
