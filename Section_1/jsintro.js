console.log("Hello Javascript");
a=10;
console.log(a);

myname="shivangi";
console.log(myname);
isLoggedIn=true;
console.log(isLoggedIn);
console.log(typeof(isLoggedIn));

let age=20;
if(age>=18)
{
    console.log("eligible for dl");
    myvar="This should be visible outside the block"
    var x="This should also be visible";
    let y="This should not be visible";
    const pi=3.14;
    
    pi=4.24;
    

}
else{
    console.log("not eligible for dl");

}
console.log(myvar);
console.log(x);
// console.log(y);
console.log(pi);