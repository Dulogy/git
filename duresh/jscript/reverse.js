function reverse(n)
{
    let rev=0,rem;
    while(n>=0)
    {
        rem=n%10;
        rev=rev*10+rem;
        n=(n-rem)/10;
    }
    console.log(rev)
}
reverse(1234)