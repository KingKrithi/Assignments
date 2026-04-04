"use strict";
/*enum Environment{
    local,
    devlopement,
    staging,
    production
}
 function runtest(Env:Environment):void
{
    console.log("Env is" ,`${Env}`);

}
runtest(Environment.local) */
var Environment;
(function (Environment) {
    Environment["l"] = "local";
    Environment["d"] = "devlopement";
    Environment["s"] = "staging";
    Environment["p"] = "production";
})(Environment || (Environment = {}));
function runtest(Env) {
    console.log("Env is", `${Env}`);
}
runtest(Environment.l);
