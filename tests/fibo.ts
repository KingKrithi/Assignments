
function fibo(n:number)
{
let a:number=0;
let b:number=1;
 let sum:number=0;
 if(n>0)
 {
console.log("fibo series : are")
console.log(a)
console.log(b)
sum=a+b;
for(let i:number=3;i<=n;i++)
    {

console.log(sum);
a=b;
b=sum;
sum=a+b;
    }
 }
else
{
   console.log ("negative");
}


}
fibo(8)