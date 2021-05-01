/* fibonachi f(n) = f(n-1) + f(n-2)*/

 

function fibo(n) {
    if (n==1){
        return n;        
    }
    else if (n==0){
        return n;
    }
    else{
        var t= fibo(n-1) + fibo(n-2);
    }
    return t;

}

/* Pedir un numero*/
const terminal = require('readline');             

const Console = terminal.createInterface({
    input: process.stdin,
    output: process.stdout
});

Console.question("Elija un numero:", (number_fibo) => {
    
    console.log("F( "+ (number_fibo)+" ) = " + fibo(number_fibo))
    Console.close();
    });