let a =[];
let b=[{
  name:"d",
  id:"100"
},{  name:"d",
id:"100"}];

for(i in b){
a.push(b[i].name);
}
console.log(a);





/*
for( let i=0;i<3;i++)
{ 
    setTimeout(()=>console.log(i),2000)
}*/
/*function sho(){
    console.log("name,age");
    }
    setTimeout(sho,5000);*/
/*let start = Date.now();
console.log(start);
console.log(Date.now)
/*
let times = [];
setTimeout(function run() {
  times.push(Date.now() - start); // remember delay from the previous call
  if (start + 100 < Date.now()) console.log(times); // show the delays after 100ms
  else setTimeout(run); // else re-schedule
});*/
/*let i = 0;

setTimeout(() => console.log(i), 100); // 100000000
for(let j = 0; j < 100000000; j++) {
    i++;
  }
*/