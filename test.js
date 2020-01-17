const puppeteer = require('puppeteer-core');
const fs = require('fs');

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function millisToSeconds(millis) {
    var seconds = ((millis) / 1000).toFixed(0);
    return (seconds < 10 ? '0' : '') + seconds;
}
const headers = new Map();
// headers.set(
//     'Authorization',
//     `Basic ${new Buffer(`${"elastic"}:${"changeme"}`).toString('base64')}`
// );

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
        headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 842 + 480, height: 595 + 198 });
    await page.setExtraHTTPHeaders(headers);
    var dtag = {
        "Tool_list": [{
            "Tool_name": "kibana",
            "data_source": "elastic",
            "dashboard_parent_tag": [".gridster", ".react-grid-layout"],
            "visualization_parent_tag": [".gridster > li", ".react-grid-layout > .react-grid-item"],
            "visualization_tag": "visualize",
            "search_tag": "doc-table",
            "chart_tags": ["svg g",
                ".metric-container",
                "table",
                ".tilemap",
                ".leaflet-map-pane",
                ".visualize-spy-content",
                "doc-table table",
                ".metric-vis .metric-container .metric-value",
                ".visualize-error",
                ".table-vis-error",
                ".timelion-vis",
                ".rhythm_chart",
                ".markdown-vis",
                ".metric",
                ".metrics_issue",
                ".metrics_error"
            ],
            "chart_error_tags": [".metric-vis .metric-container .metric-value",
                ".visualize-error",
                ".table-vis-error",
                ".metrics_issue",
                ".metrics_error"
            ],
            "excel_tag_click": [".visualize-show-spy-tab .kuiIcon", ".visualize-show-spy-tab i"],
            "excel_set_alldata": ".visualize-spy-container select",
            "excel_get_alldata": ".visualize-spy-container .agg-table-paginated",
            "excel_get_visu_panelTitle": ".panel-title"
        },
        {
            "Tool_name": "grafana",
            "data_source": "elastic",
            "dashboard_parent_tag": ".dash-row",
            "visualization_tag": "plugin-component",
            "chart_tags": [".singlestat-panel",
                ".table-panel-container",
                "panel-plugin-text",
                ".heatmap-panel svg g",
                ".graph-canvas-wrapper canvas",
                "panel-plugin-btplc-alarm-box-panel",
                ".clock-panel",
                ".mapcontainer",
                ".pluginlist",
                ".dashlist",
                ".panel-alert-list",
                ".canvas-spot",
                ".annotations-panel",
                ".ajax-panel",
                ".status-panel",
                ".cesiumContainer",
                ".panel-alert-list",
                ".michaeldmoore-annunciator-panel-container",
                ".grafana-d3-gauge",
                ".carpetplot-wrapper",
                "svg g"
            ],
            "chart_error_tags": [
                ".panel-info-corner--error drop-error drop-target"
            ]
        }
        ]

    };
    await page.goto("http://localhost:5601/app/kibana#/dashboard/cbad3c60-2097-11ea-8d43-e1476db14d0c?_g=(refreshInterval:(pause:!f,value:900000),time:(from:now-7d,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:15,i:'7405cf03-f8e3-4083-bd72-fd83286d81ed',w:24,x:0,y:0),id:'37cc8650-b882-11e8-a6d9-e546fe2bba5f',panelIndex:'7405cf03-f8e3-4083-bd72-fd83286d81ed',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:bd74ee65-59a0-4d55-8574-1af2ea863e27,w:24,x:24,y:0),id:ed8436b0-b88b-11e8-a6d9-e546fe2bba5f,panelIndex:bd74ee65-59a0-4d55-8574-1af2ea863e27,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'3733aedc-3354-4680-9811-ea86c67b2af8',w:24,x:0,y:15),id:'8f4d0c00-4c86-11e8-b3d7-01146121b73d',panelIndex:'3733aedc-3354-4680-9811-ea86c67b2af8',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'0c7f34cc-016d-4775-abdc-36c0b2d692a3',w:24,x:24,y:15),id:f8290060-4c88-11e8-b3d7-01146121b73d,panelIndex:'0c7f34cc-016d-4775-abdc-36c0b2d692a3',type:visualization,version:'7.5.0')),query:(language:kuery,query:''),timeRestore:!t,title:'Test%20Dashboard',viewMode:view)", { timeout: 120000 });
    //await timeout(5000);
    var startTime = new Date().getTime();
    console.log('evaluated started at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.');
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));

    function evalue() {
        var value = page.evaluate(dtag => {
            var newStyle = document.createElement('style');
            var chartTags = dtag['Tool_list'][0].chart_tags;
            var visuaParentTags, dashboardParentTags;
            var visuaTag = dtag['Tool_list'][0].visualization_tag;
            var searchTag = dtag['Tool_list'][0].search_tag;

            for (var KibanaFindParen = 0; KibanaFindParen < dtag['Tool_list'][0].dashboard_parent_tag.length; KibanaFindParen++) {
                if (document.querySelectorAll(dtag['Tool_list'][0].dashboard_parent_tag[KibanaFindParen]).length > 0) {
                    dashboardParentTags = dtag['Tool_list'][0].dashboard_parent_tag[KibanaFindParen];
                    break;
                }
            }
            for (var KibanaFindParen = 0; KibanaFindParen < dtag['Tool_list'][0].visualization_parent_tag.length; KibanaFindParen++) {
                if (document.querySelectorAll(dtag['Tool_list'][0].visualization_parent_tag[KibanaFindParen]).length > 0) {
                    visuaParentTags = dtag['Tool_list'][0].visualization_parent_tag[KibanaFindParen];
                    break;
                }
            }
            var tarr = [{
                panelIndex: '1',
                gridData: [Object],
                version: '6.2.1',
                type: 'visualization',
                id: '8f4d0c00-4c86-11e8-b3d7-01146121b73d'
            },
            {
                panelIndex: '2',
                gridData: [Object],
                version: '6.2.1',
                type: 'visualization',
                id: '37cc8650-b882-11e8-a6d9-e546fe2bba5f'
            },
            {
                panelIndex: '3',
                gridData: [Object],
                version: '6.2.1',
                type: 'visualization',
                id: 'ed8436b0-b88b-11e8-a6d9-e546fe2bba5f'
            },
            {
                panelIndex: '4',
                gridData: [Object],
                version: '6.2.1',
                type: 'visualization',
                id: 'f8290060-4c88-11e8-b3d7-01146121b73d'
            }
            ]

            return ((document.getElementsByTagName(visuaTag).length + document.getElementsByTagName(searchTag).length) == 27 && tarr.every(function (item, index) {
                // if (item.found) {
                var ele = false;
                index = index + 1;
                for (var i = 0; i < chartTags.length; i++) {
                    if ($('' + visuaParentTags + ':nth-child(' + index + ')').find(chartTags[i]).length >= 1) {
                        // if($('.gridster > li:nth-child(1)').find("doc-table table").length>0){
                        ele = true;
                        break;
                    }
                }
                //console.log("All chart tags:"+ele);
                console.log($('' + visuaParentTags + ':nth-child(' + index + ')').find('.panel-title').text())
                $('.content').hide();
                $('' + dashboardParentTags + '').appendTo('body').css('width', '100%');
                console.log("Debug data - Type of visualization is " + item.type + ". Presence of the element tag is " + ele);
                return ele;

                // } else {
                //     console.log('hello')
                //     return true;
                // }

            }));
        }, dtag);
        value.then(function (result) {
            console.log('result ', result);
            if (result === false) {
                setTimeout(function () {
                    return evalue(); //will log results.
                }, 1000);
            } else {
                console.log('evaluated ended at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.');
                var htmldata = page.evaluate(x => {
                    $('.react-grid-layout').css({ 'background-color': 'red', 'position': 'absolute', 'opacity': 999 });
                    var style = '<div class="footer" style="height:10px !important;top:auto !important;bottom:0px !important;right:0px !important;left:0px !important;position:absolute !important;;background-color:red !important;">\
					\
					</div>';
                    //$('body').append(style);
                    return document.documentElement.innerHTML;
                }, 10);

                setTimeout(function () {
                    htmldata.then(function (resultt) {
                        fs.writeFile('phantomlog.html', resultt, function (err) {

                            // page.pdf({
                            //     displayHeaderFooter: true,
                            //     footerTemplate: '<b>Test</b>',
                            // }).then((buffer) => {
                            //     resolve(buffer);
                            // });
                            page.pdf({
                                path: 'test' + new Date() + '.pdf',
                                format: 'a4',
                                landscape: false,
                                footerTemplate: '<style>.pageNumber1{\
						    font-family: "DefaultFont" !important;font-size: 12px !important;\
						    color:red !important;\
						}</style><script type="text/javascript">window.onload = function () { document.body.style.visibility="hidden !important"; var elements = document.getElementsByClassName("pageNumber");\
    for (var i = 0; i < elements.length; i++) {\
        elements[i].innerHTML="blue";\
    }};</script><div class="pageNumber">\
					</div>', //'<div class="pageNumbersdfss" style:"height:75px;width:100%;color:red;left:20px;font-size: 20px !important;position: absolute;background-color:#000 !important;"></div>/<div class="totalPages"></div>',
                                headerTemplate: '<style>body\
                            {background-color:red !important;\
                            	\
                            }\
                            .header{\
						    height:75px !important;\
						    right:0px !important;\
						    left:0px !important;\
						    top:0px !important;\
						    bottom:auto !important;\
						    position: absolute !important;\
						    background-color:red !important;\
                            -webkit-print-color-adjust: exact;\
						}</style><div class="header"><div class="header123" style="height:75px;color:red;left:0px;right:0pxfont-size: 20px;right:0px;top:0px;bottom:auto;position: absolute;background-color:#000;">\
					\
					</div><div class="header1234" style="height:75px;color:red;left:100px;font-size: 20px;right:0px;top:0px;bottom:auto;position: absolute;background-color:#000;">\
					\
					</div></div>',
                                displayHeaderFooter: true,
                                margin: {
                                    top: "75px",
                                    bottom: "75px"
                                }
                            }) //.then(function(){

                            //});
                            return value;
                        });
                    });
                    // fs.writeFile('phantomlog.html', resultt, function(err) {
                    // });
                }, 2000);
                // log.info('The file was saved in the path ', parentDir + '/phantomlog.txt');


                //browser.close();

            }
        });
        // return value;

    }
    await evalue();
    // setTimeout(function() {
    //     page.pdf({ path: 'test123.pdf', format: 'a4' });
    // }, 20000);
    // console.log('hello');
    // value.then(function(result) {
    //     console.log(result) //will log results.
    // })
    //console.log(value);

})();