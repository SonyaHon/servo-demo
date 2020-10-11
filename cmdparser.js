class CmdParser {
    constructor(opts) {
        this.head = opts.head.is;
        this.body = opts.body.is;
        this.opts = opts;

        this.headCurrent = opts.head.nullVal;
        this.bodyCurrent = opts.body.nullVal;

        this.headRef = {
            min: opts.head.nullVal,
            max: opts.head.maxVal,
        };
        this.bodyRef = {
            min: opts.body.nullVal,
            max: opts.body.maxVal,
        }
    }

    init() {
        this.head.servoWrite(this.opts.head.nullVal);
        this.body.servoWrite(this.opts.body.nullVal);
    }

    // commands
    spos(target, value) {
        const val = Number(value);
        if(this[`${target}Ref`].min <= val && this[`${target}Ref`].max >= val) {
            this[target].servoWrite(val);
        }
    }

    mov(target, value) {
        const diff = Number(value)    ;
        const val = this[`${target}Current`] + diff;
        if(this[`${target}Ref`].min <= val && this[`${target}Ref`].max >= val) {
            this[target].servoWrite(val);
        }
    }

    // log
    process(input) {
        input.split(',', task => {
            const [cmd, target, value] = task.trim().split(' ');
            console.log('Task is', task);
            try {
            this[cmd](target, value);
            } catch(e) {
                console.error(e);
            }
        })        

    }
}

module.exports = CmdParser;