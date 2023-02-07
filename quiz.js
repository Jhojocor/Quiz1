for(i=0 ; i<20; i++){
    console.log(i)
    let div = i / 3;
    Number.isInteger(div);
    let div2 = i / 5;
    Number.isInteger(div2);

    //console.log(Number.isInteger(div));
    if(Number.isInteger(div) === true){
        console.log(i+" es divisible por 3");
    }else{
        console.log(i+" NO es divisible por 3");
    }
    if(Number.isInteger(div2) === true){
        console.log(i+" es divisible por 5");
    }else{
        console.log(i+" NO es divisible por 5");
    }
    if(Number.isInteger(div) === true, Number.isInteger(div2) === true){
        console.log(i+" es divisible por 3 y 5");
    }else{
        console.log(i+" NO es divisible por 3 y 5");
    }
}
