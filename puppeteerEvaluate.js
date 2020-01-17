import * as reportsCSS from "./reportsCSS.js";
import * as dashboardTags from "./dashboardTags.json";

const styles = styles => {
   return Object.entries(styles).join(';').replace(/,/g, ':');
}

const visualParentTag = async (page, data) => {

   let visualization_parent_tag = dashboardTags['Tool_list'][0].visualization_parent_tag;
   return new Promise(resolve => {
      visualization_parent_tag.forEach(async (tag, i) => {
         page.$(tag).then(element => {
            if (element) {
               const css = reportsCSS.chartHeightWidth(visualization_parent_tag[i]);
               css['height'] = data.height;
               await page.addStyleTag({
                  content: `${visualization_parent_tag[i]} { ${styles(css)}}`
               })
               resolve(visualization_parent_tag[i]);
            }
         })
      })
   })
}


export {
   visualParentTag
}