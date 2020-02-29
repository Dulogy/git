const ishappy = true;
const gift  = new Promise((resolve,reject)=>{
    if(ishappy){
        const phone = {
            name : 'samsung',
            model : 'j7pro'
        }
        resolve(phone);
    }
    else{
        const  mes = new Error ('mission failed');
        reject(mes);
    }

    })

    async function show(phone){
        const message = 'hello ' + phone.name;
        return Promise.resolve(message);

    }

     async function ask(){
         try{
             console.log("hellllllllloooooo");
             let phone = await gift;
             let message = await show(phone)
             console.log(message);
             console.log("after calling gift:")
         }
         catch(error){
             console.log(error.message);
         }

    }
(async()=>{await ask();
})()
