
function view_item1A() {
    /*borders properties start*/
    let _border_defaultA = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeA = "14pt ";
    let _text_alignA = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorA = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginA = "10px auto auto 10px";
    let _marginAallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockA = "block";
    let _displaynoneA = "none";
    /*display properties end*/

    /*list styling start*/
    //let _list_style = "numbered";
    /*list styling end*/


    document.getElementById("btn1").style.display = _displaynoneA;
    document.getElementById("btn2").style.margin = _marginAallAuto;
    document.getElementById("btn2").style.display = _displayblockA;

    /*ingredients header*/
    let x1 = document.getElementById("p-content1");
    let x1_A = document.getElementById("h3_1");

    /*ingredients*/
    let x1_B = document.getElementById("liA1");
    let x1_C = document.getElementById("liA2");
    let x1_D = document.getElementById("liA3");
    let x1_E = document.getElementById("liA4");
    let x1_F = document.getElementById("liA5");
    let x1_G = document.getElementById("liA6");
    let x1_H = document.getElementById("liA7");
    let x1_I = document.getElementById("liA8");
    let x1_J = document.getElementById("liA9");
    let x1_K = document.getElementById("liA10");
    let x1_L = document.getElementById("liA11");
    let x1_M = document.getElementById("liA12");
    let x1_N = document.getElementById("liA13");
    let x1_O = document.getElementById("liA14");
    let x1_P = document.getElementById("liA15");
    let x1_Q = document.getElementById("liA16");
    let x1_R = document.getElementById("liA17");
    //let x1_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiASeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiASeries.length; i++) {
        let iterdata2 = subLiASeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }
}
function view_item2A() {
    /*margin start*/
    let _marginAallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockA = "block";//style.display = "block"*/
    let _displaynoneA = "none";//style.display = "block"*/
    /*display properties end*/

    document.getElementById("btn1").style.display = _displayblockA;
    document.getElementById("btn1").style.margin = _marginAallAuto;
    document.getElementById("btn2").style.display = _displaynoneA;
    /*ingredients header*/
    let y1 = document.getElementById("p-content1");
    let y1_A = document.getElementById("h3_1");

    /*ingredients*/
    let y1_B = document.getElementById("liA1");
    let y1_C = document.getElementById("liA2");
    let y1_D = document.getElementById("liA3");
    let y1_E = document.getElementById("liA4");
    let y1_F = document.getElementById("liA5");
    let y1_G = document.getElementById("liA6");
    let y1_H = document.getElementById("liA7");
    let y1_I = document.getElementById("liA8");
    let y1_J = document.getElementById("liA9");
    let y1_K = document.getElementById("liA10");
    let y1_L = document.getElementById("liA11");
    let y1_M = document.getElementById("liA12");
    let y1_N = document.getElementById("liA13");
    let y1_O = document.getElementById("liA14");
    let y1_P = document.getElementById("liA15");
    let y1_Q = document.getElementById("liA16");
    let y1_R = document.getElementById("liA17");
    let y1_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [y1, y1_A, y1_B, y1_C, y1_D, y1_E,
        y1_F, y1_G, y1_H, y1_I, y1_J, y1_K, y1_L,
        y1_M, y1_N, y1_O, y1_P, y1_Q, y1_R, y1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displaynoneA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let y1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let y1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let y1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let y1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let y1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let y1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let y1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let y1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiASeries = [y1A_subLiSeriesElement1, y1A_subLiSeriesElement2,
        y1A_subLiSeriesElement3, y1A_subLiSeriesElement4, y1A_subLiSeriesElement5,
        y1A_subLiSeriesElement6, y1A_subLiSeriesElement7, y1A_subLiSeriesElement8]

    for (let i = 0; i < subLiASeries.length; i++) {
        let iterdata2 = subLiASeries.map((dataitem2) => {
            dataitem2.style.display = _displaynoneA;//style.display = "block"*/
        })
        return iterdata2;
    }
}
function view_item1B() {
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    let x2_A = document.getElementById("h3_2");

    /*ingredients*/
    let x2_B = document.getElementById("liB1");
    let x2_C = document.getElementById("liB2");
    let x2_D = document.getElementById("liB3");
    let x2_E = document.getElementById("liB4");
    let x2_F = document.getElementById("liB5");
    let x2_G = document.getElementById("liB6");
    let x2_H = document.getElementById("liB7");
    let x2_I = document.getElementById("liB8");
    let x2_J = document.getElementById("liB9");
    let x2_K = document.getElementById("liB10");
    let x2_L = document.getElementById("liB11");
    let x2_M = document.getElementById("liB12");
    let x2_N = document.getElementById("liB13");
    let x2_O = document.getElementById("liB14");
    let x2_P = document.getElementById("liB15");
    let x2_Q = document.getElementById("liB16");
    let x2_R = document.getElementById("liB17");
    let x2_S = document.getElementById("liB18");

    /*loop through the liAseries list elements*/
    let liBseriesArr = [x2, x2_A, x2_B, x2_C, x2_D, x2_E,
        x2_F, x2_G, x2_H, x2_I, x2_J, x2_K, x2_L,
        x2_M, x2_N, x2_O, x2_P, x2_Q, x2_R, x2_S]
    for (let i = 0; i < liBseriesArr.length; i++) {
        let iterdataB = liBseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockB;
            dataitem1.style.backgroundColor = _background_ColorB;
            dataitem1.style.border = _border_defaultB;
            dataitem1.style.fontSize = _font_sizeB;
            dataitem1.style.margin = _marginB;
            dataitem1.style.textAlign = _text_alignB;
        })
        return iterdataB
    }

    /*liAsubseries elements*/
    let x2B_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x2B_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x2B_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x2B_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x2B_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x2B_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x2B_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x2B_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x2B_subLiSeriesElement1, x2B_subLiSeriesElement2,
        x2B_subLiSeriesElement3, x2B_subLiSeriesElement4, x2B_subLiSeriesElement5,
        x2B_subLiSeriesElement6, x2B_subLiSeriesElement7, x2B_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockB;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorB;
            dataitem2.style.border = _border_defaultB;
            dataitem2.style.fontSize = _font_sizeB;
            dataitem2.style.margin = _marginB;
            dataitem2.style.textAlign = _text_alignB;
        })
        return iterdata2;
    }

}
function view_item2B() {
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/
    document.getElementById("btn4").style.display = _displaynoneB;
    document.getElementById("btn3").style.margin = _marginBallAuto;
    document.getElementById("btn3").style.display = _displayblockB;
    /*ingredients header*/
    let y2 = document.getElementById("p-content2");
    let y2_A = document.getElementById("h3_1");

    /*ingredients*/
    let y2_B = document.getElementById("liA1");
    let y2_C = document.getElementById("liA2");
    let y2_D = document.getElementById("liA3");
    let y2_E = document.getElementById("liA4");
    let y2_F = document.getElementById("liA5");
    let y2_G = document.getElementById("liA6");
    let y2_H = document.getElementById("liA7");
    let y2_I = document.getElementById("liA8");
    let y2_J = document.getElementById("liA9");
    let y2_K = document.getElementById("liA10");
    let y2_L = document.getElementById("liA11");
    let y2_M = document.getElementById("liA12");
    let y2_N = document.getElementById("liA13");
    let y2_O = document.getElementById("liA14");
    let y2_P = document.getElementById("liA15");
    let y2_Q = document.getElementById("liA16");
    let y2_R = document.getElementById("liA17");
    let y2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [y2, y2_A, y2_B, y2_C, y2_D, y2_E,
        y2_F, y2_G, y2_H, y2_I, y2_J, y2_K, y2_L,
        y2_M, y2_N, y2_O, y2_P, y2_Q, y2_R, y2_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataB = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displaynoneB;
        })
        return iterdataB
    }

    /*liAsubseries elements*/
    let y2B_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let y2B_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let y2B_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let y2B_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let y2B_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let y2B_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let y2B_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let y2B_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [y2B_subLiSeriesElement1, y2B_subLiSeriesElement2,
        y2B_subLiSeriesElement3, y2B_subLiSeriesElement4, y2B_subLiSeriesElement5,
        y2B_subLiSeriesElement6, y2B_subLiSeriesElement7, y2B_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displaynoneB;
        })
        return iterdata2;
    }

}
function view_item1C() {
    let x3 = document.getElementById("p-content3");
    x3.style.display = "block";
    document.getElementById("btn5").style.display = "none";
    document.getElementById("btn6").style.margin = "auto auto auto auto";
    document.getElementById("btn6").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item2C() {
    let y3 = document.getElementById("p-content3");
    y3.style.display = "none";
    document.getElementById("btn6").style.display = "none";
    document.getElementById("btn5").style.margin = "auto auto auto auto";
    document.getElementById("btn5").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item1D() {
    let x4 = document.getElementById("p-content4");
    x4.style.display = "block";
    document.getElementById("btn7").style.display = "none";
    document.getElementById("btn8").style.margin = "auto auto auto auto";
    document.getElementById("btn8").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item2D() {
    let y4 = document.getElementById("p-content4");
    y4.style.display = "none";
    document.getElementById("btn8").style.display = "none";
    document.getElementById("btn7").style.margin = "auto auto auto auto";
    document.getElementById("btn7").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item1E() {
    let x5 = document.getElementById("p-content5");
    x5.style.display = "block";
    document.getElementById("btn9").style.display = "none";
    document.getElementById("btn10").style.margin = "auto auto auto auto";
    document.getElementById("btn10").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item2E() {
    let y5 = document.getElementById("p-content5");
    y5.style.display = "none";
    document.getElementById("btn10").style.display = "none";
    document.getElementById("btn9").style.margin = "auto auto auto auto";
    document.getElementById("btn9").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item1F() {
    let x6 = document.getElementById("p-content6");
    x6.style.display = "block";
    document.getElementById("btn11").style.display = "none";
    document.getElementById("btn12").style.margin = "auto auto auto auto";
    document.getElementById("btn12").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item2F() {
    let y6 = document.getElementById("p-content6");
    y6.style.display = "none";
    document.getElementById("btn12").style.display = "none";
    document.getElementById("btn11").style.margin = "auto auto auto auto";
    document.getElementById("btn11").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }


}
function view_item1G() {
    let x7 = document.getElementById("p-content7");
    x7.style.display = "block";
    document.getElementById("btn13").style.display = "none";
    document.getElementById("btn14").style.margin = "auto auto auto auto";
    document.getElementById("btn14").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item2G() {
    let y7 = document.getElementById("p-content7");
    y7.style.display = "none";
    document.getElementById("btn14").style.display = "none";
    document.getElementById("btn13").style.margin = "auto auto auto auto";
    document.getElementById("btn13").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }


}
function view_item1H() {
    let x8 = document.getElementById("p-content8");
    x8.style.display = "block";
    document.getElementById("btn15").style.display = "none";
    document.getElementById("btn16").style.margin = "auto auto auto auto";
    document.getElementById("btn16").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item2H() {
    let y8 = document.getElementById("p-content8");
    y8.style.display = "none";
    document.getElementById("btn16").style.display = "none";
    document.getElementById("btn15").style.margin = "auto auto auto auto";
    document.getElementById("btn15").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }


}
function view_item1I() {
    let x9 = document.getElementById("p-content9");
    x9.style.display = "block";
    document.getElementById("btn17").style.display = "none";
    document.getElementById("btn18").style.margin = "auto auto auto auto";
    document.getElementById("btn18").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item2I() {
    let y9 = document.getElementById("p-content9");
    y9.style.display = "none";
    document.getElementById("btn18").style.display = "none";
    document.getElementById("btn17").style.margin = "auto auto auto auto";
    document.getElementById("btn17").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }


}
function view_item1J() {
    let x10 = document.getElementById("p-content10");
    x10.style.display = "block";
    document.getElementById("btn19").style.display = "none";
    document.getElementById("btn20").style.margin = "auto auto auto auto";
    document.getElementById("btn20").style.display = "block";
}
function view_item2J() {
    let y10 = document.getElementById("p-content10");
    y10.style.display = "none";
    document.getElementById("btn20").style.display = "none";
    document.getElementById("btn19").style.margin = "auto auto auto auto";
    document.getElementById("btn19").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }


}
function view_item1K() {
    let x11 = document.getElementById("p-content11");
    x11.style.display = "block";
    document.getElementById("btn21").style.display = "none";
    document.getElementById("btn22").style.margin = "auto auto auto auto";
    document.getElementById("btn22").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item2K() {
    let y11 = document.getElementById("p-content11");
    y11.style.display = "none";
    document.getElementById("btn22").style.display = "none";
    document.getElementById("btn21").style.margin = "auto auto auto auto";
    document.getElementById("btn21").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }


}
function view_item1L() {
    let x12 = document.getElementById("p-content12");
    x12.style.display = "block";
    document.getElementById("btn23").style.display = "none";
    document.getElementById("btn24").style.margin = "auto auto auto auto";
    document.getElementById("btn24").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item2L() {
    let y12 = document.getElementById("p-content12");
    y12.style.display = "none";
    document.getElementById("btn24").style.display = "none";
    document.getElementById("btn23").style.margin = "auto auto auto auto";
    document.getElementById("btn23").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }


}
function view_item1M() {
    let x13 = document.getElementById("p-content13");
    x13.style.display = "block";
    document.getElementById("btn25").style.display = "none";
    document.getElementById("btn26").style.margin = "auto auto auto auto";
    document.getElementById("btn26").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item2M() {
    let y13 = document.getElementById("p-content13");
    y13.style.display = "none";
    document.getElementById("btn26").style.display = "none";
    document.getElementById("btn25").style.margin = "auto auto auto auto";
    document.getElementById("btn25").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item1N() {
    let x14 = document.getElementById("p-content14");
    x14.style.display = "block";
    document.getElementById("btn27").style.display = "none";
    document.getElementById("btn28").style.margin = "auto auto auto auto";
    document.getElementById("btn28").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item2N() {
    let y14 = document.getElementById("p-content14");
    y14.style.display = "none";
    document.getElementById("btn28").style.display = "none";
    document.getElementById("btn27").style.margin = "auto auto auto auto";
    document.getElementById("btn27").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item1O() {
    let x15 = document.getElementById("p-content15");
    x15.style.display = "block";
    document.getElementById("btn29").style.display = "none";
    document.getElementById("btn30").style.margin = "auto auto auto auto";
    document.getElementById("btn30").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item2O() {
    let y15 = document.getElementById("p-content15");
    y15.style.display = "none";
    document.getElementById("btn30").style.display = "none";
    document.getElementById("btn29").style.margin = "auto auto auto auto";
    document.getElementById("btn29").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }


}
function view_item1P() {
    let x16 = document.getElementById("p-content16");
    x16.style.display = "block";
    document.getElementById("btn31").style.display = "none";
    document.getElementById("btn32").style.margin = "auto auto auto auto";
    document.getElementById("btn32").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
function view_item2P() {
    let y16 = document.getElementById("p-content16");
    y16.style.display = "none";
    document.getElementById("btn32").style.display = "none";
    document.getElementById("btn31").style.margin = "auto auto auto auto";
    document.getElementById("btn31").style.display = "block";
    /*borders properties start*/
    let _border_defaultB = "0px ";
    /*border properties end*/

    /*fonts properties start*/
    let _font_sizeB = "14pt ";
    let _text_alignB = "center";
    /*fonts properties end*/

    /*background properties start*/
    let _background_ColorB = 'darkgrey';
    /*background properties end*/

    /*margin properties start*/
    let _marginB = "10px auto auto 10px";
    let _marginBallAuto = "auto auto auto auto";
    /*margin end*/

    /*display properties start*/
    let _displayblockB = "block";
    let _displaynoneB = "none";
    /*display properties end*/

    document.getElementById("btn3").style.display = _displaynoneB;
    document.getElementById("btn4").style.margin = _marginBallAuto;
    document.getElementById("btn4").style.display = _displayblockB;
    /*ingredients header*/
    let x2 = document.getElementById("p-content2");
    x1.style.display = _displaynoneB;
    let x2_A = document.getElementById("h3_1");

    /*ingredients*/
    let x2_B = document.getElementById("liA1");
    let x2_C = document.getElementById("liA2");
    let x2_D = document.getElementById("liA3");
    let x2_E = document.getElementById("liA4");
    let x2_F = document.getElementById("liA5");
    let x2_G = document.getElementById("liA6");
    let x2_H = document.getElementById("liA7");
    let x2_I = document.getElementById("liA8");
    let x2_J = document.getElementById("liA9");
    let x2_K = document.getElementById("liA10");
    let x2_L = document.getElementById("liA11");
    let x2_M = document.getElementById("liA12");
    let x2_N = document.getElementById("liA13");
    let x2_O = document.getElementById("liA14");
    let x2_P = document.getElementById("liA15");
    let x2_Q = document.getElementById("liA16");
    let x2_R = document.getElementById("liA17");
    let x2_S = document.getElementById("liA18");

    /*loop through the liAseries list elements*/
    let liAseriesArr = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
        x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
        x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R, x1_S]
    for (let i = 0; i < liAseriesArr.length; i++) {
        let iterdataA = liAseriesArr.map((dataitem1) => {
            dataitem1.style.display = _displayblockA;
            dataitem1.style.backgroundColor = _background_ColorA;
            dataitem1.style.border = _border_defaultA;
            dataitem1.style.fontSize = _font_sizeA;
            dataitem1.style.margin = _marginA;
            dataitem1.style.textAlign = _text_alignA;
        })
        return iterdataA
    }

    /*liAsubseries elements*/
    let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
    let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
    let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
    let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
    let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
    let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
    let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
    let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

    let subLiSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
        x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
        x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8]

    for (let i = 0; i < subLiSeries.length; i++) {
        let iterdata2 = subLiSeries.map((dataitem2) => {
            dataitem2.style.display = _displayblockA;//style.display = "block"*/
            dataitem2.style.backgroundColor = _background_ColorA;
            dataitem2.style.border = _border_defaultA;
            dataitem2.style.fontSize = _font_sizeA;
            dataitem2.style.margin = _marginA;
            dataitem2.style.textAlign = _text_alignA;
        })
        return iterdata2;
    }

}
/*
//below area under development!!!!!!!!!!!!!!!!!!!

//girlMode theme
function _default_mode() {
    //line -- is the final piece
    try {
        localStorage.setItem("defaultmode", document.getElementById("header").style.backgroundColor = "blue");
    }
    catch (ev) {
        {
            console.log(Error.ev = "Something went wrong")
        }
    }
}

//girlMode theme
function _light_mode() {
    //line -- is the final piece
    try {
        localStorage.setItem("lightmode", document.getElementById("header").style.backgroundColor = "lightgrey");
    }
    catch (ev) {
        console.log(Error.ev = "Something went wrong")
    }
}

//darkMode theme
function _dark_mode() {
    //line -- is the final piece
    try {
        localStorage.setItem("darkmode", document.getElementById("header").style.backgroundColor = "darkgrey");

    }
    catch (ev) {
        console.log(Error.ev = "Something went wrong")
    }
}

//girlMode theme
function _girl_mode() {
    //line -- is the final piece
    try {
        localStorage.setItem("girlmode", document.getElementById("header").style.backgroundColor = "pink");

    }
    catch (ev) {
        console.log(Error.ev = "Something went wrong")
    }
}

//boyMode theme
function _boy_mode() {
    //line -- is the final piece
    try {
        localStorage.setItem("boymode", document.getElementById("header").style.backgroundColor = "orange")


    }
    catch (ev) {
        console.log(Error.ev = "Something went wrong")
    }
}

try {

}
catch (ev) {
    console.log(Error.ev)
}


if (document.addEventListener("onclick", _default_mode())) {
    localStorage.getItem("lightmode", document.getElementById("header").style.backgroundColor = "blue");

}
else if (document.addEventListener("onclick", _light_mode())) {
    localStorage.getItem("lightmode", document.getElementById("header").style.backgroundColor = "lightgrey");

}
else if (document.addEventListener("onclick", _dark_mode())) {
    localStorage.getItem("darkmode", document.getElementById("header").style.backgroundColor = "darkgrey");

}
else if (document.addEventListener("onclick", _girl_mode())) {
    localStorage.getItem("girlmode", document.getElementById("header").style.backgroundColor = "pink");

}
else if (document.addEventListener("onclick", _boy_mode())) {
    localStorage.getItem("boymode", document.getElementById("header").style.backgroundColor = "orange");
}
else {

}*/



