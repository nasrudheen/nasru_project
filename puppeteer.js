import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
import * as reportsCSS from "./reportsCSS";
import fs from 'fs';
import { visualParentTag } from './puppeteerEvaluate';

var pupBrowser = async () => {
    const browser = await puppeteer.launch({
        // executablePath: './headless_shell/headless_shell',
        //executablePath: '/usr/bin/google-chrome',
        //headless: true,
    });
    dotenv.config({ path: `${__dirname}/.env` });
    const url = process.env.URL;
    console.log('url started loading................');
    let format = "pdf";
    var page = await browser.newPage();
    await page.setViewport({
        width: 2048,
        height: 1184,
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
        }
        else {
            console.log('url not loaded........')
        }
    }).then(async () => {

        let data = {
            height: 842,
            width: 595
        }

        const value = await visualParentTag(page, data);
        //     .then(val => {
        //     console.log('11111111111111', val);
        // })

        // reportsCSS.dataTable();

        // let chartTitleTags = dashboardTags['Tool_list'][0].chart_title;
        // chartTitleTags.map(async (val) => {
        //     try {
        //         if (await page.$(val) !== null) {

        //             throw BreakException;
        //         }
        //     } catch (error) {
        //         console.log('Chart title is displayed', val)

        //     }
        // })

        // let dataTableTags = dashboardTags['Tool_list'][0].data_table_tag;
        // chartTitleTags.map(async (val) => {
        //     try {
        //         if (await page.$(val) !== null) {

        //             throw BreakException;
        //         }
        //     } catch (error) {
        //         console.log('Chart title is displayed', val)

        //     }
        // })

        /////////////// Verification completed for  Chart Title /////////////////////////////////


        /////////////////// Common Css to remove Kibana Body /////////////////
        let removeCSS = reportsCSS.dashboardStyle();
        await page.addStyleTag({
            content: `${removeCSS}`
        })
        ///////////////////////// Css Applied ////////////////////////////



        if (format == "pdf") {
            let adjustChartCSS = reportsCSS.chartHeightWidth();
            await page.addStyleTag({
                content: `${adjustChartCSS}`
            })


        }

        //  console.log('evaluated completed at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.');


        const ht = await page.evaluate(() => {
            return document.body.scrollHeight;
        });
        // console.log('hhhhhhhhhhhhhhhhh', ht)


        let htmlFooter = reportsCSS.templateHeaderFooter().footer;
        let htmlHeader = reportsCSS.templateHeaderFooter().header;

        // console.log('rendering started at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.')

        if (format == "png") {
            await page.screenshot({
                type: 'png',
                path: 'test' + new Date() + '.png',
                fullPage: true
            })
            console.log('rendering completed at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.');
            console.log('finished............')
        }
        else if (format = "pdf") {
            setTimeout(async () => {
                await page.pdf({
                    path: 'test' + new Date() + '.pdf',
                    width: 2048,
                    height: 1428,
                    footerTemplate: htmlFooter,
                    headerTemplate: htmlHeader,
                    displayHeaderFooter: true,
                    margin: {
                        top: "75px",
                        bottom: "75px"
                    }
                });
                // console.log('rendering completed at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.');
                console.log('finished............')
            }, 5000);
        }
    })
    /////////////// Verify Chart Title Displayed or not /////////////////////////////////




    return page;
}
pupBrowser();
export {
    pupBrowser
}