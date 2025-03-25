
function fun(){
    const settime=new Date().toLocaleTimeString()
    console.log(settime)
}
fun()
setInterval(fun,1000)