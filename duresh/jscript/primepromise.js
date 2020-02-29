const b=17;
function show(){
    var prime=true;
        for(let j=2;j<=b/2;j++)
        {
            if(b%j==0){
                prime=false
            break;}
        }
    return new Promise(function(resolve,reject) {
if(prime==false && b>1){
    resolve("not prime" );}
    else
    reject("is prime");
}
)
show()
.then((result)=>{console.log(result)})
.catch((error)=>{console.log(error)})}