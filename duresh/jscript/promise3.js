function show() {
  let a = [];
  let a1 = 0,
    b = 1,
    c = 100;
  while (a1 < c) {
    a.push(a1);
    sum = a1 + b;
    a1 = b;
    b = sum;
  }
  return new Promise((resolve, reject) => {
    if (a.length !== 0) {
      resolve(a);
    } else {
      reject("no element");
    }
  });
}
show()
  .then(mes => {
    console.log(mes);
  })
  .catch(message => {
    console.log("error");
  });
/*
let a = new Promise((resolve, reject) => {
  let a = [];
  let a1 = 0,
    b = 1,
    c = 100;
  while (a1 < c) {
    a.push(a1);
    sum = a1 + b;
    a1 = b;
    b = sum;
  }
  if (a.length !== 0) {
    resolve(a);
  } else {
    reject("no element");
  }
});
a.then(response => {
  console.log(response);
}).catch(e => {
  console.log(e);
});*/
