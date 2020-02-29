const result = true;
const gift = new Promise((reject , resolve)=>{
    if(result )
    {
        const phone = {
            name:"samsung phone",
            model:"j7pro"
        }
        resolve(phone);
    }
    else{
        const iget = new Error ('mission failed')
        reject(iget);
    }
})

const showoff = function(phone){
    const mess = 'hello friends ' + phone.name;
    return Promise.resolve(mess);

};


const another = function(){
    console.log("hellllllllllo");
    gift
    .then(showoff)
    .then(x=>console.log(x))
    .catch(x=>console.log(x));
};

another();
/*
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

const showOff = function (phone) {
    const message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
};

// call our promise
const askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)) // fat arrow
        .catch(error => console.log(error.message)); // fat arrow
};

askMom();*/