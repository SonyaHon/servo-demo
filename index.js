const Gpio  = require('pigpio').Gpio;

const headMotor = new Gpio(14, {mode: Gpio.OUTPUT});
const bodyMotor = new Gpio(15, {mode: Gpio.OUTPUT});


// both servos at zero
headMotor.servoWrite(500);
bodyMotor.servoWrite(500);

