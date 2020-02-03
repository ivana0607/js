var r=6;

if (r>0) {
    console.log('ispravan unos');
    var p=r*r*Math.PI;
    var o=2*r*Math.PI;
    console.log(p,o);

    var p1=4*r*r*Math.PI;
    var v=(4/3)*r*r*r*Math.PI;//r**3
    console.log(p1,v);
}else {
    console.log('neispravan unos');
}

let a=-3;
if (a>0){
    let ok=4*a;
    let pk=2**a;
    let pkocke=6*a**2;
    let vkocke=a**3;
    console.log(ok,pk,pkocke,vkocke);
}else {
    console.log('neispravan iznos');
}

let a=5,b=7,c=10;

if ((a+b>c)&&(a+c>b)&&(b+c>a)){
    console.log('trougao postoji');
    if((c*c)==(a*a+b*b));
    console.log('trougao je pravougli')
}else {
    console.log('trougao ne postoji');
}






