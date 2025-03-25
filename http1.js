var http = require('http');
var server = http.createServer(       
function (req, res) {
    res.write('<p>Hello World!</p><br>');          
    res.write('Hello Yashvi!<br>'); 
    res.end("Im fine");                                        
}).listen(3007);   

