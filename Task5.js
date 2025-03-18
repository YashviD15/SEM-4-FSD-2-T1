  var array=[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
        function fun(array) {
            eo={}
            for (var i=0; i<array.length; i++) {
                var newArray=array[i]
                eo[newArray[0]]=newArray[1]

} 
return eo
}
var obj=fun(array)
console.log(obj)
