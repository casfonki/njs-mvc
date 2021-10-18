
const fs = require('fs')


class Controller {
    
    constructor(req,res)
    {
        this.request = req;
        res.setHeader('content-type', 'text/json');
        this.response = res;
    }
    

    // render(file)
    // {
    //     this.response.sendFile(file,{root:rootPath+"/View/"+this.constructor.name.split(/(?=[A-Z])/)[0]})
    // }
    sendResponse(data)
    {
        this.response.writeHead(200, {'Content-Type': 'text/json'});
        this.response.write(data);
        this.response.end();
    }
    render(file){
        var data = fs.readFileSync(rootPath+"/View/"+this.constructor.name.split(/(?=[A-Z])/)[0]+"/"+file)+"";
        this.response.writeHead(200, {'Content-Type': 'text/json'});
        this.response.write(data);
        this.response.end();
    }

    
}

module.exports  = {Controller}
