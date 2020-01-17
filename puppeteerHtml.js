import 'dotenv/config';
import puppeteer from 'puppeteer-core';
import fs from 'fs';
import * as reportsCSS from "./reportsCSS.js";
import * as dashboardTags from "./dashboardTags.json";


(async () => {
    const browser = await puppeteer.launch({
        // executablePath: './headless_shell/headless_shell',
        executablePath: '/usr/bin/google-chrome',
        headless: true,
    });
    const url = `http://localhost:5601/app/kibana#/dashboard/835bb4f0-35f0-11ea-87ce-4357b62eaa48?_g=()&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:15,i:'7484fd5f-6040-463a-9d50-add58105fb0a',w:24,x:0,y:0),id:'4b3ec120-b892-11e8-a6d9-e546fe2bba5f',panelIndex:'7484fd5f-6040-463a-9d50-add58105fb0a',type:visualization,version:'7.5.1'),(embeddableConfig:(),gridData:(h:15,i:'8bd5b9f0-05dd-4dd8-923d-d7be666b77d4',w:24,x:24,y:0),id:'9ca7aa90-b892-11e8-a6d9-e546fe2bba5f',panelIndex:'8bd5b9f0-05dd-4dd8-923d-d7be666b77d4',type:visualization,version:'7.5.1'),(embeddableConfig:(),gridData:(h:15,i:e76a22a6-541d-46c7-9924-acae6fb968c9,w:24,x:0,y:15),id:'01c413e0-5395-11e8-99bf-1ba7b1bdaa61',panelIndex:e76a22a6-541d-46c7-9924-acae6fb968c9,type:visualization,version:'7.5.1'),(embeddableConfig:(),gridData:(h:15,i:'04e619c5-8b4e-4ffe-a0b3-393fc054df46',w:24,x:24,y:15),id:'2edf78b0-5395-11e8-99bf-1ba7b1bdaa61',panelIndex:'04e619c5-8b4e-4ffe-a0b3-393fc054df46',type:visualization,version:'7.5.1'),(embeddableConfig:(),gridData:(h:15,i:c6753772-9b5c-4129-9f5c-c2f3a3b70cca,w:24,x:0,y:30),id:eb63a8c0-35f8-11ea-87ce-4357b62eaa48,panelIndex:c6753772-9b5c-4129-9f5c-c2f3a3b70cca,type:visualization,version:'7.5.1')),query:(language:kuery,query:''),timeRestore:!f,title:'Supported%20dashboard',viewMode:view)`;

    let format = "pdf";
    const page = await browser.newPage();
    await page.setViewport({
        width: 2048,
        height: 1024,
        deviceScaleFactor: 1,
    });
    function millisToSeconds(millis) {
        var seconds = ((millis) / 1000).toFixed(0);
        return (seconds < 10 ? '0' : '') + seconds;
    }
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 90000 }).then(async val => {
        if (val._status == 200) {

            var startTime = new Date().getTime();
            console.log('url loaded................')

            console.log('evaluated started at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.');

            // const value = await page.$eval('table tr td:nth-child(2)', el => {
            //     el.
            // });

            /////////////// Verify Chart Title Displayed or not /////////////////////////////////

            let visualization_parent_tag = dashboardTags['Tool_list'][0].visualization_parent_tag;

            visualization_parent_tag.map(async (val) => {
                try {
                    if (await page.$(val) !== null) {
                        throw BreakException;
                    }
                } catch (error) {
                    console.log('Parent tag is displayed', val)

                }
            })




            let chartTitleTags = dashboardTags['Tool_list'][0].chart_title;
            chartTitleTags.map(async (val) => {
                try {
                    if (await page.$(val) !== null) {
                        throw BreakException;
                    }
                } catch (error) {
                    console.log('Chart title is displayed', val)

                }
            })

            /////////////// Verification completed for  Chart Title /////////////////////////////////



            /////////////// Verify Error in chart or not /////////////////////////////////

            let chartErrorTags = dashboardTags['Tool_list'][0].chart_error_tags;
            chartErrorTags.map(async (tag) => {
                try {
                    if (await page.$(tag) !== null) {
                        throw BreakException;
                    }
                } catch (error) {
                    console.log('Error in Chart', tag)
                }
            })
            /////////////// Verification completed for  Error in chart or not /////////////////////////////////





            /////////////////// Applying Css to remove Kibana Body /////////////////
            let removeCSS = reportsCSS.dashboardStyle();
            await page.addStyleTag({
                content: `${removeCSS}`
            })


        }
        else {
            console.log('url not loaded........')
        }

        // if (format == "pdf" || "html") {
        //     let adjustChartCSS = reportsCSS.chartHeightWidth();
        //     await page.addStyleTag({
        //         content: `${adjustChartCSS}`

        //     })

        // }

        console.log('evaluated completed at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.');


        // await page.evaluate(() => {
        //     return document.documentElement.innerHTML;
        // }).then(val => {
        //     fs.writeFileSync('debuglog.html', val)
        // });
        let htmlFooter = reportsCSS.templateHeaderFooter().footer;
        let htmlHeader = reportsCSS.templateHeaderFooter().header;
        await page.evaluate(() => {
            return document.body.scrollHeight;
        }).then(async (dimensions) => {
            console.log('2222222222222222222222222', dimensions)
            dimensions
        })
        console.log('rendering started at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.')
        if (format == "png") {
            console.log('3333333333333333333333')
            await page.screenshot({
                type: 'png',
                path: 'test' + new Date() + '.png',
                fullPage: true
            })

        }
        else if (format = "pdf") {
            setTimeout(async () => {
                const example = await page.$('body');
                const bounding_box = await example.boundingBox();
                console.log('22222222222222222222')
                await page.pdf({
                    path: 'test' + new Date() + '.pdf',
                    clip: {
                        x: bounding_box.x,
                        y: bounding_box.y,
                        width: 2048,
                        height: 1184,
                    },
                    footerTemplate: htmlFooter,
                    headerTemplate: htmlHeader,
                    displayHeaderFooter: true,
                    margin: {
                        top: "75px",
                        bottom: "75px"
                    }
                });
                //  })

            }, 2000);
        }
        else if (format == "html") {
            var i;
            individualVisualization = (totalCharts, i) => {
                console.log(totalCharts, '11111111111111111', i)
                page.screenshot({
                    type: 'png',
                    path: 'test' + i + '.png',
                    clip: {
                        x: 10,
                        y: 443 * i,
                        height: 443,
                        width: 822
                    }
                }).then({})

            }


        }
        //  console.log('rendering completed at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.');
        console.log('finished............')



    })
})();
