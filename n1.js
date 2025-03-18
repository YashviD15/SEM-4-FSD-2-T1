const msg=function(){
    console.log("This message will print after # seconds")
}
setTimeout(msg,3000)

setTimeout(function(){
console.log("Hello")
},2000)

setTimeout(()=>{
    console.log("Yashvi".toUpperCase())
},5000)

setInterval(()=>{
    console.log("Yashvi".toUpperCase())
},5000)