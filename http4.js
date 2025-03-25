//Create http webpage and display message “Welcome to Priyen sir's class” in h1 tag after 10 seconds. 
http=require('http')
server=http.createServer((req,res)=>{
    setTimeout(() => {
        res.writeHead(200,{'content-type':'text/html'})
        res.end("Welcomeee")
    }, 10000);})
    const port=3000
    server.listen(port,()=>{console.log('http://localhost:${port}')})


