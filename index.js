const Gpio = require("pigpio").Gpio;
const readline = require("readline");
const CmdParser = require('./cmdparser');

console.log("init servos");
const headMotor = new Gpio(14, { mode: Gpio.OUTPUT });
const bodyMotor = new Gpio(15, { mode: Gpio.OUTPUT });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const cmdParser = new CmdParser({
    head: {
        is: headMotor,
        nullVal: 800,
        maxVal: 2300,
    },
    body: {
        is: bodyMotor,
        nullVal:800,
        maxVal: 2300
    }
});

cmdParser.init();
rl.on("line", (input) => {
    console.log(input);
    cmdParser.process(input);
});

setInterval(() => {}, 1000);
