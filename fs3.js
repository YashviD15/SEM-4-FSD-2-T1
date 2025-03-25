fs=require('fs')
fs.writeFile("a.txt","Hello",(e)=>{
    if(e){
        console.log("Erroe")
    }
    else{
        fs.appendFile("a.txt","World",(e)=>{
            if(e){
                console.log("Error")
            }
            else{
                fs.readFile("a.txt","utf-8",(e,data)=>{
                    if(e){
                        console.log("Error")
                    }
                    else{
                        console.log(data)
                        console.groupCollapsed("Read dtaa")}
            
                })
            }
        })
    }
})