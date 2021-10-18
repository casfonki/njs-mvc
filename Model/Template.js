
const { Schema } = require("mongoose");

const templateSchema = new Schema({
  "gjs-assets":"",
  "gjs-components":"",
  "gjs-css":"",
  "gjs-html":"",
  "gjs-styles":""
});
const Template = mongoose.model('Template', templateSchema);
module.exports = {Template}