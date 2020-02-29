function call(arr,callback)
{
    console.log("callback calling")
    callback(arr);
    console.log("ended callback calling")
}
call([1,2,3,4,5,6],function show(arr){
    console.log(arr.filter((x=>{return x%2==0})))}
)