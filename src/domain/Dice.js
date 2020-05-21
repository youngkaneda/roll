const diceType = require(__dirname + '/DiceType');

function Dice(sides) {

    if(Object.values(diceType).filter(v => v === parseInt(sides)).length === 0) {
        throw new Error('Invalid value for dice sides.');
    }
    this.sides = parseInt(sides);

    let random = (limit) => {
        return 1 + Math.floor(Math.random() * limit);
    }

    this.roll = function() {
        return random(this.sides);
    }
}

module.exports = Dice;
