function hello(){
    console.log("hello");
}
function bye(){
    console.log("bye");
}


function hell(){
    setTimeout(hello,1000);
    setTimeout(bye,1000);
}
function call(callback)
{
callback();
}
call(hell);