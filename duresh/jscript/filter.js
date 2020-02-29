/*function arr()
{
    let a=[1,2,3,4,5,6];
    for(let i in a){
        if(a[i]%2==0){
            console.log(a[i]);
        }
    }
}
function filter(callback){
callback();
}
filter(arr);*/
/*y=[1,2,3,4,5,6];
x=y.filter(s=>s%2==0);
console.log(x);*/







/*arr=[1,2,3,4,5,6];
function myfilter(arr,callback) {
    for(i=0;i<arr.length;i++)
     callback(arr[i]);
}
myfilter(arr, () => console.log(arr.filter(ele => {
    ele % 2 == 0;
})));*/
function myfilter(arr,callback)
{

(callback(arr));

}
myfilter([1,2,3,4,5,6], (arr)=>{
    console.log(arr.filter((x)=>{return x%2==0}))
});



