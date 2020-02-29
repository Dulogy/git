function ans(a,b){
    for(i=a;i<=b;i++)
    {  prime=true;
        for(j=2;j<i;j++)
        {
            if(i%j==0){
                prime=false
            break;}
        }
        if(prime==true && i>1)
        console.log(i);
    }
}
function result(a,b,callback)
{
 callback(a,b);
}
result(2,10, ans);
