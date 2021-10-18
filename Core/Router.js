


const route = (req,res) => 
{
    
    var url = req.originalUrl;
    console.log(url);
    console.log(url.match("/(.)(\w+)$/gi"));
    if(url == "/")
    {
        
    var controller = require("../Controller/MainController")["default"]
    controller = new controller(req,res);
 
    controller["actionIndex"]();
    return;
    }
    var controller = url.split("/")[1];
    var action = url.split("/")[2];
    console.log(action);
    if(action == null)
    {
        action = "index";
    }
    else
    {
        if(action.split("?")[0] != undefined)
        {
            action = action.split("?")[0];
        }
    }
   
    
    
    const contr = require("../Controller/"+capitalizeFirstLetter(controller)+"Controller")["default"]
    controller = new contr(req,res);
 
    controller["action"+capitalizeFirstLetter(action)]();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = {route};