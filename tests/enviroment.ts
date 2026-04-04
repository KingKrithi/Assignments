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

enum Environment{
    l="local",
   d= "devlopement",
   s= "staging",
   p= "production"
}
 function runtest(Env:Environment):void
{
    console.log("Env is" ,`${Env}`);

}
runtest(Environment.l) 