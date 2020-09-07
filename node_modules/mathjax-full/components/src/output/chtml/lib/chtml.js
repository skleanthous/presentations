import {combineWithMathJax} from '../../../../../js/components/global.js';

import * as module1 from '../../../../../js/output/chtml.js';
import * as module2 from '../../../../../js/output/chtml/FontData.js';
import * as module3 from '../../../../../js/output/chtml/Notation.js';
import * as module4 from '../../../../../js/output/chtml/Wrapper.js';
import * as module5 from '../../../../../js/output/chtml/WrapperFactory.js';
import * as module6 from '../../../../../js/output/chtml/Wrappers.js';
import * as module7 from '../../../../../js/output/chtml/Wrappers/TeXAtom.js';
import * as module8 from '../../../../../js/output/chtml/Wrappers/TextNode.js';
import * as module9 from '../../../../../js/output/chtml/Wrappers/maction.js';
import * as module10 from '../../../../../js/output/chtml/Wrappers/math.js';
import * as module11 from '../../../../../js/output/chtml/Wrappers/menclose.js';
import * as module12 from '../../../../../js/output/chtml/Wrappers/mfenced.js';
import * as module13 from '../../../../../js/output/chtml/Wrappers/mfrac.js';
import * as module14 from '../../../../../js/output/chtml/Wrappers/mglyph.js';
import * as module15 from '../../../../../js/output/chtml/Wrappers/mi.js';
import * as module16 from '../../../../../js/output/chtml/Wrappers/mmultiscripts.js';
import * as module17 from '../../../../../js/output/chtml/Wrappers/mn.js';
import * as module18 from '../../../../../js/output/chtml/Wrappers/mo.js';
import * as module19 from '../../../../../js/output/chtml/Wrappers/mpadded.js';
import * as module20 from '../../../../../js/output/chtml/Wrappers/mroot.js';
import * as module21 from '../../../../../js/output/chtml/Wrappers/mrow.js';
import * as module22 from '../../../../../js/output/chtml/Wrappers/ms.js';
import * as module23 from '../../../../../js/output/chtml/Wrappers/mspace.js';
import * as module24 from '../../../../../js/output/chtml/Wrappers/msqrt.js';
import * as module25 from '../../../../../js/output/chtml/Wrappers/msubsup.js';
import * as module26 from '../../../../../js/output/chtml/Wrappers/mtable.js';
import * as module27 from '../../../../../js/output/chtml/Wrappers/mtd.js';
import * as module28 from '../../../../../js/output/chtml/Wrappers/mtext.js';
import * as module29 from '../../../../../js/output/chtml/Wrappers/mtr.js';
import * as module30 from '../../../../../js/output/chtml/Wrappers/munderover.js';
import * as module31 from '../../../../../js/output/chtml/Wrappers/scriptbase.js';
import * as module32 from '../../../../../js/output/chtml/Wrappers/semantics.js';
import * as module33 from '../../../../../js/output/common/FontData.js';
import * as module34 from '../../../../../js/output/common/Notation.js';
import * as module35 from '../../../../../js/output/common/OutputJax.js';
import * as module36 from '../../../../../js/output/common/Wrapper.js';
import * as module37 from '../../../../../js/output/common/WrapperFactory.js';
import * as module38 from '../../../../../js/output/common/Wrappers/TeXAtom.js';
import * as module39 from '../../../../../js/output/common/Wrappers/TextNode.js';
import * as module40 from '../../../../../js/output/common/Wrappers/maction.js';
import * as module41 from '../../../../../js/output/common/Wrappers/math.js';
import * as module42 from '../../../../../js/output/common/Wrappers/menclose.js';
import * as module43 from '../../../../../js/output/common/Wrappers/mfenced.js';
import * as module44 from '../../../../../js/output/common/Wrappers/mfrac.js';
import * as module45 from '../../../../../js/output/common/Wrappers/mglyph.js';
import * as module46 from '../../../../../js/output/common/Wrappers/mi.js';
import * as module47 from '../../../../../js/output/common/Wrappers/mmultiscripts.js';
import * as module48 from '../../../../../js/output/common/Wrappers/mn.js';
import * as module49 from '../../../../../js/output/common/Wrappers/mo.js';
import * as module50 from '../../../../../js/output/common/Wrappers/mpadded.js';
import * as module51 from '../../../../../js/output/common/Wrappers/mroot.js';
import * as module52 from '../../../../../js/output/common/Wrappers/mrow.js';
import * as module53 from '../../../../../js/output/common/Wrappers/ms.js';
import * as module54 from '../../../../../js/output/common/Wrappers/mspace.js';
import * as module55 from '../../../../../js/output/common/Wrappers/msqrt.js';
import * as module56 from '../../../../../js/output/common/Wrappers/msubsup.js';
import * as module57 from '../../../../../js/output/common/Wrappers/mtable.js';
import * as module58 from '../../../../../js/output/common/Wrappers/mtd.js';
import * as module59 from '../../../../../js/output/common/Wrappers/mtext.js';
import * as module60 from '../../../../../js/output/common/Wrappers/mtr.js';
import * as module61 from '../../../../../js/output/common/Wrappers/munderover.js';
import * as module62 from '../../../../../js/output/common/Wrappers/scriptbase.js';
import * as module63 from '../../../../../js/output/common/Wrappers/semantics.js';

combineWithMathJax({_: {
    output: {
        chtml_ts: module1,
        chtml: {
            FontData: module2,
            Notation: module3,
            Wrapper: module4,
            WrapperFactory: module5,
            Wrappers_ts: module6,
            Wrappers: {
                TeXAtom: module7,
                TextNode: module8,
                maction: module9,
                math: module10,
                menclose: module11,
                mfenced: module12,
                mfrac: module13,
                mglyph: module14,
                mi: module15,
                mmultiscripts: module16,
                mn: module17,
                mo: module18,
                mpadded: module19,
                mroot: module20,
                mrow: module21,
                ms: module22,
                mspace: module23,
                msqrt: module24,
                msubsup: module25,
                mtable: module26,
                mtd: module27,
                mtext: module28,
                mtr: module29,
                munderover: module30,
                scriptbase: module31,
                semantics: module32
            }
        },
        common: {
            FontData: module33,
            Notation: module34,
            OutputJax: module35,
            Wrapper: module36,
            WrapperFactory: module37,
            Wrappers: {
                TeXAtom: module38,
                TextNode: module39,
                maction: module40,
                math: module41,
                menclose: module42,
                mfenced: module43,
                mfrac: module44,
                mglyph: module45,
                mi: module46,
                mmultiscripts: module47,
                mn: module48,
                mo: module49,
                mpadded: module50,
                mroot: module51,
                mrow: module52,
                ms: module53,
                mspace: module54,
                msqrt: module55,
                msubsup: module56,
                mtable: module57,
                mtd: module58,
                mtext: module59,
                mtr: module60,
                munderover: module61,
                scriptbase: module62,
                semantics: module63
            }
        }
    }
}});
