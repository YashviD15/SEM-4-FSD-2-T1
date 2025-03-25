//Write a Nodejs script to take "0 1 -9 20 33 -44 50" elements separated by white space in .txt file. Print sorted array of these 5 elements on Node Js server
fs=require("fs")
fs.writeFileSync("data.txt","0 1 -9 20 33 -44 50")
data=fs.readFileSync("data.txt",'utf-8')
ans=data.split(" ")
ans.sort()
for(i=0;i<ans.length;i++){
   ans[i]=parseInt(ans[i])
}
ans1=ans.sort()
console.log(ans)