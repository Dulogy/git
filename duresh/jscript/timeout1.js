
for(i=0;i<10;i++)
{
function sayHi() {
    console.log(i);
  }
  
  setTimeout(sayHi, 1000+100*i);
}