const { response } = require("express");
const {Controller}  = require("../Core/RestController");
const {Template}  = require("../Model/Template");

class TemplateController extends Controller
{
    actionIndex()
    {
        this.sendResponse("{}")
    }

    actionStore()
    {
        var template = new Template(this.request.body)
        this.sendResponse("ok")
       
    }
}


module.exports = {"default":TemplateController};