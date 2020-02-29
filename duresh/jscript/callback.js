/*function show(a)
{
    console.log("hello world"+ a);
}
function result(a,callback)
{
   callback(a); 
}
result(100,show);

*/
/*function rest(callback)
{
    var a=100;
    callback(a);
}
rest(function sh(a){
    console.log("hello "+a);
})*/


/*function reso(callback)
{
    callback();
}
reso(()=>console.log("hello"));*/



function show()
{
    console.log("hello");
}
setTimeout(show,2000);
console.log("end");

