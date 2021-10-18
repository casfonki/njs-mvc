const {Controller}  = require("../Core/Controller");


class MainController extends Controller
{
    actionIndex()
    {
        return this.render("index.html")
    }
}


module.exports = {"default":MainController};