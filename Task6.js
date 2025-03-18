
function fun(array){
    var obj={}
    obj[array[0]]=array[array.length-1]
    return obj
}
var a1=['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
console.log(fun(a1))