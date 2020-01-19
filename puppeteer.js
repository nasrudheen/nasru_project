import puppeteer from 'puppeteer';
import dotenv from 'dotenv';
import * as reportsCSS from "./reportsCSS";
import fs from 'fs';
import { adjustChartHeight, verifyChartTitle, verifyDataTable } from './puppeteerEvaluate';

var pupBrowser = async () => {
    const browser = await puppeteer.launch({
        // executablePath: './headless_shell/headless_shell',
        executablePath: '/usr/bin/google-chrome',
        headless: true,
    });
    dotenv.config({ path: `${__dirname}/.env` });
    //const url = process.env.URL;
    const url = `http://localhost:5601/app/kibana#/dashboard/835bb4f0-35f0-11ea-87ce-4357b62eaa48?_g=()&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:15,i:'7484fd5f-6040-463a-9d50-add58105fb0a',w:24,x:0,y:0),id:'4b3ec120-b892-11e8-a6d9-e546fe2bba5f',panelIndex:'7484fd5f-6040-463a-9d50-add58105fb0a',type:visualization,version:'7.5.1'),(embeddableConfig:(),gridData:(h:15,i:'8bd5b9f0-05dd-4dd8-923d-d7be666b77d4',w:24,x:24,y:0),id:'9ca7aa90-b892-11e8-a6d9-e546fe2bba5f',panelIndex:'8bd5b9f0-05dd-4dd8-923d-d7be666b77d4',type:visualization,version:'7.5.1'),(embeddableConfig:(),gridData:(h:15,i:e76a22a6-541d-46c7-9924-acae6fb968c9,w:24,x:0,y:15),id:'01c413e0-5395-11e8-99bf-1ba7b1bdaa61',panelIndex:e76a22a6-541d-46c7-9924-acae6fb968c9,type:visualization,version:'7.5.1'),(embeddableConfig:(),gridData:(h:15,i:'04e619c5-8b4e-4ffe-a0b3-393fc054df46',w:24,x:24,y:15),id:'2edf78b0-5395-11e8-99bf-1ba7b1bdaa61',panelIndex:'04e619c5-8b4e-4ffe-a0b3-393fc054df46',type:visualization,version:'7.5.1'),(embeddableConfig:(),gridData:(h:15,i:'939ec4e4-c192-42bf-951e-16b081a56788',w:24,x:0,y:30),id:eb63a8c0-35f8-11ea-87ce-4357b62eaa48,panelIndex:'939ec4e4-c192-42bf-951e-16b081a56788',type:visualization,version:'7.5.1')),query:(language:kuery,query:''),timeRestore:!f,title:'Supported%20dashboard',viewMode:view)`;

    console.log('url started loading................');

    let format = "pdf";
    let layout = "SmartLayout";
    let template = "NoTemplate";

    var page = await browser.newPage();
    await page.setViewport({
        width: 595,
        height: 842,
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
            width: 595,
            size: "A4_Pot"
        }

        /////////////////// Common Css to remove Kibana Body /////////////////

        let removeCSS = reportsCSS.dashboardStyle();
        await page.addStyleTag({
            content: `${removeCSS}`
        })

        ///////////////////////// Css Applied ////////////////////////////

        await verifyChartTitle(page)

        if (format == "pdf" && template == "NoTemplate" && layout == "SmartLayout") {
            await adjustChartHeight(page, data);
            // await verifyDataTable(page)

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
                    width: 595,
                    height: 842,
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

}
pupBrowser();
export {
    pupBrowser
}