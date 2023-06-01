let add7=(a)=> a+7;
let multiply = (a,b)=>a+b;
let capitalize =(a)=>a[0].toUpperCase()+a.substring(1);
function lastletter(a){
    return a[a.length-1];
}
console.log(add7(6),multiply(2,3),capitalize('abcd'),lastletter('abcd'));
let answer = parseInt(prompt('enter the number upto'));
for (let i=1;i<=answer;i++){
    if (i%3===0 && i%5===0){console.log('FizzBuzz');}
    else if(i%3===0){console.log('Fizz');}
    else if(i%5===0){console.log('Buzz');}
    else{console.log(i);}
}
