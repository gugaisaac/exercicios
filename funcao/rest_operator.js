let num = 1;
let num2 = 7;
let num3 = 6;
let num4 = 5;

function imprimirNumero(...args){

    for(let i = 0; i< args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumero(num, num2, num3);
console.log("pause");
imprimirNumero(num3, num4);
console.log("pause");
imprimirNumero(2,3,4,5)