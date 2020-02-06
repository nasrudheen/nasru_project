import * as reportsCSS from "./reportsCSS.js";
import * as dashboardTags from "./dashboardTags.json";

const styles = styles => {
   return Object.entries(styles).join(';').replace(/,/g, ':');
}

const adjustChartHeight = async (page, data) => {

   let visualization_parent_tag = dashboardTags['Tool_list'][0].visualization_parent_tag;
   return new Promise(resolve => {
      visualization_parent_tag.forEach(async (tag, i) => {
         await page.$(tag).then(async (element) => {
            if (element) {
               let css = reportsCSS.chartHeightWidth(visualization_parent_tag[i]);
               if (data.size == "A4_Pot") {

                  let height = (((data.height - 150) / 2) - 0.5) + 'px !important';
                  css['height'] = height;
               }
               else if (data.size == "A4_Land") {
                  let height = ((data.height - 150) - 2) + 'px !important';

                  css['height'] = height;
               }

               const appyStyle = await page.addStyleTag({
                  content: `${visualization_parent_tag[i]} { ${styles(css)}}`
               })
               resolve(appyStyle);
            }
         })
      })
   })
}

const verifyChartTitle = async (page) => {
   let chartTitleTags = dashboardTags['Tool_list'][0].chart_title;

   return new Promise(resolve => {

      chartTitleTags.forEach(async (tag, i) => {
         await page.$(tag).then(async (element) => {
            if (element) {
               resolve(chartTitleTags[i]);
            }

         })
      })
   })
}

const verifyDataTable = async (page) => {
   let dataTableTags = dashboardTags['Tool_list'][0].data_table_tag;
   return new Promise(resolve => {
      let flag = false;
      dataTableTags.forEach(async (tag, i) => {
         await page.$(tag).then(async (element) => {
            if (element) {
               flag = true;
               let css = reportsCSS.dataTableStyle(dataTableTags[i])
               console.log(dataTableTags[i])
               const appyStyle = await page.addStyleTag({
                  content: `${dataTableTags[i]} { ${styles(css)}}`
               })
               resolve(appyStyle);
            }
            else if (!flag && i >= dataTableTags.length - 1) {
               resolve();
            }
         })
      })
   })
}

const verifyCloudVisual = async (page) => {
   let cloudTags = dashboardTags['Tool_list'][0].cloud_visual_tag;
   return new Promise(resolve => {
      let flag = false;
      cloudTags.forEach(async (tag, i) => {
         await page.$(tag).then(async (element) => {
            if (element) {
               flag = true;
               let css = reportsCSS.cloudVisualStyle(cloudTags[i])
               console.log(cloudTags[i])
               const appyStyle = await page.addStyleTag({
                  content: `${cloudTags[i]} { ${styles(css)}}`
               })
               resolve(appyStyle);
            }
            else if (!flag && i >= cloudTags.length - 1) {
               resolve();
            }
         })
      })
   })

}

const defaultLayoutReport = async (page) => {
   let dashboardParentTag = dashboardTags['Tool_list'][0].dashboard_parent_tag;
   return new Promise(resolve => {
      dashboardParentTag.forEach(async (tag, i) => {
         await page.$(tag).then(async (element) => {
            if (element) {
               const defaultLayoutHeight = parseInt(await page.$eval(dashboardParentTag[i], el => el.style.height)) + 150;
               resolve(defaultLayoutHeight);
            }

         })
      })
   })
}


export {
   adjustChartHeight, verifyChartTitle, verifyDataTable, defaultLayoutReport, verifyCloudVisual
}