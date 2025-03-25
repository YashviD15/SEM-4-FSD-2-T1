os=require('os')
fs=require('fs')
console.log(os.arch())
console.log(os.tmpdir())
console.log(os.hostname())
console.log(os.platform())
a=os.freemem()
console.log(a/1024/1024/1024)
if(a>=1){
    fs.writeFileSync("meme.txt","Your Memory is Above 1 Gb")
}
else{
    console.log("Below 1gb")
}