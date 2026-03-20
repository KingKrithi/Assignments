//function to find odd or even assigment

function isOddOrEven(value)
{
 
 if (value%2===0)
 {
    console.log("even number")
 }
 else
 {
     console.log("odd number")
 }

}
isOddOrEven(2);




//number type assigment 

function num(num1)
{

if(num1>0)
{
    console.log("number is positive")

}
else if(num1<0)
{
    console.log("number is negative")
}

else 
{
    console.log("number is 0")
}
}
num(1000000); 




///global scope assigment
var genderType="male"
function printgender()
{

    let color='brown' ;
    if(genderType==='female')
    {
        var age=30;
        let color='Pink' ;
       // console.log(color)
    }
    console.log(color)
//console.log(age)
}
printgender()