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


console.log(fibo(5))

