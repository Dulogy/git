let cleanroom = function(){
    return new Promise(function(Resolve,Reject){
        Resolve("room is clean");
    })
};
let throwgarbage = function(message){
    return new Promise(function(Resolve,Reject){
        Resolve("garbage has thrown  "+message);
    })
};
let workdone = function(message){
    return new Promise(function(Resolve , Reject){
        Resolve("work has completed  "+message);
    })
};
cleanroom().then(function(result){
return throwgarbage(result);
})
.then(function(result){
    return workdone(result);
})
.then(function(result){
    console.log("everything have done "+result)
})
