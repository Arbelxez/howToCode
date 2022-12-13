
class Calculadora {
    constructor( ){

    }

suma (num1, num2){
    return parseInt(num1) + parseInt(num2)
}

resta(num1, num2){
    return parseInt(num1) - parseInt(num2)
}

multiplicacion (num1, num2){
    return parseInt(num1) * parseInt(num2)
}

division (num1, num2){
    return parseInt(num1) / parseInt(num2)
}
potencia(num1, exp){
    return parseInt(num1) ** parseInt(exp)
}
raizCuadrada(num1){
    return Math.sqrt(num1)
}
raizCubica (num1){
    return Math.cbrt(num1)
}
}

const calculadora = new Calculadora()

alert("Que operacion queres realizar?")
operacion = prompt("1: suma, 2: resta, 3: multiplicacion, 4: division, 5: potenciacion, 6: raiz cuadrada, 7: raiz cubica")

if (operacion == 1){
    let numero1 = prompt("Primer numero para sumar")
    let numero2= prompt("Segundo numero para sumar")
    resultado = calculadora.suma(numero1, numero2)
    alert(`Tu resultado es ${resultado}`)
}

else if (operacion == 2){
    let numero1 = prompt("Primer numero para restar")
    let numero2= prompt("Segundo numero para restar")
    resultado = calculadora.resta(numero1, numero2)
    alert(`Tu resultado es ${resultado}`)

}

else if (operacion == 3){
    let numero1 = prompt("Primer numero para multiplicar")
    let numero2= prompt("Segundo numero para multiplicar")
    resultado = calculadora.multiplicacion(numero1, numero2)
    alert(`Tu resultado es ${resultado}`)

}

else if (operacion == 4){
    let numero1 = prompt("Primer numero para dividir")
    let numero2= prompt("Segundo numero para dividir")
    resultado = calculadora.division(numero1, numero2)
    alert(`Tu resultado es ${resultado}`)

}

else if (operacion == 5){
    let numero1 = prompt("Numero a potenciar")
    let exp= prompt("Exponente")
    resultado = calculadora.potencia(numero1, exp)
    alert(`Tu resultado es ${resultado}`)

}
else if (operacion == 6){
    let numero1 = prompt("Numero para aplicarle la raiz")
    resultado = calculadora.raizCuadrada(numero1)
    alert(`Tu resultado es ${resultado}`)

}
else if (operacion == 7){
    let numero1 = prompt("Numero para aplicarle la raiz cubica")
    resultado = calculadora.raizCubica(numero1)
    alert(`Tu resultado es ${resultado}`)

}
else {
    alert("No se de que me hablas viejo")
}