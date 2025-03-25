http=require('http')
var server = http.createServer((req, res)=>{   
    if(req.url=="/"){
        const a={"Name":"Yashvi","Roll no":20}
        res.writeHead(200,{'content-type':'application/json'})
      // res.write("Thanks")
        res.write(JSON.stringify(a))
        res.end()
    }})
server.listen(8080)