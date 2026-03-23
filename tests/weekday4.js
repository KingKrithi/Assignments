
//to find duplicates
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
 

//call back function

// 1. Global variable
let browser = "Chrome";

// 2. Function with callback
function checkBrowserVersion(callback) {
    setTimeout(function () {
        // after 2 seconds call callback and pass browser
        callback(browser);
    }, 2000);
}

// 3. Callback function
function printBrowserVersion(version) {
    console.log("Browser version is: " + version);
}

// 4. Call function and pass callback
checkBrowserVersion(printBrowserVersion);


