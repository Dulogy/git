let promise1 = new Promise(function(Resolve,Reject){
    let isexam = false;
    if(isexam)
    {
        Resolve("exam going on");
    } 
    else{
        Reject("no exaam");
    }
})
promise1.then(function(fromResolve){
    console.log("exam"+fromResolve)})
    .catch(function(fromReject){
        console.log(fromReject);
    } )