//write node js script to take 5 single digit element seperated by white space using sort method sorted output will fetch and display on console
fs=require("fs")
fs.writeFileSync("data.txt",'5 9 6 1 2')
data=fs.readFileSync("data.txt",'utf-8')
ans=data.split(" ")
ans.sort()
console.log(ans)
for(i=0;i<ans.length;i++){
   ans[i]=parseInt(ans[i])
}
ans1=ans.sort()
console.log(ans)