function call(callback,object)
{
    console.log("calling callback function ")
   callback(object); 
   console.log("ended callback function ")
}
function result(same){
    if(same)
    {
        console.log(same.name + same.age);
    }
}
call(result,{'name':"durgesh",'age':21});