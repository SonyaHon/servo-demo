const Gpio = require("pigpio").Gpio;
const readline = require("readline");

console.log("init servos");
const headMotor = new Gpio(14, { mode: Gpio.OUTPUT });
const bodyMotor = new Gpio(15, { mode: Gpio.OUTPUT });

console.log("Just set servos to zero");
headMotor.servoWrite(2300);
bodyMotor.servoWrite(800);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cmds = {
  mov: "servoWrite",
};

const targets = {
  head: headMotor,
  body: bodyMotor,
};



rl.on("line", (input) => {
    input.split(',').forEach(exec => {
        const [cmd, target, value] = exec.trim().split(' ');
        try {
        targets[target][cmd](Number(value));
        } catch(e) {
            console.error("Sorry, ",e);
        }
    })

});

setInterval(() => {}, 1000);
