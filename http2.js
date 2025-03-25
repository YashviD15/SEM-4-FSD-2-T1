var http = require('http');
var server = http.createServer(       
function (req, res) {
    res.writeHead(200,{'content-type':'text/html'});      
    res.write(req.url);     
    res.write('Hello Yashvi!'); 
    res.end();                                        
})
server.listen(8080); 