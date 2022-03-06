// const add=function(a,b)
// {
//     console.log(a+b);
    
// }
// add(23,45);

// function add2(a,b)
// {
//     return a+b;
// }
// ans=add2(234,56);
// console.log(ans);
//arrow functions
const checkPrime=(n)=>{
    isPrime=true;
    var msg="this should not be visible";
    console.log(msg);


    for(let i=2;i<n;i++)
    {
        if(n%i==0)
        {
            isPrime=false;
            break;
           

        }
    }
    if(isPrime)
    {
        console.log("prime");
    }
    else{
        console.log("not prime");

    }
    
};//passing of function
checkPrime(3);
console.log(msg);



