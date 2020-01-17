const puppeteer = require('puppeteer-core');

(async () => {
    const browser = await puppeteer.launch({
        // executablePath: './headless_shell/headless_shell',
        executablePath: '/usr/bin/google-chrome',
        headless: true
    });
    const url = `http://localhost:5601/app/kibana#/dashboard/fe7aa730-24d0-11ea-a911-c19a4114f4ad?_g=(refreshInterval:(pause:!f,value:900000),time:(from:now-7d,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:15,i:'465803f1-2e5c-45be-843b-fd9378129ec9',w:24,x:0,y:0),id:'9c6f83f0-bb4d-11e8-9c84-77068524bcab',panelIndex:'465803f1-2e5c-45be-843b-fd9378129ec9',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'2e681388-dc5d-4c44-8694-cf886b3bda2e',w:24,x:24,y:0),id:'4b3ec120-b892-11e8-a6d9-e546fe2bba5f',panelIndex:'2e681388-dc5d-4c44-8694-cf886b3bda2e',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'479e12f6-6ceb-4f88-9c28-76677b1be6eb',w:24,x:0,y:15),id:'9ca7aa90-b892-11e8-a6d9-e546fe2bba5f',panelIndex:'479e12f6-6ceb-4f88-9c28-76677b1be6eb',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'1da48d9e-5054-4f4c-99f8-61e210bb2cfc',w:24,x:24,y:15),id:'1c389590-b88d-11e8-a6d9-e546fe2bba5f',panelIndex:'1da48d9e-5054-4f4c-99f8-61e210bb2cfc',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:fcf1209e-a802-47fa-bc01-76f85b4c7dc3,w:24,x:0,y:30),id:'09ffee60-b88c-11e8-a6d9-e546fe2bba5f',panelIndex:fcf1209e-a802-47fa-bc01-76f85b4c7dc3,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:d0342650-9077-472f-a046-84de9a750617,w:24,x:24,y:30),id:'3ba638e0-b894-11e8-a6d9-e546fe2bba5f',panelIndex:d0342650-9077-472f-a046-84de9a750617,type:search,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:d508dd02-3b4a-40b5-8ac6-8b6f8a8a3497,w:24,x:0,y:45),id:'45e07720-b890-11e8-a6d9-e546fe2bba5f',panelIndex:d508dd02-3b4a-40b5-8ac6-8b6f8a8a3497,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'8e3a1170-81e7-47b2-8928-64323ebc38a0',w:24,x:24,y:45),id:ed8436b0-b88b-11e8-a6d9-e546fe2bba5f,panelIndex:'8e3a1170-81e7-47b2-8928-64323ebc38a0',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'4543dafe-de98-48ba-b3b5-fe15811fc6ee',w:24,x:0,y:60),id:b80e6540-b891-11e8-a6d9-e546fe2bba5f,panelIndex:'4543dafe-de98-48ba-b3b5-fe15811fc6ee',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:e55676bb-1d5d-46b3-90d6-771256346491,w:24,x:24,y:60),id:'37cc8650-b882-11e8-a6d9-e546fe2bba5f',panelIndex:e55676bb-1d5d-46b3-90d6-771256346491,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'1953eeff-8cf8-46e6-a2d9-25e9d3835bfa',w:24,x:0,y:75),id:b72dd430-bb4d-11e8-9c84-77068524bcab,panelIndex:'1953eeff-8cf8-46e6-a2d9-25e9d3835bfa',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:d83c7d00-5f50-4cb0-8165-2a5e18850041,w:24,x:24,y:75),id:'10f1a240-b891-11e8-a6d9-e546fe2bba5f',panelIndex:d83c7d00-5f50-4cb0-8165-2a5e18850041,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'376ee6f8-f8e0-4516-9389-97433de6efa7',w:24,x:0,y:90),id:'8f4d0c00-4c86-11e8-b3d7-01146121b73d',panelIndex:'376ee6f8-f8e0-4516-9389-97433de6efa7',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'87258290-baed-40c4-a835-0e02c5291268',w:24,x:24,y:90),id:ed78a660-53a0-11e8-acbd-0be0ad9d822b,panelIndex:'87258290-baed-40c4-a835-0e02c5291268',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:dfe96fb5-89c7-403e-8ab8-0090cc6ae7d7,w:24,x:0,y:105),id:'2edf78b0-5395-11e8-99bf-1ba7b1bdaa61',panelIndex:dfe96fb5-89c7-403e-8ab8-0090cc6ae7d7,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:dd5b9329-dd81-4e55-9c4c-211294d1e145,w:24,x:24,y:105),id:aeb212e0-4c84-11e8-b3d7-01146121b73d,panelIndex:dd5b9329-dd81-4e55-9c4c-211294d1e145,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'723238b6-89a8-4c4b-bb38-681a0a15578c',w:24,x:0,y:120),id:aeb212e0-4c84-11e8-b3d7-01146121b73d,panelIndex:'723238b6-89a8-4c4b-bb38-681a0a15578c',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'535e53fd-5d32-4c59-b1b1-b111e4e8313b',w:24,x:24,y:120),id:'9886b410-4c8b-11e8-b3d7-01146121b73d',panelIndex:'535e53fd-5d32-4c59-b1b1-b111e4e8313b',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'0fae222f-c63e-429f-8c66-6d014e63b02a',w:24,x:0,y:135),id:'9886b410-4c8b-11e8-b3d7-01146121b73d',panelIndex:'0fae222f-c63e-429f-8c66-6d014e63b02a',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:c1f9e572-96a5-4496-9b7c-dccf8fcf6fa8,w:24,x:24,y:135),id:f8290060-4c88-11e8-b3d7-01146121b73d,panelIndex:c1f9e572-96a5-4496-9b7c-dccf8fcf6fa8,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'4a05f6bd-5d10-4f0f-9fcf-49ad77b58533',w:24,x:0,y:150),id:bcb63b50-4c89-11e8-b3d7-01146121b73d,panelIndex:'4a05f6bd-5d10-4f0f-9fcf-49ad77b58533',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'4977aa12-a8c0-44ca-b059-267ed5bc4728',w:24,x:24,y:150),id:'293b5a30-4c8f-11e8-b3d7-01146121b73d',panelIndex:'4977aa12-a8c0-44ca-b059-267ed5bc4728',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:a8010902-0802-419a-a866-670db9b93bd3,w:24,x:0,y:165),id:'707665a0-4c8c-11e8-b3d7-01146121b73d',panelIndex:a8010902-0802-419a-a866-670db9b93bd3,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'588274f9-7d88-4353-85c9-3b07ca1920f8',w:24,x:24,y:165),id:c8fc3d30-4c87-11e8-b3d7-01146121b73d,panelIndex:'588274f9-7d88-4353-85c9-3b07ca1920f8',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:f1fd455a-2e81-4053-9880-66a6963e388b,w:24,x:0,y:180),id:'76e3c090-4c8c-11e8-b3d7-01146121b73d',panelIndex:f1fd455a-2e81-4053-9880-66a6963e388b,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:ff776eec-4c9f-4c37-baa9-cfd0ca59a043,w:24,x:24,y:180),id:'571aaf70-4c88-11e8-b3d7-01146121b73d',panelIndex:ff776eec-4c9f-4c37-baa9-cfd0ca59a043,type:search,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:b5b05c31-a4ad-4103-b7c8-358b38fff204,w:24,x:0,y:195),id:'129be430-4c93-11e8-b3d7-01146121b73d',panelIndex:b5b05c31-a4ad-4103-b7c8-358b38fff204,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'62cac34e-f7b2-48f6-9582-e554ef6e0fac',w:24,x:24,y:195),id:'334084f0-52fd-11e8-a160-89cc2ad9e8e2',panelIndex:'62cac34e-f7b2-48f6-9582-e554ef6e0fac',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'89c9b89c-344b-419e-954e-0209bb43d74f',w:24,x:0,y:210),id:e6944e50-52fe-11e8-a160-89cc2ad9e8e2,panelIndex:'89c9b89c-344b-419e-954e-0209bb43d74f',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'77c6c9c6-cf1d-4117-8297-09b2c1749f97',w:24,x:24,y:210),id:'08884800-52fe-11e8-a160-89cc2ad9e8e2',panelIndex:'77c6c9c6-cf1d-4117-8297-09b2c1749f97',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:b1f2cf00-13c4-4c34-9dd8-e20ab223dd67,w:24,x:0,y:225),id:f8283bf0-52fd-11e8-a160-89cc2ad9e8e2,panelIndex:b1f2cf00-13c4-4c34-9dd8-e20ab223dd67,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'35029f6b-fb6e-462b-b6db-cfd7412e35b9',w:24,x:24,y:225),id:'01c413e0-5395-11e8-99bf-1ba7b1bdaa61',panelIndex:'35029f6b-fb6e-462b-b6db-cfd7412e35b9',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:ed004a7c-793a-4b56-94a1-77624fd222f7,w:24,x:0,y:240),id:'42b997f0-0c26-11e8-b0ec-3bb475f6b6ff',panelIndex:ed004a7c-793a-4b56-94a1-77624fd222f7,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'2377b94b-ad8c-4326-b8d1-f859b1615a79',w:24,x:24,y:240),id:'69a34b00-9ee8-11e7-8711-e7a007dcef99',panelIndex:'2377b94b-ad8c-4326-b8d1-f859b1615a79',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:aea3a795-0c7e-422b-a7f1-19a67abd9467,w:24,x:0,y:255),id:'935afa20-e0cd-11e7-9d07-1398ccfcefa3',panelIndex:aea3a795-0c7e-422b-a7f1-19a67abd9467,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:cf61c371-3361-41cb-8b82-27ee4386a5bc,w:24,x:24,y:255),id:'4eb6e500-e1c7-11e7-b6d5-4dc382ef7f5b',panelIndex:cf61c371-3361-41cb-8b82-27ee4386a5bc,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:'546812e8-d4e8-47af-9dd7-d021d03f4a9a',w:24,x:0,y:270),id:'24a3e970-4257-11e8-b3aa-73fdaf54bfc9',panelIndex:'546812e8-d4e8-47af-9dd7-d021d03f4a9a',type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:a83dbb12-a5a9-4e00-b3a7-121ca4644ba6,w:24,x:24,y:270),id:'47f2c680-a6e3-11e8-94b4-c30c0228351b',panelIndex:a83dbb12-a5a9-4e00-b3a7-121ca4644ba6,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:e607df6b-c191-49ff-b3f8-332c9353630e,w:24,x:0,y:285),id:'314c6f60-2224-11e8-b802-5bcf64c2cfb4',panelIndex:e607df6b-c191-49ff-b3f8-332c9353630e,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:e5c88cdd-2634-493d-b622-6bdbac8b82e3,w:24,x:24,y:285),id:'7cbd2350-2223-11e8-b802-5bcf64c2cfb4',panelIndex:e5c88cdd-2634-493d-b622-6bdbac8b82e3,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:ecec4f2d-3d56-4abe-b858-70ba8a94b228,w:24,x:0,y:300),id:'06cf9c40-9ee8-11e7-8711-e7a007dcef99',panelIndex:ecec4f2d-3d56-4abe-b858-70ba8a94b228,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:fe902d5b-55a7-424c-b00f-e51d708bb3b4,w:24,x:24,y:300),id:e1d0f010-9ee7-11e7-8711-e7a007dcef99,panelIndex:fe902d5b-55a7-424c-b00f-e51d708bb3b4,type:visualization,version:'7.5.0'),(embeddableConfig:(),gridData:(h:15,i:df3841ec-764c-43a0-820c-3af1d29edbf6,w:24,x:0,y:315),id:'14e2e710-4258-11e8-b3aa-73fdaf54bfc9',panelIndex:df3841ec-764c-43a0-820c-3af1d29edbf6,type:visualization,version:'7.5.0')),query:(language:kuery,query:''),timeRestore:!t,title:'All%20Visual%20Dasboard',viewMode:view)`;

    const page = await browser.newPage();
    await page.setViewport({
        width: 595,
        height: 842,
        deviceScaleFactor: 1,
    });
    function millisToSeconds(millis) {
        var seconds = ((millis) / 1000).toFixed(0);
        return (seconds < 10 ? '0' : '') + seconds;
    }
    // await page.setViewport({ width: 842 + 480, height: 595 + 198 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 }).then(async val => {
        if (val._status == 200) {

            var startTime = new Date().getTime();
            console.log('url loaded................')

            console.log('evaluated started at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.');
            await page.waitForSelector('.embPanel__titleText')
            /////////////////// Applying Css to remove Kibana Body /////////////////

            await page.addStyleTag({
                content: `
                .euiHeader {
                    display: none;
                }
                .euiFlexGroup.euiFlexGroup--directionRow.kbnTopNavMenu {
                    display: none;
                }
                .globalQueryBar {
                    display: none;
                }
                nav.euiNavDrawer.euiNavDrawer-isCollapsed.euiNavDrawer-flyoutIsCollapsed {
                    display: none;
                }
                .chrHeaderWrapper ~ .app-wrapper:not(.hidden-chrome){
                    top: 0px !important;
                    left: 0px;
                }
                .react-grid-layout
                {
                    width: 100% !important;   
                }`
            })


            ////////////// After Css Applied ////////////////////////////////////


            //////////////////// heigt //////////////////////////////////
            var A4_Potrait_height = 346;
            var A4_Land_height = 642.5;
            await page.addStyleTag({
                content: `
                    .react-grid-layout > .react-grid-item{ 
                        position: sticky !important;
                        width: 100% !important;
                        height: ${A4_Potrait_height}px  !important;
                        overflow: hidden!important;
                        padding: 0px 10px;
                        top: 0px !important;
                       
                    }`
            })
            // const feedHandle = await page.$('.react-grid-layout');
            // const sss = await feedHandle.$$eval('.react-grid-item', nodes => nodes.map(n => n));
            console.log('evaluated completed at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.');
            await page.waitForSelector('.embPanel__titleText')
            var titleClassW = '111111111';
            var Title = '2222222222';
            var dataTimeClassW = new Date();
            await page.pdf({
                path: 'test' + new Date() + '.pdf',
                width: 595,
                height: 842,
                footerTemplate: `<style>
                                  @font-face {
                                           font-family:"DefaultFont";
                                      }
                                 body{
                                      font-family:"DefaultFont" !important;
                                      }
                                div{font-family:"DefaultFont" !important;}
                                h3,.h3{font-size:24px !important;font-family:"DefaultFont" !important;}
                               p{margin:0 0 !important;line-height: 0.7 !important;}
                                i{font-style:italic !important;}span,div{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
                      </style>
                      <div style="height:75px;width:100%;padding:0px 10px;">
                      <div style="position:relative;height:30px;width:100%;margin:0px !important;padding:0px">
                      <div class="" style="float:left; ${titleClassW} margin-top: 5px;font-size:8px;"> ${Title} </div>
                      <div style="float:right; ${dataTimeClassW} ;text-align:right !important;font-weight:lighter;font-size: 8px;position: relative; bottom:10px;">' + new Date() + '</div>
                     </div><div style="position:relative;width:100%;height: 45px;">
                     <hr style="height: 2px;-webkit-print-color-adjust: exact; background-color: black; border: 0px none;bottom:0px !important;font-size:8px">;                 
                     </div></div> `,
                headerTemplate: `<style>
                                  @font-face {
                                           font-family:"DefaultFont";
                                      }
                                 body{
                                      font-family:"DefaultFont" !important;
                                      }
                                div{font-family:"DefaultFont" !important;}
                                h3,.h3{font-size:24px !important;font-family:"DefaultFont" !important;}
                               p{margin:0 0 !important;line-height: 0.7 !important;}
                                i{font-style:italic !important;}span,div{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
                      </style>
                      <div style="height:75px;width:100%;padding:0px 10px;">
                      <div style="position:relative;height:30px;width:100%;margin:0px !important;padding:0px">
                      <div class="" style="float:left; ${titleClassW} margin-top: 5px;font-size:8px;"> ${Title} </div>
                      <div style="float:right; ${dataTimeClassW} ;text-align:right !important;font-weight:lighter;font-size: 8px;position: relative; bottom:10px;">' + new Date() + '</div>
                     </div><div style="position:relative;width:100%;height: 45px;">
                     <hr style="height: 2px;-webkit-print-color-adjust: exact; background-color: black; border: 0px none;bottom:0px !important;font-size:8px">;                        
                     </div></div> `,
                displayHeaderFooter: true,
                margin: {
                    top: "75px",
                    bottom: "75px"
                }
            });
            console.log('rendering completed at ', millisToSeconds(new Date().getTime() - startTime) + 'sec.');
            console.log('finished............')
        }
    })
})();