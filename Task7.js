const person =
[
{
name: "PQR", age: 38
},
{
name: "ABC", age: 35
},
{
name: "XYZ", age: 47
}
]

function fun(person) {
var max=person[0].age
    for (let i=0; i<person.length; i++) {
        if(max<person[i].age){
            max=person[i].age
        }
} 
console.log(max)
}
var obj=fun(person)
function fun1(person){
return Math.max(...person.map(obj=>obj.age))
}
console.log(fun(person))
