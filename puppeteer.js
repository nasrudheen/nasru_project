import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
import * as reportsCSS from "./reportsCSS";
import fs from 'fs';
import { adjustChartHeight, verifyChartTitle, verifyDataTable, defaultLayoutReport } from './puppeteerEvaluate';

var pupBrowser = async () => {
    const browser = await puppeteer.launch({
        // executablePath: './headless_shell/headless_shell',
        executablePath: '/usr/bin/google-chrome',
        headless: false,
    });
    dotenv.config({ path: `${__dirname}/.env` });
    const url = process.env.URL;
    console.log('url started loading................');

    let format = "pdf";
    let layout = "SmartLayout";
    let template = "NoTemplate";

    var page = await browser.newPage();
    await page.setViewport({
        width: 842,
        height: 595,
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
            height: 595,
            width: 842,
            size: "A4_Land"
        }

        /////////////////// Common Css to remove Kibana Body /////////////////

        let removeCSS = reportsCSS.dashboardStyle();
        await page.addStyleTag({
            content: `${removeCSS}`
        })

        ///////////////////////// Css Applied ////////////////////////////

        await verifyChartTitle(page).then(() => {
            console.log('Chart tile present')
        })

        if (format == "pdf" && template == "NoTemplate" && layout == "SmartLayout") {
            await adjustChartHeight(page, data);
            //await verifyDataTable(page)

        }
        if (format == "pdf" && template == "NoTemplate" && layout == "DefaultLayout") {
            var defaultLayoutHeight = await defaultLayoutReport(page)
        }

        //  console.log('evaluated completed at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.');


        let htmlFooter = reportsCSS.templateHeaderFooter().footer;
        let htmlHeader = reportsCSS.templateHeaderFooter().header;

        // console.log('rendering started at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.')
        // await page.pdf({
        //     path: 'test' + new Date() + '.pdf',
        //     fullPage: true,
        //     width: 2048,
        //     height: defaultLayoutHeight,
        //     footerTemplate: htmlFooter,
        //     headerTemplate: htmlHeader,
        //     displayHeaderFooter: true,
        //     margin: {
        //         top: "75px",
        //         bottom: "75px"
        //     }

        // });
        if (format == "png") {
            await page.screenshot({
                type: 'png',
                path: 'test' + new Date() + '.png',
                fullPage: true
            })
            //console.log('rendering completed at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.');
            console.log('finished............11111111111111111111111')
        }
        else if (format == "pdf") {
            setTimeout(async () => {
                await page.pdf({
                    path: 'test' + new Date() + '.pdf',
                    width: 842,
                    height: 595,
                    footerTemplate: htmlFooter,
                    headerTemplate: htmlHeader,
                    displayHeaderFooter: true,
                    margin: {
                        top: "75px",
                        bottom: "75px"
                    }
                });
                //  console.log('rendering completed at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.');
                console.log('finished............')
            }, 5000);
        }
    })

}
pupBrowser();
export {
    pupBrowser
}