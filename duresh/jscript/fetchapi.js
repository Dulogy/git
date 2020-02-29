url = ('https://gist.github.com/justsml/529d0b1ddc5249095ff4b890aad5e801 ')
var a = fetch(url)
a
.then((response)=>{
    console.log("helllllllllllo");
    return response.json();
}).then((data)=>{
    console.log("hello");
    console.log(data);
})

