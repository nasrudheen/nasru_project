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
               if (data.size = "A4_Pot") {
                  let height = (((data.height - 150) / 2) - 0.5) + 'px !important';
                  css['height'] = height;
               }

               await page.addStyleTag({
                  content: `${visualization_parent_tag[i]} { ${styles(css)}}`
               })
               resolve(visualization_parent_tag[i]);
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
      dataTableTags.forEach(async (tag, i) => {
         await page.$(tag).then(async (element) => {
            if (element) {
               let css = reportsCSS.verifyDataTable(dataTableTags[i])
               await page.addStyleTag({
                  content: `${dataTableTags[i]} { ${styles(css)}}`
               })
               resolve(dataTableTags[i])
            }
         })

      })
   })
}


export {
   adjustChartHeight, verifyChartTitle, verifyDataTable
}