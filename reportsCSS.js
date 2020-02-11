let kibanaCSS = () => {

    let removeCSS = `
                .euiHeader {
                    display: none !important;
                }
                .euiFlexGroup.euiFlexGroup--directionRow.kbnTopNavMenu {
                    display: none;
                }
                .globalQueryBar {
                    display: none !important;
                }
                nav {
	                display: none !important;
                }
                .react-grid-layout {
                    width: 100% !important;   
                }
                .euiScreenReaderOnly
                {
                     display: none !important;
                }
                kbn-top-nav{
                    display: none !important;
                }
                .kuiLocalNav{
                     display: none !important;
                }
                filter-bar{
                     display: none !important;
                }
              .start-screen{
                    display: none !important;
               }
               .text-center.start-screen.ng-hide h2{
                   display:none !important;
               }
              .text-center h2{
                   display:none !important;
               }

              .text-center{
                   display:none !important;
               }

                #globalBannerList {
	                display: none !important;
                }
               
                .app-wrapper{
	                top: 0px !important;
                    left: 0px !important;
                }


                `;
    return removeCSS;
}

let grafanaCSS = () => {

    let removeCSS = `
               sidemenu{
                    display: none !important;
               }
              .navbar{
                   display: none !important;
              }
              .dashboard-container{
                    padding-left: 0px;
                    padding-top: 0px;
                    padding-right: 0px
              }
                `;
    return removeCSS;
}





let dataTableStyle = () => {
    return {
        position: 'absolute !important',
        width: '95% !important'
    };
}
let cloudVisualStyle = () => {
    return {
        position: 'absolute !important'
    };
}
let chartHeightWidth = () => {
    return {
        position: 'static !important',
        width: '100% !important',
        border: '1px solid #cccccc !important',
        overflow: 'hidden !important',
        padding: '0px 10px'
    };
}
let templateHeaderFooter = () => {
    let titleClassW = '111111111';
    let Title = 'Elk Report';
    let dataTimeClassW = new Date();
    let TimeWindow = 'Last 7 days'
    let htmlHeader = `
        <style>
                    @font-face {
        font - family: "DefaultFont";
    }
    body {
        font - family: "DefaultFont"!important;
    }
    div{ font - family: "DefaultFont"!important; }
    h3,
                    .h3{ font - size: 24px!important; font - family: "DefaultFont"!important; }
    p{ margin: 0 0!important; line - height: 0.7!important; }
    i{ font - style: italic!important; } span, div{ display: block; white - space: nowrap; overflow: hidden; text - overflow: ellipsis; }
                </style >
    <div style="height:75px;width:100%;padding:0px 10px;">
        <div style="position:relative;height:30px;width:100%;margin:0px !important;padding:0px">
            <div class="" style="float:left; ${titleClassW} margin-top: 5px;font-size:8px;"> ${Title} </div>
            <div style="float:right; ${dataTimeClassW} ;text-align:right !important;font-weight:lighter;font-size: 8px;position: relative; bottom:10px;">' + new Date() + '</div>
        </div>
        <div style="position:relative;width:100%;height: 45px;">
            <hr style="height: 2px;-webkit-print-color-adjust: exact; background-color: black; border: 0px none;bottom:0px !important;font-size:8px">;                 
                    </div>
        </div>`;


    let htmlFooter = `
                <style>
            @font-face {
                font - family:"DefaultFont";
        }
                    body{
                font - family:"DefaultFont" !important;
        }
                    div {
                font - family:"DefaultFont" !important;
        }
                    h3, .h3 {
                font - size:24px !important;
            font-family:"DefaultFont" !important;
        }
                    p {
                margin:0 0 !important;
            line-height: 0.7 !important;
        }
                    i {
                font - style:italic !important;
        }
                    span, div {
                display:block;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
        }
                    .footer {
                display: block;
        }
                </style>
        <div style="font-size: 10px;color: #999;padding:0px 10px; height:75px;width:100%; clear:both;">
            <hr style="height: 2px;position: relative; top: 35px;-webkit-print-color-adjust: exact; background-color: black; border: 1px none;bottom:0px !important;font-size:8px">
                <div style="width:100%;position: relative;top:35px;font-weight:lighter;font-size: 8px;">
                    <span style="float:right;text-align:right;padding-top:10px;font-weight:lighter;font-size: 6px;"> ${TimeWindow} </span>
                    <div style="display:flex;padding-top:10px;margin:0px;font-weight:lighter;font-size: 6px;">
                        Page&nbsp;<span class="pageNumber"></span>&nbsp;of&nbsp;<span class="totalPages"></span>
                    </div>
                </div>
                </div>`

    return {
        header: htmlHeader,
        footer: htmlFooter,
    };

}

export {
    kibanaCSS, grafanaCSS, chartHeightWidth, templateHeaderFooter, dataTableStyle, cloudVisualStyle
}