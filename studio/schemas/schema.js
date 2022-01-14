// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
// Premade Components
import contactForm from "./components/premade/contactForm";
import hero from "./components/premade/hero";
import section from "./components/premade/section";
// Pics
import pic from "./components/pics/pic";
import picArticle from "./components/pics/picArticle";
import picCaption from "./components/pics/picCaption";
// Text
import article from "./components/text/article";
import subArticle from "./components/text/subArticle";
// Ultility
import buttonOutbound from "./components/ultility/buttonOutbound";
import buttonPageLink from "./components/ultility/buttonPageLink";
import seo from "./components/ultility/seo";
import socialHandle from "./components/ultility/socialHandle";
// Pages
import headerFooter from "./pages/siteSettings/headerfooter";
import siteInfo from "./pages/siteSettings/siteInfo";
import widgets from "./pages/siteSettings/widgets";
import contact from "./pages/contact";
import index from "./pages/index";
import themes from "./pages/siteSettings/themes";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    pic,
    picArticle,
    picCaption,
    article,
    subArticle,
    buttonOutbound,
    buttonPageLink,
    seo,
    socialHandle,
    headerFooter,
    siteInfo,
    widgets,
    contact,
    index,
    contactForm,
    section,
    hero,
    themes,
  ]),
});
