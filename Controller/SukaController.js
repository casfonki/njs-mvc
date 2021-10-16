

const {Controller}  = require("../Core/Controller");

class SukaController extends Controller {
    actionDuka()
    {
        return this.render("index.html")
    }
}

module.exports = {"default":SukaController};