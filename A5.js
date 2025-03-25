const currentDate = new Date().toISOString().split('T')[0];
console.log(JSON.stringify({ current_date: currentDate }));

const text=JSON.parse('{"name":"exy,"age":20,"dob":"1997-03-14"}')
console.log(obj.dob)
a=new Date(obj.dob)
console.log(a)