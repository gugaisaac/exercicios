let obj ={
    rodas: 4,
    portas: 4,
    tetoSolar: true,
    motor: '2.0'
}

const { rodas: vRodas, portas:vPortas, tetoSolar:vTetoSolar, motor: vMotor} = obj
// para transformar propriedades do objeto em variaveis, vc iguala ao obj, dps passa as propriedades e que nomes de variaveis eles receberão

console.log(vRodas);
console.log(vTetoSolar);
