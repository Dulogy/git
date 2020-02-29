function ans(a,b,c)
{
   let large=c;
   while(a<=large)
   {
       console.log(a);
       sum=a+b;
       a=b;
       b=sum;
   }
}
function result(a,b,max,callback)
{
 callback(a,b,max);
}
result(0,1,100,ans);
