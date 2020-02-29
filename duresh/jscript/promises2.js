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

    const show = function(phone){
        const message = 'hello ' + phone.name;
        return Promise.resolve(message);

    }

    const ask = function(){
        gift
        .then(show)
        .then(x=>console.log(x))
        .catch(x=>console.log(x))
    }

    ask();