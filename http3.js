//create http webpage on which homepage display this is homepage display in bold student page shows a msg of detailas of student name number and emial.id and any other pages are pags shows pade not found msg(randal response routing)
http=require('http')
var server = http.createServer((req, res)=>{   
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<br>This is Home Page</br>")
        res.end()
    } 
    else if(req.url=="/student"){
        res.write("<br>This is Home Page</br>")
        res.write("Student details")
        res.end()
    } 
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("Page Not Found")
        res.end()
    }                            
})
server.listen(8080);   
