
//% weight=100 color=#0fbc11 icon="\uf0b2"
namespace BosonKit {

    //% block="read pin %pin light" 
    //% weight=96
    export function bos0004(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }


    //% block="read pin %pin temperature" 
    //% weight=89
    export function bos0011(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return (value*(3.3/10.24))*3.3/10.24;
    }

    //% block="read pin %pin soil moisture" 
    //% weight=62
    export function bos0038(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value;
    }

    //% block="read pin %pin waterproof temperature" 
    //% weight=58
    export function bos0042(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        let n_Vref: number = 3.3;
        let n_Voltage_Value: number = ((value / 1024.0) * n_Vref);
        let n_Rt: number = ((n_Voltage_Value * 10.0) / (n_Vref - n_Voltage_Value));
        if (((0.593>n_Rt) || (n_Rt>331.498))) {
            return -1;
        }
        else {
            return ((1177692.5 / (3950 + (298.15 * (Math.log((n_Rt / 10.0)))))) - 270.35);
        }

    }

    //% block="read pin %pin air humidity" 
    //% weight=44
    export function bos0056(pin: AnalogPin): number {

        let value: number = pins.analogReadPin(pin);
        return value/10;
    }
}
