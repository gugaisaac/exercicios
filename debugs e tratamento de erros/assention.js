let array1 = [1,2,3,4,5];
let array2 = [];

function interarArray(arr){
    if(arr.length == 0){
        throw new Error("O array precisa ter pelo menos um elemento");
    }
    else{
        for(let i=0;i<arr.length;i++){
            console.log(i)    
        }
    }
}
interarArray(array1);
interarArray(array2);