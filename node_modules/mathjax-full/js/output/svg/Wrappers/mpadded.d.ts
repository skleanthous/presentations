import { SVGWrapper } from '../Wrapper.js';
declare const SVGmpadded_base: import("../Wrapper.js").Constructor<import("../../common/Wrappers/mpadded.js").CommonMpadded> & import("../Wrapper.js").Constructor<SVGWrapper<any, any, any>>;
export declare class SVGmpadded<N, T, D> extends SVGmpadded_base {
    static kind: string;
    toSVG(parent: N): void;
}
export {};
