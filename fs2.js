fs=require("fs")
fs.writeFile("Hello.txt","Hello world",function(err){
if(err){
    console.log(err)
}
else{
    console.log("Write operation")
}
})
fs.readFile("Hello.txt",function(err,data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
}
)
console.log("complete")