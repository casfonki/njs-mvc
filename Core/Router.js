


const route = (req,res) => 
{
    var url = req.originalUrl;
    var controller = url.split("/")[1];
    var action = url.split("/")[2].split("?")[0];
    console.log(url.split("/"));
    if(action == "" || action == undefined || action == null)
    {
        action = "index";
    }
    const contr = require("../Controller/"+capitalizeFirstLetter(controller)+"Controller")["default"]
    controller = new contr(req,res);
 
    controller["action"+capitalizeFirstLetter(action)]();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = {route};