console.log('hello')
function test(num1,num2,operacion){
    if(operacion==='suma'){
        sumar= num1 + num2;
        operacion=''
        console.log(sumar);
    }
    else if(operacion==='resta'){
        restar= num1 - num2;
        console.log(restar);
    }
else {
    console.log('operacion desconocido')
}
}
test(7,4,'resta')