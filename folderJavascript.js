const fs=require("fs");
const { extname } = require("path");
const path=require("path")

function say(){
    var ans=new Array();
    ans=fs.readdirSync(path.resolve("D:/"))
    for(let i of ans){
        console.log(i+"---"+extname(i));
    }
    // console.log(ans)
}

say()
