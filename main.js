var a = [
    'Hidrógeno',
    'Helio',
    'Litio',
    'Berilio'
  ];
  

/*function tercero(a) {
    for(var i=0; i<3 ; i++){
        console.log(a[i]);
    }
    }

console.log(tercero(a));
*/

function fac(n) {
    if (n==1){
        return n;
    }
    else {
        var r=n*fac(n-1);
    }
    return r;
}

console.log (fac(5));

