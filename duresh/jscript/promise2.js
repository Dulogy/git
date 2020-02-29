let as=new Promise((Resolve,Reject)=>{Resolve(1);})
as
.then((x)=> {return(x+1)})
.then((x)=>{throw new Error("error occured")})

//.catch((x)=>{return 100})
.then((x)=>{return ++x})
.then((x)=>{console.log(x)})
.catch((x)=>{throw new Error("ERORstdfghjraestrdyfguhj")})
//.catch((x)=>{})

