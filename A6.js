fs=require('fs')
var data={"Name":[{"fname":"abc"},{"lname":"pqr"}]}
fs.writeFileSync("object.txt",JSON.stringify(data))
data1=fs.readFileSync("object.txt","utf-8")
console.log(JSON.parse(data1))
console.log(data.Name[0].fname)
console.log(data.Name[1].lname)

