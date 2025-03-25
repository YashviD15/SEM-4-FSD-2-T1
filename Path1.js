var pm=require("path")
fs=require('fs')
path1=pm.dirname("D:/157-FSD-2/data.txt")
console.log(path1)
path2=pm.extname("D:/157-FSD-2/data.txt")
console.log(path2)
path3=pm.basename("D:/157-FSD-2/data.txt")
console.log(path3)
path4=pm.parse("D:/157-FSD-2/data.txt")
console.log(path4)
if(path4.ext==".txt"){
    fs.writeFileSync("path1.txt","This File is text file")
}
else{
    console.log("Bye")
}