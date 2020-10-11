const Gpio = require("pigpio").Gpio;

console.log("init servos")
const headMotor = new Gpio(14, { mode: Gpio.OUTPUT });
const bodyMotor = new Gpio(15, { mode: Gpio.OUTPUT });

console.log("Just set servos to zero");
setInterval(() => {
  headMotor.servoWrite(2300);
  bodyMotor.servoWrite(800);
}, 1000);
