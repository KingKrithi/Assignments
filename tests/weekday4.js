let numarray=[56,78,90,23,90,76,43,56]
let length=numarray.length;
console.log("duplicates elements")
for( let i=0;i<length;i++)
{
    for(let j=i+1;j<length;j++)
    {
        if(numarray[i]===numarray[j])
       {
      console.log(numarray[j])
     
       }  
       
    }
     
}
 


