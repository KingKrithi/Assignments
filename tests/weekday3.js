//even or odd verification

/*function odd()
{
    for(let i=0;i<=25;i++)
    {
        if(i%2==1)
        {
            console.log(i)
        }
    }
}
odd()*/


/*Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages./*

/* function launchBrowser(browsername)
{
if(browsername==='Chrome')
{
    console.log("Browser is chrome")

}
else
{
  console.log("Browser is not chrome")   
}

}
launchBrowser("Chrome");

//switch block

function runTests(testType)
{
    switch(testType)
    {
        case "Smoke":
        console.log("Smoke test");
        break;
        case "Sanity":
        console.log("sanity test");
        break;
        case "regression":
        console.log("regression test");
        break;
         default :
           console.log("Smoke test");
           break;

    }

}
runTests("regression") */

//strings
//finding lenght of string
function stringss()
{
s = "Hello World" 
result=(s.split(" "))
output=result[1].length;
console.log(output)
}
stringss()

// s = "   fly me   to   the moon  " 

 function moon()
 {

 s = "   fly me   to   the moon  " 
newstring[1]= (s.split("the "));
console.log(newstring[1])


 }