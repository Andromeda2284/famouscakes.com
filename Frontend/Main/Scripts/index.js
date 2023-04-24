
function view_item1A() {
    try {
        /*fonts properties start*/
        let _font_sizeA1 = "14pt ";
        let _text_alignA1 = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_ColorA1 = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1A_AutoCustom = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblockA1 = "block";
        let _displayListItemA1 = "list-item";
        let _displaynoneA1 = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal1 = "decimal";
        /*list styling end*/

        /**/
        let _width1_ = "400px";
        /**/

        document.getElementById("btn1").style.display = _displaynoneA1;
        document.getElementById("btn2").style.margin = _margin_1A_AutoCustom;
        document.getElementById("btn2").style.display = _displayblockA1;

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
        let liA1series = [x1, x1_A, x1_B, x1_C, x1_D, x1_E,
            x1_F, x1_G, x1_H, x1_I, x1_J, x1_K, x1_L,
            x1_M, x1_N, x1_O, x1_P, x1_Q, x1_R
        ]

        /*liAsubseries elements*/
        let x1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
        let x1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
        let x1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
        let x1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
        let x1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
        let x1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
        let x1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
        let x1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

        let liA1_subSeries = [x1A_subLiSeriesElement1, x1A_subLiSeriesElement2,
            x1A_subLiSeriesElement3, x1A_subLiSeriesElement4, x1A_subLiSeriesElement5,
            x1A_subLiSeriesElement6, x1A_subLiSeriesElement7, x1A_subLiSeriesElement8
        ]

        for (let i1 = 0; i1 < liA1series.length; i1++) {
            let iterdataA1 = liA1series.map((dataitem1) => {
                dataitem1.style.display = _displayblockA1;
                dataitem1.style.backgroundColor = _background_ColorA1;
                dataitem1.style.fontSize = _font_sizeA1;
                dataitem1.style.margin = _margin_1A_AutoCustom;
                dataitem1.style.textAlign = _text_alignA1;

            })
            for (let i2 = 0; i2 < liA1_subSeries.length; i2++) {
                let iterdataA2 = liA1_subSeries.map((dataitem2) => {
                    dataitem2.style.display = _displayListItemA1;
                    dataitem2.style.backgroundColor = _background_ColorA1;
                    dataitem2.style.fontSize = _font_sizeA1;
                    dataitem2.style.margin = _margin_1A_AutoCustom;
                    dataitem2.style.textAlign = _text_alignA1;
                    dataitem2.style.listStyle = _list_style_decimal1;
                    dataitem2.style.width = _width1_;
                })
                return iterdataA2
            }
            return iterdataA1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1A.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2A() {
    try {
        /*margin start*/
        let _margin2AallAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock2A = "block";
        let _displaynone2A = "none";
        /*display properties end*/

        document.getElementById("btn1").style.display = _displayblock2A;
        document.getElementById("btn1").style.margin = _margin2AallAuto;
        document.getElementById("btn2").style.display = _displaynone2A;

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

        /*liAsubseries elements*/
        let y1A_subLiSeriesElement1 = document.getElementById("liA_SubA1");
        let y1A_subLiSeriesElement2 = document.getElementById("liA_SubA2");
        let y1A_subLiSeriesElement3 = document.getElementById("liA_SubA3");
        let y1A_subLiSeriesElement4 = document.getElementById("liA_SubA4");
        let y1A_subLiSeriesElement5 = document.getElementById("liA_SubA5");
        let y1A_subLiSeriesElement6 = document.getElementById("liA_SubA6");
        let y1A_subLiSeriesElement7 = document.getElementById("liA_SubA7");
        let y1A_subLiSeriesElement8 = document.getElementById("liA_SubA8");

        /*loop through the liAseries list elements*/
        let liA2series = [y1, y1_A, y1_B, y1_C, y1_D, y1_E,
            y1_F, y1_G, y1_H, y1_I, y1_J, y1_K, y1_L,
            y1_M, y1_N, y1_O, y1_P, y1_Q, y1_R
        ]

        let subLiA2Series = [y1A_subLiSeriesElement1, y1A_subLiSeriesElement2,
            y1A_subLiSeriesElement3, y1A_subLiSeriesElement4, y1A_subLiSeriesElement5,
            y1A_subLiSeriesElement6, y1A_subLiSeriesElement7, y1A_subLiSeriesElement8
        ]

        for (let i3 = 0; i3 < liA2series.length; i3++) {
            let iterdataA3 = liA2series.map((dataitem3) => {
                dataitem3.style.display = _displaynone2A;
            })

            for (let i4 = 0; i4 < subLiA2Series.length; i4++) {
                let iterdataA4 = subLiA2Series.map((dataitem4) => {
                    dataitem4.style.display = _displaynone2A;
                })
                return iterdataA4
            }
            return iterdataA3
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2A.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1B() {
    try {
        /*fonts properties start*/
        let _font_size_1B = "14pt ";
        let _text_align_1B = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1B = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1B_AutoCustom = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1B = "block";
        let _displayListItem_1B = "list-item";
        let _displaynone_1B = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_2 = "decimal";
        /*list styling end*/

        /**/
        let _width2_ = "400px";
        /**/

        document.getElementById("btn3").style.display = _displaynone_1B;
        document.getElementById("btn4").style.margin = _margin_1B_AutoCustom;
        document.getElementById("btn4").style.display = _displayblock_1B;

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

        /*loop through the liAseries list elements*/
        let liB1seriesArr = [x2, x2_A, x2_B, x2_C, x2_D, x2_E,
            x2_F, x2_G, x2_H, x2_I, x2_J, x2_K, x2_L,
            x2_M, x2_N, x2_O, x2_P, x2_Q, x2_R
        ]

        /*liBsubseries elements*/
        let x2B_subLiSeriesElement1 = document.getElementById("liB_SubB1");
        let x2B_subLiSeriesElement2 = document.getElementById("liB_SubB2");
        let x2B_subLiSeriesElement3 = document.getElementById("liB_SubB3");
        let x2B_subLiSeriesElement4 = document.getElementById("liB_SubB4");
        let x2B_subLiSeriesElement5 = document.getElementById("liB_SubB5");
        let x2B_subLiSeriesElement6 = document.getElementById("liB_SubB6");
        let x2B_subLiSeriesElement7 = document.getElementById("liB_SubB7");
        let x2B_subLiSeriesElement8 = document.getElementById("liB_SubB8");
        let x2B_subLiSeriesElement9 = document.getElementById("liB_SubB9");
        let x2B_subLiSeriesElement10 = document.getElementById("liB_SubB10");

        let subLiB1Series = [x2B_subLiSeriesElement1, x2B_subLiSeriesElement2,
            x2B_subLiSeriesElement3, x2B_subLiSeriesElement4, x2B_subLiSeriesElement5,
            x2B_subLiSeriesElement6, x2B_subLiSeriesElement7, x2B_subLiSeriesElement8,
            x2B_subLiSeriesElement9, x2B_subLiSeriesElement10
        ]
        for (let i5 = 0; i5 < liB1seriesArr.length; i5++) {
            let iterdataB1 = liB1seriesArr.map((dataitem5) => {
                dataitem5.style.display = _displayblock_1B;
                dataitem5.style.backgroundColor = _background_Color_1B;
                dataitem5.style.fontSize = _font_size_1B;
                dataitem5.style.margin = _margin_1B_AutoCustom;
                dataitem5.style.textAlign = _text_align_1B;
            })
            for (let i6 = 0; i6 < subLiB1Series.length; i6++) {
                let iterdataB2 = subLiB1Series.map((dataitem6) => {
                    dataitem6.style.display = _displayListItem_1B;//style.display = "block"*/
                    dataitem6.style.backgroundColor = _background_Color_1B;
                    dataitem6.style.fontSize = _font_size_1B;
                    dataitem6.style.margin = _margin_1B_AutoCustom;
                    dataitem6.style.textAlign = _text_align_1B;
                    dataitem6.style.listStyle = _list_style_decimal_2;
                    dataitem6.style.width = _width2_;
                })
                return iterdataB2;
            }
            return iterdataB1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1B.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2B() {
    try {
        /*margin properties start*/
        let _margin_2B_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2B = "block";
        let _displaynone_2B = "none";
        /*display properties end*/

        document.getElementById("btn4").style.display = _displaynone_2B;
        document.getElementById("btn3").style.margin = _margin_2B_allAuto;
        document.getElementById("btn3").style.display = _displayblock_2B;
        /*ingredients header*/
        let y2 = document.getElementById("p-content2");
        let y2_A = document.getElementById("h3_2");

        /*ingredients*/
        let y2_B = document.getElementById("liB1");
        let y2_C = document.getElementById("liB2");
        let y2_D = document.getElementById("liB3");
        let y2_E = document.getElementById("liB4");
        let y2_F = document.getElementById("liB5");
        let y2_G = document.getElementById("liB6");
        let y2_H = document.getElementById("liB7");
        let y2_I = document.getElementById("liB8");
        let y2_J = document.getElementById("liB9");
        let y2_K = document.getElementById("liB10");
        let y2_L = document.getElementById("liB11");
        let y2_M = document.getElementById("liB12");
        let y2_N = document.getElementById("liB13");
        let y2_O = document.getElementById("liB14");
        let y2_P = document.getElementById("liB15");
        let y2_Q = document.getElementById("liB16");
        let y2_R = document.getElementById("liB17");

        /*loop through the liAseries list elements*/
        let liB2series = [y2, y2_A, y2_B, y2_C, y2_D, y2_E,
            y2_F, y2_G, y2_H, y2_I, y2_J, y2_K, y2_L,
            y2_M, y2_N, y2_O, y2_P, y2_Q, y2_R
        ]

        /*liBsubseries elements*/
        let y2B_subLiSeriesElement1 = document.getElementById("liB_SubB1");
        let y2B_subLiSeriesElement2 = document.getElementById("liB_SubB2");
        let y2B_subLiSeriesElement3 = document.getElementById("liB_SubB3");
        let y2B_subLiSeriesElement4 = document.getElementById("liB_SubB4");
        let y2B_subLiSeriesElement5 = document.getElementById("liB_SubB5");
        let y2B_subLiSeriesElement6 = document.getElementById("liB_SubB6");
        let y2B_subLiSeriesElement7 = document.getElementById("liB_SubB7");
        let y2B_subLiSeriesElement8 = document.getElementById("liB_SubB8");
        let y2B_subLiSeriesElement9 = document.getElementById("liB_SubB9");
        let y2B_subLiSeriesElement10 = document.getElementById("liB_SubB10");

        let subLiB2Series = [y2B_subLiSeriesElement1, y2B_subLiSeriesElement2,
            y2B_subLiSeriesElement3, y2B_subLiSeriesElement4, y2B_subLiSeriesElement5,
            y2B_subLiSeriesElement6, y2B_subLiSeriesElement7, y2B_subLiSeriesElement8,
            y2B_subLiSeriesElement9, y2B_subLiSeriesElement10
        ]
        for (let i7 = 0; i7 < liB2series.length; i7++) {
            let iterdataB3 = liB2series.map((dataitem7) => {
                dataitem7.style.display = _displaynone_2B;
            })
            for (let i8 = 0; i8 < subLiB2Series.length; i8++) {
                let iterdataB4 = subLiB2Series.map((dataitem8) => {
                    dataitem8.style.display = _displaynone_2B;
                })
                return iterdataB4;
            }
            return iterdataB3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2B.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1C() {
    try {
        /*fonts properties start*/
        let _font_size_1C = "14pt ";
        let _text_align_1C = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1C = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1C_AutoCustom = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1C = "block";
        let _displayListItem_1C = "list-item";
        let _displaynone_1C = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_3 = "decimal";
        /*list styling end*/

        /**/
        let _width3_ = "400px";
        /**/

        document.getElementById("btn5").style.display = _displaynone_1C;
        document.getElementById("btn6").style.margin = _margin_1C_AutoCustom;
        document.getElementById("btn6").style.display = _displayblock_1C;

        /*ingredients header*/
        let x3 = document.getElementById("p-content3");
        let x3_A = document.getElementById("h3_3");

        /*ingredients*/
        let x3_B = document.getElementById("liC1");
        let x3_C = document.getElementById("liC2");
        let x3_D = document.getElementById("liC3");
        let x3_E = document.getElementById("liC4");
        let x3_F = document.getElementById("liC5");
        let x3_G = document.getElementById("liC6");
        let x3_H = document.getElementById("liC7");
        let x3_I = document.getElementById("liC8");
        let x3_J = document.getElementById("liC9");
        let x3_K = document.getElementById("liC10");
        let x3_L = document.getElementById("liC11");
        let x3_M = document.getElementById("liC12");
        let x3_N = document.getElementById("liC13");
        let x3_O = document.getElementById("liC14");
        let x3_P = document.getElementById("liC15");

        /*loop through the liAseries list elements*/
        let liC1seriesArr = [x3, x3_A, x3_B, x3_C, x3_D, x3_E,
            x3_F, x3_G, x3_H, x3_I, x3_J, x3_K, x3_L,
            x3_M, x3_N, x3_O, x3_P
        ]

        /*liCsubseries elements*/
        let x3C_subLiSeriesElement1 = document.getElementById("liC_SubC1");
        let x3C_subLiSeriesElement2 = document.getElementById("liC_SubC2");
        let x3C_subLiSeriesElement3 = document.getElementById("liC_SubC3");
        let x3C_subLiSeriesElement4 = document.getElementById("liC_SubC4");
        let x3C_subLiSeriesElement5 = document.getElementById("liC_SubC5");
        let x3C_subLiSeriesElement6 = document.getElementById("liC_SubC6");
        let x3C_subLiSeriesElement7 = document.getElementById("liC_SubC7");
        let x3C_subLiSeriesElement8 = document.getElementById("liC_SubC8");
        let x3C_subLiSeriesElement9 = document.getElementById("liC_SubC9");

        let subLiC1Series = [x3C_subLiSeriesElement1, x3C_subLiSeriesElement2,
            x3C_subLiSeriesElement3, x3C_subLiSeriesElement4, x3C_subLiSeriesElement5,
            x3C_subLiSeriesElement6, x3C_subLiSeriesElement7, x3C_subLiSeriesElement8,
            x3C_subLiSeriesElement9
        ]
        for (let i9 = 0; i9 < liC1seriesArr.length; i9++) {
            let iterdataC1 = liC1seriesArr.map((dataitem9) => {
                dataitem9.style.display = _displayblock_1C;
                dataitem9.style.backgroundColor = _background_Color_1C;
                dataitem9.style.fontSize = _font_size_1C;
                dataitem9.style.margin = _margin_1C_AutoCustom;
                dataitem9.style.textAlign = _text_align_1C;
            })
            for (let i10 = 0; i10 < subLiC1Series.length; i10++) {
                let iterdataC2 = subLiC1Series.map((dataitem10) => {
                    dataitem10.style.display = _displayListItem_1C;//style.display = "block"*/
                    dataitem10.style.backgroundColor = _background_Color_1C;
                    dataitem10.style.fontSize = _font_size_1C;
                    dataitem10.style.margin = _margin_1C_AutoCustom;
                    dataitem10.style.textAlign = _text_align_1C;
                    dataitem10.style.listStyle = _list_style_decimal_3;
                    dataitem10.style.width = _width3_;
                })
                return iterdataC2;
            }
            return iterdataC1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1C.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2C() {
    try {
        /*margin properties start*/
        let _margin_2C_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2C = "block";
        let _displaynone_2C = "none";
        /*display properties end*/

        document.getElementById("btn6").style.display = _displaynone_2C;
        document.getElementById("btn5").style.margin = _margin_2C_allAuto;
        document.getElementById("btn5").style.display = _displayblock_2C;
        /*ingredients header*/
        let y3 = document.getElementById("p-content3");
        let y3_A = document.getElementById("h3_3");

        /*ingredients*/
        let y3_B = document.getElementById("liC1");
        let y3_C = document.getElementById("liC2");
        let y3_D = document.getElementById("liC3");
        let y3_E = document.getElementById("liC4");
        let y3_F = document.getElementById("liC5");
        let y3_G = document.getElementById("liC6");
        let y3_H = document.getElementById("liC7");
        let y3_I = document.getElementById("liC8");
        let y3_J = document.getElementById("liC9");
        let y3_K = document.getElementById("liC10");
        let y3_L = document.getElementById("liC11");
        let y3_M = document.getElementById("liC12");
        let y3_N = document.getElementById("liC13");
        let y3_O = document.getElementById("liC14");
        let y3_P = document.getElementById("liC15");

        /*loop through the liAseries list elements*/
        let liC2series = [y3, y3_A, y3_B, y3_C,
            y3_D, y3_E, y3_F, y3_G, y3_H,
            y3_I, y3_J, y3_K, y3_L, y3_M,
            y3_N, y3_O, y3_P
        ]

        /*liCsubseries elements*/
        let y3C_subLiSeriesElement1 = document.getElementById("liC_SubC1");
        let y3C_subLiSeriesElement2 = document.getElementById("liC_SubC2");
        let y3C_subLiSeriesElement3 = document.getElementById("liC_SubC3");
        let y3C_subLiSeriesElement4 = document.getElementById("liC_SubC4");
        let y3C_subLiSeriesElement5 = document.getElementById("liC_SubC5");
        let y3C_subLiSeriesElement6 = document.getElementById("liC_SubC6");
        let y3C_subLiSeriesElement7 = document.getElementById("liC_SubC7");
        let y3C_subLiSeriesElement8 = document.getElementById("liC_SubC8");
        let y3C_subLiSeriesElement9 = document.getElementById("liC_SubC9");

        let subLiC2Series = [y3C_subLiSeriesElement1, y3C_subLiSeriesElement2,
            y3C_subLiSeriesElement3, y3C_subLiSeriesElement4, y3C_subLiSeriesElement5,
            y3C_subLiSeriesElement6, y3C_subLiSeriesElement7, y3C_subLiSeriesElement8,
            y3C_subLiSeriesElement9
        ]
        for (let i11 = 0; i11 < liC2series.length; i11++) {
            let iterdataC3 = liC2series.map((dataitem7) => {
                dataitem7.style.display = _displaynone_2C;
            })
            for (let i12 = 0; i12 < subLiC2Series.length; i12++) {
                let iterdataC4 = subLiC2Series.map((dataitem8) => {
                    dataitem8.style.display = _displaynone_2C;
                })
                return iterdataC4;
            }
            return iterdataC3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2C.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1D() {
    try {
        /*fonts properties start*/
        let _font_size_1D = "14pt ";
        let _text_align_1D = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1D = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1D_AutoCustom = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1D = "block";
        let _displayListItem_1D = "list-item";
        let _displaynone_1D = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_4 = "decimal";
        /*list styling end*/

        /**/
        let _width4_ = "400px";
        /**/

        document.getElementById("btn7").style.display = _displaynone_1D;
        document.getElementById("btn8").style.margin = _margin_1D_AutoCustom;
        document.getElementById("btn8").style.display = _displayblock_1D;

        /*ingredients header*/
        let x4 = document.getElementById("p-content4");
        let x4_A = document.getElementById("h3_4");

        /*ingredients*/
        let x4_B = document.getElementById("liD1");
        let x4_C = document.getElementById("liD2");
        let x4_D = document.getElementById("liD3");
        let x4_E = document.getElementById("liD4");
        let x4_F = document.getElementById("liD5");
        let x4_G = document.getElementById("liD6");
        let x4_H = document.getElementById("liD7");
        let x4_I = document.getElementById("liD8");

        /*loop through the liAseries list elements*/
        let liD1series = [x4, x4_A, x4_B, x4_C, x4_D, x4_E,
            x4_F, x4_G, x4_H, x4_I
        ]

        /*liDsubseries elements*/
        let x4D_subLiSeriesElement1 = document.getElementById("liD_SubD1");
        let x4D_subLiSeriesElement2 = document.getElementById("liD_SubD2");
        let x4D_subLiSeriesElement3 = document.getElementById("liD_SubD3");
        let x4D_subLiSeriesElement4 = document.getElementById("liD_SubD4");
        let x4D_subLiSeriesElement5 = document.getElementById("liD_SubD5");
        let x4D_subLiSeriesElement6 = document.getElementById("liD_SubD6");

        let subLiD1Series = [x4D_subLiSeriesElement1, x4D_subLiSeriesElement2,
            x4D_subLiSeriesElement3, x4D_subLiSeriesElement4, x4D_subLiSeriesElement5,
            x4D_subLiSeriesElement6
        ]

        for (let i13 = 0; i13 < liD1series.length; i13++) {
            let iterdataD1 = liD1series.map((dataitem13) => {
                dataitem13.style.display = _displayblock_1D;
                dataitem13.style.backgroundColor = _background_Color_1D;
                dataitem13.style.fontSize = _font_size_1D;
                dataitem13.style.margin = _margin_1D_AutoCustom;
                dataitem13.style.textAlign = _text_align_1D;
            })
            for (let i14 = 0; i14 < subLiD1Series.length; i14++) {
                let iterdataD2 = subLiD1Series.map((dataitem14) => {
                    dataitem14.style.display = _displayListItem_1D;
                    dataitem14.style.backgroundColor = _background_Color_1D;
                    dataitem14.style.fontSize = _font_size_1D;
                    dataitem14.style.margin = _margin_1D_AutoCustom;
                    dataitem14.style.textAlign = _text_align_1D;
                    dataitem14.style.listStyle = _list_style_decimal_4;
                    dataitem14.style.width = _width4_;
                })
                return iterdataD2;
            }
            return iterdataD1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1D.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2D() {
    try {
        /*margin properties start*/
        let _margin_2D_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2D = "block";
        let _displaynone_2D = "none";
        /*display properties end*/

        document.getElementById("btn8").style.display = _displaynone_2D;
        document.getElementById("btn7").style.margin = _margin_2D_allAuto;
        document.getElementById("btn7").style.display = _displayblock_2D;
        /*ingredients header*/
        let y4 = document.getElementById("p-content4");
        let y4_A = document.getElementById("h3_4");

        /*ingredients*/
        let y4_B = document.getElementById("liD1");
        let y4_C = document.getElementById("liD2");
        let y4_D = document.getElementById("liD3");
        let y4_E = document.getElementById("liD4");
        let y4_F = document.getElementById("liD5");
        let y4_G = document.getElementById("liD6");
        let y4_H = document.getElementById("liD7");
        let y4_I = document.getElementById("liD8");

        /*loop through the liAseries list elements*/
        let liD2series = [y4,
            y4_A, y4_B, y4_C, y4_D,
            y4_E, y4_F, y4_G, y4_H,
            y4_I
        ]

        /*liDsubseries elements*/
        let y4D_subLiSeriesElement1 = document.getElementById("liD_SubD1");
        let y4D_subLiSeriesElement2 = document.getElementById("liD_SubD2");
        let y4D_subLiSeriesElement3 = document.getElementById("liD_SubD3");
        let y4D_subLiSeriesElement4 = document.getElementById("liD_SubD4");
        let y4D_subLiSeriesElement5 = document.getElementById("liD_SubD5");
        let y4D_subLiSeriesElement6 = document.getElementById("liD_SubD6");

        let subLiD2Series = [y4D_subLiSeriesElement1, y4D_subLiSeriesElement2,
            y4D_subLiSeriesElement3, y4D_subLiSeriesElement4, y4D_subLiSeriesElement5,
            y4D_subLiSeriesElement6
        ]
        for (let i15 = 0; i15 < liD2series.length; i15++) {
            let iterdataD3 = liD2series.map((dataitem15) => {
                dataitem15.style.display = _displaynone_2D;
            })
            for (let i16 = 0; i16 < subLiD2Series.length; i16++) {
                let iterdataD4 = subLiD2Series.map((dataitem16) => {
                    dataitem16.style.display = _displaynone_2D;
                })
                return iterdataD4;
            }
            return iterdataD3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2D.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1E() {
    try {
        /*fonts properties start*/
        let _font_size_1E = "14pt ";
        let _text_align_1E = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1E = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1E_AutoCustom = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1E = "block";
        let _displayListItem_1E = "list-item";
        let _displaynone_1E = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_5 = "decimal";
        /*list styling end*/

        /**/
        let _width5_ = "400px";
        /**/

        document.getElementById("btn9").style.display = _displaynone_1E;
        document.getElementById("btn10").style.margin = _margin_1E_AutoCustom;
        document.getElementById("btn10").style.display = _displayblock_1E;

        /*ingredients header*/
        let x5 = document.getElementById("p-content5");
        let x5_A = document.getElementById("h3_5");

        /*ingredients*/
        let x5_B = document.getElementById("liE1");
        let x5_C = document.getElementById("liE2");
        let x5_D = document.getElementById("liE3");
        let x5_E = document.getElementById("liE4");
        let x5_F = document.getElementById("liE5");
        let x5_G = document.getElementById("liE6");
        let x5_H = document.getElementById("liE7");
        let x5_I = document.getElementById("liE8");
        let x5_J = document.getElementById("liE9");
        let x5_K = document.getElementById("liE10");
        let x5_L = document.getElementById("liE11");
        let x5_M = document.getElementById("liE12");
        let x5_N = document.getElementById("liE13");
        let x5_O = document.getElementById("liE14");
        let x5_P = document.getElementById("liE15");
        let x5_Q = document.getElementById("liE16");

        /*loop through the liAseries list elements*/
        let liE1series = [x5, x5_A, x5_B, x5_C, x5_D, x5_E,
            x5_F, x5_G, x5_H, x5_I, x5_J, x5_K, x5_L,
            x5_M, x5_N, x5_O, x5_P, x5_Q
        ]

        /*liEsubseries elements*/
        let x5E_subLiSeriesElement1 = document.getElementById("liE_SubE1");
        let x5E_subLiSeriesElement2 = document.getElementById("liE_SubE2");
        let x5E_subLiSeriesElement3 = document.getElementById("liE_SubE3");
        let x5E_subLiSeriesElement4 = document.getElementById("liE_SubE4");
        let x5E_subLiSeriesElement5 = document.getElementById("liE_SubE5");
        let x5E_subLiSeriesElement6 = document.getElementById("liE_SubE6");
        let x5E_subLiSeriesElement7 = document.getElementById("liE_SubE7");
        let x5E_subLiSeriesElement8 = document.getElementById("liE_SubE8");
        let x5E_subLiSeriesElement9 = document.getElementById("liE_SubE9");

        let subLiE1Series = [x5E_subLiSeriesElement1, x5E_subLiSeriesElement2,
            x5E_subLiSeriesElement3, x5E_subLiSeriesElement4, x5E_subLiSeriesElement5,
            x5E_subLiSeriesElement6, x5E_subLiSeriesElement7, x5E_subLiSeriesElement8,
            x5E_subLiSeriesElement9
        ]

        for (let i17 = 0; i17 < liE1series.length; i17++) {
            let iterdataE1 = liE1series.map((dataitem17) => {
                dataitem17.style.display = _displayblock_1E;
                dataitem17.style.backgroundColor = _background_Color_1E;
                dataitem17.style.fontSize = _font_size_1E;
                dataitem17.style.margin = _margin_1E_AutoCustom;
                dataitem17.style.textAlign = _text_align_1E;
            })
            for (let i18 = 0; i18 < subLiE1Series.length; i18++) {
                let iterdataE2 = subLiE1Series.map((dataitem18) => {
                    dataitem18.style.display = _displayListItem_1E;
                    dataitem18.style.backgroundColor = _background_Color_1E;
                    dataitem18.style.fontSize = _font_size_1E;
                    dataitem18.style.margin = _margin_1E_AutoCustom;
                    dataitem18.style.textAlign = _text_align_1E;
                    dataitem18.style.listStyle = _list_style_decimal_5;
                    dataitem18.style.width = _width5_;
                })
                return iterdataE2;
            }
            return iterdataE1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1E.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2E() {
    try {
        /*margin properties start*/
        let _margin_2E_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2E = "block";
        let _displaynone_2E = "none";
        /*display properties end*/
        document.getElementById("btn10").style.display = _displaynone_2E;
        document.getElementById("btn9").style.margin = _margin_2E_allAuto;
        document.getElementById("btn9").style.display = _displayblock_2E;

        /*ingredients header*/
        let y5 = document.getElementById("p-content5");
        let y5_A = document.getElementById("h3_5");

        /*ingredients*/
        let y5_B = document.getElementById("liE1");
        let y5_C = document.getElementById("liE2");
        let y5_D = document.getElementById("liE3");
        let y5_E = document.getElementById("liE4");
        let y5_F = document.getElementById("liE5");
        let y5_G = document.getElementById("liE6");
        let y5_H = document.getElementById("liE7");
        let y5_I = document.getElementById("liE8");
        let y5_J = document.getElementById("liE9");
        let y5_K = document.getElementById("liE10");
        let y5_L = document.getElementById("liE11");
        let y5_M = document.getElementById("liE12");
        let y5_N = document.getElementById("liE13");
        let y5_O = document.getElementById("liE14");
        let y5_P = document.getElementById("liE15");

        /*loop through the liAseries list elements*/
        let liE2series = [y5, y5_A, y5_B, y5_C,
            y5_D, y5_E, y5_F, y5_G, y5_H,
            y5_I, y5_J, y5_K, y5_L, y5_M,
            y5_N, y5_O, y5_P
        ]

        /*liEsubseries elements*/
        let y5E_subLiSeriesElement1 = document.getElementById("liE_SubE1");
        let y5E_subLiSeriesElement2 = document.getElementById("liE_SubE2");
        let y5E_subLiSeriesElement3 = document.getElementById("liE_SubE3");
        let y5E_subLiSeriesElement4 = document.getElementById("liE_SubE4");
        let y5E_subLiSeriesElement5 = document.getElementById("liE_SubE5");
        let y5E_subLiSeriesElement6 = document.getElementById("liE_SubE6");
        let y5E_subLiSeriesElement7 = document.getElementById("liE_SubE7");
        let y5E_subLiSeriesElement8 = document.getElementById("liE_SubE8");
        let y5E_subLiSeriesElement9 = document.getElementById("liE_SubE9");

        let subLiE2Series = [y5E_subLiSeriesElement1, y5E_subLiSeriesElement2,
            y5E_subLiSeriesElement3, y5E_subLiSeriesElement4, y5E_subLiSeriesElement5,
            y5E_subLiSeriesElement6, y5E_subLiSeriesElement7, y5E_subLiSeriesElement8,
            y5E_subLiSeriesElement9
        ]
        for (let i19 = 0; i19 < liE2series.length; i19++) {
            let iterdataE3 = liE2series.map((dataitem19) => {
                dataitem19.style.display = _displaynone_2E;
            })
            for (let i20 = 0; i20 < subLiE2Series.length; i20++) {
                let iterdataE4 = subLiE2Series.map((dataitem20) => {
                    dataitem20.style.display = _displaynone_2E;
                })
                return iterdataE4;
            }
            return iterdataE3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2E.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1F() {
    try {
        /*fonts properties start*/
        let _font_size_1F = "14pt ";
        let _text_align_1F = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1F = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1F_AutoCustom = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1F = "block";
        let _displayListItem_1F = "list-item";
        let _displaynone_1F = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_6 = "decimal";
        /*list styling end*/

        /**/
        let _width6_ = "400px";
        /**/

        document.getElementById("btn11").style.display = _displaynone_1F;
        document.getElementById("btn12").style.margin = _margin_1F_AutoCustom;
        document.getElementById("btn12").style.display = _displayblock_1F;

        /*ingredients header*/
        let x6 = document.getElementById("p-content6");
        let x6_A = document.getElementById("h3_6");

        /*ingredients*/
        let x6_B = document.getElementById("liF1");
        let x6_C = document.getElementById("liF2");
        let x6_D = document.getElementById("liF3");
        let x6_E = document.getElementById("liF4");
        let x6_F = document.getElementById("liF5");
        let x6_G = document.getElementById("liF6");
        let x6_H = document.getElementById("liF7");
        let x6_I = document.getElementById("liF8");
        let x6_J = document.getElementById("liF9");
        let x6_K = document.getElementById("liF10");
        let x6_L = document.getElementById("liF11");
        let x6_M = document.getElementById("liF12");

        /*loop through the liAseries list elements*/
        let liF1series = [x6, x6_A, x6_B, x6_C, x6_D, x6_E,
            x6_F, x6_G, x6_H, x6_I, x6_J, x6_K, x6_L,
            x6_M
        ]

        /*liFsubseries elements*/
        let x6F_subLiSeriesElement1 = document.getElementById("liF_SubF1");
        let x6F_subLiSeriesElement2 = document.getElementById("liF_SubF2");
        let x6F_subLiSeriesElement3 = document.getElementById("liF_SubF3");
        let x6F_subLiSeriesElement4 = document.getElementById("liF_SubF4");
        let x6F_subLiSeriesElement5 = document.getElementById("liF_SubF5");
        let x6F_subLiSeriesElement6 = document.getElementById("liF_SubF6");
        let x6F_subLiSeriesElement7 = document.getElementById("liF_SubF7");

        let subLiF1Series = [x6F_subLiSeriesElement1, x6F_subLiSeriesElement2,
            x6F_subLiSeriesElement3, x6F_subLiSeriesElement4, x6F_subLiSeriesElement5,
            x6F_subLiSeriesElement6, x6F_subLiSeriesElement7
        ]

        for (let i21 = 0; i21 < liF1series.length; i21++) {
            let iterdataD1 = liF1series.map((dataitem21) => {
                dataitem21.style.display = _displayblock_1F;
                dataitem21.style.backgroundColor = _background_Color_1F;
                dataitem21.style.fontSize = _font_size_1F;
                dataitem21.style.margin = _margin_1F_AutoCustom;
                dataitem21.style.textAlign = _text_align_1F;
            })
            for (let i22 = 0; i22 < subLiF1Series.length; i22++) {
                let iterdataD2 = subLiF1Series.map((dataitem22) => {
                    dataitem22.style.display = _displayListItem_1F;
                    dataitem22.style.backgroundColor = _background_Color_1F;
                    dataitem22.style.fontSize = _font_size_1F;
                    dataitem22.style.margin = _margin_1F_AutoCustom;
                    dataitem22.style.textAlign = _text_align_1F;
                    dataitem22.style.listStyle = _list_style_decimal_6;
                    dataitem22.style.width = _width6_;
                })
                return iterdataD2;
            }
            return iterdataD1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1F.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2F() {
    try {
        /*margin properties start*/
        let _margin_2F_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2F = "block";
        let _displaynone_2F = "none";
        /*display properties end*/

        document.getElementById("btn12").style.display = _displaynone_2F;
        document.getElementById("btn11").style.margin = _margin_2F_allAuto;
        document.getElementById("btn11").style.display = _displayblock_2F;

        /*ingredients header*/
        let y6 = document.getElementById("p-content6");
        let y6_A = document.getElementById("h3_6");

        /*ingredients*/
        let y6_B = document.getElementById("liF1");
        let y6_C = document.getElementById("liF2");
        let y6_D = document.getElementById("liF3");
        let y6_E = document.getElementById("liF4");
        let y6_F = document.getElementById("liF5");
        let y6_G = document.getElementById("liF6");
        let y6_H = document.getElementById("liF7");
        let y6_I = document.getElementById("liF8");
        let y6_J = document.getElementById("liF9");
        let y6_K = document.getElementById("liF10");
        let y6_L = document.getElementById("liF11");
        let y6_M = document.getElementById("liF12");

        /*loop through the liAseries list elements*/
        let liF2series = [y6, y6_A, y6_B, y6_C,
            y6_D, y6_E, y6_F, y6_G, y6_H,
            y6_I, y6_J, y6_K, y6_L, y6_M
        ]

        /*liFsubseries elements*/
        let y6F_subLiSeriesElement1 = document.getElementById("liF_SubF1");
        let y6F_subLiSeriesElement2 = document.getElementById("liF_SubF2");
        let y6F_subLiSeriesElement3 = document.getElementById("liF_SubF3");
        let y6F_subLiSeriesElement4 = document.getElementById("liF_SubF4");
        let y6F_subLiSeriesElement5 = document.getElementById("liF_SubF5");
        let y6F_subLiSeriesElement6 = document.getElementById("liF_SubF6");
        let y6F_subLiSeriesElement7 = document.getElementById("liF_SubF7");

        let subLiF2Series = [y6F_subLiSeriesElement1, y6F_subLiSeriesElement2,
            y6F_subLiSeriesElement3, y6F_subLiSeriesElement4, y6F_subLiSeriesElement5,
            y6F_subLiSeriesElement6, y6F_subLiSeriesElement7
        ]
        for (let i23 = 0; i23 < liF2series.length; i23++) {
            let iterdataF3 = liF2series.map((dataitem23) => {
                dataitem23.style.display = _displaynone_2F;
            })
            for (let i24 = 0; i24 < subLiF2Series.length; i24++) {
                let iterdataF4 = subLiF2Series.map((dataitem24) => {
                    dataitem24.style.display = _displaynone_2F;
                })
                return iterdataF4;
            }
            return iterdataF3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2F.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1G() {
    try {
        /*fonts properties start*/
        let _font_size_1G = "14pt ";
        let _text_align_1G = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1G = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1G_AutoCustom = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1G = "block";
        let _displayListItem_1G = "list-item";
        let _displaynone_1G = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_7 = "decimal";
        /*list styling end*/

        /**/
        let _width7_ = "400px";
        /**/

        document.getElementById("btn13").style.display = _displaynone_1G;
        document.getElementById("btn14").style.margin = _margin_1G_AutoCustom;
        document.getElementById("btn14").style.display = _displayblock_1G;

        /*ingredients header*/
        let x7 = document.getElementById("p-content7");
        let x7_A = document.getElementById("h3_4");

        /*ingredients*/
        let x7_B = document.getElementById("liG1");
        let x7_C = document.getElementById("liG2");
        let x7_D = document.getElementById("liG3");
        let x7_E = document.getElementById("liG4");
        let x7_F = document.getElementById("liG5");
        let x7_G = document.getElementById("liG6");
        let x7_H = document.getElementById("liG7");
        let x7_I = document.getElementById("liG8");
        let x7_J = document.getElementById("liG9");
        let x7_K = document.getElementById("liG10");
        let x7_L = document.getElementById("liG11");
        let x7_M = document.getElementById("liG12");
        let x7_N = document.getElementById("liG13");
        let x7_O = document.getElementById("liG14");
        let x7_P = document.getElementById("liG15");

        /*loop through the liAseries list elements*/
        let liG1series = [x7, x7_A, x7_B, x7_C, x7_D, x7_E,
            x7_F, x7_G, x7_H, x7_I, x7_J, x7_K, x7_L,
            x7_M, x7_N, x7_O, x7_P
        ]

        /*liGsubseries elements*/
        let x7G_subLiSeriesElement1 = document.getElementById("liG_SubG1");
        let x7G_subLiSeriesElement2 = document.getElementById("liG_SubG2");
        let x7G_subLiSeriesElement3 = document.getElementById("liG_SubG3");
        let x7G_subLiSeriesElement4 = document.getElementById("liG_SubG4");
        let x7G_subLiSeriesElement5 = document.getElementById("liG_SubG5");
        let x7G_subLiSeriesElement6 = document.getElementById("liG_SubG6");
        let x7G_subLiSeriesElement7 = document.getElementById("liG_SubG7");
        let x7G_subLiSeriesElement8 = document.getElementById("liG_SubG8");
        let x7G_subLiSeriesElement9 = document.getElementById("liG_SubG9");

        let subLiG1Series = [x7G_subLiSeriesElement1, x7G_subLiSeriesElement2,
            x7G_subLiSeriesElement3, x7G_subLiSeriesElement4, x7G_subLiSeriesElement5,
            x7G_subLiSeriesElement6, x7G_subLiSeriesElement7, x7G_subLiSeriesElement8,
            x7G_subLiSeriesElement9
        ]

        for (let i25 = 0; i25 < liG1series.length; i25++) {
            let iterdataG1 = liG1series.map((dataitem25) => {
                dataitem25.style.display = _displayblock_1G;
                dataitem25.style.backgroundColor = _background_Color_1G;
                dataitem25.style.fontSize = _font_size_1G;
                dataitem25.style.margin = _margin_1G_AutoCustom;
                dataitem25.style.textAlign = _text_align_1G;
            })
            for (let i26 = 0; i26 < subLiG1Series.length; i26++) {
                let iterdataG2 = subLiG1Series.map((dataitem26) => {
                    dataitem26.style.display = _displayListItem_1G;
                    dataitem26.style.backgroundColor = _background_Color_1G;
                    dataitem26.style.fontSize = _font_size_1G;
                    dataitem26.style.margin = _margin_1G_AutoCustom;
                    dataitem26.style.textAlign = _text_align_1G;
                    dataitem26.style.listStyle = _list_style_decimal_7;
                    dataitem26.style.width = _width7_;
                })
                return iterdataG2;
            }
            return iterdataG1;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1G.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2G() {
    try {
        /*margin properties start*/
        let _margin_2G_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2G = "block";
        let _displaynone_2G = "none";
        /*display properties end*/

        document.getElementById("btn14").style.display = _displaynone_2G;
        document.getElementById("btn13").style.margin = _margin_2G_allAuto;
        document.getElementById("btn13").style.display = _displayblock_2G;
        /*ingredients header*/
        let y7 = document.getElementById("p-content7");
        let y7_A = document.getElementById("h3_7");

        /*ingredients*/
        let y7_B = document.getElementById("liG1");
        let y7_C = document.getElementById("liG2");
        let y7_D = document.getElementById("liG3");
        let y7_E = document.getElementById("liG4");
        let y7_F = document.getElementById("liG5");
        let y7_G = document.getElementById("liG6");
        let y7_H = document.getElementById("liG7");
        let y7_I = document.getElementById("liG8");
        let y7_J = document.getElementById("liG9");
        let y7_K = document.getElementById("liG10");
        let y7_L = document.getElementById("liG11");
        let y7_M = document.getElementById("liG12");
        let y7_N = document.getElementById("liG13");
        let y7_O = document.getElementById("liG14");
        let y7_P = document.getElementById("liG15");
        let y7_Q = document.getElementById("liG16");
        let y7_R = document.getElementById("liG17");
        let y7_S = document.getElementById("liG18");
        let y7_T = document.getElementById("liG19");
        let y7_U = document.getElementById("liG20");
        let y7_V = document.getElementById("liG21");

        /*loop through the liAseries list elements*/
        let liG2series = [y7, y7_A, y7_B, y7_C,
            y7_D, y7_E, y7_F, y7_G, y7_H, y7_I,
            y7_J, y7_K, y7_L, y7_M, y7_N, y7_O,
            y7_P, y7_Q, y7_R, y7_S, y7_T, y7_U,
            y7_V
        ]

        /*liGsubseries elements*/
        let y7G_subLiSeriesElement1 = document.getElementById("liG_SubG1");
        let y7G_subLiSeriesElement2 = document.getElementById("liG_SubG2");
        let y7G_subLiSeriesElement3 = document.getElementById("liG_SubG3");
        let y7G_subLiSeriesElement4 = document.getElementById("liG_SubG4");
        let y7G_subLiSeriesElement5 = document.getElementById("liG_SubG5");
        let y7G_subLiSeriesElement6 = document.getElementById("liG_SubG6");
        let y7G_subLiSeriesElement7 = document.getElementById("liG_SubG7");
        let y7G_subLiSeriesElement8 = document.getElementById("liG_SubG8");
        let y7G_subLiSeriesElement9 = document.getElementById("liG_SubG9");
        let y7G_subLiSeriesElement10 = document.getElementById("liG_SubG10");
        let y7G_subLiSeriesElement11 = document.getElementById("liG_SubG11");


        let subLiG2Series = [y7G_subLiSeriesElement1, y7G_subLiSeriesElement2,
            y7G_subLiSeriesElement3, y7G_subLiSeriesElement4, y7G_subLiSeriesElement5,
            y7G_subLiSeriesElement6, y7G_subLiSeriesElement7, y7G_subLiSeriesElement8,
            y7G_subLiSeriesElement9, y7G_subLiSeriesElement10, y7G_subLiSeriesElement11
        ]
        for (let i27 = 0; i27 < liG2series.length; i27++) {
            let iterdataG3 = liG2series.map((dataitem27) => {
                dataitem27.style.display = _displaynone_2G;
            })
            for (let i28 = 0; i28 < subLiG2Series.length; i28++) {
                let iterdataG4 = subLiG2Series.map((dataitem28) => {
                    dataitem28.style.display = _displaynone_2G;
                })
                return iterdataG4;
            }
            return iterdataG3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2G.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1H() {
    try {
        /*fonts properties start*/
        let _font_size_1H = "14pt ";
        let _text_align_1H = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1H = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1H_AutoCustom = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1H = "block";
        let _displayListItem_1H = "list-item";
        let _displaynone_1H = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_8 = "decimal";
        /*list styling end*/

        /**/
        let _width8_ = "400px";
        /**/

        document.getElementById("btn15").style.display = _displaynone_1H;
        document.getElementById("btn16").style.margin = _margin_1H_AutoCustom;
        document.getElementById("btn16").style.display = _displayblock_1H;

        /*ingredients header*/
        let x8 = document.getElementById("p-content8");
        let x8_A = document.getElementById("h3_8");

        /*ingredients*/
        let x8_B = document.getElementById("liH1");
        let x8_C = document.getElementById("liH2");
        let x8_D = document.getElementById("liH3");
        let x8_E = document.getElementById("liH4");
        let x8_F = document.getElementById("liH5");
        let x8_G = document.getElementById("liH6");
        let x8_H = document.getElementById("liH7");
        let x8_I = document.getElementById("liH8");
        let x8_J = document.getElementById("liH9");
        let x8_K = document.getElementById("liH10");
        let x8_L = document.getElementById("liH11");
        let x8_M = document.getElementById("liH12");


        /*loop through the liAseries list elements*/
        let liH1series = [x8, x8_A, x8_B, x8_C, x8_D, x8_E,
            x8_F, x8_G, x8_H, x8_I, x8_J, x8_K, x8_L, x8_M
        ]

        /*liHsubseries elements*/
        let x8H_subLiSeriesElement1 = document.getElementById("liH_SubH1");
        let x8H_subLiSeriesElement2 = document.getElementById("liH_SubH2");
        let x8H_subLiSeriesElement3 = document.getElementById("liH_SubH3");
        let x8H_subLiSeriesElement4 = document.getElementById("liH_SubH4");
        let x8H_subLiSeriesElement5 = document.getElementById("liH_SubH5");
        let x8H_subLiSeriesElement6 = document.getElementById("liH_SubH6");
        let x8H_subLiSeriesElement7 = document.getElementById("liH_SubH7");
        let x8H_subLiSeriesElement8 = document.getElementById("liH_SubH8");
        let x8H_subLiSeriesElement9 = document.getElementById("liH_SubH9");
        let x8H_subLiSeriesElement10 = document.getElementById("liH_SubH10");
        let x8H_subLiSeriesElement11 = document.getElementById("liH_SubH11");
        let x8H_subLiSeriesElement12 = document.getElementById("liH_SubH12");
        let x8H_subLiSeriesElement13 = document.getElementById("liH_SubH13");

        let subLiH1Series = [x8H_subLiSeriesElement1, x8H_subLiSeriesElement2,
            x8H_subLiSeriesElement3, x8H_subLiSeriesElement4, x8H_subLiSeriesElement5,
            x8H_subLiSeriesElement6, x8H_subLiSeriesElement7, x8H_subLiSeriesElement8,
            x8H_subLiSeriesElement9, x8H_subLiSeriesElement10, x8H_subLiSeriesElement11,
            x8H_subLiSeriesElement12, x8H_subLiSeriesElement13
        ]

        for (let i29 = 0; i29 < liH1series.length; i29++) {
            let iterdataH1 = liH1series.map((dataitem29) => {
                dataitem29.style.display = _displayblock_1H;
                dataitem29.style.backgroundColor = _background_Color_1H;
                dataitem29.style.fontSize = _font_size_1H;
                dataitem29.style.margin = _margin_1H_AutoCustom;
                dataitem29.style.textAlign = _text_align_1H;
            })
            for (let i30 = 0; i30 < subLiH1Series.length; i30++) {
                let iterdataH2 = subLiH1Series.map((dataitem30) => {
                    dataitem30.style.display = _displayListItem_1H;
                    dataitem30.style.backgroundColor = _background_Color_1H;
                    dataitem30.style.fontSize = _font_size_1H;
                    dataitem30.style.margin = _margin_1H_AutoCustom;
                    dataitem30.style.textAlign = _text_align_1H;
                    dataitem30.style.listStyle = _list_style_decimal_8;
                    dataitem30.style.width = _width8_;
                })
                return iterdataH2;
            }
            return iterdataH1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1H.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2H() {
    try {
        /*margin properties start*/
        let _margin_2H_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2H = "block";
        let _displaynone_2H = "none";
        /*display properties end*/

        document.getElementById("btn16").style.display = _displaynone_2H;
        document.getElementById("btn15").style.margin = _margin_2H_allAuto;
        document.getElementById("btn15").style.display = _displayblock_2H;

        /*ingredients header*/
        let y8 = document.getElementById("p-content8");
        let y8_A = document.getElementById("h3_8");

        /*ingredients*/
        let y8_B = document.getElementById("liH1");
        let y8_C = document.getElementById("liH2");
        let y8_D = document.getElementById("liH3");
        let y8_E = document.getElementById("liH4");
        let y8_F = document.getElementById("liH5");
        let y8_G = document.getElementById("liH6");
        let y8_H = document.getElementById("liH7");
        let y8_I = document.getElementById("liH8");
        let y8_J = document.getElementById("liH9");
        let y8_K = document.getElementById("liH10");
        let y8_L = document.getElementById("liH11");
        let y8_M = document.getElementById("liH12");

        /*loop through the liAseries list elements*/
        let li2Hseries = [y8, y8_A, y8_B, y8_C,
            y8_D, y8_E, y8_F, y8_G, y8_H,
            y8_I, y8_J, y8_K, y8_L, y8_M
        ]

        /*liHsubseries elements*/
        let y8H_subLiSeriesElement1 = document.getElementById("liH_SubH1");
        let y8H_subLiSeriesElement2 = document.getElementById("liH_SubH2");
        let y8H_subLiSeriesElement3 = document.getElementById("liH_SubH3");
        let y8H_subLiSeriesElement4 = document.getElementById("liH_SubH4");
        let y8H_subLiSeriesElement5 = document.getElementById("liH_SubH5");
        let y8H_subLiSeriesElement6 = document.getElementById("liH_SubH6");
        let y8H_subLiSeriesElement7 = document.getElementById("liH_SubH7");
        let y8H_subLiSeriesElement8 = document.getElementById("liH_SubH8");
        let y8H_subLiSeriesElement9 = document.getElementById("liH_SubH9");
        let y8H_subLiSeriesElement10 = document.getElementById("liH_SubH10");
        let y8H_subLiSeriesElement11 = document.getElementById("liH_SubH11");
        let y8H_subLiSeriesElement12 = document.getElementById("liH_SubH12");


        let subLi2HSeries = [y8H_subLiSeriesElement1, y8H_subLiSeriesElement2,
            y8H_subLiSeriesElement3, y8H_subLiSeriesElement4, y8H_subLiSeriesElement5,
            y8H_subLiSeriesElement6, y8H_subLiSeriesElement7, y8H_subLiSeriesElement8,
            y8H_subLiSeriesElement9, y8H_subLiSeriesElement10, y8H_subLiSeriesElement11,
            y8H_subLiSeriesElement12
        ]
        for (let i31 = 0; i31 < li2Hseries.length; i31++) {
            let iterdataH3 = li2Hseries.map((dataitem31) => {
                dataitem31.style.display = _displaynone_2H;
            })
            for (let i32 = 0; i32 < subLi2HSeries.length; i32++) {
                let iterdataH4 = subLi2HSeries.map((dataitem32) => {
                    dataitem32.style.display = _displaynone_2H;
                })
                return iterdataH4;
            }
            return iterdataH3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2H.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1I() {
    try {
        /*fonts properties start*/
        let _font_size_1I = "14pt ";
        let _text_align_1I = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1I = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1I_AutoCustom = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1I = "block";
        let _displayListItem_1I = "list-item";
        let _displaynone_1I = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_9 = "decimal";
        /*list styling end*/

        /**/
        let _width9_ = "400px";
        /**/

        document.getElementById("btn17").style.display = _displaynone_1I;
        document.getElementById("btn18").style.margin = _margin_1I_AutoCustom;
        document.getElementById("btn18").style.display = _displayblock_1I;

        /*ingredients header*/
        let x9 = document.getElementById("p-content9");
        let x9_A = document.getElementById("h3_9");

        /*ingredients*/
        let x9_B = document.getElementById("liI1");
        let x9_C = document.getElementById("liI2");
        let x9_D = document.getElementById("liI3");
        let x9_E = document.getElementById("liI4");
        let x9_F = document.getElementById("liI5");
        let x9_G = document.getElementById("liI6");
        let x9_H = document.getElementById("liI7");
        let x9_I = document.getElementById("liI8");
        let x9_J = document.getElementById("liI9");
        let x9_K = document.getElementById("liI10");
        let x9_L = document.getElementById("liI11");
        let x9_M = document.getElementById("liI12");
        let x9_N = document.getElementById("liI13");
        let x9_O = document.getElementById("liI14");
        let x9_P = document.getElementById("liI15");
        let x9_Q = document.getElementById("liI16");
        let x9_R = document.getElementById("liI17");

        /*loop through the liIseries list elements*/
        let liI1series = [x9, x9_A, x9_B, x9_C, x9_D, x9_E,
            x9_F, x9_G, x9_H, x9_I, x9_J, x9_K, x9_L, x9_M,
            x9_N, x9_O, x9_P, x9_Q, x9_R
        ]

        /*liIsubseries elements*/
        let x9I_subLiSeriesElement1 = document.getElementById("liI_SubI1");
        let x9I_subLiSeriesElement2 = document.getElementById("liI_SubI2");
        let x9I_subLiSeriesElement3 = document.getElementById("liI_SubI3");
        let x9I_subLiSeriesElement4 = document.getElementById("liI_SubI4");
        let x9I_subLiSeriesElement5 = document.getElementById("liI_SubI5");
        let x9I_subLiSeriesElement6 = document.getElementById("liI_SubI6");

        let subLiI1Series = [x9I_subLiSeriesElement1, x9I_subLiSeriesElement2,
            x9I_subLiSeriesElement3, x9I_subLiSeriesElement4, x9I_subLiSeriesElement5,
            x9I_subLiSeriesElement6
        ]

        for (let i33 = 0; i33 < liI1series.length; i33++) {
            let iterdataI1 = liI1series.map((dataitem33) => {
                dataitem33.style.display = _displayblock_1I;
                dataitem33.style.backgroundColor = _background_Color_1I;
                dataitem33.style.fontSize = _font_size_1I;
                dataitem33.style.margin = _margin_1I_AutoCustom;
                dataitem33.style.textAlign = _text_align_1I;
            })
            for (let i34 = 0; i34 < subLiI1Series.length; i34++) {
                let iterdataI2 = subLiI1Series.map((dataitem34) => {
                    dataitem34.style.display = _displayListItem_1I;
                    dataitem34.style.backgroundColor = _background_Color_1I;
                    dataitem34.style.fontSize = _font_size_1I;
                    dataitem34.style.margin = _margin_1I_AutoCustom;
                    dataitem34.style.textAlign = _text_align_1I;
                    dataitem34.style.listStyle = _list_style_decimal_9;
                    dataitem34.style.width = _width9_;
                })
                return iterdataI2;
            }
            return iterdataI1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1I.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2I() {
    try {

        /*margin properties start*/
        let _margin_2I_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2I = "block";
        let _displaynone_2I = "none";
        /*display properties end*/

        document.getElementById("btn18").style.display = _displaynone_2I;
        document.getElementById("btn17").style.margin = _margin_2I_allAuto;
        document.getElementById("btn17").style.display = _displayblock_2I;
        /*ingredients header*/
        let y9 = document.getElementById("p-content9");
        let y9_A = document.getElementById("h3_9");

        /*ingredients*/
        let y9_B = document.getElementById("liI1");
        let y9_C = document.getElementById("liI2");
        let y9_D = document.getElementById("liI3");
        let y9_E = document.getElementById("liI4");
        let y9_F = document.getElementById("liI5");
        let y9_G = document.getElementById("liI6");
        let y9_H = document.getElementById("liI7");
        let y9_I = document.getElementById("liI8");
        let y9_J = document.getElementById("liI9");
        let y9_K = document.getElementById("liI10");
        let y9_L = document.getElementById("liI11");
        let y9_M = document.getElementById("liI12");
        let y9_N = document.getElementById("liI13");
        let y9_O = document.getElementById("liI14");
        let y9_P = document.getElementById("liI15");
        let y9_Q = document.getElementById("liI16");
        let y9_R = document.getElementById("liI17");
        /*loop through the liIseries list elements*/
        let liI2series = [y9, y9_A, y9_B, y9_C, y9_D, y9_E,
            y9_F, y9_G, y9_H, y9_I, y9_J, y9_K, y9_L, y9_M,
            y9_N, y9_O, y9_P, y9_Q, y9_R
        ]

        /*liIsubseries elements*/
        let y9I_subLiSeriesElement1 = document.getElementById("liI_SubI1");
        let y9I_subLiSeriesElement2 = document.getElementById("liI_SubI2");
        let y9I_subLiSeriesElement3 = document.getElementById("liI_SubI3");
        let y9I_subLiSeriesElement4 = document.getElementById("liI_SubI4");
        let y9I_subLiSeriesElement5 = document.getElementById("liI_SubI5");
        let y9I_subLiSeriesElement6 = document.getElementById("liI_SubI6");


        let subLiI2Series = [y9I_subLiSeriesElement1, y9I_subLiSeriesElement2,
            y9I_subLiSeriesElement3, y9I_subLiSeriesElement4, y9I_subLiSeriesElement5,
            y9I_subLiSeriesElement6
        ]
        for (let i35 = 0; i35 < liI2series.length; i35++) {
            let iterdataI3 = liI2series.map((dataitem35) => {
                dataitem35.style.display = _displaynone_2I;
            })
            for (let i36 = 0; i36 < subLiI2Series.length; i36++) {
                let iterdataI4 = subLiI2Series.map((dataitem36) => {
                    dataitem36.style.display = _displaynone_2I;
                })
                return iterdataI4;
            }
            return iterdataI3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2I.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1J() {
    try {
        /*fonts properties start*/
        let _font_size_1J = "14pt ";
        let _text_align_1J = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1J = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1J_allAuto = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1J = "block";
        let _displayListItem_1J = "list-item";
        let _displaynone_1J = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_10 = "decimal";
        /*list styling end*/

        /**/
        let _width10_ = "400px";
        /**/

        document.getElementById("btn19").style.display = _displaynone_1J;
        document.getElementById("btn20").style.margin = _margin_1J_allAuto;
        document.getElementById("btn20").style.display = _displayblock_1J;

        /*ingredients header*/
        let x10 = document.getElementById("p-content10");
        let x10_A = document.getElementById("h3_10");

        /*ingredients*/
        let x10_B = document.getElementById("liJ1");
        let x10_C = document.getElementById("liJ2");
        let x10_D = document.getElementById("liJ3");
        let x10_E = document.getElementById("liJ4");
        let x10_F = document.getElementById("liJ5");
        let x10_G = document.getElementById("liJ6");
        let x10_H = document.getElementById("liJ7");
        let x10_I = document.getElementById("liJ8");
        let x10_J = document.getElementById("liJ9");
        let x10_K = document.getElementById("liJ10");
        let x10_L = document.getElementById("liJ11");
        let x10_M = document.getElementById("liJ12");

        /*loop through the liAseries list elements*/
        let liJ1series = [x10, x10_A, x10_B, x10_C, x10_D, x10_E,
            x10_F, x10_G, x10_H, x10_I, x10_J, x10_K, x10_L,
            x10_M
        ]

        /*liAsubseries elements*/
        let x10J_subLiSeriesElement1 = document.getElementById("liJ_SubJ1");
        let x10J_subLiSeriesElement2 = document.getElementById("liJ_SubJ2");
        let x10J_subLiSeriesElement3 = document.getElementById("liJ_SubJ3");
        let x10J_subLiSeriesElement4 = document.getElementById("liJ_SubJ4");
        let x10J_subLiSeriesElement5 = document.getElementById("liJ_SubJ5");
        let x10J_subLiSeriesElement6 = document.getElementById("liJ_SubJ6");


        let subLiJ1Series = [x10J_subLiSeriesElement1, x10J_subLiSeriesElement2,
            x10J_subLiSeriesElement3, x10J_subLiSeriesElement4, x10J_subLiSeriesElement5,
            x10J_subLiSeriesElement6
        ]

        for (let i37 = 0; i37 < liJ1series.length; i37++) {
            let iterdataJ1 = liJ1series.map((dataitem37) => {
                dataitem37.style.display = _displayblock_1J;
                dataitem37.style.backgroundColor = _background_Color_1J;
                dataitem37.style.fontSize = _font_size_1J;
                dataitem37.style.margin = _margin_1J_allAuto;
                dataitem37.style.textAlign = _text_align_1J;
            })
            for (let i38 = 0; i38 < subLiJ1Series.length; i38++) {
                let iterdataJ2 = subLiJ1Series.map((dataitem38) => {
                    dataitem38.style.display = _displayListItem_1J;
                    dataitem38.style.backgroundColor = _background_Color_1J;
                    dataitem38.style.fontSize = _font_size_1J;
                    dataitem38.style.margin = _margin_1J_allAuto;
                    dataitem38.style.textAlign = _text_align_1J;
                    dataitem38.style.listStyle = _list_style_decimal_10;
                    dataitem38.style.width = _width10_;
                })
                return iterdataJ2;
            }
            return iterdataJ1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1J.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2J() {
    try {
        /*margin properties start*/
        let _margin_2J_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2J = "block";
        let _displaynone_2J = "none";
        /*display properties end*/

        document.getElementById("btn20").style.display = _displaynone_2J;
        document.getElementById("btn19").style.margin = _margin_2J_allAuto;
        document.getElementById("btn19").style.display = _displayblock_2J;
        /*ingredients header*/
        let y10 = document.getElementById("p-content10");
        let y10_A = document.getElementById("h3_10");

        /*ingredients*/
        let y10_B = document.getElementById("liJ1");
        let y10_C = document.getElementById("liJ2");
        let y10_D = document.getElementById("liJ3");
        let y10_E = document.getElementById("liJ4");
        let y10_F = document.getElementById("liJ5");
        let y10_G = document.getElementById("liJ6");
        let y10_H = document.getElementById("liJ7");
        let y10_I = document.getElementById("liJ8");
        let y10_J = document.getElementById("liJ9");
        let y10_K = document.getElementById("liJ10");
        let y10_L = document.getElementById("liJ11");
        let y10_M = document.getElementById("liJ12");

        /*loop through the liAseries list elements*/
        let liJ2series = [y10, y10_A, y10_B, y10_C,
            y10_D, y10_E, y10_F, y10_G, y10_H,
            y10_I, y10_J, y10_K, y10_L, y10_M
        ]

        /*liAsubseries elements*/
        let y10J_subLiSeriesElement1 = document.getElementById("liJ_SubJ1");
        let y10J_subLiSeriesElement2 = document.getElementById("liJ_SubJ2");
        let y10J_subLiSeriesElement3 = document.getElementById("liJ_SubJ3");
        let y10J_subLiSeriesElement4 = document.getElementById("liJ_SubJ4");
        let y10J_subLiSeriesElement5 = document.getElementById("liJ_SubJ5");
        let y10J_subLiSeriesElement6 = document.getElementById("liJ_SubJ6");

        let subLiJ2Series = [y10J_subLiSeriesElement1, y10J_subLiSeriesElement2,
            y10J_subLiSeriesElement3, y10J_subLiSeriesElement4, y10J_subLiSeriesElement5,
            y10J_subLiSeriesElement6
        ]
        for (let i39 = 0; i39 < liJ2series.length; i39++) {
            let iterdataJ3 = liJ2series.map((dataitem39) => {
                dataitem39.style.display = _displaynone_2J;
            })
            for (let i40 = 0; i40 < subLiJ2Series.length; i40++) {
                let iterdataJ4 = subLiJ2Series.map((dataitem40) => {
                    dataitem40.style.display = _displaynone_2J;
                })
                return iterdataJ4;
            }
            return iterdataJ3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2J.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1K() {
    try {
        document.getElementById("btn21").style.display = "none";
        document.getElementById("btn22").style.margin = "auto auto auto auto";
        document.getElementById("btn22").style.display = "block";
        /*fonts properties start*/
        let _font_size_1K = "14pt ";
        let _text_align_1K = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1K = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1K_AutoCustom = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1K = "block";
        let _displayListItem_1K = "list-item";
        let _displaynone_1K = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_11 = "decimal";
        /*list styling end*/

        /**/
        let _width11_ = "400px";
        /**/

        document.getElementById("btn21").style.display = _displaynone_1K;
        document.getElementById("btn22").style.margin = _margin_1K_AutoCustom;
        document.getElementById("btn22").style.display = _displayblock_1K;

        /*ingredients header*/
        let x11 = document.getElementById("p-content11");
        let x11_A = document.getElementById("h3_11");

        /*ingredients*/
        let x11_B = document.getElementById("liK1");
        let x11_C = document.getElementById("liK2");
        let x11_D = document.getElementById("liK3");
        let x11_E = document.getElementById("liK4");
        let x11_F = document.getElementById("liK5");
        let x11_G = document.getElementById("liK6");
        let x11_H = document.getElementById("liK7");
        let x11_I = document.getElementById("liK8");
        let x11_J = document.getElementById("liK9");
        let x11_K = document.getElementById("liK10");
        let x11_L = document.getElementById("liK11");
        let x11_M = document.getElementById("liK12");
        let x11_N = document.getElementById("liK13");
        let x11_O = document.getElementById("liK14");
        let x11_P = document.getElementById("liK15");
        let x11_Q = document.getElementById("liK16");
        let x11_R = document.getElementById("liK17");
        let x11_S = document.getElementById("liK18");

        /*loop through the liAseries list elements*/
        let liK1series = [x11, x11_A, x11_B, x11_C, x11_D,
            x11_E, x11_F, x11_G, x11_H, x11_I,
            x11_J, x11_K, x11_L, x11_M, x11_N,
            x11_O, x11_P, x11_Q, x11_R, x11_S
        ]

        /*liAsubseries elements*/
        let x11K_subLiSeriesElement1 = document.getElementById("liK_SubK1");
        let x11K_subLiSeriesElement2 = document.getElementById("liK_SubK2");
        let x11K_subLiSeriesElement3 = document.getElementById("liK_SubK3");
        let x11K_subLiSeriesElement4 = document.getElementById("liK_SubK4");
        let x11K_subLiSeriesElement5 = document.getElementById("liK_SubK5");
        let x11K_subLiSeriesElement6 = document.getElementById("liK_SubK6");
        let x11K_subLiSeriesElement7 = document.getElementById("liK_SubK7");
        let x11K_subLiSeriesElement8 = document.getElementById("liK_SubK8");
        let x11K_subLiSeriesElement9 = document.getElementById("liK_SubK9");
        let x11K_subLiSeriesElement10 = document.getElementById("liK_SubK10");
        let x11K_subLiSeriesElement11 = document.getElementById("liK_SubK11");
        let x11K_subLiSeriesElement12 = document.getElementById("liK_SubK12");
        let x11K_subLiSeriesElement13 = document.getElementById("liK_SubK13");
        let x11K_subLiSeriesElement14 = document.getElementById("liK_SubK14");
        let x11K_subLiSeriesElement15 = document.getElementById("liK_SubK15");
        let x11K_subLiSeriesElement16 = document.getElementById("liK_SubK16");


        let subLiK1Series = [x11K_subLiSeriesElement1, x11K_subLiSeriesElement2,
            x11K_subLiSeriesElement3, x11K_subLiSeriesElement4, x11K_subLiSeriesElement5,
            x11K_subLiSeriesElement6, x11K_subLiSeriesElement7, x11K_subLiSeriesElement8,
            x11K_subLiSeriesElement9, x11K_subLiSeriesElement10, x11K_subLiSeriesElement11,
            x11K_subLiSeriesElement12, x11K_subLiSeriesElement13, x11K_subLiSeriesElement14,
            x11K_subLiSeriesElement15, x11K_subLiSeriesElement16
        ]

        for (let i41 = 0; i41 < liK1series.length; i41++) {
            let iterdataK1 = liK1series.map((dataitem41) => {
                dataitem41.style.display = _displayblock_1K;
                dataitem41.style.backgroundColor = _background_Color_1K;
                dataitem41.style.fontSize = _font_size_1K;
                dataitem41.style.margin = _margin_1K_AutoCustom;
                dataitem41.style.textAlign = _text_align_1K;
            })
            for (let i42 = 0; i42 < subLiK1Series.length; i42++) {
                let iterdataK2 = subLiK1Series.map((dataitem42) => {
                    dataitem42.style.display = _displayListItem_1K;
                    dataitem42.style.backgroundColor = _background_Color_1K;
                    dataitem42.style.fontSize = _font_size_1K;
                    dataitem42.style.margin = _margin_1K_AutoCustom;
                    dataitem42.style.textAlign = _text_align_1K;
                    dataitem42.style.listStyle = _list_style_decimal_11;
                    dataitem42.style.width = _width11_;
                })
                return iterdataK2;
            }
            return iterdataK1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1K.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2K() {
    try {
        /*margin properties start*/
        let _margin_2K_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2K = "block";
        let _displaynone_2K = "none";
        /*display properties end*/

        document.getElementById("btn22").style.display = _displaynone_2K;
        document.getElementById("btn21").style.margin = _margin_2K_allAuto;
        document.getElementById("btn21").style.display = _displayblock_2K;
        /*ingredients header*/
        let y11 = document.getElementById("p-content11");
        let y11_A = document.getElementById("h3_11");

        /*ingredients*/
        let y11_B = document.getElementById("liK1");
        let y11_C = document.getElementById("liK2");
        let y11_D = document.getElementById("liK3");
        let y11_E = document.getElementById("liK4");
        let y11_F = document.getElementById("liK5");
        let y11_G = document.getElementById("liK6");
        let y11_H = document.getElementById("liK7");
        let y11_I = document.getElementById("liK8");
        let y11_J = document.getElementById("liK9");
        let y11_K = document.getElementById("liK10");
        let y11_L = document.getElementById("liK11");
        let y11_M = document.getElementById("liK12");
        let y11_N = document.getElementById("liK13");
        let y11_O = document.getElementById("liK14");
        let y11_P = document.getElementById("liK15");
        let y11_Q = document.getElementById("liK16");
        let y11_R = document.getElementById("liK17");
        let y11_S = document.getElementById("liK18");

        /*loop through the liAseries list elements*/
        let li2Kseries = [y11, y11_A, y11_B, y11_C,
            y11_D, y11_E, y11_F, y11_G, y11_H,
            y11_I, y11_J, y11_K, y11_L, y11_M,
            y11_N, y11_O, y11_P, y11_Q, y11_R,
            y11_S
        ]

        /*liAsubseries elements*/
        let y11K_subLiSeriesElement1 = document.getElementById("liK_SubK1");
        let y11K_subLiSeriesElement2 = document.getElementById("liK_SubK2");
        let y11K_subLiSeriesElement3 = document.getElementById("liK_SubK3");
        let y11K_subLiSeriesElement4 = document.getElementById("liK_SubK4");
        let y11K_subLiSeriesElement5 = document.getElementById("liK_SubK5");
        let y11K_subLiSeriesElement6 = document.getElementById("liK_SubK6");
        let y11K_subLiSeriesElement7 = document.getElementById("liK_SubK7");
        let y11K_subLiSeriesElement8 = document.getElementById("liK_SubK8");
        let y11K_subLiSeriesElement9 = document.getElementById("liK_SubK9");
        let y11K_subLiSeriesElement10 = document.getElementById("liK_SubK10");
        let y11K_subLiSeriesElement11 = document.getElementById("liK_SubK11");
        let y11K_subLiSeriesElement12 = document.getElementById("liK_SubK12");
        let y11K_subLiSeriesElement13 = document.getElementById("liK_SubK13");
        let y11K_subLiSeriesElement14 = document.getElementById("liK_SubK14");
        let y11K_subLiSeriesElement15 = document.getElementById("liK_SubK15");
        let y11K_subLiSeriesElement16 = document.getElementById("liK_SubK16");

        let subLiK2Series = [y11K_subLiSeriesElement1, y11K_subLiSeriesElement2,
            y11K_subLiSeriesElement3, y11K_subLiSeriesElement4, y11K_subLiSeriesElement5,
            y11K_subLiSeriesElement6, y11K_subLiSeriesElement7, y11K_subLiSeriesElement8,
            y11K_subLiSeriesElement9, y11K_subLiSeriesElement10, y11K_subLiSeriesElement11,
            y11K_subLiSeriesElement12, y11K_subLiSeriesElement13, y11K_subLiSeriesElement14,
            y11K_subLiSeriesElement15, y11K_subLiSeriesElement16
        ]
        for (let i43 = 0; i43 < li2Kseries.length; i43++) {
            let iterdataK3 = li2Kseries.map((dataitem43) => {
                dataitem43.style.display = _displaynone_2K;
            })
            for (let i44 = 0; i44 < subLiK2Series.length; i4++) {
                let iterdataK4 = subLiK2Series.map((dataitem44) => {
                    dataitem44.style.display = _displaynone_2K;
                })
                return iterdataK4;
            }
            return iterdataK3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2K.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1L() {
    try {
        /*fonts properties start*/
        let _font_size_1L = "14pt ";
        let _text_align_1L = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1L = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1L_allAuto = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1L = "block";
        let _displayListItem_1L = "list-item";
        let _displaynone_1L = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_12 = "decimal";
        /*list styling end*/

        /**/
        let _width12_ = "400px";
        /**/

        document.getElementById("btn23").style.display = _displaynone_1L;
        document.getElementById("btn24").style.margin = _margin_1L_allAuto;
        document.getElementById("btn24").style.display = _displayblock_1L;

        /*ingredients header*/
        let x12 = document.getElementById("p-content12");
        let x12_A = document.getElementById("h3_12");

        /*ingredients*/
        let x12_B = document.getElementById("liL1");
        let x12_C = document.getElementById("liL2");
        let x12_D = document.getElementById("liL3");
        let x12_E = document.getElementById("liL4");
        let x12_F = document.getElementById("liL5");
        let x12_G = document.getElementById("liL6");
        let x12_H = document.getElementById("liL7");
        let x12_I = document.getElementById("liL8");
        let x12_J = document.getElementById("liL9");
        let x12_K = document.getElementById("liL10");
        let x12_L = document.getElementById("liL11");
        let x12_M = document.getElementById("liL12");
        let x12_N = document.getElementById("liL13");
        let x12_O = document.getElementById("liL14");
        let x12_P = document.getElementById("liL15");
        let x12_Q = document.getElementById("liL16");
        let x12_R = document.getElementById("liL17");
        let x12_S = document.getElementById("liL18");
        let x12_T = document.getElementById("liL19");
        let x12_U = document.getElementById("liL20");
        let x12_V = document.getElementById("liL21");

        /*loop through the liAseries list elements*/
        let liL1series = [x12, x12_A, x12_B, x12_C,
            x12_D, x12_E, x12_F, x12_G, x12_H,
            x12_I, x12_J, x12_K, x12_L, x12_M,
            x12_N, x12_O, x12_P, x12_Q, x12_R,
            x12_S, x12_T, x12_U, x12_V
        ]

        /*liAsubseries elements*/
        let x12L_subLiSeriesElement1 = document.getElementById("liL_SubL1");
        let x12L_subLiSeriesElement2 = document.getElementById("liL_SubL2");
        let x12L_subLiSeriesElement3 = document.getElementById("liL_SubL3");
        let x12L_subLiSeriesElement4 = document.getElementById("liL_SubL4");
        let x12L_subLiSeriesElement5 = document.getElementById("liL_SubL5");
        let x12L_subLiSeriesElement6 = document.getElementById("liL_SubL6");
        let x12L_subLiSeriesElement7 = document.getElementById("liL_SubL7");

        let subLiL1Series = [x12L_subLiSeriesElement1, x12L_subLiSeriesElement2,
            x12L_subLiSeriesElement3, x12L_subLiSeriesElement4, x12L_subLiSeriesElement5,
            x12L_subLiSeriesElement6, x12L_subLiSeriesElement7
        ]

        for (let i45 = 0; i45 < liL1series.length; i45++) {
            let iterdataL1 = liL1series.map((dataitem45) => {
                dataitem45.style.display = _displayblock_1L;
                dataitem45.style.backgroundColor = _background_Color_1L;
                dataitem45.style.fontSize = _font_size_1L;
                dataitem45.style.margin = _margin_1L_allAuto;
                dataitem45.style.textAlign = _text_align_1L;
            })
            for (let i46 = 0; i46 < subLiL1Series.length; i46++) {
                let iterdataL2 = subLiL1Series.map((dataitem46) => {
                    dataitem46.style.display = _displayListItem_1L;
                    dataitem46.style.backgroundColor = _background_Color_1L;
                    dataitem46.style.fontSize = _font_size_1L;
                    dataitem46.style.margin = _margin_1L_allAuto;
                    dataitem46.style.textAlign = _text_align_1L;
                    dataitem46.style.listStyle = _list_style_decimal_12;
                    dataitem46.style.width = _width12_;
                })
                return iterdataL2;
            }
            return iterdataL1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1L.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2L() {
    try {
        /*margin properties start*/
        let _margin_2L_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2L = "block";
        let _displaynone_2L = "none";
        /*display properties end*/

        document.getElementById("btn24").style.display = _displaynone_2L;
        document.getElementById("btn23").style.margin = _margin_2L_allAuto;
        document.getElementById("btn23").style.display = _displayblock_2L;
        /*ingredients header*/
        let y12 = document.getElementById("p-content12");
        let y12_A = document.getElementById("h3_12");

        /*ingredients*/
        let y12_B = document.getElementById("liL1");
        let y12_C = document.getElementById("liL2");
        let y12_D = document.getElementById("liL3");
        let y12_E = document.getElementById("liL4");
        let y12_F = document.getElementById("liL5");
        let y12_G = document.getElementById("liL6");
        let y12_H = document.getElementById("liL7");
        let y12_I = document.getElementById("liL8");
        let y12_J = document.getElementById("liL9");
        let y12_K = document.getElementById("liL10");
        let y12_L = document.getElementById("liL11");
        let y12_M = document.getElementById("liL12");
        let y12_N = document.getElementById("liL13");
        let y12_O = document.getElementById("liL14");
        let y12_P = document.getElementById("liL15");
        let y12_Q = document.getElementById("liL16");
        let y12_R = document.getElementById("liL17");
        let y12_S = document.getElementById("liL18");
        let y12_T = document.getElementById("liL19");
        let y12_U = document.getElementById("liL20");
        let y12_V = document.getElementById("liL21");

        /*loop through the liAseries list elements*/
        let liL2series = [y12, y12_A, y12_B, y12_C,
            y12_D, y12_E, y12_F, y12_G, y12_H,
            y12_I, y12_J, y12_K, y12_L, y12_M,
            y12_N, y12_O, y12_P, y12_Q, y12_R,
            y12_S, y12_T, y12_U, y12_V
        ]

        /*liAsubseries elements*/
        let y12L_subLiSeriesElement1 = document.getElementById("liL_SubL1");
        let y12L_subLiSeriesElement2 = document.getElementById("liL_SubL2");
        let y12L_subLiSeriesElement3 = document.getElementById("liL_SubL3");
        let y12L_subLiSeriesElement4 = document.getElementById("liL_SubL4");
        let y12L_subLiSeriesElement5 = document.getElementById("liL_SubL5");
        let y12L_subLiSeriesElement6 = document.getElementById("liL_SubL6");
        let y12L_subLiSeriesElement7 = document.getElementById("liL_SubL7");

        let subLiL2Series = [y12L_subLiSeriesElement1, y12L_subLiSeriesElement2,
            y12L_subLiSeriesElement3, y12L_subLiSeriesElement4, y12L_subLiSeriesElement5,
            y12L_subLiSeriesElement6, y12L_subLiSeriesElement7
        ]
        for (let i47 = 0; i47 < liL2series.length; i47++) {
            let iterdataL3 = liL2series.map((dataitem47) => {
                dataitem47.style.display = _displaynone_2L;
            })
            for (let i48 = 0; i48 < subLiL2Series.length; i48++) {
                let iterdataL4 = subLiL2Series.map((dataitem48) => {
                    dataitem48.style.display = _displaynone_2L;
                })
                return iterdataL4;
            }
            return iterdataL3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2L.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1M() {
    try {
        /*fonts properties start*/
        let _font_size_1M = "14pt ";
        let _text_align_1M = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1M = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1M_AutoCustom = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1M = "block";
        let _displayListItem_1M = "list-item";
        let _displaynone_1M = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_13 = "decimal";
        /*list styling end*/

        /**/
        let _width13_ = "400px";
        /**/

        document.getElementById("btn25").style.display = _displaynone_1M;
        document.getElementById("btn26").style.margin = _margin_1M_AutoCustom;
        document.getElementById("btn26").style.display = _displayblock_1M;

        /*ingredients header*/
        let x13 = document.getElementById("p-content13");
        let x13_A = document.getElementById("h3_13");

        /*ingredients*/
        let x13_B = document.getElementById("liM1");
        let x13_C = document.getElementById("liM2");
        let x13_D = document.getElementById("liM3");
        let x13_E = document.getElementById("liM4");
        let x13_F = document.getElementById("liM5");
        let x13_G = document.getElementById("liM6");
        let x13_H = document.getElementById("liM7");
        let x13_I = document.getElementById("liM8");
        let x13_J = document.getElementById("liM9");
        let x13_K = document.getElementById("liM10");
        let x13_L = document.getElementById("liM11");
        let x13_M = document.getElementById("liM12");
        let x13_N = document.getElementById("liM13");
        let x13_O = document.getElementById("liM14");
        let x13_P = document.getElementById("liM15");
        let x13_Q = document.getElementById("liM16");
        let x13_R = document.getElementById("liM17");
        let x13_S = document.getElementById("liM18");
        let x13_T = document.getElementById("liM19");
        let x13_U = document.getElementById("liM20");


        /*loop through the liAseries list elements*/
        let liM1series = [x13, x13_A, x13_B, x13_C,
            x13_D, x13_E, x13_F, x13_G, x13_H,
            x13_I, x13_J, x13_K, x13_L, x13_M,
            x13_N, x13_O, x13_P, x13_Q, x13_R,
            x13_S, x13_T, x13_U
        ]

        /*liAsubseries elements*/
        let x13M_subLiSeriesElement1 = document.getElementById("liM_SubM1");
        let x13M_subLiSeriesElement2 = document.getElementById("liM_SubM2");
        let x13M_subLiSeriesElement3 = document.getElementById("liM_SubM3");
        let x13M_subLiSeriesElement4 = document.getElementById("liM_SubM4");
        let x13M_subLiSeriesElement5 = document.getElementById("liM_SubM5");
        let x13M_subLiSeriesElement6 = document.getElementById("liM_SubM6");
        let x13M_subLiSeriesElement7 = document.getElementById("liM_SubM7");

        let subLiD1Series = [x13M_subLiSeriesElement1, x13M_subLiSeriesElement2,
            x13M_subLiSeriesElement3, x13M_subLiSeriesElement4, x13M_subLiSeriesElement5,
            x13M_subLiSeriesElement6, x13M_subLiSeriesElement7
        ]

        for (let i49 = 0; i49 < liM1series.length; i49++) {
            let iterdataM1 = liM1series.map((dataitem49) => {
                dataitem49.style.display = _displayblock_1M;
                dataitem49.style.backgroundColor = _background_Color_1M;
                dataitem49.style.fontSize = _font_size_1M
                dataitem49.style.margin = _margin_1M_AutoCustom;
                dataitem49.style.textAlign = _text_align_1M;
            })
            for (let i50 = 0; i50 < subLiD1Series.length; i50++) {
                let iterdataM2 = subLiD1Series.map((dataitem50) => {
                    dataitem50.style.display = _displayListItem_1M;
                    dataitem50.style.backgroundColor = _background_Color_1M;
                    dataitem50.style.fontSize = _font_size_1M;
                    dataitem50.style.margin = _margin_1M_AutoCustom;
                    dataitem50.style.textAlign = _text_align_1M;
                    dataitem50.style.listStyle = _list_style_decimal_13;
                    dataitem50.style.width = _width13_;
                })
                return iterdataM2;
            }
            return iterdataM1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1M.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2M() {
    try {
        /*margin properties start*/
        let _margin_2M_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2M = "block";
        let _displaynone_2M = "none";
        /*display properties end*/

        document.getElementById("btn26").style.display = _displaynone_2M;
        document.getElementById("btn25").style.margin = _margin_2M_allAuto;
        document.getElementById("btn25").style.display = _displayblock_2M;
        /*ingredients header*/
        let y13 = document.getElementById("p-content13");
        let y13_A = document.getElementById("h3_13");

        /*ingredients*/
        let y13_B = document.getElementById("liM1");
        let y13_C = document.getElementById("liM2");
        let y13_D = document.getElementById("liM3");
        let y13_E = document.getElementById("liM4");
        let y13_F = document.getElementById("liM5");
        let y13_G = document.getElementById("liM6");
        let y13_H = document.getElementById("liM7");
        let y13_I = document.getElementById("liM8");
        let y13_J = document.getElementById("liM9");
        let y13_K = document.getElementById("liM10");
        let y13_L = document.getElementById("liM11");
        let y13_M = document.getElementById("liM12");
        let y13_N = document.getElementById("liM13");
        let y13_O = document.getElementById("liM14");
        let y13_P = document.getElementById("liM15");
        let y13_Q = document.getElementById("liM16");
        let y13_R = document.getElementById("liM17");
        let y13_S = document.getElementById("liM18");
        let y13_T = document.getElementById("liM19");
        let y13_U = document.getElementById("liM20");

        /*loop through the liAseries list elements*/
        let liM2series = [y13, y13_A, y13_B, y13_C,
            y13_D, y13_E, y13_F, y13_G, y13_H,
            y13_I, y13_J, y13_K, y13_L, y13_M,
            y13_N, y13_O, y13_P, y13_Q, y13_R,
            y13_S, y13_T, y13_U
        ]

        /*liAsubseries elements*/
        let y13M_subLiSeriesElement1 = document.getElementById("liM_SubM1");
        let y13M_subLiSeriesElement2 = document.getElementById("liM_SubM2");
        let y13M_subLiSeriesElement3 = document.getElementById("liM_SubM3");
        let y13M_subLiSeriesElement4 = document.getElementById("liM_SubM4");
        let y13M_subLiSeriesElement5 = document.getElementById("liM_SubM5");
        let y13M_subLiSeriesElement6 = document.getElementById("liM_SubM6");
        let y13M_subLiSeriesElement7 = document.getElementById("liM_SubM7");

        let subLiM2Series = [y13M_subLiSeriesElement1, y13M_subLiSeriesElement2,
            y13M_subLiSeriesElement3, y13M_subLiSeriesElement4, y13M_subLiSeriesElement5,
            y13M_subLiSeriesElement6, y13M_subLiSeriesElement7
        ]
        for (let i51 = 0; i51 < liM2series.length; i51++) {
            let iterdataM3 = liM2series.map((dataitem51) => {
                dataitem51.style.display = _displaynone_2M;
            })
            for (let i52 = 0; i52 < subLiM2Series.length; i52++) {
                let iterdataM4 = subLiM2Series.map((dataitem52) => {
                    dataitem52.style.display = _displaynone_2M;
                })
                return iterdataM4;
            }
            return iterdataM3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2M.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1N() {
    try {
        /*fonts properties start*/
        let _font_size_1N = "14pt ";
        let _text_align_1N = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1N = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1N_AutoCustom = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1N = "block";
        let _displayListItem_1N = "list-item";
        let _displaynone_1N = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_14 = "decimal";
        /*list styling end*/

        /**/
        let _width14_ = "400px";
        /**/

        document.getElementById("btn27").style.display = _displaynone_1N;
        document.getElementById("btn28").style.margin = _margin_1N_AutoCustom;
        document.getElementById("btn28").style.display = _displayblock_1N;

        /*ingredients header*/
        let x14 = document.getElementById("p-content14");
        let x14_A = document.getElementById("h3_14");
        1
        /*ingredients*/
        let x14_B = document.getElementById("liN1");
        let x14_C = document.getElementById("liN2");
        let x14_D = document.getElementById("liN3");
        let x14_E = document.getElementById("liN4");
        let x14_F = document.getElementById("liN5");
        let x14_G = document.getElementById("liN6");
        let x14_H = document.getElementById("liN7");

        /*loop through the liAseries list elements*/
        let liN1series = [x14, x14_A, x14_B, x14_C,
            x14_D, x14_E, x14_F, x14_G, x14_H
        ]

        /*liAsubseries elements*/
        let x14N_subLiSeriesElement1 = document.getElementById("liN_SubN1");
        let x14N_subLiSeriesElement2 = document.getElementById("liN_SubN2");
        let x14N_subLiSeriesElement3 = document.getElementById("liN_SubN3");
        let x14N_subLiSeriesElement4 = document.getElementById("liN_SubN4");
        let x14N_subLiSeriesElement5 = document.getElementById("liN_SubN5");
        let x14N_subLiSeriesElement6 = document.getElementById("liN_SubN6");

        let subLiN1Series = [x14N_subLiSeriesElement1, x14N_subLiSeriesElement2,
            x14N_subLiSeriesElement3, x14N_subLiSeriesElement4, x14N_subLiSeriesElement5,
            x14N_subLiSeriesElement6
        ]

        for (let i53 = 0; i53 < liN1series.length; i53++) {
            let iterdataN1 = liN1series.map((dataitem53) => {
                dataitem53.style.display = _displayblock_1N;
                dataitem53.style.backgroundColor = _background_Color_1N;
                dataitem53.style.fontSize = _font_size_1N;
                dataitem53.style.margin = _margin_1N_AutoCustom;
                dataitem53.style.textAlign = _text_align_1N;
            })
            for (let i54 = 0; i54 < subLiN1Series.length; i54++) {
                let iterdataN2 = subLiN1Series.map((dataitem54) => {
                    dataitem54.style.display = _displayListItem_1N;
                    dataitem54.style.backgroundColor = _background_Color_1N;
                    dataitem54.style.fontSize = _font_size_1N;
                    dataitem54.style.margin = _margin_1N_AutoCustom;
                    dataitem54.style.textAlign = _text_align_1N;
                    dataitem54.style.listStyle = _list_style_decimal_14;
                    dataitem54.style.width = _width14_;
                })
                return iterdataN2;
            }
            return iterdataN1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1N.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2N() {
    try {
        /*margin properties start*/
        let _margin_2N_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2N = "block";
        let _displaynone_2N = "none";
        /*display properties end*/

        document.getElementById("btn28").style.display = _displaynone_2N;
        document.getElementById("btn27").style.margin = _margin_2N_allAuto;
        document.getElementById("btn27").style.display = _displayblock_2N;
        /*ingredients header*/
        let y14 = document.getElementById("p-content14");
        let y14_A = document.getElementById("h3_14");

        /*ingedients*/
        let y14_B = document.getElementById("liN1");
        let y14_C = document.getElementById("liN2");
        let y14_D = document.getElementById("liN3");
        let y14_E = document.getElementById("liN4");
        let y14_F = document.getElementById("liN5");
        let y14_G = document.getElementById("liN6");
        let y14_H = document.getElementById("liN7");

        /*loop through the liAseries list elements*/
        let liN2series = [y14, y14_A, y14_B, y14_C,
            y14_D, y14_E, y14_F, y14_G, y14_H
        ]

        /*liAsubseries elements*/
        let y14N_subLiSeriesElement1 = document.getElementById("liN_SubN1");
        let y14N_subLiSeriesElement2 = document.getElementById("liN_SubN2");
        let y14N_subLiSeriesElement3 = document.getElementById("liN_SubN3");
        let y14N_subLiSeriesElement4 = document.getElementById("liN_SubN4");
        let y14N_subLiSeriesElement5 = document.getElementById("liN_SubN5");
        let y14N_subLiSeriesElement6 = document.getElementById("liN_SubN6");

        let subLiN2Series = [y14N_subLiSeriesElement1, y14N_subLiSeriesElement2,
            y14N_subLiSeriesElement3, y14N_subLiSeriesElement4, y14N_subLiSeriesElement5,
            y14N_subLiSeriesElement6
        ]
        for (let i55 = 0; i55 < liN2series.length; i55++) {
            let iterdataN3 = liN2series.map((dataitem55) => {
                dataitem55.style.display = _displaynone_2N;
            })
            for (let i56 = 0; i56 < subLiN2Series.length; i56++) {
                let iterdataN4 = subLiN2Series.map((dataitem56) => {
                    dataitem56.style.display = _displaynone_2N;
                })
                return iterdataN4;
            }
            return iterdataN3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2N.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1O() {
    try {
        /*fonts properties start*/
        let _font_size_1_O = "14pt ";
        let _text_align_1_O = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1_O = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1_O_AutoCustom = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1_O = "block";
        let _displayListItem_1_O = "list-item";
        let _displaynone_1_O = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_15 = "decimal";
        /*list styling end*/

        /**/
        let _width15_ = "400px";
        /**/

        document.getElementById("btn29").style.display = _displaynone_1_O;
        document.getElementById("btn30").style.margin = _margin_1_O_AutoCustom;
        document.getElementById("btn30").style.display = _displayblock_1_O;

        /*ingredients header*/
        let x15 = document.getElementById("p-content15");
        let x15_A = document.getElementById("h3_15");

        /*ingredients*/
        let x15_B = document.getElementById("liO1");
        let x15_C = document.getElementById("liO2");
        let x15_D = document.getElementById("liO3");
        let x15_E = document.getElementById("liO4");
        let x15_F = document.getElementById("liO5");
        let x15_G = document.getElementById("liO6");
        let x15_H = document.getElementById("liO7");
        let x15_I = document.getElementById("liO8");
        let x15_J = document.getElementById("liO9");
        let x15_K = document.getElementById("liO10");
        let x15_L = document.getElementById("liO11");
        let x15_M = document.getElementById("liO12");
        let x15_N = document.getElementById("liO13");
        let x15_O = document.getElementById("liO14");
        let x15_P = document.getElementById("liO15");
        let x15_Q = document.getElementById("liO16");
        let x15_R = document.getElementById("liO17");
        let x15_S = document.getElementById("liO18");
        let x15_T = document.getElementById("liO19");
        let x15_U = document.getElementById("liO20");
        let x15_V = document.getElementById("liO21");
        let x15_W = document.getElementById("liO22");
        let x15_X = document.getElementById("liO23");

        /*loop through the liAseries list elements*/
        let li_O_1series = [x15,
            x15_A, x15_B, x15_C, x15_D,
            x15_E, x15_F, x15_G, x15_H,
            x15_I, x15_J, x15_K, x15_L,
            x15_M, x15_N, x15_O, x15_P,
            x15_Q, x15_R, x15_S, x15_T,
            x15_U, x15_V, x15_W, x15_X
        ]

        /*liAsubseries elements*/
        let x15_O_subLiSeriesElement1 = document.getElementById("liO_SubO1");
        let x15_O_subLiSeriesElement2 = document.getElementById("liO_SubO2");
        let x15_O_subLiSeriesElement3 = document.getElementById("liO_SubO3");
        let x15_O_subLiSeriesElement4 = document.getElementById("liO_SubO4");
        let x15_O_subLiSeriesElement5 = document.getElementById("liO_SubO5");
        let x15_O_subLiSeriesElement6 = document.getElementById("liO_SubO6");

        let subLi_O_1Series = [x15_O_subLiSeriesElement1,
            x15_O_subLiSeriesElement2,
            x15_O_subLiSeriesElement3,
            x15_O_subLiSeriesElement4,
            x15_O_subLiSeriesElement5,
            x15_O_subLiSeriesElement6
        ]

        for (let i57 = 0; i57 < li_O_1series.length; i57++) {
            let iterdata_O_1 = li_O_1series.map((dataitem57) => {
                dataitem57.style.display = _displayblock_1_O;
                dataitem57.style.backgroundColor = _background_Color_1_O;
                dataitem57.style.fontSize = _font_size_1_O;
                dataitem57.style.margin = _margin_1_O_AutoCustom;
                dataitem57.style.textAlign = _text_align_1_O;
            })
            for (let i58 = 0; i58 < subLi_O_1Series.length; i58++) {
                let iterdata_O_2 = subLi_O_1Series.map((dataitem58) => {
                    dataitem58.style.display = _displayListItem_1_O;
                    dataitem58.style.backgroundColor = _background_Color_1_O;
                    dataitem58.style.fontSize = _font_size_1_O;
                    dataitem58.style.margin = _margin_1_O_AutoCustom;
                    dataitem58.style.textAlign = _text_align_1_O;
                    dataitem58.style.listStyle = _list_style_decimal_15;
                    dataitem58.style.width = _width15_;
                })
                return iterdata_O_2;
            }
            return iterdata_O_1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1O.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2O() {
    try {
        /*margin properties start*/
        let _margin_2_O_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2_O = "block";
        let _displaynone_2_O = "none";
        /*display properties end*/

        document.getElementById("btn30").style.display = _displaynone_2_O;
        document.getElementById("btn29").style.margin = _margin_2_O_allAuto;
        document.getElementById("btn29").style.display = _displayblock_2_O;
        /*ingredients header*/
        let y15 = document.getElementById("p-content15");
        let y15_A = document.getElementById("h3_15");

        /*ingredients*/
        let y15_B = document.getElementById("liO1");
        let y15_C = document.getElementById("liO2");
        let y15_D = document.getElementById("liO3");
        let y15_E = document.getElementById("liO4");
        let y15_F = document.getElementById("liO5");
        let y15_G = document.getElementById("liO6");
        let y15_H = document.getElementById("liO7");
        let y15_I = document.getElementById("liO8");
        let y15_J = document.getElementById("liO9");
        let y15_K = document.getElementById("liO10");
        let y15_L = document.getElementById("liO11");
        let y15_M = document.getElementById("liO12");
        let y15_N = document.getElementById("liO13");
        let y15_O = document.getElementById("liO14");
        let y15_P = document.getElementById("liO15");
        let y15_Q = document.getElementById("liO16");
        let y15_R = document.getElementById("liO17");
        let y15_S = document.getElementById("liO18");
        let y15_T = document.getElementById("liO19");
        let y15_U = document.getElementById("liO20");
        let y15_V = document.getElementById("liO21");
        let y15_W = document.getElementById("liO22");
        let y15_X = document.getElementById("liO23");



        /*loop through the liAseries list elements*/
        let li_O_2series = [y15,
            y15_A, y15_B, y15_C, y15_D,
            y15_E, y15_F, y15_G, y15_H,
            y15_I, y15_J, y15_K, y15_L,
            y15_M, y15_N, y15_O, y15_P,
            y15_Q, y15_R, y15_S, y15_T,
            y15_U, y15_V, y15_W, y15_X
        ]

        /*liAsubseries elements*/
        let y15_O_subLiSeriesElement1 = document.getElementById("liO_SubO1");
        let y15_O_subLiSeriesElement2 = document.getElementById("liO_SubO2");
        let y15_O_subLiSeriesElement3 = document.getElementById("liO_SubO3");
        let y15_O_subLiSeriesElement4 = document.getElementById("liO_SubO4");
        let y15_O_subLiSeriesElement5 = document.getElementById("liO_SubO5");
        let y15_O_subLiSeriesElement6 = document.getElementById("liO_SubO6");

        let subLi_O_2Series = [y15_O_subLiSeriesElement1, y15_O_subLiSeriesElement2,
            y15_O_subLiSeriesElement3, y15_O_subLiSeriesElement4, y15_O_subLiSeriesElement5,
            y15_O_subLiSeriesElement6
        ]
        for (let i59 = 0; i59 < li_O_2series.length; i59++) {
            let iterdataO_3 = li_O_2series.map((dataitem59) => {
                dataitem59.style.display = _displaynone_2_O;
            })
            for (let i60 = 0; i60 < subLi_O_2Series.length; i60++) {
                let iterdataO_4 = subLi_O_2Series.map((dataitem60) => {
                    dataitem60.style.display = _displaynone_2_O;
                })
                return iterdataO_4;
            }
            return iterdataO_3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2O.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item1P() {
    try {
        /*fonts properties start*/
        let _font_size_1P = "14pt ";
        let _text_align_1P = "center";
        /*fonts properties end*/

        /*background properties start*/
        let _background_Color_1P = 'darkgrey';
        /*background properties end*/

        /*margin properties start*/
        let _margin_1P_AutoCustom = "10px auto 10px auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_1P = "block";
        let _displayListItem_1P = "list-item";
        let _displaynone_1P = "none";
        /*display properties end*/

        /*list styling start*/
        let _list_style_decimal_16 = "decimal";
        /*list styling end*/

        /**/
        let _width16_ = "400px";
        /**/

        document.getElementById("btn31").style.display = _displaynone_1P;
        document.getElementById("btn32").style.margin = _margin_1P_AutoCustom;
        document.getElementById("btn32").style.display = _displayblock_1P;

        /*ingredients header*/
        let x16 = document.getElementById("p-content16");
        let x16_A = document.getElementById("h3_16");

        /*ingredients*/
        let x16_B = document.getElementById("liP1");
        let x16_C = document.getElementById("liP2");
        let x16_D = document.getElementById("liP3");
        let x16_E = document.getElementById("liP4");
        let x16_F = document.getElementById("liP5");
        let x16_G = document.getElementById("liP6");
        let x16_H = document.getElementById("liP7");
        let x16_I = document.getElementById("liP8");
        let x16_J = document.getElementById("liP9");
        let x16_K = document.getElementById("liP10");
        let x16_L = document.getElementById("liP11");
        let x16_M = document.getElementById("liP12");
        let x16_N = document.getElementById("liP13");
        let x16_O = document.getElementById("liP14");
        let x16_P = document.getElementById("liP15");
        let x16_Q = document.getElementById("liP16");
        let x16_R = document.getElementById("liP17");

        /*loop through the liAseries list elements*/
        let liP1series = [x16,
            x16_A, x16_B, x16_C, x16_D,
            x16_E, x16_F, x16_G, x16_H,
            x16_I, x16_J, x16_K, x16_L,
            x16_M, x16_N, x16_O, x16_P,
            x16_Q, x16_R
        ]

        /*liAsubseries elements*/
        let x16P_subLiSeriesElement1 = document.getElementById("liP_SubP1");
        let x16P_subLiSeriesElement2 = document.getElementById("liP_SubP2");
        let x16P_subLiSeriesElement3 = document.getElementById("liP_SubP3");
        let x16P_subLiSeriesElement4 = document.getElementById("liP_SubP4");
        let x16P_subLiSeriesElement5 = document.getElementById("liP_SubP5");
        let x16P_subLiSeriesElement6 = document.getElementById("liP_SubP6");
        let x16P_subLiSeriesElement7 = document.getElementById("liP_SubP7");
        let x16P_subLiSeriesElement8 = document.getElementById("liP_SubP8");

        let subLiP1Series = [x16P_subLiSeriesElement1,
            x16P_subLiSeriesElement2,
            x16P_subLiSeriesElement3,
            x16P_subLiSeriesElement4,
            x16P_subLiSeriesElement5,
            x16P_subLiSeriesElement6,
            x16P_subLiSeriesElement7,
            x16P_subLiSeriesElement8
        ]

        for (let i61 = 0; i61 < liP1series.length; i61++) {
            let iterdataP1 = liP1series.map((dataitem61) => {
                dataitem61.style.display = _displayblock_1P;
                dataitem61.style.backgroundColor = _background_Color_1P;
                dataitem61.style.fontSize = _font_size_1P;
                dataitem61.style.margin = _margin_1P_AutoCustom;
                dataitem61.style.textAlign = _text_align_1P;
            })
            for (let i12 = 0; i12 < subLiP1Series.length; i12++) {
                let iterdataP2 = subLiP1Series.map((dataitem62) => {
                    dataitem62.style.display = _displayListItem_1P;
                    dataitem62.style.backgroundColor = _background_Color_1P;
                    dataitem62.style.fontSize = _font_size_1P;
                    dataitem62.style.margin = _margin_1P_AutoCustom;
                    dataitem62.style.textAlign = _text_align_1P;
                    dataitem62.style.listStyle = _list_style_decimal_16;
                    dataitem62.style.width = _width16_;
                })
                return iterdataP2;
            }
            return iterdataP1
        }
    }
    catch (error) {
        console.log("Something went wrong in section 1P.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}
function view_item2P() {
    try {
        /*margin properties start*/
        let _margin_2P_allAuto = "auto auto auto auto";
        /*margin end*/

        /*display properties start*/
        let _displayblock_2P = "block";
        let _displaynone_2P = "none";
        /*display properties end*/

        document.getElementById("btn32").style.display = _displaynone_2P;
        document.getElementById("btn31").style.margin = _margin_2P_allAuto;
        document.getElementById("btn31").style.display = _displayblock_2P;
        /*ingredients header*/
        let y16 = document.getElementById("p-content16");
        let y16_A = document.getElementById("h3_16");

        /*ingredients*/
        let y16_B = document.getElementById("liP1");
        let y16_C = document.getElementById("liP2");
        let y16_D = document.getElementById("liP3");
        let y16_E = document.getElementById("liP4");
        let y16_F = document.getElementById("liP5");
        let y16_G = document.getElementById("liP6");
        let y16_H = document.getElementById("liP7");
        let y16_I = document.getElementById("liP8");
        let y16_J = document.getElementById("liP9");
        let y16_K = document.getElementById("liP10");
        let y16_L = document.getElementById("liP11");
        let y16_M = document.getElementById("liP12");
        let y16_N = document.getElementById("liP13");
        let y16_O = document.getElementById("liP14");
        let y16_P = document.getElementById("liP15");
        let y16_Q = document.getElementById("liP16");
        let y16_R = document.getElementById("liP17");


        /*loop through the liAseries list elements*/
        let liP2series = [y16,
            y16_A, y16_B, y16_C, y16_D,
            y16_E, y16_F, y16_G, y16_H,
            y16_I, y16_J, y16_K, y16_L,
            y16_M, y16_N, y16_O, y16_P,
            y16_Q, y16_R
        ]

        /*liAsubseries elements*/
        let y16P_subLiSeriesElement1 = document.getElementById("liP_SubP1");
        let y16P_subLiSeriesElement2 = document.getElementById("liP_SubP2");
        let y16P_subLiSeriesElement3 = document.getElementById("liP_SubP3");
        let y16P_subLiSeriesElement4 = document.getElementById("liP_SubP4");
        let y16P_subLiSeriesElement5 = document.getElementById("liP_SubP5");
        let y16P_subLiSeriesElement6 = document.getElementById("liP_SubP6");
        let y16P_subLiSeriesElement7 = document.getElementById("liP_SubP7");
        let y16P_subLiSeriesElement8 = document.getElementById("liP_SubP8");

        let subLiP2Series = [y16P_subLiSeriesElement1,
            y16P_subLiSeriesElement2,
            y16P_subLiSeriesElement3,
            y16P_subLiSeriesElement4,
            y16P_subLiSeriesElement5,
            y16P_subLiSeriesElement6,
            y16P_subLiSeriesElement7,
            y16P_subLiSeriesElement8
        ]
        for (let i63 = 0; i63 < liP2series.length; i63++) {
            let iterdataP3 = liP2series.map((dataitem63) => {
                dataitem63.style.display = _displaynone_2P;
            })
            for (let i64 = 0; i64 < subLiP2Series.length; i64++) {
                let iterdataP4 = subLiP2Series.map((dataitem64) => {
                    dataitem64.style.display = _displaynone_2P;
                })
                return iterdataP4;
            }
            return iterdataP3;
        }
    }
    catch (error) {
        console.log("Something went wrong in section 2P.");
        let finderr = prompt("Do you want to inspect the error? Yes or No")
        if (finderr == "Yes" || finderr == "yes" || finderr == "YES") {
            console.log(error)
        }
    }
}