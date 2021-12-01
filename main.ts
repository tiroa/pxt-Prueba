/**
 * 
 */
//% color=50 weight=120 icon="\f55a" block="Prueba de Botones"
//% groups=['Boton', 'LED Central', 'others']
namespace Prueba {
    //% block 
    //% group = "Boton"
    export function Pruebadebotones() : void{
        if(input.buttonIsPressed(Button.A)){
            basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            # . . . #
            # . . . #
            `);
        }
        else if(input.buttonIsPressed(Button.B)){
            basic.showLeds(`
            # # # # .
            # . . . #
            # . # # .
            # . . . #
            # # # # .
            `);
        }
        return;
    }

    //% block = "sumar -> |number % num1 |number % num2"
    export function sumando(num1 : number, num2 : number) : number{
        let resultado = num1 + num2;
        return resultado;
    }

    //% block
    //% //% group = "LED central"
    export function Encender() : void{
        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
        return ;
    }
}
