const Gpio = require("pigpio").Gpio;
const readline = require('readline');

console.log("init servos")
const headMotor = new Gpio(14, { mode: Gpio.OUTPUT });
const bodyMotor = new Gpio(15, { mode: Gpio.OUTPUT });

console.log("Just set servos to zero");
headMotor.servoWrite(2300);
bodyMotor.servoWrite(800);



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cmdmap = {
    'mvhead': (value) => {
        headMotor.servoWrite(Number(value));
    },
    'mvbody': (value) => {
        bodyMotor.servoWrite(Number(value));
    }
}

rl.on('line', (input) => {
    const [cmd, val] = input.split(' ');
    cmdmap[cmd](val);
});

setInterval(() => {}, 1000);