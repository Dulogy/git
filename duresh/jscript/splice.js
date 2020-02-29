let v=[1,"","a",null,undefined,NaN,1,2,0];
let vs=[];
for(let i in v){
if(v[i]===0||v[i]===""||v[i]===null||isNaN(v[i])===true){
}else 
{ 
  vs.push(v[i]);
}
}
console.log(vs);