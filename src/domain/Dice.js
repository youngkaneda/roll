const diceType = require(__dirname + '/DiceType');

function Dice(sides) {

    if(Object.values(diceType).filter(v => v === parseInt(sides)).length === 0) {
        throw new Error('Invalid value for dice sides.');
    }
    this.sides = parseInt(sides);
    /* functions */
    let range = (limit) => {
        return [...Array(limit).keys()];
    }
    let random = (limit) => {
        return 1 + Math.floor(Math.random() * limit);
    }
    /* */
    this.roll = function() {
        if (arguments.length === 0) {
            return random(this.sides);
        }
        const times = parseInt(arguments[0]);
        if (times < 1) {
            throw new Error('Invalid parameter value. The dice can roll one or more times.');
        }
        return range(times).map(t => this.roll()).reduce((p, c) => p + c);
    }
}

module.exports = Dice;
