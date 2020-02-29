function* count(){  
    console.log("hello") 
    yield show();
    yield show1();
    
    
}
function show(){
    for(let i=0;i<2;i++){
        console.log(i);
    }
    return ("first function executed:");
}
function show1(){
    for(let i=0;i<3;i++){
        console.log(i);
    }
    return ("second function executed:")
}
const gene = count();
console.log(gene.next().value);
console.log(gene.next().value);
console.log(gene.next().value);

